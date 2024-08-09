import { DealerInformation } from "@/components/DealerInformation";
import { Heading } from "@/components/Heading";
import { LoadDealersDetailsData } from "@/components/LoadDealerDetails";
import Providers from "@/components/Provider";
import { BASE_URL } from "@/config";
import Link from "next/link";

async function getDealerDetails(dealerId: number) {
  const res = await fetch(`${BASE_URL}${dealerId}`, {
    next: { revalidate: 20 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function DealerDetails({
  params,
}: {
  params: { [key: string]: number };
}) {
  const dealerDetails = await getDealerDetails(Number(params.id));
  console.log(dealerDetails);
  return (
    <>
      <section className="flex flex-col gap-4">
        <Link href="/">Back</Link>
        <Heading text="Details Page" />
        <div>
          <LoadDealersDetailsData dealerDetails={dealerDetails} />
          <Providers>
            <div className="mt-4">
              <DealerInformation />
            </div>
          </Providers>
        </div>
      </section>
    </>
  );
}

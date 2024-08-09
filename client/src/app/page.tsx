import { Heading } from "@/components/Heading";
import { SearchInput } from "@/components/SearchInput";
import { BASE_URL } from "@/config";
import { LoadDealersData } from "@/components/LoadDealersData";
import { DealersList } from "@/components/DealersList";
import Providers from "@/components/Provider";

async function getData() {
  const res = await fetch(BASE_URL, { next: { revalidate: 20 } });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const dealerData = await getData();
  console.log("🚀 ~ Home ~ dealerData:", dealerData)
  return (
    <>
      <section className="flex flex-col gap-4">
        <Heading text="List of Dealers" />
        <div>
          {/* <LoadDealersData dealerData={dealerData} /> */}
          <Providers>
            <SearchInput />
            <div className="mt-4">
              <DealersList cardData={dealerData} />
            </div>
          </Providers>
        </div>
      </section>
    </>
  );
}

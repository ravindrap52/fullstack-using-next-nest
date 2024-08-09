import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/Heading";
import { SubHeading } from "@/components/SubHeading";
import { IDealers } from "@/interfaces/dealers.interface";

type data = {
  cardData: any;
  showAdditionalInformation: boolean;
  showButton: boolean;
  dealerOfficeStatus?: {
    [key: string]: string
  }
};

export const Card = ({
  cardData,
  showAdditionalInformation,
  showButton,
  dealerOfficeStatus
}: data) => {
  console.log("111",cardData )
  return (
    <>
      {cardData.cardData.map((data) => (
        <Link href={`/dealerDetails/${data.id}`} key={data.id}>
          <article
            className="w-3/6 rounded-lg bg-white text-[0.8125rem] leading-5 
        text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 flex gap-2 mb-2 cursor-pointer items-center"
          >
            <div>
              <Image
                alt="car dealer"
                src={data.logo}
                width={100}
                height={100}
                priority
              />
            </div>
            <div className="flex items-center flex-1 justify-between p-2">
              <div>
                <Heading text={data.name} />
                <SubHeading text={data.address.addressLocality} />
                {showAdditionalInformation && (
                  <>
                    <SubHeading text={data.address.streetAddress} />
                    <SubHeading text={data.address.postalCode} />
                    <SubHeading text={data.address.addressCountry} />
                    <Heading text={dealerOfficeStatus!.status} /> 
                    <SubHeading text={dealerOfficeStatus!.information} />
                  </>
                )}
              </div>
              {showButton && (
                <div className="block w-3/12 bg-gray-300 text-center p-2">
                  Show
                </div>
              )}
            </div>
          </article>
        </Link>
      ))}
    </>
  );
};

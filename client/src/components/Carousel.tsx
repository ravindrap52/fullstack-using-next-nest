import Image from "next/image";
import { Heading } from "@/components/Heading";
import { SubHeading } from "@/components/SubHeading";
import { IDealerDetails } from "@/interfaces/dealerDetails.interface";

type data = {
  carouselData: Array<IDealerDetails>;
};

export const Carousel = ({ carouselData }: data) => {
  return (
    <>
      {carouselData.map((data) => (
        <article
          className="w-3/6 rounded-lg bg-white text-[0.8125rem] leading-5 
   text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 flex gap-2 mb-2 cursor-pointer items-center"
   key={data.id}
        >
          <div>
            <Image
              alt="car dealer"
              src={data.images.s}
              width={100}
              height={100}
              priority
            />
          </div>
          <div className="flex items-center flex-1 justify-between p-2">
            <div>
              <SubHeading text={data.makeId} />
              <Heading text={data.model} />
              <SubHeading text="Monthly Rate" />
              <Heading text={data.grossMonthlyRate.amount} />
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

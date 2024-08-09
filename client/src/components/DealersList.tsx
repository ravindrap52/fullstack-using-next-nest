"use client";
import { useAppSelector } from "@/store/hooks";
import { Card } from "./Card";

export const DealersList = (cardData: any) => {
console.log("🚀 ~ DealersList ~ cardData:", cardData)

  /* const dealers = useAppSelector((state) => state.dealers.dealers);
  const filteredDealers = useAppSelector(
    (state) => state.dealers.filteredDealers
  );
  const cardData = filteredDealers.length ? filteredDealers : dealers; */
  return (
    <>
      <Card cardData={cardData} showAdditionalInformation={false} showButton={true}  />
    </>
  );
};

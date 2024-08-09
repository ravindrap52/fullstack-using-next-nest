"use client";
import { useAppSelector } from "@/store/hooks";
import { Card } from "./Card";
import { getDealerOfficeStatus } from "@/helpers/dealerOfficeStatus";
import { Heading } from "./Heading";
import { Carousel } from "./Carousel";

export const DealerInformation = () => {
  // retrieving all dealers from state to filter the selected dealer
  const dealers = useAppSelector((state) => state.dealers.dealers);

  // retrieving deler information  from state to get the dealer information
  const dealerInformation = useAppSelector(
    (state) => state.dealers.dealereDetails
  );

  // filtering the selected dealer to display
  const selectedDealer = dealers.filter((dealer) => {
    return dealerInformation.some((dealerInfo) => {
      return dealer.id === dealerInfo.id;
    });
  });

  /**
   * We are using this function to get the office status of the dealer.
   * @param {selectedDealer} selectedDealer - selected dealer from the dealer list.
   * @returns status object:  status: closed, information: when will it open again.
   */
  const dealerOfficeStatus = {} // getDealerOfficeStatus(selectedDealer);
  return (
    <>
      {/* <Card
        cardData={selectedDealer}
        showAdditionalInformation={true}
        showButton={false}
        dealerOfficeStatus={dealerOfficeStatus}
      /> */}

      <div className="mb-2">
        <Heading text="Car Inventory" />
      </div>

      <Carousel carouselData={dealerInformation} />
    </>
  );
};

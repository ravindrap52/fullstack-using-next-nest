"use client";

import { useRef } from "react";
import { store } from "@/store/store";
import { setDealerDetails } from "@/features/dealers/dealerSlice";
import { IDealerDetails } from "@/interfaces/dealerDetails.interface";

type data = {
  dealerDetails: Array<IDealerDetails>;
};

/**
 * We are using this function to access the data from the store.
 * We are calling the api in Server component because we can't access the state in server component
 * we are passing the data to client component so that we can access the data from state inside client components
 * @param {dealerDetails} dealerDetails - dealerDetails data.
 * @returns void.
 */
export const LoadDealersDetailsData = ({ dealerDetails }: data) => {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setDealerDetails(dealerDetails));
    loaded.current = true;
  }
  return null;
};

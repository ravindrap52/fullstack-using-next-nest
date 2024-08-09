"use client";

import { useRef } from "react";
import { store } from "@/store/store";
import { setDealers } from "@/features/dealers/dealerSlice";
import { IDealers } from "@/interfaces/dealers.interface";

type data = {
  dealerData: Array<IDealers>;
};

/**
 * We are using this function to access the data from the store.
 * We are calling the api in Server component because we can't access the state in server component
 * we are passing the data to client component so that we can access the data from state inside client components
 * @param {dealerData} dealerData - dealer data.
 * @returns void.
 */
export const LoadDealersData = ({ dealerData }: data) => {
  const loaded = useRef(false);
  console.log("🚀 ~ LoadDealersData ~ loaded:", loaded)
  if (!loaded.current) {
    store.dispatch(setDealers(dealerData));
    loaded.current = true;
  }
  return null;
};

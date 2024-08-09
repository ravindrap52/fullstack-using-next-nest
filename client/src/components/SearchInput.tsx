"use client";

import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import { FuseOptions } from "@/config";
import { useDebounce } from "@/helpers/debounce";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setFilteredDealers } from "@/features/dealers/dealerSlice";

export const SearchInput = () => {
  const dispatch = useAppDispatch();
  const dealers = useAppSelector((state) => state.dealers.dealers);
  const [searchValue, setSearchValue] = useState("");
  const searchText = useDebounce(searchValue, 500);

  useEffect(() => {
    if (searchText) {
      const fuse = new Fuse(dealers, FuseOptions);
      const filteredResults = fuse.search(searchText);
      const filteredDealers = filteredResults.map(
        (filteredData) => filteredData.item
      );
      dispatch(setFilteredDealers(filteredDealers));
    } else {
      dispatch(setFilteredDealers([]));
    }
  }, [searchText, dealers, dispatch]);

  return (
    <input
      className="shadow appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="Search by Dealer Name"
    />
  );
};

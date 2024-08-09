import { IDealerDetails } from "@/interfaces/dealerDetails.interface";
import { IDealers } from "@/interfaces/dealers.interface";

export interface IInitialState {
    dealers: Array<IDealers>;
    filteredDealers: Array<IDealers>;
    dealereDetails: Array<IDealerDetails>
}
interface IAmount {
  amount: number;
  unit: string;
  currency: string;
}
export interface IDealerDetails {
  id: number;
  dealerId: number;
  makeId: number;
  model: string;
  images: {
    [key: string]: string;
  };
  grossMonthlyRate: IAmount;
}
[];

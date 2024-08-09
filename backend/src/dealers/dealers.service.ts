import { Injectable } from '@nestjs/common';
import * as dealers from '../data/dealers.json';
import * as dealerDetails from '../data/dealerDetails.json';

@Injectable()
export class DealersService {
  findAllDealers() {
    return dealers;
  }

  findDealerByDealerID(id: number) {
    return (dealerDetails || []).filter((dealer) => dealer.id === id);
  }
}

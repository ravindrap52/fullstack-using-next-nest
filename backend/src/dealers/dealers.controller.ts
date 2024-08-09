import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { DealersService } from './dealers.service';
import { IDealers } from './interfaces/dealers.interface';
import { IDealerDetails } from './interfaces/dealerDetails.interface';

@Controller('dealers')
export class DealersController {
  constructor(private readonly dealersService: DealersService) {}
  /**
   * To get all dealers.
   * @returns Return list of dealers.
   */
  @Get()
  async getAllDealers(): Promise<IDealers[]> {
    return this.dealersService.findAllDealers();
  }
  /**
   * To get a single dealer.
   * @param {number} dealerId - Id of the dealer.
   * @returns A single dealer details.
   */
  @Get(':dealerId')
  async getDealer(
    @Param('dealerId', ParseIntPipe) dealerId: number,
  ): Promise<IDealerDetails[]> {
    const dealer = this.dealersService.findDealerByDealerID(dealerId);
    if (!dealer?.length) {
      throw new NotFoundException(`Dealer with ${dealerId} does not exist.`);
    }
    return dealer;
  }
}

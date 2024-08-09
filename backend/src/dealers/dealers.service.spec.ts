import { Test, TestingModule } from '@nestjs/testing';
import * as dealers from '../data/dealers.json';
import { DealersService } from './dealers.service';

const dealerDetails = [
  {
    id: 1,
    dealerId: 1,
    makeId: 197,
    model: 'Renault Megane',
    images: {
      s: '/images/1/s/front.png',
      m: '/images/1/m/front.png',
      l: '/images/1/l/front.png',
    },
    grossMonthlyRate: {
      amount: 25200,
      unit: 'cents',
      currency: 'euro',
    },
  },
];
describe('DealersService', () => {
  let service: DealersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DealersService],
    }).compile();

    service = module.get<DealersService>(DealersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should return all dealers', () => {
    const allDealers = service.findAllDealers();
    expect(allDealers).toStrictEqual(dealers);
  });
  it('should filter Dealer based on Dealer ID', () => {
    const dealer = service.findDealerByDealerID(1);
    expect(dealer).toMatchObject(dealerDetails);
  });
});

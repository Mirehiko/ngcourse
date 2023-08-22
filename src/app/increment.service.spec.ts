import {TestBed} from '@angular/core/testing';

import {IncrementService} from './increment.service';
import {ConstantService} from './constant.service';


describe('IncrementService Spy', () => {
  let incrementService: IncrementService;
  let constantService: jasmine.SpyObj<ConstantService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ConstantService', ['anyNumber']);
    TestBed.configureTestingModule({
      providers: [
        IncrementService,
        { provide: ConstantService, useValue: spy }
      ]
    });
    incrementService = TestBed.inject(IncrementService);
    constantService = TestBed.inject(ConstantService) as jasmine.SpyObj<ConstantService>;
  });

  it('should increment fake value', () => {
    constantService.anyNumber.and.returnValue(13);
    expect(incrementService.increment()).toBe(14);
  });
});

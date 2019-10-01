import { TestBed, inject } from '@angular/core/testing';

import { RomanNumbersService } from './roman-numbers.service';

describe('RomanNumbersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RomanNumbersService]
    });
  });

  it('should be created', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service).toBeTruthy();
  }));
  it('1 debe ser igual a I', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabtoroman(1)).toEqual('I');
  }));
  it('2 debe ser igual a II', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabtoroman(2)).toEqual('II');
  }));
  it('3 debe ser igual a III', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabtoroman(3)).toEqual('III');
  }));
  it('4 debe ser igual a IV', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabtoroman(4)).toEqual('IV');
  }));
});

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
  it('5 debe ser igual a V', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabtoroman(5)).toEqual('V');
  }));
  it('6 debe ser igual a VI', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabtoroman(6)).toEqual('VI');
  }));
  it('7 debe ser igual a VII', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabtoroman(7)).toEqual('VII');
  }));
  it('9 debe ser igual a IX', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabtoroman(9)).toEqual('IX');
  }));
  it('15 debe ser igual a XV', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabtoroman(15)).toEqual('XV');
  }));
  it('49 debe ser igual a XLIX', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabtoroman(49)).toEqual('XLIX');
  }));
  it('65 debe ser igual a LXV', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabtoroman(65)).toEqual('LXV');
  }));
  it('457 debe ser igual a CDLVII', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabtoroman(457)).toEqual('CDLVII');
  }));
  it('940 debe ser igual a CMXL', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabtoroman(940)).toEqual('CMXL');
  }));
});

import { Injectable } from '@angular/core';
import { RSA_PKCS1_OAEP_PADDING } from 'constants';

@Injectable({
  providedIn: 'root'
})
export class RomanNumbersService {

  constructor() { }

  arabtoroman(number: Number){
    if (number < 4){
      let roman: String = "";
      for (let i=0; i<number; i++ ){
          roman +="I"
      }
          return roman;
    }
    if(number = 4){
      return 'IV'
    }
  } 
}

import { Injectable } from '@angular/core';
import { RSA_PKCS1_OAEP_PADDING } from 'constants';

@Injectable({
  providedIn: 'root'
})
export class RomanNumbersService {

  constructor() { }

  arabtoroman(numb: Number){
    if (numb < 4){
      let roman: String = "";
      for (let i=0; i<numb; i++ ){
          roman +="I"
      }
      return roman;
    }
    
    if(numb == 4){
      return 'IV'
    }

    if (numb == 5) {
      return "V";
    }
    if (numb > 5 && numb < 9) {
      let roman: String = ""
      for (let i=5; i< numb; i++ ){
        roman +="I"
      }
        return "V" + roman;
    }

    if (numb == 9) {
      return "IX";
    }

    if (numb == 10) {
      return "X";
    }

    if (numb > 10 && numb < 100 && numb != 40 && numb != 90 && numb != 50) {
      if (numb % 10 == 0) {
        if (numb / 10 > 5) {
          return 'L' + this.aisgnaX(numb - 50);
        }
        return this.aisgnaX(numb);
      } else if (numb % 10 == 4 || numb % 10 == 9) {
        var aux = numb % 10;
        aux = numb - aux;
        return this.arabtoroman(aux) + this.arabtoroman(numb % 10);
      } else {
        var aux = numb % 10;
        numb = numb - aux;
        return this.arabtoroman(numb) + this.arabtoroman(aux);
      }
    }
    if (numb > 100 && numb < 1000 && numb != 400 && numb != 500 && numb != 900) {
      if (numb % 100 == 0) {
        if (numb / 100 > 5) {
          return 'D' + this.aisgnaC(numb - 500);
        }
        return this.aisgnaC(numb);
      } else if (numb % 100 == 40 || numb % 100 == 90) {
        var aux = numb % 100;
        aux = numb - aux;
        return this.arabtoroman(aux) + this.arabtoroman(numb % 100);
      } else{
        var aux = numb % 100;
        numb = numb - aux;
        return this.arabtoroman(numb) + this.arabtoroman(aux);
      }
    }
    if (numb == 40) {
      return "XL";
    }
    if (numb == 50) {
      return "L";
    }
    if (numb == 90) {
      return "XC";
    }
    if (numb == 100) {
      return "C";
    }
    if (numb == 400) {
      return "CD";
    }
    if (numb == 500) {
      return "D";
    }
    if (numb == 900) {
      return "CM";
    }
    if (numb == 1000) {
      return "M";
    }
  } 
  aisgnaX(numb: number) {
    let roman: string = "";
    for (let i = 0; i < numb; i += 10) {
      roman += "X";
    }
    return roman;
  }
  aisgnaC(numb: Number) {
    let roman: string = "";
    for (let i = 0; i < numb; i += 100) {
      roman += "C";
    }
    return roman;
  }
}



import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../customer/customer.class';
import { CustomerService } from '../customer/customer.service';

@Pipe({
  name: 'bool'
})
export class BoolDisplayPipe implements PipeTransform {

  transform(bool: boolean, lang: string = "en"): string {
    if(lang === "en"){
    return bool ? "YES" : "NO";
    }
    if(lang === "fr"){
      return bool ? "Oui" : "Non"
    }

  }

}

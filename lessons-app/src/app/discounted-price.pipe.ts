import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountedPrice'
})
export class DiscountedPricePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if( args[0] > 0) { return (value * (1- args[0]))}
    return value;
  }

}

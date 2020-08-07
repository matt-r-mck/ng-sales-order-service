import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], col: string= "id", asc: boolean = true): any[] {

    if (arr==null) return arr;
    
    const sortFn = (a: any, b: any): number => {
      //if a = b, return 0,
      //if a > b, return 1,
      //if a < b, return -1.
      let x = (typeof a[col] == "number") ? a[col] : a[col].toString().toLowerCase();
      let y = (typeof b[col] == "number") ? b[col] : b[col].toString().toLowerCase();
      if(x === y) 
        return 0;
      if(x > y) 
        return asc ? 1 : -1;
      else 
        return asc ? -1 : 1;
    }
    return arr.sort(sortFn);
  }

}

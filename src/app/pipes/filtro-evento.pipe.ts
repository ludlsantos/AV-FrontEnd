import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroEvento'
})
export class FiltroEventoPipe implements PipeTransform {

  transform(value: any, campo:string, args:string): any {
    if(!value)return null;
    if(!args)return value;
    return value.filter((singleItem: { [x: string]: string; }) =>
      singleItem[campo].toLowerCase().includes(args.toLowerCase())
      );
  }

}

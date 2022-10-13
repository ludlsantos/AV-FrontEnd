import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filtroReserva'
  })
  export class FiltroReservaPipe implements PipeTransform {
  
    transform(value: any, campo2:string, args:string): any {
      if(!value)return null;
      if(!args)return value;
      return value.filter((singleItem: { [x: string]: string; }) =>
        singleItem[campo2].toLowerCase().includes(args.toLowerCase().toString())
        );
    }
  
  }
  
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'kebapl'
})

export class KebapTopNormalPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) return value.replace(/-/g, " ").toUpperCase();
  }
}

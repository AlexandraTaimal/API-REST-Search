import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: any): any {
    const result = [];
    for(const student of value){
      if(student.name.indexOf(arg) > -1){
        result.push(student);
      }
    }

    return result;
  }

}

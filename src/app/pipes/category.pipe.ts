import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    if (args?.length) {
      const options = {
        category_1: '#731DD8',
        category_2: '#48A9A6',
        category_3: '#C1666B',
        category_4: '#D4B483',
        default: '#731DD8'
      }
      return options[value] || options.default;
    } else {
      return value.replace('_', ' ');
    }
  }

}

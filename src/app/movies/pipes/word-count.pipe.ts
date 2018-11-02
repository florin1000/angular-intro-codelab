import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordCount'
})
export class WordCountPipe implements PipeTransform {

  transform(value: string, countSuffix: string = 'words') {
    let countValue;
    if (!value || value.length === 0) {
      countValue = 0;
    } else {
      countValue = value
        .trim()
        .replace(/  +/g, ' ')
        .split(' ').length;
    }
    return `${countValue} ${countSuffix}`;
  }

}

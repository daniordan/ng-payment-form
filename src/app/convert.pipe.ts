import { Pipe, PipeTransform } from '@angular/core';

// own custom pipe function
@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  // use ...args: any[] to add more arguments in an array of any type
  transform(value: any, targetUnits: string): any {
    // return null;

    if (!value) {
      return '';
    }

    // define own custom call arguments for the custom function pipe
    switch (targetUnits) {
      case 'km':
        return value * 1.60934;
      case 'm':
        return value * 1.60934 * 1000;
      case 'cm':
        return value * 1.60934 * 1000 * 100;
      default:
        throw new Error('Target unit is not supported');
    }
  }
}

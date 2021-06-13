import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenesPipes',
})
export class ImagenesPipesPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (value.length > 0) {
      return value;
    }
    return 'assets/images/defecto.png';
  }
}

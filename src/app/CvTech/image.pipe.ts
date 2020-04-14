import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
    transform(value: string, args: any): string {
        if (!value) {
            return 'value.png';
        }
        return value;
    }
}

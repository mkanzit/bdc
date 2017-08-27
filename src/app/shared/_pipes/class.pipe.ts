import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'class'})
export class ClassPipe implements PipeTransform {

    transform(value: Array<string>): string {
        return value.join(' ');
    }

}

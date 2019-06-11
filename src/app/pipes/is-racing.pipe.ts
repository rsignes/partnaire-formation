import { Poney } from './../interfaces/poney';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isRacing'
})
export class IsRacingPipe implements PipeTransform {

  transform(ponies: Poney[] = [], poneyIds: string[] = []): Poney[] {
    return ponies ? ponies.filter(poney => poneyIds.includes(poney.id)) : []
  }

}

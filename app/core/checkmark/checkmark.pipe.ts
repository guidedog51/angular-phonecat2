/**
 * Created by michaelconner on 11/9/16.
 */
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'checkmark'})

export class CheckmarkPipe implements PipeTransform {
    
    transform(input: boolean) {
        return input ? '\u2713' : '\u2718';
    }
}
import { Component, Input } from '@angular/core';
import { CardOptions } from 'src/app/interfaces/card';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.css' ]
})
export class CardComponent  {
   @Input() card: CardOptions;
}

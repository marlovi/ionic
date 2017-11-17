import { Component } from '@angular/core';

/**
 * Generated class for the RodapeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'rodape',
  templateUrl: 'rodape.html'
})
export class RodapeComponent {

  text: string;

  constructor() {
    console.log('Hello RodapeComponent Component');
    this.text = 'marlus dias silva';
  }

}

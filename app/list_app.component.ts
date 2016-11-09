import {Component, View} from "angular2/core";
import {ItemComponent} from './item-list.component';

@Component({
  selector: 'template-app',
  template: `<my-list></my-list>`,
  directives: [ItemComponent]
})

export class TemplateComponent{}

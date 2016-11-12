import {Component, View} from "angular2/core";
import {ItemComponent} from './item-list.component';
import {InformationComponent} from './datadisplay_app.component';


@Component({
  selector: 'data-app',

})

@View({
  template: `
    <h3>Welcome to {{data}}</h3>
    <h4>Embeding components on the view<h4>
    <hr>
    <h4>1.- Component List<h4>
    <my-list></my-list>
    <hr>
    <h4>2.- Component List<h4>
    <my-information></my-information>
    <hr>
  `,
  directives:[ItemComponent, InformationComponent],

})

export class DataComponent{
  data: 'Jungle!!!'
}

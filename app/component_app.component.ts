import {Component, View} from "angular2/core";
import {ItemComponent} from './item-list.component';
import {InformationComponent} from './datadisplay_app.component';
import {FormComponent} from './data_binding_app.component';

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
    <h4>2.- Component Iformation<h4>
    <my-information></my-information>
    <hr>
    <h4>3.- Component Form<h4>
    <form-component></form-component>
    <hr>
  `,
  directives:[ItemComponent, InformationComponent, FormComponent],

})

export class DataComponent{
  data: 'Jungle!!!'
}

import {Component, View} from "angular2/core";

@Component({
  selector: 'data-app'
})

@View({
  template: '<h3>Welcome to {{data}}</h3>'
})

export class DataComponent{
  data: 'Jungle!!!'
}

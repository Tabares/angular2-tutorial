import {Component, View} from 'angular2/core';

@Component({
  selector: 'my-list',
  template: `<h2>List of Berries</h2>
   <ul>
      <li
      *ngFor="#myItem of itemList"
      (click)="onItemClicked(myItem)">
        {{myItem.name}}
      </li>
   </ul>
   <input type="text" [(ngModel)]="clickedItem.name">
   `
})


export class ItemComponent{
  public itemList = [
    {name: 'Strawberries'},
    {name: 'Blue berries'},
    {name: 'Black berries'},
    {name: 'Raspberries'},
  ];
  public clickedItem = {name: ""};
  onItemClicked(Item){
    this.clickedItem = Item;
  }
}

import {Component, View} from 'angular2/core';

@Component({
  selector: 'my-information',
  template: `
    <h2>Showing data using component properties with interpolation</h2>
    <h3>Player Name: {{player}}</h3>
    <h3>He is famous in: {{sport}}</h3><br>

    <h2>Showing data using constructor or variable initialization</h2>
    <h3>Mexico capital is: {{capital}}</h3><br>

    <h2>Showing data using array property with NgFor</h2>
    <h3>My favorite Item for football is: {{myEquipment}}</h3>
    <p>List of Equipment:</p>
    <ul>
       <li *ngFor="#item of equipment">
          {{ item }}
       </li>
    </ul>
    `
})


export class InformationComponent{
  player: 'Oribe Peralta';
  sport: 'Futball';

  capital: string;
  constructor(){
    this.capital = 'Mexico'
  }

  equipment = ['ball', 'boots', 'hersey', 'shorts', 'gloves'];
  myEquipment = this.equipment[2];
}

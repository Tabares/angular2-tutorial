// your code goes here
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@Component({
    selector: 'hello-world',
    template: `
        <h1>First Example</h1>
        <div>
        Hello world
        </div>
        <div>
        My name is {{ name }}
        </div>
        <p>Favorite Food:</p>
        <ul>
            <li *ngFor="let food of foods"> {{ food }}</li>
        </ul>
    `
})

class HelloWorld {
    name: string;
    foods: string[];
    constructor() {
        this.name = 'José';
        this.foods = ['Mole', 'Burgers', 'Tacos', 'Piratas']
    }
}

@NgModule({
    declarations: [HelloWorld],
    imports: [BrowserModule],
    bootstrap: [HelloWorld],
})

class HelloWorldAppModule { }

platformBrowserDynamic().bootstrapModule(HelloWorldAppModule);

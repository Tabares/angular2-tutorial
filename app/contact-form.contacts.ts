import {Component} from 'angular2/core';
import {NgForm} from 'angular2/core';
import { Contact } from './contact';

@Component({
  selector: 'contact-form',
  templateUrl: 'app/contact-form.component.html'
})

export class ContactComponent {
    countries = ['Mexico', 'Australia', 'Spain', 'Italy'];
    contact = new Contact('Emmanuel', 'Tabares', this.countries[0], 8119050506);
    submitted = false;
    onSubmit() { this.submitted = true; }
    active = true;
    newContact() {
        this.contact = new Contact('', '');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}

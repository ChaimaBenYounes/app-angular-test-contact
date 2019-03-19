import { Component } from '@angular/core';
import { Contact } from './models/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-angular-test-Contact';
  aContacts : Contact[] = [
    new Contact(
      'nom',
      'prenom',
      'adresse',
      20,
      '0709472358',
      'email@getNgModuleDef.fr'
    ),
    new Contact(
      'nom',
      'prenom',
      'adresse',
      20,
      '0709472358',
      'email@getNgModuleDef.fr'
    ),
    new Contact(
      'nom',
      'prenom',
      'adresse',
      20,
      '0709472358',
      'email@getNgModuleDef.fr'
    ),
    new Contact(
      'nom',
      'prenom',
      'adresse',
      20,
      '0709472358',
      'email@getNgModuleDef.fr'
    ),
  ];
}

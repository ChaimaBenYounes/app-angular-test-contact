import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from '../models/contact.model';
import { Subscription } from 'rxjs';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts : Contact[];
  contactSubscription: Subscription;

  constructor(private contactService : ContactService,
              private router: Router) {

    this.contactSubscription = this.contactService.contactSubject.subscribe(
      ( contacts : Contact[]) => {
        this.contacts = contacts;
      }
    );
    this.contactService.emitContacts();
  }

  ngOnInit() {

    this.contactSubscription = this.contactService.contactSubject.subscribe(
      ( contacts : Contact[]) => {
        this.contacts = contacts;
      }
    );
    this.contactService.emitContacts();
  }

  onShowContact(id: number) {
    this.router.navigate(['/contacts', 'show', id]);
  }

  onNewContact(){
    this.router.navigate(['/contacts', 'new']);
  }

  ngOnDestroy(){
    this.contactSubscription.unsubscribe();
  }

}

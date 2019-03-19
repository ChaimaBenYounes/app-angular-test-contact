import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts : Contact[];
  contactSubscription: Subscription;
  messageSuccess : boolean = false;
  
  constructor(private contactService : ContactService,
              private route: ActivatedRoute,) {

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

  ngOnDestroy(){
    this.contactSubscription.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact.model';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-show-contact',
  templateUrl: './show-contact.component.html',
  styleUrls: ['./show-contact.component.css']
})
export class ShowContactComponent implements OnInit {

  id : number;
  contact: Contact;

  constructor(private route: ActivatedRoute,
              private contactService: ContactService,
              private router: Router) { }

  ngOnInit() {
    this.contact = new Contact("","","","",0,"","","");
    this.id = this.route.snapshot.params['id'];
    this.contactService.getSingleContact(this.id).then(
        (contact: Contact) => {
          this.contact = contact;
        }
    );
  }

  onDeleteContact(){
     this.contactService.removeContact(this.id);
     this.router.navigate(['/contacts']);
  }

  onUpdateContact(){
    this.router.navigate(['/contacts', 'update', this.id]);
  }
}

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

  id : string;
  contact: Contact;

  constructor(private route: ActivatedRoute,
              private contactService: ContactService,
              private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.contact = this.contactService.getContactById(this.id);
  }

  deleteContact(){
     this.contactService.DeleteContact(this.contact);
     this.router.navigate(['/contacts']);
  }

}

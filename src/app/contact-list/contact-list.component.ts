import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() contact : Contact;
  
  constructor() { }

  ngOnInit() {
  }

}
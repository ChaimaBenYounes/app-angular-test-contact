import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Contact } from '../models/contact.model';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  id : string;
  updateFormContact: FormGroup;
  contact: Contact;
  contactById : Contact;
  photo: string;

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router,
              private contactService: ContactService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id'); // contact dans l'url
    this.initForm(); // initialisation du formulaire 
    this.contactById = this.contactService.getContactById(this.id);
    this.updateFormContact.patchValue(this.contactById);
    this.photo = this.contactById.photo;
  }

  initForm() {
    this.updateFormContact = this.formBuilder.group({
      prenom: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      nom: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      adresse: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      codePostal: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(4)
      ]),
      tel: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]*')
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
    });
  }

  //GETTER for the validation in the form
  get nom() { return this.updateFormContact.get('nom'); }
  get prenom() { return this.updateFormContact.get('prenom'); }
  get adresse() { return this.updateFormContact.get('adresse'); }
  get codePostal() { return this.updateFormContact.get('codePostal'); }
  get tel() { return this.updateFormContact.get('tel'); }
  get email() { return this.updateFormContact.get('email'); }

  //OnSubmit Form
  onSubmit() {
    let contact: Contact;
    contact = this.updateFormContact.value;
    contact.id = this.id;
    contact.photo = this.photo;


    this.contactService.updateContact(contact);
    this.router.navigate(['/contacts'], { queryParams: { message: 'success updated resource' } });
       
  }


}

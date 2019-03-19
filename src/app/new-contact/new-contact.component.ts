import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private contactService: ContactService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.formBuilder.group({
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
  get nom() { return this.contactForm.get('nom'); }
  get prenom() { return this.contactForm.get('prenom'); }
  get adresse() { return this.contactForm.get('adresse'); }
  get codePostal() { return this.contactForm.get('codePostal'); }
  get tel() { return this.contactForm.get('tel'); }
  get email() { return this.contactForm.get('email'); }

  //OnSubmit Form
  onSubmitForm() {
    const formValue = this.contactForm.value;
    const newID = this.contactService.getnextID();
    const newContact = new Contact(
      newID,  
      formValue['nom'],
      formValue['prenom'],
      formValue['adresse'],
      formValue['codePostal'],
      formValue['tel'],
      formValue['email'],
      this.contactService.getFakePhoto(newID),
    );
    this.contactService.addContact(newContact);
    this.router.navigate(['/contacts']);
  }

}

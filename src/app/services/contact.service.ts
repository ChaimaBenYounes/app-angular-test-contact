import { Contact } from '../models/contact.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

export class ContactService {

  private contacts: Contact[];
  contactSubject = new Subject<Contact[]>();

  constructor(){
    this.getContactsFromServer();
  }

  emitContacts() {
    return this.contactSubject.next(this.contacts);
  }

  /* Working with server firebase */
  saveContactsToServer() {
    firebase.database().ref('/contacts').set(this.contacts);
  }

  getContactsFromServer() {
    firebase.database().ref('/contacts')
        .on('value', (data: DataSnapshot) => {
              this.contacts = data.val() ? data.val() : [];
              this.emitContacts();
            }
        );
  }

  getSingleContact(id: number) {
    return new Promise(
        (resolve, reject) => {
          firebase.database().ref('/contacts/' + id).once('value').then(
              (data: DataSnapshot) => {
                resolve(data.val());
              }, (error) => {
                reject(error);
              }
          );
        }
    );
  }

  removeContact(contactIndexToRemove: number) {
    this.contacts.splice(contactIndexToRemove, 1);
    this.saveContactsToServer();
    this.emitContacts();
  }

  addContact(newContact: Contact) {
    this.contacts.push(newContact);
    this.saveContactsToServer();
    this.emitContacts();
  }

  updateContact(contactIndexToUpdate: number, contact: Contact){
    this.contacts[contactIndexToUpdate] = contact;
    this.saveContactsToServer();
    this.emitContacts();
  }

  getnextID(): string{
    return (this.contacts.length + 1).toString(); 
  }

  getFakePhoto( id: string){
      // random image
      return 'http://demos.themes.guide/bodeo/assets/images/users/m10'+`${id}`+'.jpg';
  }
}
import { Contact } from '../models/contact.model';
import { Subject } from 'rxjs';


export class ContactService {

  private contacts: Contact[];
  contactSubject = new Subject<Contact[]>();

  constructor(){
    this.contacts = [
        new Contact(
            '1',
            'Mike',
            'Anamendolla',
            'Hillcrest Rd',
            5842,
            '(870) 288-4149',
            'mike.ana@gmail.com',
            'http://demos.themes.guide/bodeo/assets/images/users/m101.jpg'
          ),
          new Contact(
            '2',
            'Debbie',
            'Schmid',
            'W Alexander Rd',
            3903,
            '(867) 322-1852',
            'debbie.schmidt@gmail.com',
            'http://demos.themes.guide/bodeo/assets/images/users/w104.jpg'
          ),
          new Contact(
            '3',
            'Frazier',
            'Seth',
            'E North St',
            7396,
            '(560) 180-4143',
            'seth.frazier@gmail.com',
            'http://demos.themes.guide/bodeo/assets/images/users/m105.jpg'
          ),
          new Contact(
            '4',
            'Rosemary',
            'Porter',
            'Cackson St',
            5267,
            '(497) 160-9776',
            'rosemary.porter@gmail.com',
            'http://demos.themes.guide/bodeo/assets/images/users/w102.jpg'
          ), 
    ];
  }
  emitContacts() {
    return this.contactSubject.next(this.contacts.slice());
  }

  addContact(contact: Contact) {
    this.contacts.push(contact);
    this.emitContacts();
  }

  updateContact(contact: Contact){
    this.contacts[+contact.id] = contact;
    this.emitContacts();
  }

  getContactById( id : string ){ 
    return this.contacts.find(
      contact => contact.id === id
    );
  }

  getnextID(): string{
    return (this.contacts.length + 1).toString(); 
  }

  getFakePhoto( id: string){
      // random image
      return 'http://demos.themes.guide/bodeo/assets/images/users/m10'+`${id}`+'.jpg';
  }
}
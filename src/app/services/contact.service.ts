import { Contact } from '../models/contact.model';
import { Subject } from 'rxjs';


export class UserService {
  private contacts: Contact[];
  contactSubject = new Subject<Contact[]>();

  constructor(){
    this.contacts = [
        new Contact(
            'Mike',
            'Anamendolla',
            'Hillcrest Rd',
            5842,
            '(870) 288-4149',
            'mike.ana@gmail.com',
            'http://demos.themes.guide/bodeo/assets/images/users/m101.jpg'
          ),
          new Contact(
            'Debbie',
            'Schmid',
            'W Alexander Rd',
            3903,
            '(867) 322-1852',
            'debbie.schmidt@gmail.com',
            'http://demos.themes.guide/bodeo/assets/images/users/w104.jpg'
          ),
          new Contact(
            'Frazier',
            'Seth',
            'E North St',
            7396,
            '(560) 180-4143',
            'seth.frazier@gmail.com',
            'http://demos.themes.guide/bodeo/assets/images/users/m105.jpg'
          ),
          new Contact(
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
}
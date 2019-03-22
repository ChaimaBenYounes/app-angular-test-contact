import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactListComponent } from './contact-list/contact-list.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ShowContactComponent } from './show-contact/show-contact.component';

const appRoutes: Routes = [
  { path: 'contacts',  component: ContactListComponent },
  { path: 'contacts/new', component: NewContactComponent },
  { path: 'contacts/update/:id', component: UpdateContactComponent },
  { path: 'contacts/show/:id', component: ShowContactComponent },
  { path: '**', redirectTo: '/contacts', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

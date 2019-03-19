import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactListComponent } from './contact-list/contact-list.component';
import { NewContactComponent } from './new-contact/new-contact.component';

const appRoutes: Routes = [
  { path: 'contacts',  component: ContactListComponent },
  { path: 'new-contact', component: NewContactComponent },
  { path: '**', redirectTo: '/contacts', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

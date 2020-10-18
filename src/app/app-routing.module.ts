import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form/form.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    {path: 'form', component: FormComponent},
    {path: 'contact', component: ContactComponent},
    {path: '', redirectTo: '/contact', pathMatch: 'full'},
    {path: '**', component: ContactComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

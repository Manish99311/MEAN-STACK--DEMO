import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddDetailsComponent} from './add-details/add-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

const routes: Routes = [
  { path: 'add', component: AddDetailsComponent },
  { path: 'details', component: ContactDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

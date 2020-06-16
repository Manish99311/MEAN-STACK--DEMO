import { Component, OnInit } from '@angular/core';
import { ContactserviceService } from '../contactservice.service';
import {Contact} from '../model';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {


  constructor( private service: ContactserviceService) { }
  contacts: Contact[];


  ngOnInit() {
    this.service.getContacts().subscribe(
      contacts => {
        this.contacts = contacts;
      }
    );
  }

  }



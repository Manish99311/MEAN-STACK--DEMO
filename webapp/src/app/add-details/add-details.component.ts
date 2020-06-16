import { Component, OnInit } from '@angular/core';
import { Contact } from '../model';
import { ContactserviceService } from '../contactservice.service';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent implements OnInit {
  contacts: Contact[];
  first_name: string;
  last_name: string;
  phone: string;
  constructor(private service: ContactserviceService) { }

  ngOnInit(): void {
  }

  addContacts()
  {
    const newContact = {

        first_name: this.first_name,
        last_name: this.last_name,
        phone: this.phone

    }
    this.service.addContact(newContact).subscribe(
      contacts => {
        this.contacts.push(contacts);
      }
    );
    this.service.getContacts().subscribe(
      contacts => {
        this.contacts = contacts;
      }
    );

}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name1: string = "Adarsh Raj";
  name2: string = "Gudipaty Aniket";
  roll1: string = "190050004";
  roll2: string = "190050041";

}

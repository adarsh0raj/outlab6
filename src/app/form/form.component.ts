import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { Data } from '../data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  defaultdata: Data;
  newdata: Data;

  myForm: FormGroup;

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {

    this.myForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      feedback: new FormControl(''),
      comment: new FormControl('')
    });

    this.dataservice.getData()
      .subscribe(defaultdata => {
        this.defaultdata=defaultdata;

        this.myForm = new FormGroup({
          name: new FormControl(this.defaultdata.name),
          email: new FormControl(this.defaultdata.email),
          feedback: new FormControl(this.defaultdata.feedback),
          comment: new FormControl(this.defaultdata.comment)
        });
      });
  }

  onSubmit(form: FormGroup) {
    this.newdata = this.myForm.value;

    this.dataservice.postData(this.newdata)
      .subscribe(res => {
        alert("Form Data Submitted Successfully!\nSubmitted Data Logged in Console!");
        console.log(res.name);
        console.log(res.email);
        console.log(res.feedback);
        console.log(res.comment);

        this.defaultdata = this.newdata;

      }, err => {
        alert("Data Submission Failed!\nServer Error or Form Invalid!!");
        console.log(err);
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  registerform = new FormGroup({
    firstname: new FormControl(""),
    lastname: new FormControl(""),
    email: new FormControl(""),
    mobilenumber: new FormControl(""),
    gender: new FormControl(""),
    password: new FormControl(""),
    cnfpassword: new FormControl("")
  });

  registeredSubmited() {
    console.log(this.registerform);
  }
}

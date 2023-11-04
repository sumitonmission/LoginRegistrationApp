import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.email, Validators.required]),
    mobilenumber: new FormControl("", [Validators.pattern("[1-9]{1}[0-9]{9}")]),
    gender: new FormControl("", [Validators.required]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(12),
    ]),
    cnfpassword: new FormControl("")
  });

  registeredSubmited() {
    console.log(this.registerform);
  }

  get firstname(): FormControl { return this.registerform.get('firstname') as FormControl; }
  get lastname(): FormControl { return this.registerform.get('lastname') as FormControl; }
  get email(): FormControl { return this.registerform.get('email') as FormControl; }
  get mobilenumber(): FormControl { return this.registerform.get('mobilenumber') as FormControl; }
  get gender(): FormControl { return this.registerform.get('gender') as FormControl; }
  get password(): FormControl { return this.registerform.get('password') as FormControl; }
  get cnfpassword(): FormControl { return this.registerform.get('cnfpassword') as FormControl; }

}

import { Component, OnInit } from "@angular/core";
import { FormBuilder, Form, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.signUpForm = this.fb.group({
      emailid: [null, [Validators.required, Validators.minLength(3)]],
    });
  }
  ngOnInit() {}
}

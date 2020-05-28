import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-changepassword",
  templateUrl: "./changepassword.component.html",
  styleUrls: ["./changepassword.component.scss"],
})
export class ChangepasswordComponent implements OnInit {
  hide = true;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  changePasswordStatus: string;
  color = "red";
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: [null, [Validators.required]],
    });

    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(15),
        ],
      ],
      thirdCtrl: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(15),
        ],
      ],
    });
  }
}

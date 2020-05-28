import { Component, OnInit, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import {
  MatDialogModule,
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from "@angular/material/dialog";
import { isNullOrUndefined } from "util";

//for popup forgotpassword
export interface DialogData {
  email: any;
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  hide = true;
  signInForm: any;
  email: any; //for forgot password
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.signInForm = this.fb.group({
      emailid: [null, [Validators.required, Validators.minLength(3)]],
      password: "",
    });
  }
  ngOnInit() {}

  //for popup forgotpassword
  openDialog(): void {
    const dialogRef = this.dialog.open(ForgotPasswordDialog, {
      width: "400px",
      data: { email: this.email },
    });

    dialogRef.afterClosed().subscribe((result) => {
      //console.log('The dialog was closed');
      this.email = result;
    });
  }

  // Change password popup
  openChangepasswordDialog(): void {
    const dialogRef = this.dialog.open(ChangePassword, {
      width: "600px",
      data: { email: this.email },
    });

    dialogRef.afterClosed().subscribe((result) => {
      //console.log('The dialog was closed');
      this.email = result;
    });
  }

  //for popup Otp
  openOtpDialog(): void {
    const dialogRef = this.dialog.open(Otp, {
      width: "400px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      //console.log('The dialog was closed');
      // this.email = result;
    });
  }
}

//PopUp of forgot password
@Component({
  selector: "forgotpassworddialog",
  templateUrl: "forgotpassworddialog.html",
  styleUrls: ["./login.component.scss"],
})
export class ForgotPasswordDialog {
  constructor(
    public dialogRef: MatDialogRef<ForgotPasswordDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}

//PopUp of change password
@Component({
  selector: "changepassword",
  templateUrl: "changepassword.html",
  styleUrls: ["./login.component.scss"],
})
export class ChangePassword {
  constructor(
    public dialogRef: MatDialogRef<ChangePassword>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}

//PopUp of Otp
@Component({
  selector: "otp",
  templateUrl: "otp.html",
  styleUrls: ["./login.component.scss"],
})
export class Otp {
  constructor(
    public dialogRef: MatDialogRef<Otp>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}

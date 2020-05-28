import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  LoginComponent,
  ForgotPasswordDialog,
  // ChangePasswordDialog,
  ChangePassword,
  Otp,
} from "./login/login.component";
import {
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatDialogModule,
  MatTooltipModule,
  MatStepperModule,
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChangepasswordComponent } from "./changepassword/changepassword.component";
import { NgOtpInputModule } from "ng-otp-input";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordDialog,
    ChangePassword,
    Otp,
    ChangepasswordComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatDialogModule,
    MatDividerModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatStepperModule,
    NgOtpInputModule,
  ],
  entryComponents: [ForgotPasswordDialog, ChangePassword, Otp],
})
export class LoginModule {}

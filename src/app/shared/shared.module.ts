import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./components/footer/footer.component";
import {
  HeaderComponent,
  SignUpDialog,
} from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { RouterModule } from "@angular/router";
import {
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatListModule,
  MatSlideToggleChange,
  MatSlideToggleModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatTooltipModule,
  MatStepperModule,
  MatCheckboxModule,
} from "@angular/material";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SignupComponent } from "../login/signup/signup.component";

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    SignUpDialog,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatMenuModule,
    MatListModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTooltipModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent],
  entryComponents: [SignUpDialog],
})
export class SharedModule {}

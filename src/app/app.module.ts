import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { NavigationComponent } from "./navigation/navigation.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { DefaultModule } from "./layouts/default/default.module";
import { RouterModule } from "@angular/router";
import { MainModule } from "./main/main.module";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { AboutComponent } from "./modules/about/about.component";
import {
  LoginComponent,
  ForgotPasswordDialog,
} from "./login/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material";
import { LoginModule } from "./login/login.module";

import { WhitepaperComponent } from "./modules/whitepaper/whitepaper.component";
import { Ng2OdometerModule } from "ng2-odometer";
import { InsuranceTreeModule } from "./insurance/insurance-tree/insurance-tree.module";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { NgxPageScrollCoreModule } from "ngx-page-scroll-core";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    RouterModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    LoginModule,
    Ng2OdometerModule,
    MatFormFieldModule,
    MatSelectModule,
    InsuranceTreeModule,
    ScrollingModule,
    NgxPageScrollCoreModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";
import {
  MatSidenavModule,
  MatDividerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule,
  MatListModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatSort,
  MatIconModule,
  MatCardModule,
  MatProgressBarModule,
} from "@angular/material";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { DashboardComponent } from "src/app/modules/dashboard/dashboard.component";
import { AboutComponent } from "src/app/modules/about/about.component";
import { MainModule } from "src/app/main/main.module";
import { MainComponent } from "src/app/main/main.component";
import { InsuranceModule } from "src/app/insurance/insurance.module";

import { WhitepaperComponent } from "src/app/modules/whitepaper/whitepaper.component";

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    AboutComponent,
    MainComponent,
    WhitepaperComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MainModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    InsuranceModule,
  ],
})
export class DefaultModule {}

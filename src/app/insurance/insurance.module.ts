import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InsurancedashboardComponent } from "./insurancedashboard/insurancedashboard/insurancedashboard.component";
import { PostsComponent } from "./posts/posts.component";
import { Ng2OdometerModule } from 'ng2-odometer';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InsurancedashboardComponent, PostsComponent],
  imports: [CommonModule,Ng2OdometerModule,RouterModule],
})
export class InsuranceModule {}

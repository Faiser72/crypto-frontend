import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { MainComponent } from "./main/main.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { LoginComponent } from "./login/login/login.component";
import { InsurancedashboardComponent } from "./insurance/insurancedashboard/insurancedashboard/insurancedashboard.component";
import { PostsComponent } from "./insurance/posts/posts.component";
import { TradeIncComponent } from './insurance/insurance-tree/trade-inc/trade-inc.component';
import { TermIncComponent } from './insurance/insurance-tree/term-inc/term-inc.component';
import { IcoIncComponent } from './insurance/insurance-tree/ico-inc/ico-inc.component';
import { ExchangeIncComponent } from './insurance/insurance-tree/exchange-inc/exchange-inc.component';
import { IeoIncComponent } from './insurance/insurance-tree/ieo-inc/ieo-inc.component';
import { InvestmentIncComponent } from './insurance/insurance-tree/investment-inc/investment-inc.component';
import { PortFolioIncComponent } from './insurance/insurance-tree/port-folio-inc/port-folio-inc.component'

const routes: Routes = [
  // {
  //   path: "",
  //   component: MainComponent,
  // },
  { path: "login", component: LoginComponent },
  {
    path: "",
    component: DefaultComponent,
    children: [
      { path: "", component: DashboardComponent },
      // Insurance starts here
      { path: "insurance", component: InsurancedashboardComponent },
      { path: "trade", component: TradeIncComponent },
      { path: "term", component: TermIncComponent },
      { path: "exchange", component: ExchangeIncComponent },
      { path: "ico", component: IcoIncComponent },
      { path: "ieo", component: IeoIncComponent },
      { path: "investment", component: InvestmentIncComponent },
      { path: "portfolio", component: PortFolioIncComponent },
      { path: "posts", component: PostsComponent },
      // Insurance ends here
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

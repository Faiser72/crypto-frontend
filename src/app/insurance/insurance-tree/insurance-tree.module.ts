import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradeIncComponent } from './trade-inc/trade-inc.component';
import { TermIncComponent } from './term-inc/term-inc.component';
import { ExchangeIncComponent } from './exchange-inc/exchange-inc.component';
import { IcoIncComponent } from './ico-inc/ico-inc.component';
import { IeoIncComponent } from './ieo-inc/ieo-inc.component';
import { InvestmentIncComponent } from './investment-inc/investment-inc.component';
import { PortFolioIncComponent } from './port-folio-inc/port-folio-inc.component';



@NgModule({
  declarations: [TradeIncComponent, TermIncComponent, ExchangeIncComponent, IcoIncComponent, IeoIncComponent, InvestmentIncComponent, PortFolioIncComponent],
  imports: [
    CommonModule
  ]
})
export class InsuranceTreeModule { }

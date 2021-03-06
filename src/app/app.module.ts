import { AppRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, RequestOptions } from '@angular/http';
import { CommonModule, APP_BASE_HREF } from '@angular/common';

import { LoadingModule } from 'ngx-loading';
import { ModalModule } from 'ngx-bootstrap/modal';

//------- Service --------
import { PROCURETOPAYService } from './service/procuretopay.service';
import { IDFProxyService } from './service/idf.Proxy.service';
//------- End Service ----------

//------- Component --------
import { AppComponent } from './app.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { IndexComponent } from './index/index.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { CheckpoComponent } from './checkpo/checkpo.component';
import { LoanbyinvComponent } from './loanbyinv/loanbyinv.component';
import { AcceptComponent } from './accept/accept.component';
import { RejectComponent } from './reject/reject.component';

//------- End Component ----------

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    IndexComponent,
    CheckpoComponent,
    PurchaseOrderComponent,
    LoanbyinvComponent,
    AcceptComponent,
    RejectComponent,
   
    

  ],
  imports: [
    HttpModule, CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    LoadingModule,
    ModalModule.forRoot()

  ],
  providers: [PROCURETOPAYService, IDFProxyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

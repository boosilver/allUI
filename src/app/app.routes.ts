import { Routes } from '@angular/router';
import {InvoiceComponent} from './invoice/invoice.component';
import {EndorseComponent} from './endorse/endorse.component';
import {IndexComponent} from './index/index.component';
import {PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { CheckpoComponent } from './checkpo/checkpo.component';
import { LoanbyinvComponent } from './loanbyinv/loanbyinv.component';
import { ReqverinvComponent } from './reqverinv/reqverinv.component';
import { AcceptComponent } from './accept/accept.component';
import { RejectComponent } from './reject/reject.component';


export const AppRoutes: Routes = [
    { path: '', redirectTo: '/purchaseorder', pathMatch: 'full' },
    { path: 'checkinvoice', component: IndexComponent },
    { path: 'invoice', component: InvoiceComponent },
    { path: 'endorse', component: EndorseComponent},
    { path: 'purchaseorder', component: PurchaseOrderComponent},
    { path: 'checkpo', component: CheckpoComponent},
    { path: 'loanbyinv', component: LoanbyinvComponent},
    { path: 'reqverinv', component: ReqverinvComponent},
    { path: 'accept', component: AcceptComponent},
    { path: 'reject', component: RejectComponent},
    
];

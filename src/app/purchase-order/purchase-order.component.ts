import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionCreatePurchaseOrder } from '.././model';
import { PROCURETOPAYService } from '../service/procuretopay.service';



@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {
  model: TransactionCreatePurchaseOrder = TransactionCreatePurchaseOrder.empty();
  public loading = false;

  
  constructor(
    private svc: PROCURETOPAYService
  ) { }

  ngOnInit() {
    var that = this;
        // setTimeout(function(){
            that.model = TransactionCreatePurchaseOrder.sampleSubmitSr();
  }

  onSubmit() {
    this.model.TO=this.model.TO.trim();
    this.model.FORM=this.model.FORM.trim();
    this.model.PO_KEY=this.model.PO_KEY.trim();
    this.model.VALUE=this.model.VALUE.trim();
    
    console.log('PO DATA');
    console.log('saving draft ' + JSON.stringify(this.model));
    this.loading = true;
    this.svc.submitCreatePurchaseOrder(this.model)
            .subscribe(
            sr => {
              this.loading = false;
              let message = 'Success';
              (<HTMLInputElement>document.getElementById('status')).value = message;
              console.log('reply:' + JSON.stringify(sr));
              document.getElementById("statusfield").style.display = "block";
               
            },
            error => {
              this.loading = false;

                let header = 'Error';
                // this.progressDialog.close();
                let message = error;
                (<HTMLInputElement>document.getElementById('status')).value = message;
                console.log('Error:' + message);
                document.getElementById("statusfield").style.display = "block";
                
            });
  }
}

import { Component, OnInit } from '@angular/core';
import { TransactionEndorseInvoice } from '.././model';
import { PROCURETOPAYService } from '../service/procuretopay.service';

@Component({
  selector: 'app-endorse',
  templateUrl: './endorse.component.html',
  styleUrls: ['./endorse.component.css']
})
export class EndorseComponent implements OnInit {
  model: TransactionEndorseInvoice = TransactionEndorseInvoice.empty();
  public loading = false;

  constructor(
    private svc: PROCURETOPAYService,
    // private _router: Router
  ) { }

  ngOnInit() {
    var that = this;
        // setTimeout(function(){
            that.model = TransactionEndorseInvoice.sampleSubmitSr();
  }

  onSubmit() {
    this.model.TO=this.model.TO.trim();
    this.model.BANK=this.model.BANK.trim();
    this.model.DOC_LOAN=this.model.DOC_LOAN.trim();
    this.model.KEY=this.model.KEY.trim();
    this.model.PRICE_BORROW=this.model.PRICE_BORROW.trim();  
   
    console.log('Endorse DATA');
    console.log('saving draft ' + JSON.stringify(this.model));
    this.loading = true;
    this.svc.submitEndorseInvoice(this.model)
            .subscribe(
              sr =>{ 
                this.loading = false;
                let message = 'Success';
                (<HTMLInputElement>document.getElementById('status')).value = message;
                console.log('reply:' + JSON.stringify(sr));
                document.getElementById("statusfield").style.display = "block";
                 
              },
              error => {
                  this.loading = false;
                  let header = 'Error';
                  let message = error;
                  (<HTMLInputElement>document.getElementById('status')).value = message;
                  console.log('Error:' + message);
                  document.getElementById("statusfield").style.display = "block";
                  
              });
  }
}

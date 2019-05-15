import { Component, OnInit } from '@angular/core';
import { Loanbyinv } from '.././model';
import { PROCURETOPAYService } from '../service/procuretopay.service';

@Component({
  selector: 'app-loanbyinv',
  templateUrl: './loanbyinv.component.html',
  styleUrls: ['./loanbyinv.component.css']
})
export class LoanbyinvComponent implements OnInit {
  model: Loanbyinv = Loanbyinv.empty();
  public loading = false;

  constructor(
    private svc: PROCURETOPAYService
  ) { }

  ngOnInit() {
    var that = this;
        // setTimeout(function(){
            that.model = Loanbyinv.sampleSubmitSr();
  }

  onSubmit() {
    this.model.BANK=this.model.BANK.trim();
    this.model.FORM=this.model.FORM.trim();
    this.model.DOC_LOAN=this.model.DOC_LOAN.trim();
    this.model.BORROWKEY=this.model.BORROWKEY.trim();
    this.model.KEY=this.model.KEY.trim();
    
    console.log('Loanbyinv DATA');
    console.log('saving draft ' + JSON.stringify(this.model));
    this.loading = true;
    this.svc.submitLoanbyInvoice(this.model)
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
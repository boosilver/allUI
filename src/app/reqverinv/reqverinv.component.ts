import { Component, OnInit } from '@angular/core';
import { Reqverinv } from '.././model';
import { PROCURETOPAYService } from '../service/procuretopay.service';

@Component({
  selector: 'app-reqverinv',
  templateUrl: './reqverinv.component.html',
  styleUrls: ['./reqverinv.component.css']
})
export class ReqverinvComponent implements OnInit {
  model: Reqverinv = Reqverinv.empty();
  public loading = false;

  constructor(
    private svc: PROCURETOPAYService
  ) { }

  ngOnInit() {
    var that = this;
        // setTimeout(function(){
            that.model = Reqverinv.sampleSubmitSr();
  }

  onSubmit() {
    this.model.TO=this.model.TO.trim();
    this.model.BANK=this.model.BANK.trim();
    this.model.DOC_LOAN=this.model.DOC_LOAN.trim();
    this.model.BORROWKEY=this.model.BORROWKEY.trim();
    
    console.log('Reqverinvoice DATA');
    console.log('saving draft ' + JSON.stringify(this.model));
    this.loading = true;
    this.svc.submitReqverinv(this.model)
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
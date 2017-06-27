import { Component, OnInit } from '@angular/core';
import { BusinessService } from './../services/business.service';

@Component({
  selector: 'app-get-company',
  templateUrl: './get-company.component.html',
  styleUrls: ['./get-company.component.css'],
  providers: [BusinessService]
})
export class GetCompanyComponent {

  constructor(private businessService:BusinessService) { }
  //var
  company:any;
  id:number;

  getCompany(value:any) {

      //calling the getCompany method from the service with the company id
      this.businessService.getCompany(value.id)
           .subscribe(company => {
               this.company = company[Object.keys(company)[0]];
               console.log(this.company.Branches[0]);
           });
       this.id = null;
  }

}

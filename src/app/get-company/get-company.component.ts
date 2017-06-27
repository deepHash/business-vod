import { Component, OnInit } from '@angular/core';
import { BusinessService } from './../services/business.service';

@Component({
  selector: 'app-get-company',
  templateUrl: './get-company.component.html',
  styleUrls: ['./get-company.component.css'],
  providers: [BusinessService]
})
export class GetCompanyComponent implements OnInit {

  constructor(private businessService:BusinessService) { }
  //var
  aCompany:any;

  ngOnInit() {

      //calling the getCompany method from the service with the company id
      this.businessService.getCompany(45)
           .subscribe(company => {
               this.aCompany = company;
               console.log(this.aCompany);
           });
  }

}

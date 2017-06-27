import { Component, OnInit } from '@angular/core';
import {Routes} from '@angular/router';
import { BusinessService } from './../services/business.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [BusinessService]
})
export class MainComponent implements OnInit {
  //
  companyNames:any;
  aCompany:any;


  constructor(private businessService: BusinessService ) { }

  ngOnInit() {

      this.businessService.getAllNames()
          .subscribe(companies => {
              this.companyNames = companies;
              console.log(this.companyNames);
          });

      this.businessService.getCompanyByCityDevices("Haifa", 10)
          .subscribe(companies => {
              this.companyNames = companies;
              console.log(this.companyNames);
          });

       this.businessService.getCompany(45)
           .subscribe(company => {
               this.aCompany = company;
               console.log(this.aCompany);
           })
  }

}

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

  constructor(private businessService: BusinessService ) { this.companyNames = ''; }

  ngOnInit() {
      if (!this.companyNames){
          this.businessService.getAllNames()
          .subscribe(companies => {
              this.companyNames = companies[Object.keys(companies)[0]];
              //console.log(this.companyNames);
          });          
      }


  }

}

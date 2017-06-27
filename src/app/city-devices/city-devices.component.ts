import { Component, OnInit } from '@angular/core';
import { BusinessService } from './../services/business.service';

@Component({
  selector: 'app-city-devices',
  templateUrl: './city-devices.component.html',
  styleUrls: ['./city-devices.component.css'],
  providers: [BusinessService]
})
export class CityDevicesComponent implements OnInit {
  //vars
  companyNames:any;

  constructor(private businessService: BusinessService) { }

  ngOnInit() {

      this.businessService.getCompanyByCityDevices("Haifa", 10)
          .subscribe(companies => {
              this.companyNames = companies;
              console.log(this.companyNames);
          });      
  }

}

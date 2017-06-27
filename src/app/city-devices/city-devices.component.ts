import { Component, OnInit } from '@angular/core';
import { BusinessService } from './../services/business.service';

@Component({
  selector: 'app-city-devices',
  templateUrl: './city-devices.component.html',
  styleUrls: ['./city-devices.component.css'],
  providers: [BusinessService]
})
export class CityDevicesComponent {
  //vars
  companies:any;
  city:string = '';
  devices:string = '';

  constructor(private businessService: BusinessService) { }

  getCityDevice(value:any) {
      this.businessService.getCompanyByCityDevices(value.city, value.devices)
          .subscribe(companies => {
              //gets the array object from the complicated key naming.... :<
              this.companies = companies[Object.keys(companies)[0]];
              console.log(this.companies);
          });
       this.city = '';
       this.devices = '';         
  }


   

}

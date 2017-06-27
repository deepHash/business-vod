import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { GetCompanyComponent } from './get-company/get-company.component';
import { CityDevicesComponent } from './city-devices/city-devices.component';
import { FooterComponent } from './footer/footer.component';
import { routes} from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    GetCompanyComponent,
    CityDevicesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

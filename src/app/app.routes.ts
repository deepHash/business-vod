import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { GetCompanyComponent } from './get-company/get-company.component';
import { CityDevicesComponent } from './city-devices/city-devices.component';

export const router: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full'},
    { path: 'get-company', component: GetCompanyComponent},
    { path: 'city-devices', component: CityDevicesComponent},
    { path: 'main', component: MainComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
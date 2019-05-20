import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordionModule } from 'ngx-bootstrap/accordion'

import { AppComponent } from './app.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientService } from './service/client.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientAttributeService } from './service/client-attribute.service';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'clients' },
    { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
    { path: 'clients', component: ClientListComponent },
    { path: 'create-client', component: CreateClientComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    CreateClientComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AccordionModule.forRoot()
  ],
  providers: [ClientService, ClientAttributeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

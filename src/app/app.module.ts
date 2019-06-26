import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordionModule } from 'ngx-bootstrap/accordion'
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { UpcomingEventsComponent } from './event/upcoming-events/upcoming-events.component';

import { ClientService } from './service/client.service';
import { ClientAttributeService } from './service/client-attribute.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'clients' },
    { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
    { path: 'clients', component: ClientListComponent },
    { path: 'create-client', component: CreateClientComponent }
]
import { EventService } from './service/event.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    CreateClientComponent,
    DashboardComponent
    UpcomingEventsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [
    ClientService,
    ClientAttributeService,
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

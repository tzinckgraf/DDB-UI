import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { UpcomingEventsComponent } from './event/upcoming-events/upcoming-events.component';

import { ClientService } from './service/client.service';
import { ClientAttributeService } from './service/client-attribute.service';
import { EventService } from './service/event.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    CreateClientComponent,
    UpcomingEventsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ClientService,
    ClientAttributeService,
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientService } from './service/client.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientAttributeService } from './service/client-attribute.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    CreateClientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ClientService, ClientAttributeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

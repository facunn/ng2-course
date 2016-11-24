import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ListaComponent } from './components/lista/lista.component';
import { AppComponent } from './app.component';
import { DetailComponent} from './components/detail/detail.component';
import { AddComponent } from './components/add/add.component';


import { DataService } from './services/data.service';
import { DataServiceResolver } from './resolvers/data-service.resolver';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DetailComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [DataService, DataServiceResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }

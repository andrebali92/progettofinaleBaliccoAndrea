import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientiComponent } from './clienti/clienti.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpinterceptorInterceptor } from './httpinterceptor.interceptor';
import { FattureComponent } from './fatture/fatture.component';
import { ClientiDetailComponent } from './clienti-detail/clienti-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientiComponent,
    NavbarComponent,
    FattureComponent,
    ClientiDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpinterceptorInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

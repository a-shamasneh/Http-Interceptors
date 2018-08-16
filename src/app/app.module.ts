import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {InterceptorHeader} from './interceptor/interceptor';
import {AppService} from './services/app-service';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorHeader,
    multi: true
  },AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

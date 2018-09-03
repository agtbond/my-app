import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './view/login-component/login-component.component';
import { DashboardComponentComponent } from './view/dashboard-component/dashboard-component.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './view/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    DashboardComponentComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

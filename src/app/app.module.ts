import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './view/login-component/login-component.component';
import { DashboardComponentComponent } from './view/dashboard-component/dashboard-component.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './view/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUsernameComponent } from './view/edit-username/edit-username.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    DashboardComponentComponent,
    MenuComponent,
    EditUsernameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

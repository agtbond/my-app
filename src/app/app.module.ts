import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './view/login-component/login-component.component';
import { DashboardComponentComponent } from './view/dashboard-component/dashboard-component.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './view/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUsernameComponent } from './view/edit-username/edit-username.component';
import { UserService } from './services/user-service.service';
import { ArrayHomeworkComponent } from './view/array-homework/array-homework.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultComponent } from './view/songs/result/result.component';
import { SearchComponent } from './view/songs/search/search.component';
import { UppercasePipe } from './shared/uppercase.pipe';
import { HealthComponent } from './view/health/health.component';
import { StorageServiceModule} from 'angular-webstorage-service';
import { AddDataComponent } from './view/health/add-data/add-data.component';
import { ShowGraphComponent } from './view/health/show-graph/show-graph.component';
import { HealthService } from './services/health.service';
import { LyricsService } from './services/lyrics.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    DashboardComponentComponent,
    MenuComponent,
    EditUsernameComponent,
    ArrayHomeworkComponent,
    ResultComponent,
    SearchComponent,
    UppercasePipe,
    HealthComponent,
    AddDataComponent,
    ShowGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StorageServiceModule
  ],
  providers: [UserService, LyricsService, HealthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

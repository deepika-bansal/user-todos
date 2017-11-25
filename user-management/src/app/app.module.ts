import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserTableComponent } from './user-table/user-table.component';

import { UserService } from './user.service';

import { ListTableRoutingModule } from './list-table/list-table-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    ListTableRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

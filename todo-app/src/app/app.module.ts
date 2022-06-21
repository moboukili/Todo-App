import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosCreateComponent } from './components/todos-create/todos-create.component';
import { TodosEditComponent } from './components/todos-edit/todos-edit.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosCreateComponent,
    TodosEditComponent,
    TodosListComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }

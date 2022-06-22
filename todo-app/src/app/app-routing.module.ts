import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TodosCreateComponent } from './components/todos-create/todos-create.component';
import { TodosEditComponent } from './components/todos-edit/todos-edit.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'create-todos', component: TodosCreateComponent },
  { path: 'edit-todos/:id', component: TodosEditComponent },
  { path: 'todos-list', component: TodosListComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



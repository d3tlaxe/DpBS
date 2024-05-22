import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContainerComponent } from './components/container/container.component';
import { PrelectorComponent } from './components/prelector/prelector.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:LoginComponent},
  {path:"success", component:ContainerComponent},
  {path:"login/admin", component:AdminComponent},
  {path:"login/prelector", component:PrelectorComponent},
  {path:"login/student", component:StudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

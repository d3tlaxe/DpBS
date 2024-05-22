import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PrelectorComponent } from './components/prelector/prelector.component';
import { StudentComponent } from './components/student/student.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { AdminContentComponent } from './components/admin-content/admin-content.component';
import { PrelectorMenuComponent } from './components/prelector-menu/prelector-menu.component';
import { PrelectorContentComponent } from './components/prelector-content/prelector-content.component';
import { StudentMenuComponent } from './components/student-menu/student-menu.component';
import { StudentContentComponent } from './components/student-content/student-content.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContainerComponent } from './components/container/container.component';
import { AdminDersEkleComponent } from './components/admin-ders-ekle/admin-ders-ekle.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrelectorComponent,
    StudentComponent,
    AdminComponent,
    AdminMenuComponent,
    AdminContentComponent,
    PrelectorMenuComponent,
    PrelectorContentComponent,
    StudentMenuComponent,
    StudentContentComponent,
    ProfileComponent,
    ContainerComponent,
    AdminDersEkleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

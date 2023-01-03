import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Anasayfa'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Giriş'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Kayıt Ol'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'İletişim'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

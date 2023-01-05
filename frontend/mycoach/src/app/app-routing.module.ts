import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachsComponent } from './components/coachs/coachs.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { RegistercoachComponent } from './components/registercoach/registercoach.component';

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
  },
  {
    path: 'registercoach',
    component: RegistercoachComponent,
    title: 'Kayıt Olma Formu'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'Profil'
  },
  {
    path: 'coachs',
    component: CoachsComponent,
    title: 'Koçlarımız'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

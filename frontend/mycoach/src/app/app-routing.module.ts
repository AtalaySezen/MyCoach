import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { CoachsComponent } from './components/coachs/coachs.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { RegistercoachComponent } from './components/registercoach/registercoach.component';
import { TrainingprogramsComponent } from './components/trainingprograms/trainingprograms.component';
import { VerifyComponent } from './components/verify/verify.component';

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
  },
  {
    path:'programs',
    component:TrainingprogramsComponent,
    title:'Programlarım'
  },
  {
    path:'about',
    component:AboutComponent,
    title:'Hakkımızda'
  },
  {
    path:'blogs',
    component:BlogComponent,
    title:'Bloglar'
  },
  {
    path:'privacy',
    component:PrivacyComponent,
    title:'Gizlilik Sözleşmesi'
  },
  {
    path:'verify',
    component:VerifyComponent
  },
  {path:'**',
   pathMatch:'full',
   component:PagenotfoundComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

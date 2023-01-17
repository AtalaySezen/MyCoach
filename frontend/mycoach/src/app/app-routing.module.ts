import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { CoachprofileComponent } from './components/coachprofile/coachprofile.component';
import { CoachsComponent } from './components/coachs/coachs.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { RegistercoachComponent } from './components/registercoach/registercoach.component';
import { TrainingprogramsComponent } from './components/trainingprograms/trainingprograms.component';
import { VerifyComponent } from './shared/verify/verify.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    title: 'MyCoach | Anasayfa'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'MyCoach | Giriş'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'MyCoach | Kayıt Ol'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'MyCoach | İletişim'
  },
  {
    path: 'registercoach',
    component: RegistercoachComponent,
    title: 'MyCoach | Kayıt Ol'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'MyCoach | Profil'
  },
  {
    path: 'coachprofile',
    component: CoachprofileComponent,
    title: 'MyCoach | Profil'
  },
  {
    path: 'coachs',
    component: CoachsComponent,
    title: 'MyCoach | Koçlarımız'
  },
  { 
    path: 'messages',
    component: MessagesComponent,
    title: 'MyCoach | Mesajlar'
  },
  {
    path:'programs',
    component:TrainingprogramsComponent,
    title:'MyCoach | Programlarım'
  },
  {
    path:'about',
    component:AboutComponent,
    title:'MyCoach | Hakkımızda'
  },
  {
    path:'blogs',
    component:BlogComponent,
    title:'MyCoach | Bloglar'
  },
  {
    path:'privacy',
    component:PrivacyComponent,
    title:'MyCoach | Gizlilik Sözleşmesi'
  },
  {
    path:'verify',
    component:VerifyComponent,
    title:'MyCoach | Onayla'
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

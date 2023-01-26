import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authlayout/login/login.component';
import { PrivacyComponent } from './authlayout/privacy/privacy.component';
import { RegisterComponent } from './authlayout/register/register.component';
import { RegistercoachComponent } from './authlayout/registercoach/registercoach.component';
import { CoachearningsComponent } from './coachcomponents/coachearnings/coachearnings.component';
import { CoachprofileComponent } from './coachcomponents/coachprofile/coachprofile.component';
import { StudentsComponent } from './coachcomponents/students/students.component';
import { TrainingprogramsComponent } from './coachcomponents/trainingprograms/trainingprograms.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { CoachdetailComponent } from './components/coachs/coachdetail/coachdetail.component';
import { CoachsComponent } from './components/coachs/coachs.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqcenterComponent } from './components/faqcenter/faqcenter.component';
import { HomeComponent } from './components/home/home.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './services/auth.guard';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
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
    title: 'MyCoach | İletişim',
  },
  {
    path: 'registercoach',
    component: RegistercoachComponent,
    title: 'MyCoach | Kayıt Ol'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate:[AuthGuard],
    title: 'MyCoach | Profil'
  },
  {
    path: 'support',
    component: FaqcenterComponent,
    title: 'MyCoach | Destek'
  },
  {
    path: 'coachprofile',
    component: CoachprofileComponent,
    canActivate:[AuthGuard],
    title: 'MyCoach | Profil'
  },
  {
    path: 'coachs',
    component: CoachsComponent,
    title: 'MyCoach | Koçlarımız'
  },
  {
    path: 'coachs/:id',
    component: CoachdetailComponent,
    title: 'MyCoach | Koçlarımız'
  },
  {
    path: 'messages',
    component: MessagesComponent,
    canActivate:[AuthGuard],
    title: 'MyCoach | Mesajlar'
  },
  {
    path: 'programs',
    component: TrainingprogramsComponent,
    canActivate:[AuthGuard],
    title: 'MyCoach | Programlarım'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'MyCoach | Hakkımızda'
  },
  {
    path: 'blogs',
    component: BlogComponent,
    title: 'MyCoach | Bloglar'
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
    title: 'MyCoach | Gizlilik Sözleşmesi'
  },
  {
    path: 'earnings',
    component: CoachearningsComponent,
    canActivate:[AuthGuard],
    title: 'MyCoach | Kazançlarım'
  },
  {
    path: 'students',
    component: StudentsComponent,
    canActivate:[AuthGuard],
    title: 'MyCoach | Öğrenciler'
  },
  {
    path: 'verify',
    component: VerifyComponent,
    title: 'MyCoach | Onayla'
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

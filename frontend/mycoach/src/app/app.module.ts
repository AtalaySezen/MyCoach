import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { ProfileComponent } from './components/profile/profile.component';
import { CoachsComponent } from './components/coachs/coachs.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { EditDialogComponent } from './components/profile/profilecomponents/edit-dialog/edit-dialog.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SwiperModule } from 'swiper/angular';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AboutComponent } from './components/about/about.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';
import { BlogComponent } from './components/blog/blog.component';
import { VerifyComponent } from './shared/verify/verify.component';
import { Thankyou1Component } from './shared/thankyou1/thankyou1.component';
import {MatChipsModule} from '@angular/material/chips';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MessagesComponent } from './components/messages/messages.component';
import { FaqcenterComponent } from './components/faqcenter/faqcenter.component';
import {MatBadgeModule} from '@angular/material/badge';
import { StudentsComponent } from './coachcomponents/students/students.component';
import { CoachearningsComponent } from './coachcomponents/coachearnings/coachearnings.component';
import { EditcoachprofileComponent } from './coachcomponents/coachprofile/editcoachprofile/editcoachprofile.component';
import { CoachprofileComponent } from './coachcomponents/coachprofile/coachprofile.component';
import { PrivacyComponent } from './authlayout/privacy/privacy.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { TrainingprogramsComponent } from './coachcomponents/trainingprograms/trainingprograms.component';
import { RegistercoachComponent } from './authlayout/registercoach/registercoach.component';
import { RegisterComponent } from './authlayout/register/register.component';
import { LoginComponent } from './authlayout/login/login.component';
import { ProgramdialogComponent } from './coachcomponents/trainingprograms/programdialog/programdialog.component';
import { StudentdialogComponent } from './coachcomponents/students/studentdialog/studentdialog.component';
import { CoachdetailComponent } from './components/coachs/coachdetail/coachdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    LoadingComponent,
    RegistercoachComponent,
    ProfileComponent,
    CoachsComponent,
    TrainingprogramsComponent,
    EditDialogComponent,
    PagenotfoundComponent,
    AboutComponent,
    SnackbarComponent,
    BlogComponent,
    PrivacyComponent,
    VerifyComponent,
    Thankyou1Component,
    CoachprofileComponent,
    EditcoachprofileComponent,
    MessagesComponent,
    FaqcenterComponent,
    StudentsComponent,
    CoachearningsComponent,
    ProgramdialogComponent,
    StudentdialogComponent,
    CoachdetailComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatSelectModule,
    NgxMaskDirective,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatBadgeModule,
    MatMenuModule,
    HttpClientModule,
    MatTabsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatChipsModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    SwiperModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatButtonToggleModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    [provideNgxMask()]

],
  bootstrap: [AppComponent]

})
export class AppModule { }

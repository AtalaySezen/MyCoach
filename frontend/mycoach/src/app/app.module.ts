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
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistercoachComponent } from './components/registercoach/registercoach.component';
import {MatSelectModule} from '@angular/material/select';
import { ProfileComponent } from './components/profile/profile.component';
import { CoachsComponent } from './components/coachs/coachs.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TrainingprogramsComponent } from './components/trainingprograms/trainingprograms.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditDialogComponent } from './components/profile/profilecomponents/edit-dialog/edit-dialog.component';
import {MatTabsModule} from '@angular/material/tabs';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SwiperModule } from 'swiper/angular';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AboutComponent } from './components/about/about.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';
import { BlogComponent } from './components/blog/blog.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { VerifyComponent } from './components/verify/verify.component';
import { Thankyou1Component } from './components/thankyou1/thankyou1.component';
import { CoachprofileComponent } from './components/coachprofile/coachprofile.component';
import { EditcoachprofileComponent } from './components/coachprofile/editcoachprofile/editcoachprofile.component';
import {MatChipsModule} from '@angular/material/chips';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

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
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatSelectModule,
    NgxMaskDirective,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,
    HttpClientModule,
    MatTabsModule,
    MatDialogModule,
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

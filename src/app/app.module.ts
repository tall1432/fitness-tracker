import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MaterialModule } from "./material/material.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from '@angular/flex-layout';
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { TrainingComponent } from "./training/training.component";
import { CurrentTrainingComponent } from "./training/current-training/current-training.component";
import { NewTrainingComponent } from "./training/new-training/new-training.component";
import { PastTrainingComponent } from "./training/past-training/past-training.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import {MatButtonModule} from "@angular/material/button"
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { StoptrainingComponent } from './training/current-training/stop-training.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,

    SignupComponent,

    LoginComponent,

    TrainingComponent,

    CurrentTrainingComponent,

    NewTrainingComponent,

    PastTrainingComponent,

    WelcomeComponent,

    HeaderComponent,

    SidenavListComponent,
    StoptrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MatButtonModule,
    FormsModule,
    MatDatepickerModule,
    ReactiveFormsModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents:[StoptrainingComponent]
})
export class AppModule {}

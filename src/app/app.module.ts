import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbIconModule,
  NbCardModule,
  NbFormFieldModule,
  NbButtonModule,
  NbInputModule,
  NbTagModule,
  NbUserModule,
  NbSpinnerModule,
  NbWindowModule,
  NbListModule,
  NbButtonGroupModule, NbActionsModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HomeTwoComponent } from './components/home-two/home-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbCardModule,
    NbFormFieldModule,
    NbButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    NbTagModule,
    HttpClientModule,
    NbUserModule,
    NbSpinnerModule,
    NbWindowModule.forRoot(),
    NbListModule,
    NbButtonGroupModule,
    NbActionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

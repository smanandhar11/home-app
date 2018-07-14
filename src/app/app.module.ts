import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassComponent } from './pages/pass/pass.component';
import { CheckComponent } from './pages/check/check.component';
import {environment} from '../environments/environment';
import { AppFormComponent } from './pages/pass/app-form/app-form.component';



@NgModule({
  declarations: [
    AppComponent,
    PassComponent,
    CheckComponent,
    AppFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from '../environments/environment';

import { ConexionService } from './services/conexion.service';
import { ListaComponent } from './components/lista/lista.component';
import { ListaAddComponent } from './components/lista-add/lista-add.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ConsultorComponent } from './components/consultor/consultor.component';
import { GooglemapsComponent } from './components/googlemaps/googlemaps.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    FontAwesomeModule,
  ],
  providers: [ConexionService],
  declarations: [AppComponent, ListaComponent, ListaAddComponent, LoginComponent, AdminComponent, ConsultorComponent, GooglemapsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ConsultorComponent } from './components/consultor/consultor.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ListaAddComponent } from './components/lista-add/lista-add.component';
import { ListaComponent } from './components/lista/lista.component';
import { GooglemapsComponent } from './components/googlemaps/googlemaps.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'consultor', component: ConsultorComponent },
  { path: 'add', component: ListaAddComponent },
  { path: 'update', component: ListaAddComponent },
  { path: 'delete', component: ListaAddComponent },
  { path: 'searchZ', component: ListaAddComponent },
  { path: 'searchM', component: ListaComponent },
  { path: 'googleMaps', component: GooglemapsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

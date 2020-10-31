import { Component } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/firestore';
//import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import 'firebase/firestore';

//ICONOS//
import { faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = "DAMACRUD";
  faUser = faUser;
  //items: Observable<any[]>;
  constructor(/*firestore: AngularFirestore,*/ private auth: AuthService, private route: Router) {
    //this.items = firestore.collection('items').valueChanges();
    auth.isAlive().then((res) => {
      if (!res) {
        this.route.navigate(['login']);
      }
    }).catch(err => console.log('err', err));

  }
}
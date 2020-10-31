import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  login(user) {
    return this.afAuth.signInWithEmailAndPassword(user.username, user.password);
  }
  logout() {
    return this.afAuth.signOut();
  }
  isAlive() {
    return this.afAuth.onAuthStateChanged(function (user) {
      if (user) {
        return true;
      } else {
        return false;
      }
    });
  }
}


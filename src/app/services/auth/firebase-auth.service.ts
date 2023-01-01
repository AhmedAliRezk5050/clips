import { Injectable } from '@angular/core';
import IUser from "../../models/user.model";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  constructor(private auth: AngularFireAuth, private db: AngularFirestore) { }

  public async createUser(user: IUser) {
    const {email, password, name, age, phoneNumber} = user;
    const credentials = await this.auth.createUserWithEmailAndPassword(email, password)

    await this.db.collection('users').add({
      name,
      email,
      age,
      phoneNumber
    });
  }
}

import { Injectable } from '@angular/core';
import IUser from "../../models/user.model";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import IDbUser from "../../models/db-user.model";

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  private usersCollection: AngularFirestoreCollection<IDbUser>

  constructor(private auth: AngularFireAuth, private db: AngularFirestore) {
    this.usersCollection = db.collection('users');
  }

  public async createUser(user: IUser) {
    const {email, password, name, age, phoneNumber} = user;
    const credentials = await this.auth.createUserWithEmailAndPassword(email, password)

    if(!credentials.user) {
      throw new Error("User not found")
    }

    await this.usersCollection.doc(credentials.user.uid).set({
      name,
      email,
      age,
      phoneNumber
    });

    await credentials.user.updateProfile({
      displayName: name
    })
  }


}

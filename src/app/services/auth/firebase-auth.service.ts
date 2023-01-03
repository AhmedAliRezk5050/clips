import {Injectable} from '@angular/core';
import IUser from "../../models/user.model";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import IDbUser from "../../models/db-user.model";
import {filter, map, Observable, of, switchMap} from "rxjs";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  private usersCollection: AngularFirestoreCollection<IDbUser>
  public isAuthenticated$: Observable<boolean>
  private redirect = false;

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.usersCollection = db.collection('users');
    this.isAuthenticated$ = this.auth.user.pipe(
      map(user => !!user)
    );

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(_ => this.route.firstChild),
      switchMap(activatedRoute => activatedRoute?.data ?? of({}))
    ).subscribe(data => {
      this.redirect = !!data['authOnly'];
    })
  }

  public async createUser(user: IUser) {
    const {email, password, name, age, phoneNumber} = user;
    const credentials = await this.auth.createUserWithEmailAndPassword(email, password)

    if (!credentials.user) {
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

  public async login(email: string, password: string) {
    await this.auth.signInWithEmailAndPassword(email, password)
  }

  async logout(event?: MouseEvent) {
    event && event.preventDefault()
    await this.auth.signOut();
    if (this.redirect) await this.router.navigateByUrl('/')
  }
}

import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";
import {Injectable} from "@angular/core";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {catchError, delay, map, Observable, of, pipe, switchMap} from "rxjs";
import {ajax} from "rxjs/internal/ajax/ajax";
import {fromPromise} from "rxjs/internal/observable/innerFrom";

@Injectable({
  providedIn: 'root'
})
export class EmailTaken implements AsyncValidator{
  constructor(private auth: AngularFireAuth) {
  }

  validate = (control: AbstractControl): Observable<ValidationErrors | null> => {
    return of(control.value as string)
      .pipe(
        delay(500),
        switchMap(email =>
          fromPromise(this.auth.fetchSignInMethodsForEmail(email))
          .pipe(
            map(res => res.length ? {'emailTaken': true} : null),
            catchError(err => of({'emailTaken': true}))
          )
        )
      )
  }
}

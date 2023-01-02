import {AbstractControl, ValidationErrors} from "@angular/forms";

export class RegisterValidators {
  static match(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) {
      return {controlNotFound: true}
    }

    return password.value === confirmPassword.value ? null : {noMatch: true}
  }
}

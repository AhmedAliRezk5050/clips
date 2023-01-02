import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export class RegisterValidators {
  static match(controlName: string, matchControlName: string): ValidatorFn  {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get(controlName);
      const confirmPassword = control.get(matchControlName);

      if (!password || !confirmPassword) {
        return {controlNotFound: true}
      }

      return password.value === confirmPassword.value ? null : {noMatch: true}
    }

  }
}

import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [AuthModalComponent, LoginComponent, RegisterComponent],
  imports: [SharedModule, ReactiveFormsModule],
  exports: [AuthModalComponent],
})
export class UserModule {}

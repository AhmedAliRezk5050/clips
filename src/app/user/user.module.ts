import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AuthModalComponent, LoginComponent, RegisterComponent],
  imports: [SharedModule],
  exports: [AuthModalComponent],
})
export class UserModule {}

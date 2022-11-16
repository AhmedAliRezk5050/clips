import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { AuthModalComponent } from './auth-modal/auth-modal.component';

@NgModule({
  declarations: [AuthModalComponent],
  imports: [SharedModule],
  exports: [AuthModalComponent],
})
export class UserModule {}

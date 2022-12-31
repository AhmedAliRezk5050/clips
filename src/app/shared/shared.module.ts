import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [ModalComponent, TabsContainerComponent, TabComponent, InputComponent],
  imports: [CommonModule, ReactiveFormsModule],
    exports: [CommonModule, FormsModule, ModalComponent, TabsContainerComponent, TabComponent, InputComponent],
})
export class SharedModule {}

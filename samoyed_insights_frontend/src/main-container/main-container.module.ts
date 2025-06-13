import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainerComponent } from './main-container.component';

// PUBLIC_INTERFACE
@NgModule({
  declarations: [MainContainerComponent],
  imports: [CommonModule],
  exports: [MainContainerComponent]
})
export class MainContainerModule { }

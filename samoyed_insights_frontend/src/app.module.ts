import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainContainerModule } from './main-container/main-container.module';

// PUBLIC_INTERFACE
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MainContainerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

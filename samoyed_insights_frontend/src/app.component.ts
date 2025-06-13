import { Component } from '@angular/core';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-root',
  template: `
    <app-main-container></app-main-container>
  `,
  styles: [`
    :host {
      display: block;
      background: #F5FAFF;
    }
  `]
})
export class AppComponent { }

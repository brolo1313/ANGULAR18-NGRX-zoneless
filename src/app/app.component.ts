import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular18-ngrx-zoneless';

  homeName:string = '';
  appVariable: string = '';


  sendActionToHome() {
    // Simulate an action that might trigger change detection
    this.homeName = 'Updated by AppComponent';
  }

  actionInApp(){
  this.appVariable = 'action in app';
  }
}

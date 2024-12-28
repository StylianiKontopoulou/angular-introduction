import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EventBindingExampleComponent } from './components/event-binding-example/event-binding-example.component';

export const routes: Routes = [
    { path: 'event-bind-example', component: EventBindingExampleComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  ];

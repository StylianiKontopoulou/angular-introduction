import { Routes } from '@angular/router';
import { EventBindingExampleComponent } from './components/event-binding-example/event-binding-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { SimpleDatatableExampleComponent } from './components/simple-datatable-example/simple-datatable-example.component';

export const routes: Routes = [
  {
    path: 'component-input-example',
    component: ComponentInputExampleComponent,
  },
  {
    path: 'for-directive-example',
    component: ForDirectiveExampleComponent,
  },
  { path: 'event-binding-example', component: EventBindingExampleComponent },
  {
    path: 'simple-datatable-example',
    component: SimpleDatatableExampleComponent,
  },
  { path: '', component: WelcomeComponent },
];
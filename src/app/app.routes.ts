import { Routes } from '@angular/router';
import { EventBindingExampleComponent } from './components/event-binding-example/event-binding-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { SimpleDatatableExampleComponent } from './components/simple-datatable-example/simple-datatable-example.component';
import { ComponentOutputExampleComponent } from './components/component-output-example/component-output-example.component';
import { TemplateDrivenFormExampleComponent } from './components/template-driven-form-example/template-driven-form-example.component';
import { ReactiveFormExampleComponent } from './components/reactive-form-example/reactive-form-example.component';
import { HttpClientExampleComponent } from './components/http-client-example/http-client-example.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';

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
  {
    path: 'component-output-example',
    component: ComponentOutputExampleComponent,
  },
  {
    path: 'template-driven-form-example',
    component: TemplateDrivenFormExampleComponent,
  },
  {
    path: 'reactive-form-example',
    component: ReactiveFormExampleComponent,
  },
  {
    path: 'http-client-example',
    component: HttpClientExampleComponent,
  },
  {
    path: 'user-registration',
    component: UserRegistrationComponent,
  },
  { path: '', component: WelcomeComponent },
];
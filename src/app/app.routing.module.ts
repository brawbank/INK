import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { ShellComponent } from './core/shell/shell.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'main', component: MainComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: ShellComponent,
    // canActivate: [AuthGuard],
    children: [
        { path: 'features', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

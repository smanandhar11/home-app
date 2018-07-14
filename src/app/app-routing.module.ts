import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckComponent } from './pages/check/check.component';
import { PassComponent } from './pages/pass/pass.component';

const routes: Routes = [
  { path: 'checklist', component: CheckComponent },
  {path: 'password', component: PassComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

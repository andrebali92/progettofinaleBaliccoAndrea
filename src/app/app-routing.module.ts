import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientiComponent } from './clienti/clienti.component';
import { FattureComponent } from './fatture/fatture.component';

const routes: Routes = [
  { path: '', component: ClientiComponent },
  { path: 'clienti', component: ClientiComponent },
  { path: 'fatture', component: FattureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

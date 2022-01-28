import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientiDetailComponent } from './clienti-detail/clienti-detail.component';
import { ClientiComponent } from './clienti/clienti.component';
import { FattureComponent } from './fatture/fatture.component';

const routes: Routes = [
  { path: '', component: ClientiComponent },
  { path: 'clienti', component: ClientiComponent },
  { path: 'clienti/:id', component: ClientiDetailComponent },
  { path: 'fatture', component: FattureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuralVagasComponent } from './mural-vagas/mural-vagas.component';
import { MuralHomeComponent } from './mural-home/mural-home.component';

const routes: Routes = [
  {path: 'vagas', component: MuralVagasComponent},
  {path: 'home', component: MuralHomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

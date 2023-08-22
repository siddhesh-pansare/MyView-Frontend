import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenPositionsComponent } from './open-positions/open-positions.component';

const routes: Routes = [
  {path:'open-positions', component: OpenPositionsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }

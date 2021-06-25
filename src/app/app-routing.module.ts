import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyRetirementComponent } from './my-retirement/my-retirement.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'my-retirement' },
  { path: 'my-retirement', component: MyRetirementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

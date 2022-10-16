import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { AdministratorComponent } from './Administrator/Administrator.component';

const routes: Routes = [
  { path: '', component: LogInComponent },
  {
    path: 'AdministratorComponent_component',
    component: AdministratorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/shared-modules/shared-components/login/login.component';
import { AwardComponent } from './modules/shared-modules/dialogue/awards-dialogue/award/award.component';
import { InterviewComponent } from './modules/employee/interview/interview.component';
import { InterviewDetailsComponent } from './modules/shared-modules/dialogue/interview-details/interview-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'award', component: AwardComponent },
  { path: 'interview', component: InterviewComponent },
  { path: 'interview_details', component: InterviewDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

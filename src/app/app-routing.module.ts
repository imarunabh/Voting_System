import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AddVoterComponent } from './components/admin/add-voter/add-voter.component';
import { AddPartyComponent } from './components/admin/add-party/add-party.component';
import { VoterDashboardComponent } from './components/voter/voter-dashboard/voter-dashboard.component';
import { CastVoteComponent } from './components/voter/cast-vote/cast-vote.component';
import { adminGuard } from './guards/admin-guard.guard';
import { voterGuard } from './guards/voter-guard.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'admin/dashboard',component:DashboardComponent,canActivate:[adminGuard]},
  {path:'admin/add_voter',component:AddVoterComponent,canActivate:[adminGuard]},
  {path:'admin/add_party',component:AddPartyComponent,canActivate:[adminGuard]},
  {path:'voter/dashboard',component:VoterDashboardComponent,canActivate:[voterGuard]},
  {path:'voter/cast_vote',component:CastVoteComponent,canActivate:[voterGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

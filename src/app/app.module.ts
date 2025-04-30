import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AddVoterComponent } from './components/admin/add-voter/add-voter.component';
import { AddPartyComponent } from './components/admin/add-party/add-party.component';
import { VoterDashboardComponent } from './components/voter/voter-dashboard/voter-dashboard.component';
import { CastVoteComponent } from './components/voter/cast-vote/cast-vote.component';
import { MessageBoxComponent } from './shared/message-box/message-box.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddVoterComponent,
    AddPartyComponent,
    VoterDashboardComponent,
    CastVoteComponent,
    MessageBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

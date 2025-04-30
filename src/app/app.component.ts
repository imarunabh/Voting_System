import { Component } from '@angular/core';
import { StorageService } from './services/storage/storage.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Voting_System';
  constructor(private router:Router){}

  isAdminLoggedIn:boolean;
  isVoterLoggedIn:boolean;

  ngOnInit(){
    this.updateUserLoggedIn();
    this.router.events.subscribe(event =>{
      if(event instanceof NavigationEnd){
        this.updateUserLoggedIn();
      }
    })
    // console.log(this.isAdminLoggedIn)
  }

  logout(){
    StorageService.logout();
    this.router.navigateByUrl("/login");
  }

  updateUserLoggedIn(){
    this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
    this.isVoterLoggedIn = StorageService.isVoterLoggedIn();
  }

  

  

}

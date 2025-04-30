import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { StorageService } from '../services/storage/storage.service';

@Injectable({
  providedIn:"root"
})

export class adminGuard implements CanActivate{
  constructor(
    private router:Router,

  ){}


  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ):boolean{
     if(StorageService.isVoterLoggedIn()){
      this.router.navigateByUrl("/voter/dashboard");
    
      return false;
     }
     
     else if(!StorageService.hasToken()){
      StorageService.logout();
      this.router.navigateByUrl("/login");

      return false;
     }
     return true;
  }

};

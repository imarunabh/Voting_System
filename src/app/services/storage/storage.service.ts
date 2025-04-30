import { Injectable } from '@angular/core';
const USER = 'c_user';
const TOKEN = 'c_token';
let EMAIL = 'c_email';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveUser(user:any){
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER,JSON.stringify(user));
    
  }
  
  static getUserEmail(){
    const user = StorageService.getUser();
    if(user==null) return '';
    return user.email;
  }

  public saveToken(token:string){
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN,token);
  }

  static getToken():string{
    return window.localStorage.getItem(TOKEN);
  }

  static getUser():any{
    return JSON.parse(localStorage.getItem(USER));
  }

  static getUserId(){
    const user = StorageService.getUser(); // ✅ fix here
    if(user==null) return '';
    return user.userId;
  }

  static getUserRole():string{
    const user = StorageService.getUser(); // ✅ fix here
    if(user==null)
      return '';

    return user.role;
  }

  static isAdminLoggedIn():boolean{
    if(this.getToken()==null)
      return false;

    const role:string = this.getUserRole();
    return role=="ADMIN";
  }

  static isVoterLoggedIn():boolean{
    if(this.getToken()==null)
      return false;

    const role:string = this.getUserRole();
    return role=="VOTER";
  }

  

  static logout(){
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }

  static hasToken():boolean{
    if(this.getToken()==null){
      return false;
    }
    return true;
  }
}

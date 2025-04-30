import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage/storage.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:FormGroup;

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private service:AuthService

  ){}

  ngOnInit(){
    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  login(){
    // console.log(this.loginForm.value);
    this.service.login(
      this.loginForm.get(['email'])!.value,
      this.loginForm.get(['password'])!.value,
    ).subscribe((response)=>{
      console.log(response.user_details);
       if(StorageService.isAdminLoggedIn()){
        console.log("Admin Logged");
        this.router.navigateByUrl("admin/dashboard");
       }
       else if(StorageService.isVoterLoggedIn()){
        this.router.navigateByUrl("voter/dashboard")
       }
       
    },
    (error)=>{
      if(error.status===403){
       
        this.loginForm.get(['email']).setValue('');
        this.loginForm.get(['password']).setValue('');
        this.loginForm.get('email').setErrors({ 'incorrect': true });
        this.loginForm.get('password').setErrors({ 'incorrect': true });
        this.router.navigateByUrl('login');
        return;
      }
      else if(error.status==401){
        
        this.loginForm.get(['email']).setValue('');
        this.loginForm.get(['password']).setValue('');
        this.loginForm.get('email').setErrors({ 'incorrect': true });
        this.loginForm.get('password').setErrors({ 'incorrect': true });
        this.router.navigateByUrl('login');
      }
    })
  }

}

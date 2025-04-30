import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminServiceService } from '../../../services/admin/admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-voter',
  templateUrl: './add-voter.component.html',
  styleUrl: './add-voter.component.css'
})
export class AddVoterComponent {
  addVoterForm:FormGroup;

  constructor(private fb:FormBuilder,private service:AdminServiceService,
              private router:Router
  ){}

  ngOnInit(){
    this.addVoterForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
      firstName:['',Validators.required],
      middleName:[''],
      lastName:['',Validators.required],
      dob:[Date,Validators.required],
      aadharCard:['',Validators.required],
      voterCardNumber:['',Validators.required],
      contactNumber:['',Validators.required]

    })

   
  }

  addVoter(){
    console.log(this.addVoterForm);
    this.service.addVoter(this.addVoterForm.value).subscribe(res=>{
      console.log(res)
      if(res.status ==='success'){
        this.router.navigate(["/admin/dashboard"]);
      }
    });
  }

}

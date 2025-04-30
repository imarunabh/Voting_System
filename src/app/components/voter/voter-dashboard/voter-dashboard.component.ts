import { Component } from '@angular/core';
import { VoterService } from '../../../services/voter/voter.service';
import { StorageService } from '../../../services/storage/storage.service';

@Component({
  selector: 'app-voter-dashboard',
  templateUrl: './voter-dashboard.component.html',
  styleUrl: './voter-dashboard.component.css'
})
export class VoterDashboardComponent {

   constructor(private service:VoterService){}

   voter:any;

  ngOnInit(){
    const userEmail = StorageService.getUserEmail();
    console.log('User Email:', userEmail);
    if (!userEmail) {
      console.log('No user email found in storage');
    }
    
    this.service.getVoterDetails(userEmail).subscribe((res)=>{
      console.log(res.email);
    });
  }

}

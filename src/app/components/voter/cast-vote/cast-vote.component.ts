import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { VoterService } from '../../../services/voter/voter.service';
import { Party } from './Party';
import { StorageService } from '../../../services/storage/storage.service';

@Component({
  selector: 'app-cast-vote',
  templateUrl: './cast-vote.component.html',
  styleUrl: './cast-vote.component.css'
})
export class CastVoteComponent {

  constructor(private service:VoterService){}
  party:Party[];
  email:string;
  message:string;
  showMessage:boolean=false;

  ngOnInit(){
     this.service.getAllParties().subscribe((res)=>{
      this.party= res.parties;
      // console.log(this.party)
      for(let i=0;i<this.party.length;i++){
        // console.log(this.party[i].partyName);
        // console.log(this.party[i].candidateName);
        // console.log(this.party[i].id);
      }
     })

     this.email = StorageService.getUserEmail();
     console.log(this.email);

  }

  castVote(id:number){
    for(let i=0;i<this.party.length;i++){
      if(this.party[i].id==id){
        // console.log(this.party[i]);

        this.service.castVote(id,this.email).subscribe((res)=>{
          this.message=res.status;
        if(res.status==="success"){
            console.log("Successfully voted");
          }
        else if(res.status==="Already Voted"){
          console.log("Already voted")
        }
          
        })
        this.showMessage=true
        setTimeout(()=>{
          this.showMessage=false;
        },3000)
      }
    }
  }

}

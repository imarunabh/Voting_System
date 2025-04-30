import { Component } from '@angular/core';
import { AdminServiceService } from '../../../services/admin/admin-service.service';
import { Party } from './Party';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  parties:Party[];
  constructor(private service:AdminServiceService){}

  ngOnInit(){
    this.service.getParties().subscribe((res)=>{
      // console.log(res);
      this.parties = res.parties
      console.log(this.parties)
    
    })
  }

}

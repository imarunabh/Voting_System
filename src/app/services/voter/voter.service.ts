import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { Observable } from 'rxjs';

const BASIC_URL='http://localhost:8080/'

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private http:HttpClient,private storage:StorageService){
   }

   createAuthenticationHeader(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': 'Bearer ' + StorageService.getToken(),
      'Content-Type': 'application/json'
    });
  }

     getVoterDetails(email:string):Observable<any>{
      return this.http.post(BASIC_URL+'api/voter/get_voter',email,{headers:this.createAuthenticationHeader()});
     }


     getAllParties():Observable<any>{
      return this.http.get(BASIC_URL+'api/voter/get_parties',{headers:this.createAuthenticationHeader()});
     }

     castVote(id:number,email:string):Observable<any>{
      const payload = {
        id: id,
        email: email
    };
      return this.http.post(BASIC_URL+'api/voter/cast_vote',payload,{headers:this.createAuthenticationHeader()});
     }

}

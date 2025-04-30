import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { Observable } from 'rxjs';


const BASIC_URL='http://localhost:8080/'

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient,
              private storage:StorageService
  ) { }

  createAuthenticationHeader():HttpHeaders{
    let authHeader :HttpHeaders = new HttpHeaders();
    return authHeader.set(
      'Authorization',"Bearer "+StorageService.getToken()
    );
  }

  addVoter(voterDto:any):Observable<any>{
    return this.http.post<[]>(BASIC_URL+'api/admin/post_voter',voterDto,{headers:this.createAuthenticationHeader()})
  }
  
  postParty(partyDto:any,partySymbol:File,candidateImage:File):Observable<any>{
    const formData:FormData = new FormData();
    formData.append('party',new Blob([JSON.stringify(partyDto)], { type: 'application/json' }));
    formData.append('partySymbol',partySymbol);
    formData.append('candidateImage',candidateImage);
    return this.http.post<[]>(BASIC_URL+'api/admin/post_party',formData,{headers:this.createAuthenticationHeader()});
  }

  getParties():Observable<any>{
    return this.http.get(BASIC_URL+'api/admin/get_parties',{headers:this.createAuthenticationHeader()});
  }

}

import { Injectable } from '@angular/core';
import { HttpHeaders , HttpClient , HttpParams } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})



export class CheckCallService {
  url : string="https://chat.twilio.com/v2/Services";
  

  // channel : string = "";

  constructor(private http: HttpClient ) { }

  getInfo():Observable<any>{
    const body = new HttpParams().set('FriendlyName','Chat');
    return this.http.post(this.url,body.toString(),httpOptions);
  }

  // getChannel():Observable<any>{
  //   const body=new HttpParams().set('UniqueName','check');
  //   return this.http.post(this.channel,httpOptions);
  // }

}
  const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : 'Basic QUNiODU4NTBiZGE4MDAyYzBlNmUxMzc2NGUzZjExMWJlNTpiOWRmODVlMDQ3MjFmMjNkZmU1NjU0NjZmYjI3M2M4Ng=='
    })
  }

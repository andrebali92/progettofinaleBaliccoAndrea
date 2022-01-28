import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  urlAPI = 'http://epicode.online/epicodebeservice_v2/';
  //tenantID = 'fe_0621';
  //bearerToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA0MTEzNiwiZXhwIjoxNjQzOTA1MTM2fQ.bAZlNi0b0rtG5q_JkPxTsu1qstkkB_wKOLZ-YwdoW7vfuDvtEGWTwhZ9OVrnuLqXFfJuJPCGBDM71nBT16CqgA'
  //headers = new HttpHeaders();


  constructor(private http: HttpClient) {
    //this.headers = this.headers
                               // .set("Authorization", this.bearerToken)
                                //.set("X-TENANT-ID", this.tenantID)
   }

  getAllClienti() {
    //return this.http.get(this.urlAPI+'api/clienti?page=0&size=20&sort=id,ASC', {headers: this.headers})
    return this.http.get(this.urlAPI+'api/clienti?page=0&size=20&sort=id,ASC');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiConnectService {
  private urlElement: string;
  private urlSequence: string;
  constructor(protected http: HttpClient) {
    this.urlElement = '/api/element/'; 
    this.urlSequence = '/api/sequence/'; 
   }

  requestElement(element: any){
    return this.http.get(this.urlElement+element,{responseType: 'text'}); // The api response is text
  }
  requestSequence(element: any){
    return this.http.get(this.urlSequence+element,{responseType: 'json'}); // The api response is a json
  }
}

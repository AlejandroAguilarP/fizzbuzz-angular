import { Component } from '@angular/core';
import { ApiConnectService } from '../app/services/api-connect.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fizzbuzz';
  constructor(private serviceApi: ApiConnectService) { }
  ngOnInit(){
    this.sendElement();
    this.sendNumber();
  }




  sendElement(){ // this function will send a number to the API
    let element = 1;
    this.serviceApi.requestElement(element).subscribe((data: any) => {
      console.log(data);
    });
  }
  sendNumber(){ // this function will send a number to the API
    let element = 2;
    this.serviceApi.requestSequence(element).subscribe((data: any) => {
      console.log(JSON.parse(data));
    });
  }
}

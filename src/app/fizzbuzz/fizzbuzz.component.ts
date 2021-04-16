import { Component, OnInit } from '@angular/core';
import { ApiConnectService } from '../../app/services/api-connect.service';
@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.css']
})
export class FizzbuzzComponent implements OnInit {
  element : any;
  sequence : any;
  constructor(private serviceApi: ApiConnectService) { }

  ngOnInit(): void {
    this.sendElement();
    this.sendNumber();
  }




  sendElement(){ // this function will send a number to the API
    let element = 1;
    this.serviceApi.requestElement(element).subscribe((data: any) => {
      this.element = data;
    });
  }
  sendNumber(){ // this function will send a number (amount) to the API, spect receive a sequence
    let element = 15;
    this.serviceApi.requestSequence(element).subscribe((data: any) => {
      this.sequence = JSON.parse(data);
    });
  }
}

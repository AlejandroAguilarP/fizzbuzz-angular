import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiConnectService } from '../../app/services/api-connect.service';
@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.css']
})
export class FizzbuzzComponent implements OnInit {
  element : any;
  sequence : any;
  number!: Number;
  number_sequence!: Number;
  is_number!: boolean;
  submitted_number!: boolean;
  submitted_sequence!: boolean;
  constructor(private serviceApi: ApiConnectService) { }

  ngOnInit(): void {
  }
  sendElement(f: NgForm){ // this function will send a number to the API
    if(f.valid && f.value.number > 0){
      this.submitted_number = true;
        this.serviceApi.requestElement(f.value.number).subscribe((data: any) => {
        this.element = data; // assign the value of data
        this.is_number = isNaN(parseInt(data)); // validate if It is a number or a string
      });
    }else{
      f.controls['number'].setErrors({'incorrect': true})
    }
  }
  sendNumber(g: NgForm){ // this function will send a number (amount) to the API, spect receive a sequence
    if(g.valid && g.value.number_sequence > 0){
      this.submitted_sequence = true;
      this.serviceApi.requestSequence(g.value.number_sequence).subscribe((data: any) => {
        this.sequence = data; // assign the value of data
      });
    }
    else{
      g.controls['number_sequence'].setErrors({'incorrect': true})
    }
  }

}

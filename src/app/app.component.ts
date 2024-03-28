import {Component, inject, OnInit,} from '@angular/core';
import { CurencyapidataService } from './curencyapidata.service'
import axios from "axios";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent implements OnInit{
  curencyapidataService: CurencyapidataService  = inject(CurencyapidataService,);

 // queryParams:{}={
 //   from:'',
 //   to:'',
 //   amount: '',
 //
 // };



  converted:any= [];

  selectedCan1: any = "";
  selectedCan2: any = "";



  from: string = "";
  to: string = "";
  amount: string = "";

  queryParams= new HttpParams()
    .set('from',this.from)
    .set('to',this.to)
    .set('amount',this.amount)

  currjson : any = [];
  constructor( ) {this.getAllCurency() }


  getAllCurency(){
  this.curencyapidataService.getcurrencydata().subscribe((res:any)=>{
    this.currjson = res;


  })
}


  async convert() {

    const options = {
      method: 'GET',
      url: 'https://currency-converter18.p.rapidapi.com/api/v1/convert',
      params: {
        from: this.from,
        to: this.to,
        amount: this.amount
      },
      headers: {
        'X-RapidAPI-Key': 'd6b6b14e45msh48b19a9660e4784p1f5269jsn01e0ce23694d',
        'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      this.converted=response.data;

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

  }




// getConvert(){
//     this.curencyapidataService.convert(this.from, this.to, this.amount).subscribe((res:any)=>{
//       this.converted = res;
//       console.log(this.converted)
//
//     })
// }


 // base = 'USD';
 //
 // cont2= "USD";
 // result : string = `1`;



  // changebase(a: string) {
  //   this.base = a;
  //   console.log(this.base)
  // }

  //
  // onChange1(changedDropdown: string) {
  //   this.selectedCan1=changedDropdown
  //   console.log(this.selectedCan1)
  // }
  //
  // onChange2(changedDropdown: string) {
  //   this.selectedCan2=changedDropdown
  //   console.log(this.selectedCan2)
  // }



  ngOnInit() {


  }



}



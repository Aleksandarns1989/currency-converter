import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class CurencyapidataService {



  constructor(private http: HttpClient) {
  }


  getcurrencydata() {
    return this.http.get(
      'https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies',
    {
      headers: {
        'X-RapidAPI-Key':
        'd6b6b14e45msh48b19a9660e4784p1f5269jsn01e0ce23694d',
          'X-RapidAPI-Host':
        'currency-converter18.p.rapidapi.com',
      }

    })
  }

  // convert(from:string, to:string, amount:string){
  //   return this.http.get(
  //     `https://currency-converter18.p.rapidapi.com/api/v1/convert`,
  //     {
  //       params: {
  //         from: from,
  //         to: to,
  //         amount: amount,
  //       },
  //       headers: {
  //         'X-RapidAPI-Key': 'd6b6b14e45msh48b19a9660e4784p1f5269jsn01e0ce23694d',
  //         'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
  //       }
  //     })
  // }





}



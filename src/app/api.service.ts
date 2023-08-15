import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  sharedData: string[] = [];
  
  constructor(private http: HttpClient) { }
 a=[];
 getId(a:any){
  return this.a;
 }
  getA(pin:any){
   return this.http.get(`https://api.postalpincode.in/pincode/${pin}`);
  }
  getShopping(){
    return this.http.get('https://fakestoreapi.com/products');
  }
  getPlace(place:any){
    return this.http.get(`https://fakestoreapi.com/products/${place}`);
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
data:FormGroup;
pin:any;
constructor(private ff:ApiService){}
ngOnInit(){
  this.getIdFromService;
  this.data=new FormGroup({
    name: new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    age:new FormControl('',Validators.required),
    number: new FormControl('',Validators.required),
    pin2:new FormControl('',Validators.required)
})
}
out:any;

booknow(){
this.ff.getA(this.pin).subscribe({
  next:(result:any)=>{
    console.log("===result====",result[0])
        this.out=[result];
  },error:(err:any)=>{
    console.log("---errir----",err)
  }});

}
data3(){
 console.log(this.data);
}

hhh:any[];
id2:any;

getIdFromService(){
  console.log("-----calling getIdFromServiuce");
this.id2=this.ff.sharedData;
console.log("id"+this.id2);
this.ff.getPlace(this.id2).subscribe({
  next:(res:any)=>{
    console.log(res);
this.hhh=[res];
  }


})
}

}


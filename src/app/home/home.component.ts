import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tpin:string;
  data:any;
constructor(private gg:ApiService,private router:Router){}
  title = 'ff';
  abc:any;
  pin:any;
  shop:any;
  place:any;
  ngOnInit(){
//this.getD(); 
this.getData(); 
  }
  getD(){
    console.log("=====get d calling=====",this.pin)
    this.gg.getA(this.pin).subscribe({
      next:(result:any)=>{
        console.log("===result====",result[0])
        this.abc=result;
      },error:(err:any)=>{
        console.log("---errir----",err)
      }});
  
  }
  getId(){

  }
  data2:any;
  data3:any;
getData(){
let ffff=this.gg.getShopping();
ffff.subscribe(x=>{this.data2=x;})


    }

    getProduct(){

    }

    saveId(ss:any){      {

    let ff=this.gg.sharedData;
     
   ff.push(ss.id);

   console.log("ff"+ff);
      this.router.navigate(['checkout']);
    }
   
  }
}

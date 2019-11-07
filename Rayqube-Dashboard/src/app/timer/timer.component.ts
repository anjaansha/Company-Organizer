import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
import { SharedService } from '../shared.service';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  one_day=1000*60*60*24;
  days:any;
  hours:any=0;
  minutes:any=0;
  seconds = 0;
  constructor(private router: Router, private shared : SharedService) {
    // var today  = new Date();
    // var endDate = new Date(2019, 8, 25);
    // var difference = endDate.getTime() - today.getTime();
    // console.log(endDate);
    // difference = difference/1000;
    // this.seconds = Math.floor(difference % 60);
    // console.log(this.seconds);
    // difference = difference/60; 
    // this.minutes = Math.floor(difference % 60);
    // console.log(this.minutes);
    // difference = difference/60; 
    // this.hours = Math.floor(difference % 24);
    // this.days = Math.floor(difference/24);
   }

  ngOnInit() {
    setInterval(this.timer, 1000);
    // setInterval(function(){location.reload()}, 10000);
  }
  ngDoCheck(){
    // var today  = new Date();
    // var endDate = new Date(2019, 8, 25);
    // var difference = endDate.getTime() - today.getTime();
    
    // difference = difference/1000;
    // this.seconds = Math.floor(difference % 60);
    
    // difference = difference/60; 
    // this.minutes = Math.floor(difference % 60);
  
    // difference = difference/60; 
    // this.hours = Math.floor(difference % 24);
    // this.days = Math.floor(difference/24);

    if(this.seconds == 60){
      this.seconds = 0;
      
      if(this.minutes == 60){
        this.minutes = 0;
        if(this.hours == 9 || this.hours > 9){
          this.hours = 0;
          this.shared.timerStatus = true;
          console.log("daily shift time is finished");
        }else{
          this.hours++;
        }
      }else{
        this.minutes++;
      }
    }else{
      this.seconds++;
    }
  }
  timer(){
    // var today  = new Date();
    // var endDate = new Date(2019, 8, 25);
    // var difference = endDate.getTime() - today.getTime();
    
    // difference = difference/1000;
    // this.seconds = Math.floor(difference % 60);
    
    // difference = difference/60; 
    // this.minutes = Math.floor(difference % 60);
  
    // difference = difference/60; 
    // this.hours = Math.floor(difference % 24);
    // this.days = Math.floor(difference/24);
    if(this.seconds == 60){
      this.seconds = 0;
      if(this.minutes == 60){
        this.minutes = 0;
        if(this.hours == 9){
          console.log("daily shift time is finished");
        }else{
          this.hours++;
        }
      }
    }else{
      this.seconds++;
    }
  }
}

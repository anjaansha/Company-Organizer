import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-daily-task',
  templateUrl: './daily-task.component.html',
  styleUrls: ['./daily-task.component.scss']
})
export class DailyTaskComponent implements OnInit {
  task = "";
  taskArray = [];
  doneArray = [];
  completedTask = 0;
  constructor(private shared : SharedService) {
    this.shared.getApi(this.shared.baseUrl + "/remainingtasks").subscribe(data =>{
      console.log(JSON.stringify(data));
      const jsonData = JSON.parse(JSON.stringify(data));
      var taskData = jsonData[jsonData.length - 1].remaining;
      if(taskData == undefined){
        console.log("no existing task");
      }else{
        for(var i = 0; i < taskData.length; i++){
          this.taskArray.push(taskData[i]);
          console.log(this.taskArray);
        }
      }
      
    })
   }

  ngOnInit() {
  }
  add(){
    if(this.task == ""){
      alert("Please enter the task");
    }else{
      this.taskArray.push(this.task);
      console.log(this.taskArray);
      this.task = "";
    }
  }
  remove(i){
    console.log(i);
    this.taskArray.splice(i, 1);
  }
  done(i){
    var doneTask = this.taskArray.splice(i, 1).toString();
    console.log(doneTask);
    this.doneArray.push(doneTask);
    this.completedTask = this.doneArray.length;
    console.log(this.doneArray);
  }
  sendData(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let daymonyear = day + "/" + month + "/" + year;
    console.log(day);
    let email = localStorage.getItem('email');
    
    var data = {
      "workdetails": this.doneArray,
      "date": daymonyear,
      "email": email
    }
    var remainingData = {
      "remaining": this.taskArray
    }
    this.shared.postApi(this.shared.baseUrl + 'dailyworkdetails', data).subscribe(data =>{
      console.log(JSON.stringify(data));
      const jsonData = JSON.parse(JSON.stringify(data));
    });
    this.shared.postApi(this.shared.baseUrl + 'remainingtasks', remainingData).subscribe(data =>{
      console.log(JSON.stringify(data));
      const jsonData = JSON.parse(JSON.stringify(data));
    })
  }
}

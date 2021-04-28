import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-progress',
  templateUrl: './custom-progress.component.html',
  styleUrls: ['./custom-progress.component.scss']
})
export class CustomProgressComponent implements OnInit {

  constructor() { }

  progLevel: number = 0;
  progLevel1: number = 0;
  progLevel2: number = 0;
  progLevel3: number = 0;
  startTime: any;
  endTime: any;

  Orange: boolean = true;
  Green: boolean = false;
  barNo: number = 1;

  StepNO: number = 2;

  stepInterval: any;
  endBar: boolean = false;

  Date: any[] = [];
  newb: boolean = false;
  ovrlStaus: string = "Working on granting you access to group"

  ngOnInit(): void {
    this.steps();
    this.Date[0] = new Date();
  }

  steps() {
    if (this.StepNO === 2) {
      this.RunTheBar(8);
      this.Orange = true;
      this.barNo = 2;
    }
    if (this.StepNO === 3) {
      this.RunTheBar(5);
      this.Orange = true;
      this.barNo = 3;
    }
    if (this.StepNO === 4) {
      this.RunTheBar(10);
      this.Orange = true;
      this.barNo = 4;
    }
  }
  RunTheBar(time: any) {
    this.startTime = new Date()
    this.endTime = new Date()
    this.endTime.setSeconds(this.endTime.getSeconds() + time);
    this.setUpProgressBar(this.startTime.getTime(), this.endTime.getTime(), 50)
  }
  setUpProgressBar(startTime: any, endTime: any, update: any) {
    var timer;
    var max = endTime - startTime;
    this.setValue(startTime, max, timer)
    timer = window.setInterval(() => {
      this.setValue(startTime, max, timer);
    }, update)
    return
  }
  setValue(startTime: any, max: any, timer: any) {
    var currentTime = new Date().getTime()
    var ellasped = currentTime - startTime
    if (ellasped >= max) {
      ellasped = max
      window.clearTimeout(timer);
      this.Date[this.StepNO - 1] = new Date();
      this.StepNO = this.StepNO + 1;
      this.Orange = false;
      this.Green = true;
      if (this.StepNO < 5) {
        this.steps();
        this.newb = true;
      }
      else {
        this.endBar = true;
        this.progLevel3 = 100;
        this.ovrlStaus = "Access granted";
      }
    }
    var prec = ellasped / max * 100;
    if (this.StepNO === 2) {
      this.progLevel1 = +prec.toFixed(2);
    }
    if (this.StepNO === 3) {
      this.progLevel1 = 100;
      if (!this.newb) {
        this.progLevel2 = +prec.toFixed(2);
      }
      this.newb = false;
    }
    if (this.StepNO === 4) {
      this.progLevel2 = 100;
      if (!this.newb) {
        this.progLevel3 = +prec.toFixed(2);
      }
      this.newb = false;
    }
  }

}

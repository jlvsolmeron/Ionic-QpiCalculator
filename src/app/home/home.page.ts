import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  array = []; grade_in = null; grade_ans = "0.00"; count = 0; 
  totalUnits = 0; sum = 0; num = 0;

  store(value){
    if(this.count > 0){
      this.clear();
    }
    this.array.push(value);
  }
  clear(){
    this.array = []; this.count = 0;
    this.sum = 0; this.grade_in = null;
    this.grade_ans = "0.00"; this.totalUnits = 0;
  }
  display(value){
    if(this.array.length == 1){
      this.grade_in = value;
    }
    else{
      this.grade_in = this.grade_in + " + " + value;
    }
  }
  compute(){
    if(this.count == 0){
      this.count++;
    }
    this.totalUnits = this.array.length * 3;

    for(this.num = 0; this.num < this.array.length; this.num++){
      this.sum = this.sum + this.array[this.num];
    }

    this.grade_ans = (this.sum / this.totalUnits).toFixed(2);
  }
}

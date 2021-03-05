import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor() { }
  public isClick = false
  public text = ""
  public maskedValue = '';
  public sliderValue = 5;
  public numericValue = 5;
  public switchValue = false;
  public textboxValue = '';
  public textareaValue = '';
  public min = 0;
  public max = 10;
  public smallStep = 1;
  public checked = true;
  public radioValue = 'foo';
  public rangeSliderValue = [3, 6];
  ngOnInit(): void {
  }

  onclick(){
    this.isClick = !this.isClick  
    if(this.isClick){
      this.text = "concac"
      console.log(this.isClick);
      this.text = "123"
    }
    else{
      console.log(this.isClick);
      this.text = "concac"
    }
  }

}

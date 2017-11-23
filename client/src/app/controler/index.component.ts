import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
//templateUrl: '../views/index.component.html',

@Component({
  selector: 'index',
  templateUrl:'../views/index.component.html',

  styleUrls: ['../assets/index.component.css', '../assets/font-awesome/css/font-awesome.min.css']
})



export class Indexx {
	@ViewChild("myButton") myButton: ElementRef;
	public k = 0;
  public oneAtATime: boolean = true;
  constructor(private renderer: Renderer2) { }

  addMyClass(){
    //this.myButton.nativeElement.classList.add("my-class"); //BAD PRACTICE
    if(this.k == 0)
    {
    	this.renderer.addClass(this.myButton.nativeElement, "fondorojo");
      this.renderer.addClass(this.myButton.nativeElement, "col-12");
    	this.renderer.removeClass(this.myButton.nativeElement, "fondoazul");
    	this.k = 1;	
    }
    else
    {
      this.renderer.removeClass(this.myButton.nativeElement, "col-12");
    	this.renderer.addClass(this.myButton.nativeElement, "fondoazul");
    	this.renderer.removeClass(this.myButton.nativeElement, "fondorojo");
    	this.k = 0;	
    }
    
  }

  removeMyClass(){
    //this.myButton.nativeElement.classList.remove("my-class"); //BAD PRACTICE
    this.renderer.removeClass(this.myButton.nativeElement, "fondorojo");
  }

  clickButton(){
    //this.myButton.nativeElement.click(); //BAD PRACTICE
    this.renderer.selectRootElement(this.myButton.nativeElement).click();
  }


}
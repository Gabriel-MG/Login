import { Component, OnInit } from '@angular/core';
import {UserService } from '../_services/index';


declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

	front: boolean;
	middle: boolean;
	back: boolean;

  tr ;

  constructor(private controlService: UserService) 
  {

  }

  ngOnInit() {
    this.loadLeds();

  }


  private loadLeds()
  {
     this.controlService.getLed('1').subscribe(function(led){
         if(led == 0)
         {
           this.front = false;
           $("#front").attr("src","assets/img/focooff.png");
         }
         else
         {
           $("#front").attr("src","assets/img/focoon.png");
           this.front = true;
         }
         console.log(this.front);
       
     });


     this.controlService.getLed('2').subscribe(function(led){
         if(led == 0)
         {
           this.middle = false;
           $("#middle").attr("src","assets/img/focooff.png");
         }
         else
         {
           $("#middle").attr("src","assets/img/focoon.png");
           this.middle = true;
         }
       
     });


     this.controlService.getLed('3').subscribe(function(led){
         if(led == 0)
         {
           this.back = false;
           $("#back").attr("src","assets/img/focooff.png");
         }
         else
         {
           $("#back").attr("src","assets/img/focoon.png");
           this.back = true;
         }
       
     });












  }


  control(id)
  {
  	switch (id) {
  		case 1:

        console.log(this.front);

        this.controlService.setLed('1',this.front).subscribe(() => { });;
  			this.front ? $("#front").attr("src","assets/img/focooff.png") : $("#front").attr("src","assets/img/focoon.png");
  			this.front = !this.front;
  			break;

  		case 2:

        console.log(this.middle);

        this.controlService.setLed('2',this.middle).subscribe(() => { });;
  			this.middle ? $("#middle").attr("src","assets/img/focooff.png") : $("#middle").attr("src","assets/img/focoon.png");
  			this.middle = !this.middle;
  			break;

  		case 3:

        console.log(this.back);

        this.controlService.setLed('3',this.back).subscribe(() => { });
  			this.back ? $("#back").attr("src","assets/img/focooff.png") : $("#back").attr("src","assets/img/focoon.png");
  			this.back = !this.back;
  			break;
  		
  		default:
  			// code...
  			break;
  	}

  }

}


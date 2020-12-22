import { Component, OnInit } from '@angular/core';
import { TimelineLite, Back, Power4, TweenMax } from 'gsap';
import { TimelineMax } from 'gsap';
import * as $ from "jquery";

// or


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.main();
  }

  main() {
    document.addEventListener("DOMContentLoaded", function(event) {
  
      window.onload = function(){
    
    var tl = new TimelineMax({paused:true});//,
        //$circle = document.getElementById("circle"),
        //$whiteBox = document.getElementById("whiteBox");
    
    TweenMax.set("#whiteBox",{y:190,force3D:true});
    
    tl.to("#circle",0.8,{x:90,y:-210,rotation:0.01,force3D:true}, 0);
    tl.to("#circle",0.8,{scale:15,rotation:0.01,force3D:true}, 0.13);
    tl.to("#whiteBox",0.6,{y:0,rotation:0.01,force3D:true}, 0);
    tl.progress(1).progress(0);
    
    
    // click event
    var cl = false;
    $(document).on("click", "#wrapper", function(){
      if(cl == false){
        tl.play();
        cl = true;
      } else if(cl == true){
        tl.reverse();
        cl = false;
      } 
      return false;
    });
        
      };
      
    });

  }

}

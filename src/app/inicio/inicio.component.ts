import { Component, OnInit } from '@angular/core';
import { TimelineLite, Back, Power4, TweenMax } from 'gsap';
import { TimelineMax } from 'gsap';
import * as $ from "jquery";
import anime from 'animejs/lib/anime.es.js';
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
    this.main2();
  }

  main() {
    var pathEls = document.querySelectorAll('path');
    for (var i = 0; i < pathEls.length; i++) {
      var pathEl = pathEls[i];
      var offset = anime.setDashoffset(pathEl);
      pathEl.setAttribute('stroke-dashoffset', offset);
      anime({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: anime.random(1000, 3000),
        delay: anime.random(0, 2000),
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine',
        autoplay: true
      });
    }

  }
  main2(){
    var bounceIn = anime({
      targets: '.letter__part',
      translateY: {
            value: [-30, 0],
            duration: 900,
            delay: 1000,
            elasticity: 600,
            easing: 'easeOutElastic'
          },
          opacity: {
            value: [0, 1],
            duration: 300,
            easing: 'linear',
            delay: 1000
          }
      });
    
    var lineDrawing = anime({
      targets: '.color-1',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeOutElastic',
      duration: 4000,
      delay: 1000,
      loop: false,
      direction: 'alternate',
    });
    
    var lineDrawing = anime({
      targets: '.color-3',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeOutElastic',
      duration: 4000,
      delay: 1200,
      loop: false,
      direction: 'alternate',
    });
    
    var lineDrawing = anime({
      targets: '.color-2',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeOutElastic',
      duration: 4000,
      delay: 1400,
      loop: false,
      direction: 'alternate',
    });
    
    
  }
}

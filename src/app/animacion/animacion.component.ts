import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-animacion',
  templateUrl: './animacion.component.html',
  styleUrls: ['./animacion.component.scss']
})
export class AnimacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.movimiento();
  }

  movimiento() {
    // Amimacion 1
    // anime({
    //   targets: '#caja',
    //   translateX: 250,
    //   rotateZ: 360,
    //   scale: 3,
    //   duration: 3000,
    //   loop:true,
    // })
    // Animacion 2
    // anime({
    //   targets: '#caja',
    //   keyframes: [
    //     {translateX: 250, scale: 2},
    //     {translateY: 50, scale: 4},
    //     {translateX: 550, scale: 1},
    //     {translateX: 450, scale: 3},
    //   ],
    //   rotateZ: 360,
    //   // scale: 3,
    //   duration: 3000,
    //   loop:true,
    // })
    // Animacion 3
    // anime({
    //   targets: '.epa',
    //   translateX: anime.stagger(150),
    //   delay: anime.stagger(500,{from: 'last'}),
    //   duration:3000,
    //   loop: true
    // })
    //Animacion 4
    anime({
      targets: '.epa',
      translateX: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'x'}),
      translateY: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'y'}),
      rotateZ: anime.stagger([0, 90], {grid: [14, 5], from: 'center', axis: 'x'}),
      delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
      easing: 'easeInOutQuad'
    });
  }
}

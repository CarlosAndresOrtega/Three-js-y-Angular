import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import * as Matter from 'matter-js'

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
    let engine = Matter.Engine.create();
    let render = Matter.Render.create({
      element: document.querySelector("#matter"),
      engine: engine,
      
    });
    let ground = Matter.Bodies.rectangle(400, 600, 810, 60, { isStatic: true });
    let boxA = Matter.Bodies.rectangle(400, 200, 80, 80);
    let boxB = Matter.Bodies.rectangle(450, 50, 80, 80);

    // let mouse = Matter.Mouse.create(render.canvas);
    // let mouseConstraint = Matter.MouseConstraint.create(engine, {
    //   mouse: mouse,
    //   constraint: {
    //     render: { visible: true }
    //   }
    // });
    // render.mouse = mouse;

    // Matter.World.add(engine.world, [boxA, boxB, ground, mouseConstraint]);
    Matter.World.add(engine.world, [boxA, boxB, ground, ]);

    Matter.Engine.run(engine);
    Matter.Render.run(render)
  }
}

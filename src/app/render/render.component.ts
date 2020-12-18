import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import GLTFLoader from 'three-gltf-loader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';


var three = require("../../assets/libs/three.js");
var three2 = require("../../assets/libs/jquery-3.4.1.js");
// var three3 = require("../../assets/libs/OrbitControls.js");
var three4 = require("../../assets/libs/three.min.js");
// var three5 = require("../../assets/libs/");

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.scss']
})
export class RenderComponent implements OnInit {

  constructor() {

  }
  // scene: any;
  // camera: any;
  // render: any;
  // controls: any;

  ngOnInit(): void {
    this.main();
    // this.animate();
  }

  main() {

    const canvas: any = document.querySelector("#canvas");
    const renderer = new THREE.WebGL1Renderer({ canvas });

    renderer.setSize(window.innerWidth, window.innerHeight);
    //   document.body.appendChild( this.render.domElement );

    const fov = 75;
    const aspect = 2;
    const near = 0.1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;



    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();


    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x5DADE2);
    var size = 30;
    var divisions = 30;

    const gridHelper = new THREE.GridHelper(size, divisions, 0xff0000, 0xffffff);
    scene.add(gridHelper);

    const light1 = new THREE.DirectionalLight(0xffffff, 1);
    light1.position.set(0, 10, 0);
    const light2 = new THREE.DirectionalLight(0xffffff, 0.8);
    light2.position.set(-10, 4, -10);
    const light3 = new THREE.DirectionalLight(0xffffff, 0.8);
    light3.position.set(10, 4, 10);


    scene.add(light1);
    scene.add(light2);
    scene.add(light3);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true;
    cube.receiveShadow = true;
    scene.add(cube);

    // const material = new THREE.MeshPhongMaterial({ color });

    // const cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true;
    cube.receiveShadow = true;
    scene.add(cube);

    cube.position.x = 2;

    function resizeRenderer(renderer) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }

    let renderRequested = false;

    function render() {
      renderRequested = null;

      if (resizeRenderer(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }

      controls.update();
      renderer.render(scene, camera);
    }
    render();

    function requestRenderIfNotRequested() {
      if (!renderRequested) {
        renderRequested = true;
        requestAnimationFrame(render);
      }
    }

    controls.addEventListener('change', requestRenderIfNotRequested);
    window.addEventListener('resize', requestRenderIfNotRequested);

    loadGITF();
    loadFBX();

    function loadGITF() {
      // Instantiate a loader
      const loader = new GLTFLoader();

      // Optional: Provide a DRACOLoader instance to decode compressed mesh data
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath('../../assets/mario/scene.gltf');
      loader.setDRACOLoader(dracoLoader);

      // Load a glTF resource
      console.log("antes de la carga del modelo");
      loader.load(
        // resource URL
        '../../assets/mario/scene.gltf',
        // called when the resource is loaded

        function (gltf) {

          console.log("estamos agregando en modelo");

          scene.add(gltf.scene);
          gltf.animations; // Array<THREE.AnimationClip>
          gltf.scene;   // THREE.Scene
          gltf.scenes;  // Array<THREE.Scene>
          gltf.cameras; // Array<THREE.Camera>
          gltf.asset;   // Object
          gltf.scene.scale.set(1, 1, 1) // scale here
          gltf.scene.rotation.y = -(Math.PI / 2);
          gltf.scene.position.y = 0;
        },

        // called while loading is progressing
        function (xhr) {
          console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        // called when loading has errors
        function (error) {
          console.log('An error happened');
        }
      );
    }
    function loadFBX() {
      const loader = new FBXLoader();
      loader.load('../../assets/husky/Husky.FBX', function (object3d) {
        scene.add(object3d);
      });
    }

    // }
    // onWindowResize() {
    //   this.camera.aspect = window.innerWidth / window.innerHeight;
    //   this.camera.updateProjectionMatrix();

    // }
    // animate() {
    //   // requestAnimationFrame(this.animate);
    //   // required if controls.enableDamping or controls.autoRotate are set to true
    //   // requestAnimationFrame(this.animate);
    //   this.render.render( this.scene, this.camera );
    //   this.controls.update();
  }
  main2() {
    const canvas: any = document.querySelector('#canvas');
    const renderer = new THREE.WebGLRenderer({ canvas });

    const fov = 75;
    const aspect = 2; // the canvas default
    const near = 0.1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = true;
    controls.update();

    const scene = new THREE.Scene();

    const light1 = new THREE.DirectionalLight(0xffffff, 1);
    light1.position.set(0, 10, 0);
    const light2 = new THREE.DirectionalLight(0xffffff, 0.8);
    light2.position.set(-10, 4, -10);
    const light3 = new THREE.DirectionalLight(0xffffff, 0.8);
    light3.position.set(10, 4, 10);
    scene.add(light1);
    scene.add(light2);
    scene.add(light3);

    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    function makeCube(geometry, color, x) {
      const material = new THREE.MeshPhongMaterial({ color });

      const cube = new THREE.Mesh(geometry, material);
      cube.castShadow = true;
      cube.receiveShadow = true;
      scene.add(cube);

      cube.position.x = x;

      return cube;
    }

    const cubes = [
      makeCube(geometry, 0x44aa88, 0),
      makeCube(geometry, 'red', 2),
    ];

    function resizeRenderer(renderer) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }

    let renderRequested = false;

    function render() {
      renderRequested = null;

      if (resizeRenderer(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }

      controls.update();
      renderer.render(scene, camera);
    }
    render();

    function requestRenderIfNotRequested() {
      if (!renderRequested) {
        renderRequested = true;
        requestAnimationFrame(render);
      }
    }

    controls.addEventListener('change', requestRenderIfNotRequested);
    window.addEventListener('resize', requestRenderIfNotRequested);
  }



}

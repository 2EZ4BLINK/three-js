import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Pane } from "tweakpane";

// PANE
const pane = new Pane();

// Create a scene
const scene = new THREE.Scene();

// GEOMETRY
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const torusKnot = new THREE.TorusKnotGeometry(0.5, 0.15, 100, 16);

// MATERIAL
const material = new THREE.MeshPhongMaterial();
material.shininess = 9999;
material.color = new THREE.Color("red");
const standardMaterial = new THREE.MeshStandardMaterial();
standardMaterial.color = new THREE.Color("blue");

// MESH
const cubeMesh = new THREE.Mesh(torusKnot, standardMaterial);
cubeMesh.position.x = 1;
const mesh2 = new THREE.Mesh(cubeGeometry, material);
mesh2.position.x = -1;
const mesh3 = new THREE.Mesh(cubeGeometry, standardMaterial);
mesh3.position.y = -1.5;

scene.add(cubeMesh);
scene.add(mesh2);
scene.add(mesh3);

// Add Pane
const PARAMS = {
  min: 0,
  max: 1,
  step: 0.01,
};

pane.addBinding(standardMaterial, "metalness", PARAMS);
pane.addBinding(standardMaterial, "roughness", PARAMS);

// LIGHT;
const light = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(light);
const pointLight = new THREE.PointLight(0xffffff, 0.9);
pointLight.position.set(1, 1, 1);
scene.add(pointLight);

// add objects to the scene

// initialize camera
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  200,
);
camera.position.z = 5;

// initialize renderer
const canvas = document.querySelector(".threejs");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// initialize controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
// controls.autoRotate = true;

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// render the scene
const renderLoop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderLoop);
};

renderLoop();

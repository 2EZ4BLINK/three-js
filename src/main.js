import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Create a scene
const scene = new THREE.Scene();

//add objects to he scene
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: "red",
  wireframe: true,
});
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cubeMesh);
cubeMesh.position.set(0, 1, 0);
const axesHelper = new THREE.AxesHelper(3);
cubeMesh.add(axesHelper);
cubeMesh.rotation.reorder("YXZ");
cubeMesh.rotation.y = THREE.MathUtils.degToRad(90);
cubeMesh.rotation.x = THREE.MathUtils.degToRad(45);
// initialize camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  30,
);
camera.position.z = 5;

// const camera = new THREE.OrthographicCamera(
//   (-1 * window.innerWidth) / window.innerHeight,
//   (1 * window.innerWidth) / window.innerHeight,
//   1,
//   -1,
//   0.1,
//   1000,
// );

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

const renderLoop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderLoop);
};

renderLoop();

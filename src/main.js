import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Pane } from "tweakpane";
import {
  badlandsAlbedoTexture,
  badlandsAoTexture,
  badlandsHeightTexture,
  badlandsMetallicTexture,
  badlandsNormalTexture,
  badlandsRoughnessTexture,
  grassAlbedoTexture,
  grassAoTexture,
  grassHeightTexture,
  grassMetallicTexture,
  grassNormalTexture,
  grassRoughnessTexture,
  spaceAlbedoTexture,
  spaceAoTexture,
  spaceHeightTexture,
  spaceMetallicTexture,
  spaceNormalTexture,
  spaceRoughnessTexture,
} from "./components/texture";

// PANE
const pane = new Pane();

// CREATE A CANVAS
const canvas = document.querySelector(".threejs");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// GROUPS
const group = new THREE.Group();

// CTREATE A SCENE
const scene = new THREE.Scene();

// GEOMETRY
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const torusKnotGeometry = new THREE.TorusKnotGeometry(0.5, 0.15, 100, 16);
const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const planeGeometry = new THREE.PlaneGeometry(1, 1);

// MATERIAL
const grassMaterial = new THREE.MeshStandardMaterial({
  aoMap: grassAoTexture,
  displacementScale: 0.1,
  map: grassAlbedoTexture,
  normalMap: grassNormalTexture,
  metalnessMap: grassMetallicTexture,
  roughnessMap: grassRoughnessTexture,
  displacementMap: grassHeightTexture,
});
const spaceMaterial = new THREE.MeshStandardMaterial({
  aoMap: spaceAoTexture,
  displacementScale: 0.1,
  map: spaceAlbedoTexture,
  normalMap: spaceNormalTexture,
  metalnessMap: spaceMetallicTexture,
  roughnessMap: spaceRoughnessTexture,
  displacementMap: spaceHeightTexture,
});
const badlandMaterial = new THREE.MeshStandardMaterial({
  displacementScale: 0.1,
  aoMap: badlandsAoTexture,
  map: badlandsAlbedoTexture,
  normalMap: badlandsNormalTexture,
  metalnessMap: badlandsMetallicTexture,
  roughnessMap: badlandsRoughnessTexture,
  displacementMap: badlandsHeightTexture,
});
spaceMaterial.displacementScale = 0.01;

// MESH
const torusMesh = new THREE.Mesh(torusKnotGeometry, spaceMaterial);
const cubeMesh = new THREE.Mesh(cubeGeometry, spaceMaterial);
const sphereMeshSpace = new THREE.Mesh(sphereGeometry, spaceMaterial);
const sphereMeshGrass = new THREE.Mesh(sphereGeometry, grassMaterial);
const sphereMeshBadlands = new THREE.Mesh(sphereGeometry, badlandMaterial);
const planeMesh = new THREE.Mesh(planeGeometry, grassMaterial);

// MESH POSITION
torusMesh.position.x = 1;
cubeMesh.position.x = -1;
planeMesh.position.y = -4;
sphereMeshSpace.position.x = -1.5;
sphereMeshBadlands.position.x = 1.5;

// MESH ROTATION
planeMesh.rotation.x = -(Math.PI * 0.5);
sphereMeshBadlands;

// MESH SCALE
planeMesh.scale.set(10, 10);

// ADD PANE
const PARAMS = {
  min: 0,
  max: 1,
  step: 0.01,
};

// SPACE
const spacePane = pane.addFolder({
  title: "Space material",
  expanded: true,
});
spacePane.addBinding(spaceMaterial, "metalness", PARAMS);
spacePane.addBinding(spaceMaterial, "roughness", PARAMS);
spacePane.addBinding(spaceMaterial, "aoMapIntensity", PARAMS);
spacePane.addBinding(spaceMaterial, "displacementScale", PARAMS);

// GRASS PANE
const grassPane = pane.addFolder({
  title: "Grass material",
  expanded: true,
});
grassPane.addBinding(grassMaterial, "metalness", PARAMS);
grassPane.addBinding(grassMaterial, "roughness", PARAMS);
grassPane.addBinding(grassMaterial, "aoMapIntensity", PARAMS);
grassPane.addBinding(grassMaterial, "displacementScale", PARAMS);

// BADLANDS PANE
const badlandsPane = pane.addFolder({
  title: "Badlands material",
  expanded: true,
});
badlandsPane.addBinding(badlandMaterial, "metalness", PARAMS);
badlandsPane.addBinding(badlandMaterial, "roughness", PARAMS);
badlandsPane.addBinding(badlandMaterial, "aoMapIntensity", PARAMS);
badlandsPane.addBinding(badlandMaterial, "displacementScale", PARAMS);

// LIGHT;
const light = new THREE.AmbientLight(0xffffff, 2);
const pointLight = new THREE.PointLight(0xffffff, 20);
pointLight.position.set(0, 1, -1);

// CREATE CAMERA
const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.z = 1.4;
camera.position.y = 1;

// ADDING OBJECTS TO THE SCENE
group.add(sphereMeshSpace, sphereMeshGrass, sphereMeshBadlands, planeMesh);
scene.add(group);
scene.add(light);
scene.add(pointLight);

// CREATE CONTROLS
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// MAKE IT RESPONSIVE
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// RENDER SCENE
const renderLoop = () => {
  // group.children.forEach((mesh) => {
  //   if (mesh?.geometry?.type === "PlaneGeometry") return;
  //   if (mesh instanceof THREE.Mesh) mesh.rotation.y += 0.01;
  // });

  controls.update();
  window.requestAnimationFrame(renderLoop);
  renderer.render(scene, camera);
};

renderLoop();

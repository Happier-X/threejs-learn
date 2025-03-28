import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";

const scene = new THREE.Scene();
const gui = new GUI();

{
  const geometry = new THREE.BoxGeometry(100, 100, 100);
  const material = new THREE.MeshLambertMaterial({
    color: new THREE.Color("orange"),
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, 0, 0);
  scene.add(mesh);

  const meshFolder = gui.addFolder("立方体");
  meshFolder.addColor(mesh.material, "color");
  meshFolder.add(mesh.position, "x").step(10);
  meshFolder.add(mesh.position, "y").step(10);
  meshFolder.add(mesh.position, "z").step(10);
}

{
  const pointLight = new THREE.PointLight(0xffffff, 10000);
  pointLight.position.set(80, 80, 80);
  scene.add(pointLight);

  const lightFolder = gui.addFolder("光源");
  lightFolder.add(pointLight.position, "x").step(10);
  lightFolder.add(pointLight.position, "y").step(10);
  lightFolder.add(pointLight.position, "z").step(10);
  lightFolder.add(pointLight, "intensity").step(1000);
}

{
  const axesHelper = new THREE.AxesHelper(200);
  scene.add(axesHelper);
}

{
  const width = window.innerWidth;
  const height = window.innerHeight;

  const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
  camera.position.set(200, 200, 200);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);

  function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  render();

  document.body.append(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
}

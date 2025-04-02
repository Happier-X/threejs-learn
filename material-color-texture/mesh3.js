import * as THREE from "three";

const loader = new THREE.TextureLoader();
const texture = loader.load("./earth.jpg");

const geometry = new THREE.SphereGeometry(100); // 创建一个球体几何体，半径为100

const material = new THREE.MeshBasicMaterial({
  // color: new THREE.Color("orange"), // 还可以设置颜色
  map: texture,
});

const mesh = new THREE.Mesh(geometry, material);

export default mesh;

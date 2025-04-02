import * as THREE from "three";

const geometry = new THREE.PlaneGeometry(100, 100, 2, 3); // 这里的第三个和第四个参数是分段数

const material = new THREE.MeshBasicMaterial({
  color: new THREE.Color("orange"),
  wireframe: true,
});

const mesh = new THREE.Mesh(geometry, material);

console.log(mesh);

export default mesh;

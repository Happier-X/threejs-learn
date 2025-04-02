import * as THREE from "three";

const geometry = new THREE.PlaneGeometry(100, 100);

const material = new THREE.MeshBasicMaterial({
  color: new THREE.Color("orange"),
});

const mesh = new THREE.Mesh(geometry, material);

console.log(mesh);

const color = mesh.material.color;
console.log(color.getHexString()); // "ffa500"
console.log(color.getStyle()); // "rgb(255, 165, 0)"
color.setStyle("blue");

export default mesh;

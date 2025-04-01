import * as THREE from "three";

const geometry = new THREE.BufferGeometry(); // 创建几何体

const vertices = new Float32Array([
  0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 100, 100, 100, 0,
]);
const attribute = new THREE.BufferAttribute(vertices, 3);
geometry.attributes.position = attribute;

const material = new THREE.PointsMaterial({
  color: new THREE.Color("orange"),
});
const line = new THREE.LineSegments(geometry, material); // 创建线

export default line;

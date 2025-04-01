import * as THREE from "three";

const geometry = new THREE.BufferGeometry(); // 创建几何体

const vertices = new Float32Array([
  0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 100, 100, 100, 0,
]);
const attribute = new THREE.BufferAttribute(vertices, 3);
geometry.attributes.position = attribute; // 添加顶点数据

const material = new THREE.PointsMaterial({
  color: new THREE.Color("orange"),
  size: 10,
});
const points = new THREE.Points(geometry, material);

export default points;

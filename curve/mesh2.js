import * as THREE from "three";

const arc = new THREE.EllipseCurve(0, 0, 100, 100, 0, Math.PI / 2); // 长短轴一样就可以画圆， 弧度范围是0到Math.PI/2
const pointsList = arc.getPoints(20); // 取20段，也就是21个点

const geometry = new THREE.BufferGeometry();
geometry.setFromPoints(pointsList); // 将点坐标设置为几何体的顶点

const material = new THREE.LineBasicMaterial({
  color: new THREE.Color("orange"),
});
const line = new THREE.Line(geometry, material);
console.log(line.geometry.attributes.position.count); // 21
export default line;

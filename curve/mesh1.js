import * as THREE from "three";

const arc = new THREE.EllipseCurve(0, 0, 100, 50); // 画一个椭圆曲线，椭圆中心是（0,0），长短轴分别是100和50
const pointsList = arc.getPoints(20); // 取20段，也就是21个点

const geometry = new THREE.BufferGeometry();
geometry.setFromPoints(pointsList); // 将点坐标设置为几何体的顶点

const material = new THREE.LineBasicMaterial({
  color: new THREE.Color("orange"),
});
const line = new THREE.Line(geometry, material);
console.log(line.geometry.attributes.position.count); // 21
export default line;

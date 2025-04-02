import * as THREE from "three";

const boxGeometry = new THREE.BoxGeometry(100, 100, 100);

const geometry = new THREE.EdgesGeometry(boxGeometry); // BoxGeometry要渲染线模型不能直接使用，需要使用EdgesGeometry转换

const material = new THREE.LineDashedMaterial({
  color: new THREE.Color("orange"),
  dashSize: 10,
  gapSize: 10,
}); // 虚线材质

const line = new THREE.Line(geometry, material);
line.computeLineDistances(); // 计算虚线

console.log(line);

export default line;

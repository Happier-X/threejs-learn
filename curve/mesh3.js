import * as THREE from "three";

const arr = [
  new THREE.Vector2(-100, 0),
  new THREE.Vector2(-50, 50),
  new THREE.Vector2(0, 0),
  new THREE.Vector2(50, -50),
  new THREE.Vector2(100, 0),
];
const curve = new THREE.SplineCurve(arr);
const pointsArr = curve.getPoints(20);

const geometry = new THREE.BufferGeometry();
geometry.setFromPoints(pointsArr);

const material = new THREE.LineBasicMaterial({
  color: new THREE.Color("orange"),
});

const line = new THREE.Line(geometry, material);

const pointMaterial = new THREE.PointsMaterial({
  color: new THREE.Color("pink"),
  size: 5,
});

const points = new THREE.Points(geometry, pointMaterial);
line.add(points);

export default line;

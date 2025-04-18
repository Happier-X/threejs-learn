import * as THREE from "three";

const shape = new THREE.Shape();
shape.moveTo(100, 0);
shape.lineTo(0, 0);
shape.lineTo(0, 50);
shape.lineTo(80, 100);

const path = new THREE.Path();
path.arc(50, 50, 10);
shape.holes.push(path);

const geometry = new THREE.ShapeGeometry(shape);
const material = new THREE.MeshLambertMaterial({
  color: new THREE.Color("lightgreen"),
});

const mesh = new THREE.Mesh(geometry, material);

export default mesh;

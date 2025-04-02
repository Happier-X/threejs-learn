import * as THREE from "three";

const loader = new THREE.TextureLoader();
const texture = loader.load("./Jupiter.jpg");
texture.colorSpace = THREE.SRGBColorSpace;
texture.wrapT = THREE.RepeatWrapping; // 让纹理在y轴上重复，防止滚动时后面贴纸消失

const geometry = new THREE.SphereGeometry(50);

const material = new THREE.MeshBasicMaterial({
  map: texture,
});

const mesh = new THREE.Mesh(geometry, material);

export default mesh;

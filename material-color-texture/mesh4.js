import * as THREE from "three";

const loader = new THREE.TextureLoader();
const texture = loader.load("./brick.jpg");
texture.wrapS = THREE.RepeatWrapping; // 设置水平方向重复
texture.wrapT = THREE.RepeatWrapping; // 设置垂直方向重复
texture.repeat.set(3, 3); // 设置重复次数
texture.colorSpace = THREE.SRGBColorSpace; // 设置颜色空间，如果不设置，颜色会偏灰

const geometry = new THREE.PlaneGeometry(1000, 1000);

const material = new THREE.MeshBasicMaterial({
  map: texture,
  aoMap: texture, // 设置环境光贴图
});

const mesh = new THREE.Mesh(geometry, material);

export default mesh;

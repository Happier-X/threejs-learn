import * as THREE from "three";
import { createNoise2D } from "simplex-noise";

const geometry = new THREE.PlaneGeometry(3000, 3000, 100, 100); // 3000x3000 的平面，分成 100 段

const noise2D = createNoise2D();

export function updatePosition() {
  const positions = geometry.attributes.position;

  for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i);
    const y = positions.getY(i);
    const z = noise2D(x / 300, y / 300) * 50; // 使用噪声函数生成高度，如果想让山峰更高，可以增大这个值
    const sinNum = Math.sin(Date.now() * 0.002 + x * 0.05) * 10; // 添加一个正弦波动，使其不断变化
    positions.setZ(i, z + sinNum);
  }
  positions.needsUpdate = true;
}

const material = new THREE.MeshBasicMaterial({
  color: new THREE.Color("orange"),
  wireframe: true,
});

const mesh = new THREE.Mesh(geometry, material);
mesh.rotateX(Math.PI / 2); // 将平面旋转 90 度

console.log(mesh);

export default mesh;

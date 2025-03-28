import * as THREE from "https://unpkg.com/three@0.174.0/build/three.module.js";

// 创建一个场景
const scene = new THREE.Scene();

{
  const geometry = new THREE.BoxGeometry(100, 100, 100);
  const material = new THREE.MeshLambertMaterial({
    color: new THREE.Color("orange"),
  });
  // 这个几何体是一个立方体，它的材质是一个漫反射材质，颜色为橙色。
  const mesh = new THREE.Mesh(geometry, material);
  // 设置物体的坐标
  mesh.position.set(0, 0, 0);
  // 往场景中添加物体
  scene.add(mesh);
}

{
  // 点光源，白色，强度为10000
  const pointLight = new THREE.PointLight(0xffffff, 10000);
  // 位置在(80, 80, 80)
  pointLight.position.set(80, 80, 80);
  // 往场景中添加灯光
  scene.add(pointLight);
}

{
  // 展示坐标系，红绿蓝三色分别表示x、y、z轴，传入的值是坐标轴的长度
  const axesHelper = new THREE.AxesHelper(200);
  scene.add(axesHelper);
}

{
  const width = window.innerWidth;
  const height = window.innerHeight;

  // 创建一个透视相机，视野为60度，近裁剪面为1，远裁剪面为1000
  const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
  // 从(200, 200, 200)位置观察物体
  camera.position.set(200, 200, 200);
  // 观察方向为(0, 0, 0)
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  // 用渲染器渲染场景和相机
  renderer.render(scene, camera);
  // 将渲染器的canvas元素添加到页面中
  document.body.append(renderer.domElement);
}

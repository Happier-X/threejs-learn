import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";

const scene = new THREE.Scene();
const gui = new GUI();

{
  const geometry = new THREE.BoxGeometry(100, 100, 100);
  const material = new THREE.MeshLambertMaterial({
    color: new THREE.Color("orange"),
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, 0, 0);
  scene.add(mesh);

  const meshFolder = gui.addFolder("立方体");
  meshFolder.addColor(mesh.material, "color");
  meshFolder.add(mesh.position, "x").step(10);
  meshFolder.add(mesh.position, "y").step(10);
  meshFolder.add(mesh.position, "z").step(10);
}

{
  const pointLight = new THREE.PointLight(0xffffff, 10000);
  pointLight.position.set(80, 80, 80);
  scene.add(pointLight);

  const lightFolder = gui.addFolder("光源");
  lightFolder.add(pointLight.position, "x").step(10);
  lightFolder.add(pointLight.position, "y").step(10);
  lightFolder.add(pointLight.position, "z").step(10);
  lightFolder.add(pointLight, "intensity").step(1000);
}

{
  const axesHelper = new THREE.AxesHelper(200);
  scene.add(axesHelper);
}

{
  const width = window.innerWidth;
  const height = window.innerHeight;

  const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
  camera.position.set(200, 200, 200);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);

  function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  render();

  document.body.append(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);

  const otherFolder = gui.addFolder("其他控件类型");

  const obj = {
    obj1: "你好",
    obj2: false,
    obj3: 0,
    obj4: "111",
    obj5: "Bbb",
    logic: function () {
      console.log("执行一段逻辑！");
    },
  };

  otherFolder.add(obj, "obj1"); // 输入框
  otherFolder.add(obj, "obj2"); // 选择框
  otherFolder.add(obj, "obj3").min(-10).max(10).step(0.5); // range范围
  // 也可以这样写
  otherFolder.add(obj, "obj3", -10, 10, 0.5); // min, max, step
  otherFolder.add(obj, "obj4", ["111", "222", "333"]); // 下拉列表
  otherFolder.add(obj, "obj5", { Aaa: 0, Bbb: 0.1, Ccc: 5 }); // 下拉列表
  otherFolder.add(obj, "logic"); // 执行逻辑
  // 通过onChange监听值的变化来修改三维场景中的参数
  otherFolder.add(obj, "obj1").onChange((value) => {
    console.log(value);
  });
}

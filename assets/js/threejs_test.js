window.addEventListener('DOMContentLoaded', init);

function init() {
  const width = 480;
  const height = 480;

  // create renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas')
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  // create Scene
  const scene = new THREE.Scene();

  // create Cametra
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  camera.position.set(0, 0, +1000);

  // create a box
  const geometry = new THREE.BoxGeometry(500, 500, 500);
  const material = new THREE.MeshStandardMaterial({color: 0x0000FF});
  const box = new THREE.Mesh(geometry, material);
  scene.add(box);

  // put directional light source
  const light = new THREE.DirectionalLight(0xFFFFFF);
  light.intensity = 2;
  light.position.set(1, 1, 1);
  // add to scene
  scene.add(light);

  // initial run
  tick();

  function tick() {
    requestAnimationFrame(tick);

    // rotate a box
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;

    // rendering
    renderer.render(scene, camera);
  }
}
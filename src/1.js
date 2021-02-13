const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
// 기존의 BoxGeometry 를 대신하여 재사용이 용이한 BoxBufferGeometry를 추천하고 있다.
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// 재질의 색깔을 녹색으로 생성
const cube = new THREE.Mesh(geometry, material);
// 뼈대와 재질을 섞어 "큐브"라는 메쉬오브젝트 생성

scene.add(cube);

camera.position.z = 5;

const animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate(); 
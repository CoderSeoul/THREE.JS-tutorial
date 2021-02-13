function init() {
    const width = 500;
    const height = 400;

    const scene = window.scene = new THREE.Scene();
    // 카메라는 만들어진 오브젝트(three 용어로는 mesh)를 봅니다. 이때의 시야범위(각도)가 field of view, 줄여서 fov입니다. 기본값은 50도로 지정되어 있고, 보통 45~75도 사이의 값을 많이 주게 됩니다. 너무 넓어지면 오히려 오브젝트가 더 이상하게 보이게 되기 때문입니다. 우리가 사물을 바라볼 때 시야각이 생각보다 넓지 않은 것을 생각해주시면 됩니다.
    const camera = window.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    const renderer = window.renderer = new THREE.WebGLRenderer();
    const canvas = renderer.domElement;
    document.body.appendChild(canvas);

    addBox();
    window.addEventListener("resize", onWindowResize);
    onWindowResize();
}

function addBox() {
    const scene = window.scene;
    const geometry = new THREE.BoxGeometry(30, 30, 30);
    const material = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = -50;
    mesh.rotation.y = 1;
    scene.add(mesh);
}

function onWindowResize() {
    const scene = window.scene;
    const renderer = window.renderer;
    const camera = window.camera;

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera)
}

init();
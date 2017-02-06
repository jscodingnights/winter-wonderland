/**
 * You can safely leave this first part alone (I think)
 */

// Create the scene that contains everything
const scene = new THREE.Scene();

// Pick the method of visualization (probably keep WebGL)
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


/**
 * Define your winter wonderland here!
 */

const sphereGeometry = new THREE.SphereGeometry(20, 16, 16);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x4080ff });
const sphereMesh = new THREE.Mesh( sphereGeometry, sphereMaterial );
sphereMesh.position.set(0, sphereMesh.geometry.parameters.radius, 0);
scene.add(sphereMesh);

// Set the camera position
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 10, 100);
scene.add(camera);

function renderFrame() {
    // Do transformations that happen every frame here
    sphereMesh.rotation.y += 0.1;
    renderer.render(scene, camera);
}

setInterval(() => {
    requestAnimationFrame(renderFrame);
}, 1000 / 30); // 30 FPS

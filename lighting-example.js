/**
 * You can safely leave this first part alone I think
 */

// Create the scene that contains everything
const scene = new THREE.Scene();

// Pick the method of visualization (probably keep WebGL)
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
renderer.gammaInput = true;
renderer.gammaOutput = true;

document.body.appendChild(renderer.domElement);


/**
 * Define your winter wonderland here!
 */

// Snowfield

const snowfieldMaterial = new THREE.MeshPhongMaterial();
const showfieldGeometry = new THREE.BoxGeometry( 2000, 1, 2000 );
const snowfieldMesh = new THREE.Mesh( showfieldGeometry, snowfieldMaterial );
snowfieldMaterial.color.set( 0xdddddd );
snowfieldMesh.receiveShadow = true;
snowfieldMesh.position.set( 0, - 0.05, 0 );
scene.add(snowfieldMesh);

// Render a sphere

const sphereGeometry = new THREE.SphereGeometry(20, 16, 16);
const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0x4080ff });
const sphereMesh = new THREE.Mesh( sphereGeometry, sphereMaterial );
sphereMesh.position.set(0, sphereMesh.geometry.parameters.radius, 0);
sphereMesh.castShadow = true;
scene.add(sphereMesh);

// Scene lighting

const ambient = new THREE.AmbientLight(0xffffff, 0.25);
scene.add(ambient);

const spotLight = new THREE.SpotLight(0xffffff, 1);
spotLight.position.set( 15, 40, 35 );
spotLight.castShadow = true;
spotLight.angle = Math.PI / 4;
spotLight.penumbra = 0.05;
spotLight.decay = 2;
spotLight.distance = 200;
scene.add(spotLight);

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

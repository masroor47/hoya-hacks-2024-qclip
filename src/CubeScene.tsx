import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";

export const CubeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [spinCube, setSpinCube] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return; // Exit if ref is not set

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement); // Use the ref here

    // Cube setup
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (spinCube) {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
      }
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup function
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, [spinCube]);

  const triggerRotation = () => {
    setSpinCube(true);
  };

  return (
    <div>
      <div ref={mountRef} style={{ maxWidth: "70vw" }} />
      <button onClick={triggerRotation}>Spin!</button>
    </div>
  );
};

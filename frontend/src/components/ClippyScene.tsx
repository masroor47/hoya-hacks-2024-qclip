import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "../App.css";

export const ClippyScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  let resetRotation = false;
  const targetRotation = { x: 0, y: 0 };

  useEffect(() => {
    if (!mountRef.current) return;

    const sceneWidth = window.innerWidth;
    const sceneHeight = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      sceneWidth / sceneHeight,
      0.1,
      2000
    );
    camera.position.z = 6;
    camera.position.y = 0.1;
    camera.position.x = 0.17;
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(sceneWidth, sceneHeight);
    renderer.shadowMap.enabled = true;
    renderer.setClearColor(0x000000, 0);
    // const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    // scene.add(ambientLight);
    // renderer.setSize(sceneWidth, sceneHeight);

    const floorGeometry = new THREE.PlaneGeometry(10000, 10000); // Large enough to appear infinite
    const floorMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
    floorMesh.rotation.x = -Math.PI / 2; // Rotate the floor to be horizontal
    floorMesh.receiveShadow = true; // Allow the floor to receive shadows
    floorMesh.position.y = -1.75;
    scene.add(floorMesh);

    mountRef.current.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load(
      "/models/clippy/scene.gltf",
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);

        model.traverse((node) => {
          if (node instanceof THREE.Mesh) {
            node.castShadow = true; // Allow each mesh in the model to cast shadows
          }
        });

        model.position.set(0.4, -1.2, -1);
        const cameraLight = new THREE.DirectionalLight(0xffffff, 2.5);
        cameraLight.position.set(
          camera.position.x,
          camera.position.y,
          camera.position.z
        );
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(
          camera.position.x,
          camera.position.y + 5,
          camera.position.z
        );
        directionalLight.castShadow = true;
        // directionalLight.shadow.mapSize.width = 512; // Default is 512
        // directionalLight.shadow.mapSize.height = 512; // Default is 512

        scene.add(directionalLight);
        scene.add(cameraLight);
        const onMouseMove = (event: any) => {
          resetRotation = false;

          const rect = renderer.domElement.getBoundingClientRect();
          const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
          const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
          if (model) {
            targetRotation.y = (mouseX * Math.PI) / 7;
            targetRotation.x = (-mouseY * Math.PI) / 7;
          }
        };

        const onMouseLeave = (event: any) => {
          resetRotation = true;
          targetRotation.y = 0;
          targetRotation.x = 0;
        };

        renderer.domElement.addEventListener("mousemove", onMouseMove);
        renderer.domElement.addEventListener("mouseleave", onMouseLeave);

        directionalLight.target = model;
        cameraLight.target = model;

        // function updateLightPosition() {
        //   directionalLight.position.copy(camera.position);
        // }

        const animate = () => {
          requestAnimationFrame(animate);

          // const currentScrollProgress = scrollYProgress.get();
          // // More controlled camera animation based on scroll progress
          // const angle = Math.PI * 2 * currentScrollProgress; // Full rotation over scroll
          // const distance = 5 + 15 * (1 - currentScrollProgress); // Closer as you scroll down

          // // Position the camera in a circular path around the Y-axis
          // camera.position.x = Math.sin(angle) * distance;
          // camera.position.y = Math.tan(angle) * distance; // Adjust based on your scene's needs
          // camera.position.z = Math.cos(angle) * distance;

          // camera.lookAt(model.position); // Focus on the model

          if (resetRotation && model) {
            model.rotation.x += (targetRotation.x - model.rotation.x) * 0.05;
            model.rotation.y += (targetRotation.y - model.rotation.y) * 0.05;

            if (
              Math.abs(model.rotation.x - targetRotation.x) < 0.01 &&
              Math.abs(model.rotation.y - targetRotation.y) < 0.01
            ) {
              resetRotation = false; // Stop the interpolation when the target is reached
            }
          }

          if (!resetRotation && model) {
            // model.rotation.x += (targetRotation.x)
            model.rotation.x += (targetRotation.x - model.rotation.x) * 0.05;
            model.rotation.y += (targetRotation.y - model.rotation.y) * 0.05;
          }

          // updateLightPosition();
          renderer.render(scene, camera);
        };
        // model.position.set(0, 0, 0);
        animate();
        model.scale.set(50, 50, 50);
      },
      undefined, // This function is for progress, not needed here
      (error) => {
        console.error("An error happened while loading the model:", error);
      }
    );

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      // cleanup for listener functions
    };
  }, []); // Empty dependency array means this runs once when the component mounts

  return <div className="clippy-section" ref={mountRef} />;
};

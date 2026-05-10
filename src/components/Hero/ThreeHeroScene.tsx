import { useEffect, useRef } from "react";

type ThreeHeroSceneProps = {
  className?: string;
};

const ThreeHeroScene = ({ className }: ThreeHeroSceneProps) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (import.meta.env.MODE === "test") {
      return;
    }

    const mountNode = mountRef.current;
    if (!mountNode) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches || typeof window.WebGLRenderingContext === "undefined") {
      return;
    }

    let disposed = false;
    let cleanup = () => undefined;

    const init = async () => {
      const THREE = await import("three");
      if (disposed) {
        return;
      }

      try {
        const probeCanvas = document.createElement("canvas");
        const glContext = probeCanvas.getContext("webgl2") ?? probeCanvas.getContext("webgl");
        if (!glContext) {
          return;
        }
      } catch {
        return;
      }

      let renderer: import("three").WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        });
      } catch {
        return;
      }

      const scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0x080d16, 8, 22);

      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 50);
      camera.position.set(0, 0.2, 7.2);

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      mountNode.appendChild(renderer.domElement);

      const focalGroup = new THREE.Group();
      scene.add(focalGroup);

      const rootGroup = new THREE.Group();
      focalGroup.add(rootGroup);

      const coreGeometry = new THREE.IcosahedronGeometry(1.25, 3);
      const coreMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x57d8ff,
        roughness: 0.2,
        metalness: 0.45,
        transparent: true,
        opacity: 0.72,
        clearcoat: 1,
        clearcoatRoughness: 0.18
      });
      const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
      rootGroup.add(coreMesh);

      const wireGeometry = new THREE.IcosahedronGeometry(1.9, 2);
      const wireMaterial = new THREE.MeshBasicMaterial({
        color: 0xf2a23a,
        wireframe: true,
        transparent: true,
        opacity: 0.26
      });
      const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial);
      rootGroup.add(wireMesh);

      const rings = new THREE.Group();
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x7ff0ff,
        transparent: true,
        opacity: 0.14
      });
      const ringGeometry = new THREE.TorusGeometry(2.6, 0.015, 16, 120);
      const ringA = new THREE.Mesh(ringGeometry, ringMaterial);
      const ringB = new THREE.Mesh(ringGeometry, ringMaterial.clone());
      const ringC = new THREE.Mesh(ringGeometry, ringMaterial.clone());
      ringA.rotation.x = Math.PI / 2.2;
      ringB.rotation.y = Math.PI / 3;
      ringC.rotation.z = Math.PI / 4.2;
      rings.add(ringA, ringB, ringC);
      focalGroup.add(rings);

      const pointsGeometry = new THREE.BufferGeometry();
      const pointCount = 900;
      const positions = new Float32Array(pointCount * 3);
      for (let i = 0; i < pointCount; i += 1) {
        const radius = 8 + Math.random() * 8;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.cos(phi) * 0.75;
        positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta) - 6.5;
      }
      pointsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const pointSpriteCanvas = document.createElement("canvas");
      pointSpriteCanvas.width = 64;
      pointSpriteCanvas.height = 64;
      const pointSpriteContext = pointSpriteCanvas.getContext("2d");
      if (!pointSpriteContext) {
        return;
      }

      const pointGradient = pointSpriteContext.createRadialGradient(32, 32, 5, 32, 32, 28);
      pointGradient.addColorStop(0, "rgba(255,255,255,1)");
      pointGradient.addColorStop(0.55, "rgba(184,240,255,0.9)");
      pointGradient.addColorStop(1, "rgba(184,240,255,0)");
      pointSpriteContext.fillStyle = pointGradient;
      pointSpriteContext.fillRect(0, 0, 64, 64);

      const pointSpriteTexture = new THREE.CanvasTexture(pointSpriteCanvas);
      const pointsMaterial = new THREE.PointsMaterial({
        color: 0x8be6ff,
        size: 0.02,
        map: pointSpriteTexture,
        alphaMap: pointSpriteTexture,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.5
      });
      const points = new THREE.Points(pointsGeometry, pointsMaterial);
      scene.add(points);

      const ambientLight = new THREE.AmbientLight(0xa9d8ff, 0.5);
      const mainLight = new THREE.PointLight(0x5ad6ff, 3.2, 22, 1.8);
      const secondaryLight = new THREE.PointLight(0xf2a23a, 1.8, 20, 2);
      mainLight.position.set(3.8, 2.4, 4.4);
      secondaryLight.position.set(-4.2, -2.1, 3.1);
      scene.add(ambientLight, mainLight, secondaryLight);

      const pointerTarget = { x: 0, y: 0 };
      const pointerCurrent = { x: 0, y: 0 };
      let baseShiftX = 0;
      let sceneScale = 1;

      const onPointerMove = (event: PointerEvent) => {
        const rect = mountNode.getBoundingClientRect();
        const relativeX = (event.clientX - rect.left) / rect.width;
        const relativeY = (event.clientY - rect.top) / rect.height;
        pointerTarget.x = (relativeX - 0.5) * 2;
        pointerTarget.y = (relativeY - 0.5) * 2;
      };
      window.addEventListener("pointermove", onPointerMove);

      const resize = () => {
        const width = mountNode.clientWidth;
        const height = mountNode.clientHeight;
        if (!width || !height) {
          return;
        }

        if (width >= 2500) {
          baseShiftX = 2.65;
          sceneScale = 0.86;
        } else if (width >= 2100) {
          baseShiftX = 2.25;
          sceneScale = 0.9;
        } else if (width >= 1700) {
          baseShiftX = 1.85;
          sceneScale = 0.94;
        } else if (width >= 1400) {
          baseShiftX = 1.4;
          sceneScale = 0.97;
        } else {
          baseShiftX = 0.95;
          sceneScale = 1;
        }

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      };

      let resizeObserver: ResizeObserver | null = null;
      const onWindowResize = () => resize();
      if (typeof window.ResizeObserver !== "undefined") {
        resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(mountNode);
      } else {
        window.addEventListener("resize", onWindowResize);
      }
      resize();

      const clock = new THREE.Clock();
      let animationFrameId = 0;

      const animate = () => {
        animationFrameId = window.requestAnimationFrame(animate);
        const elapsed = clock.getElapsedTime();

        pointerCurrent.x += (pointerTarget.x - pointerCurrent.x) * 0.035;
        pointerCurrent.y += (pointerTarget.y - pointerCurrent.y) * 0.035;

        focalGroup.position.x = baseShiftX + pointerCurrent.x * 0.12;
        focalGroup.position.y = pointerCurrent.y * -0.08;
        rootGroup.rotation.y = elapsed * 0.22 + pointerCurrent.x * 0.32;
        rootGroup.rotation.x = elapsed * 0.08 + pointerCurrent.y * 0.2;
        rootGroup.scale.setScalar(sceneScale);
        rootGroup.position.x = pointerCurrent.x * 0.12;
        rootGroup.position.y = pointerCurrent.y * -0.08;

        wireMesh.rotation.x = -elapsed * 0.16;
        wireMesh.rotation.z = elapsed * 0.2;
        rings.rotation.y = elapsed * 0.12;
        rings.rotation.x = elapsed * 0.05;
        points.rotation.y = elapsed * 0.018;
        points.rotation.x = Math.sin(elapsed * 0.08) * 0.08;

        renderer.render(scene, camera);
      };

      animate();

      cleanup = () => {
        window.cancelAnimationFrame(animationFrameId);
        window.removeEventListener("pointermove", onPointerMove);
        if (resizeObserver) {
          resizeObserver.disconnect();
        } else {
          window.removeEventListener("resize", onWindowResize);
        }

        coreGeometry.dispose();
        coreMaterial.dispose();
        wireGeometry.dispose();
        wireMaterial.dispose();
        ringGeometry.dispose();
        ringMaterial.dispose();
        (ringB.material as import("three").Material).dispose();
        (ringC.material as import("three").Material).dispose();
        pointsGeometry.dispose();
        pointSpriteTexture.dispose();
        pointsMaterial.dispose();
        renderer.dispose();
        if (mountNode.contains(renderer.domElement)) {
          mountNode.removeChild(renderer.domElement);
        }
      };
    };

    void init();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return <div className={className} ref={mountRef} aria-hidden="true" />;
};

export default ThreeHeroScene;

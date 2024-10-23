import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  // Define the styles as a JavaScript object
  const styles = {
    width: '100%',            // Equivalent to w-full
    height: '100vh',         // Use height of viewport for full cover
    position: 'absolute',     // Equivalent to absolute
    top: 0,                   // Equivalent to inset-0
    right: 0,                 // Equivalent to inset-0
    bottom: 0,                // Equivalent to inset-0
    left: 0,                  // Equivalent to inset-0
    zIndex: -1,              // Equivalent to z-[-1]
  };

  return (
    <div style={styles}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;

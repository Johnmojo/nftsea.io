import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Blob } from "@/assets/models/Blob";

const ModelView = () => {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <ambientLight />
      <pointLight position={[5, 5, 5]} intensity={5} />
      <pointLight position={[-3, -3, 2]} intensity={15} />
      <OrbitControls autoRotate />
      <Blob />
    </Canvas>
  );
};

export default ModelView;

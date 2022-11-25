import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Blob } from "@/assets/models/Blob";

const ModelView = () => {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <ambientLight />
      <pointLight position={[5, 5, 5]} intensity={5} color="#C9CFFF" />
      <pointLight position={[-3, -3, 2]} intensity={15} color="#C9CFFF" />
      <OrbitControls autoRotate maxDistance={3} minDistance={2.5} />
      <Blob />
    </Canvas>
  );
};

export default ModelView;

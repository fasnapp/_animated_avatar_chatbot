import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { Avatar } from "./Avatar";
import textures from "three/src/renderers/common/Textures.js";
import { useThree } from "@react-three/fiber";

export const Experience = () => {

  const texture = useTexture("textures/download (3).jpeg")
  const viewport = useThree((state) => state.viewport)

  return (
    <>
      <OrbitControls />
      <Avatar position={[0, -3, 5]} scale={2}/>
      <Environment preset="sunset"/>
      <mesh>
        <planeGeometry args={[viewport.width, viewport.height]}/>
        <meshBasicMaterial map={texture}/>
      </mesh>
    </>
  );
};

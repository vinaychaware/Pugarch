"use client";
import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

type SpiralingModelProps = {
  onLoaded?: () => void;
};

export default function SpiralingModel({ onLoaded }: SpiralingModelProps) {
  const { scene } = useGLTF("/models/spiral.glb"); // adjust path to your .glb

  useEffect(() => {
    if (onLoaded) onLoaded();
  }, [onLoaded]);

  return <primitive object={scene} />;
}

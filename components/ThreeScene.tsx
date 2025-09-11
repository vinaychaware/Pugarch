"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import SpiralingModel from "./SpiralingModel";

type ThreeSceneProps = {
  onLoaded?: () => void;
};

export default function ThreeScene({ onLoaded }: ThreeSceneProps) {
  // We pass `onLoaded` to the model so it fires once loading completes
  return (
    <Canvas>
      <Suspense fallback={null}>
        <SpiralingModel onLoaded={onLoaded} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}

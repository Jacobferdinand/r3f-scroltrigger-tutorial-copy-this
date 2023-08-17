import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sparkles, Environment, OrbitControls } from '@react-three/drei'
import { Scene } from './assets/Scene'
import { Camera } from './assets/Camera'
import CameraRig from './assets/CameraRig'

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <CameraRig>
        <Camera />
      </CameraRig>{' '}
      <Scene />
      <Environment
        background
        blur={0.6}
        files="http://localhost:5173/forest_slope_1k.hdr"
      />
    </Canvas>
  )
}

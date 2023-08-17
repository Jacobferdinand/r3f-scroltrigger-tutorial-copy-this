/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./scene.glb -T
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Scene(props) {
  const { nodes, materials } = useGLTF('http://localhost:5173/models/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-6.46, 0, 44.62]}>
        <mesh geometry={nodes.Cylinder032.geometry} material={materials['New grass']} />
        <mesh geometry={nodes.Cylinder032_1.geometry} material={materials.Dirt} />
        <mesh geometry={nodes.Cylinder032_2.geometry} material={materials.Brown3} />
        <mesh geometry={nodes.Cylinder032_3.geometry} material={materials.Gray3} />
        <mesh geometry={nodes.Cylinder032_4.geometry} material={materials.Brown4} />
        <mesh geometry={nodes.Cylinder032_5.geometry} material={materials.Brown2} />
        <mesh geometry={nodes.Cylinder032_6.geometry} material={materials['Light yellow']} />
        <mesh geometry={nodes.Cylinder032_7.geometry} material={materials.Gray} />
        <mesh geometry={nodes.Cylinder032_8.geometry} material={materials.Gray2} />
        <mesh geometry={nodes.Cylinder032_9.geometry} material={materials.Red} />
        <mesh geometry={nodes.Cylinder032_10.geometry} material={materials.Brown} />
        <mesh geometry={nodes.Cylinder032_11.geometry} material={materials['Grass Green']} />
        <mesh geometry={nodes.Cylinder032_12.geometry} material={materials['Forest Green']} />
        <mesh geometry={nodes.Cylinder032_13.geometry} material={materials.Yellow} />
        <mesh geometry={nodes.Cylinder032_14.geometry} material={materials.Blue} />
        <mesh geometry={nodes.Cylinder032_15.geometry} material={materials.Brown5} />
        <mesh geometry={nodes.Cylinder032_16.geometry} material={materials['Gray3.001']} />
        <mesh geometry={nodes.Cylinder032_17.geometry} material={materials['White.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('http://localhost:5173/models/scene-transformed.glb')
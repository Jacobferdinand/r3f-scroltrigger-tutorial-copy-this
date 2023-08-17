import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

export default function CameraRig({ children }) {
  const group = useRef()
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Listen for mouse move events on the document
    document.addEventListener('mousemove', handleMouseMove)

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleMouseMove = (event) => {
    const canvas = document.querySelector('canvas')
    const canvasRect = canvas.getBoundingClientRect()

    const mouseX = event.clientX - canvasRect.left
    const mouseY = event.clientY - canvasRect.top

    // Calculate the mouse position relative to the canvas
    pointer.current = {
      x: (mouseX / canvasRect.width) * 2 - 1,
      y: -(mouseY / canvasRect.height) * 2 + 1,
    }
  }

  useFrame((state, delta) => {
    easing.dampE(
      group.current.rotation,
      [pointer.current.y / 100, pointer.current.x / 20, 0],
      0.85,
      delta
    )
  })

  return <group ref={group}>{children}</group>
}

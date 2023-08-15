import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Earth = () => {
  const earth = useGLTF('./rocket_orbiting_moon/scene.gltf')

  return (
    <primitive
      object={earth.scene}
      scale={0.012}
      position-y={0}
      rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
      camera = {{ 
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4,2,6]
      }}
    >
      <Suspense fallback={<CanvasLoader/>}/>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight
        position={[10,20,10]}
        angle={1.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
      />
      <Earth/>
    </Canvas>
  )
}

export default EarthCanvas
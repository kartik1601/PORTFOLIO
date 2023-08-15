import {Suspense, useState, useEffect} from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls, Preload, meshBounds, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const computer = useGLTF('./space_station_3/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight
        position={[40,40,25]}
        angle={1.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 2.20 : 2.750}
        position={isMobile ? [-0.75,-2,-2.2] : [-2,-2,-2]}
        rotation={[-1,0,1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setisMobile] = useState(false);

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setisMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setisMobile(event.matches);
    }

    mediaQuery.addEventListener('change',handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  }, [])
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{position: [20,3,5], fov:55}}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Computers isMobile={isMobile}  />
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas
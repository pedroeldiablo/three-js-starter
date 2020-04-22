import React, {useState} from 'react';
import { Canvas } from 'react-three-fiber';

import './style.css';

const Box = () => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  return(
    <mesh onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
    >
      <boxBufferGeometry 
        attach="geometry"
        args={[1,1,1]}
      />
      <meshBasicMaterial attach="material" color={hovered ? 'pink' : 'blue'} />

    </mesh>
  );
};



export default () => 
  <Canvas>
    <Box />
  </Canvas>;

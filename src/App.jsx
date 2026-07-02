import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'

function App() {
  

  return (
    <Canvas camera={{ 
      position: [2.3,1.5,2.3], 
      fov: 64 
      }}>
      <Experience />
    </Canvas>
  )

}

export default App

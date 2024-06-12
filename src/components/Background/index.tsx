import React, { useCallback, useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Container } from '@tsparticles/engine'
import sleep from 'sleep-promise'
import particlesConfig from '@/config/particles.json'

const Background: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = useCallback(async (container?: Container) => {
    if (container) {
      await sleep(100)
      container.play()
    }
  }, [])

  return (
    <>
      {init && (
        <Particles
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            pointerEvents: 'none',
          }}
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particlesConfig as any}
        />
      )}
      {children}
    </>
  )
}

export default Background

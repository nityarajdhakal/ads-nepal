import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          number: { value: 50, density: { enable: true, area: 800 } },
          color: { value: '#B8A034' },
          opacity: { value: 0.3 },
          size: { value: { min: 1, max: 3 } },
          move: {
            enable: true,
            speed: 0.8,
            direction: 'none',
            random: true,
            outModes: { default: 'bounce' },
          },
          links: {
            enable: true,
            distance: 150,
            color: '#B8A034',
            opacity: 0.15,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
          },
        },
      }}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
      }}
    />
  );
};

export default ParticlesBackground;
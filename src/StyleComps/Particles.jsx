import React, { useEffect, useRef } from 'react';

const Particles = ({
  particleColors = ['#ffffff'],
  particleCount = 10,
  particleSpread = 10,
  speed = 0.1,
  particleBaseSize = 1,
  moveParticlesOnHover = false,
  alphaParticles = false,
  disableRotation = false
}) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    particles.current = Array.from({ length: particleCount }, () => createParticle());

    function createParticle() {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * particleBaseSize + 1,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        dx: (Math.random() - 0.5) * speed,
        dy: (Math.random() - 0.5) * speed
      };
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (let p of particles.current) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = alphaParticles ? `${p.color}88` : p.color;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
      }
      requestAnimationFrame(animate);
    }

    animate();
  }, [
    particleColors,
    particleCount,
    particleBaseSize,
    speed,
    alphaParticles
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 z-1 pointer-events-none md:hidden"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default Particles;

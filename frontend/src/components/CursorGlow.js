import React, { useEffect, useRef } from 'react';
import './CursorGlow.css';

const CursorGlow = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursorDot.style.left = e.clientX + 'px';
      cursorDot.style.top = e.clientY + 'px';
    };

    const growCursor = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.8)';
      cursor.style.opacity = '0.6';
    };

    const shrinkCursor = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.opacity = '0.3';
    };

    window.addEventListener('mousemove', moveCursor);

    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', growCursor);
      link.addEventListener('mouseleave', shrinkCursor);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      links.forEach(link => {
        link.removeEventListener('mouseenter', growCursor);
        link.removeEventListener('mouseleave', shrinkCursor);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor-glow" />
      <div ref={cursorDotRef} className="cursor-dot" />
    </>
  );
};

export default CursorGlow;
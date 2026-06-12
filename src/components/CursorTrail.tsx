/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';

interface TrailPoint {
  id: string;
  x: number;
  y: number;
  color: string;
  shape: 'square' | 'circle' | 'diamond' | 'triangle';
  size: number;
  rotation: number;
}

const PALETTE = [
  '#FF5A5F', // Saturated Coral
  '#3B82F6', // Saturated Blue
  '#4ADE80', // Vibrant Green
  '#FFC043', // Warm Yellow
  '#A855F7', // Deep Purple
];

const SHAPES: TrailPoint['shape'][] = ['square', 'circle', 'diamond', 'triangle'];

export const CursorTrail: React.FC = () => {
  const [points, setPoints] = useState<TrailPoint[]>([]);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    // Only initialize custom cursor trails on desktops/fine pointer devices
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsEnabled(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsEnabled(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    let lastTime = 0;
    const throttleMs = 45; // Avoid flooding updates, matching motion kinetics

    const handleMouseMove = (e: MouseEvent) => {
      if (!isEnabled) return;

      const now = Date.now();
      if (now - lastTime < throttleMs) return;
      lastTime = now;

      const randomColor = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      const randomShape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      const randomSize = Math.floor(Math.random() * 8) + 12; // 12px to 20px
      const randomRotation = Math.floor(Math.random() * 360);

      const newPoint: TrailPoint = {
        id: Math.random().toString(),
        x: e.clientX,
        y: e.clientY,
        color: randomColor,
        shape: randomShape,
        size: randomSize,
        rotation: randomRotation,
      };

      setPoints((prev) => {
        const updated = [...prev, newPoint];
        if (updated.length > 20) {
          return updated.slice(1);
        }
        return updated;
      });

      // Automatically wipe out old points after trail fades
      setTimeout(() => {
        setPoints((prev) => prev.filter((p) => p.id !== newPoint.id));
      }, 700); // matches the animation length
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, [isEnabled]);

  if (!isEnabled || points.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {points.map((point) => {
        const halfSize = point.size / 2;
        return (
          <div
            key={point.id}
            className="absolute pointer-events-none"
            style={{
              left: point.x - halfSize,
              top: point.y - halfSize,
              width: point.size,
              height: point.size,
            }}
          >
            <div
              className="w-full h-full animate-pop"
              style={{
                transform: `rotate(${point.rotation}deg)`,
              }}
            >
              {point.shape === 'square' && (
                <div
                  className="w-full h-full border-2 border-black shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]"
                  style={{ backgroundColor: point.color }}
                ></div>
              )}

              {point.shape === 'circle' && (
                <div
                  className="w-full h-full rounded-full border-2 border-black shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]"
                  style={{ backgroundColor: point.color }}
                ></div>
              )}

              {point.shape === 'diamond' && (
                <div
                  className="w-full h-full border-2 border-black rotate-45 transform shadow-[1px_1.5px_0px_rgba(0,0,0,1)]"
                  style={{ backgroundColor: point.color }}
                ></div>
              )}

              {point.shape === 'triangle' && (
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]"
                >
                  <path
                    d="M12 3L21 19H3L12 3Z"
                    fill={point.color}
                    stroke="black"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

'use client';

import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type ShowreelProps = {
  images: string[];
  link?: string | null;
  linkTitle?: string;
  buttonTitle?: string;
};

export function Showreel({
  images,
  link = '/work',
  linkTitle = 'View work',
  buttonTitle = 'Preview',
}: ShowreelProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isHovering || images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [isHovering, images.length]);

  useEffect(() => {
    if (!isHovering) return;
    const handleWindowMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      if (!isInside) setIsHovering(false);
    };
    window.addEventListener('mousemove', handleWindowMouseMove);
    return () => window.removeEventListener('mousemove', handleWindowMouseMove);
  }, [isHovering]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    setMousePos({ x: e.clientX, y: e.clientY });
    setIsHovering(true);
  };

  const baseClass =
    'relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-muted aspect-video';
  const interactiveClass = `${baseClass} ${isHovering ? 'cursor-none' : 'cursor-pointer'}`;

  const content = (
    <div className="relative w-full h-full">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Showreel image ${index + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 672px"
          draggable={false}
          className={`object-cover transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          priority={index === 0}
        />
      ))}
    </div>
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full"
      >
        {link ? (
          <Link
            href={link}
            ref={containerRef as React.RefObject<HTMLAnchorElement>}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
            className={interactiveClass}
          >
            {content}
          </Link>
        ) : (
          <button
            type="button"
            aria-label={buttonTitle}
            ref={containerRef as React.RefObject<HTMLButtonElement>}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
            className={`w-full appearance-none border-0 p-0 ${interactiveClass}`}
          >
            {content}
          </button>
        )}
      </motion.div>

      {isMounted
        ? createPortal(
            <AnimatePresence>
              {isHovering && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.7, filter: 'blur(4px)' }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="pointer-events-none fixed left-0 top-0 z-50 flex items-center justify-center rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background will-change-transform"
                  style={{
                    left: mousePos.x,
                    top: mousePos.y,
                    translate: '-50% -50%',
                  }}
                >
                  {link ? linkTitle : buttonTitle}
                </motion.div>
              )}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </>
  );
}

'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }

    let lenis: any = null;
    let lenisTicker: ((time: number) => void) | null = null;

    import('lenis')
      .then(({ default: Lenis }) => {
        lenis = new Lenis();
        lenis.on('scroll', ScrollTrigger.update);
        lenisTicker = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(lenisTicker);
        gsap.ticker.lagSmoothing(0);
      })
      .catch(() => {});

    let ctx = gsap.context(() => {
      // Scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=100vh',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Shrink the video into a card and fade text
      tl.to(videoWrapperRef.current, {
        scale: 0.9,
        borderRadius: '2rem',
        ease: 'power2.inOut',
      }, 0)
      .to(textRef.current, {
        opacity: 0,
        x: 100,
        ease: 'power2.inOut',
      }, 0);
    }, containerRef);

    return () => {
      ctx.revert();
      if (lenis && lenisTicker) {
        gsap.ticker.remove(lenisTicker);
        lenis.destroy();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-[#FDFBF7] overflow-hidden flex items-center justify-start">
      <div ref={videoWrapperRef} className="absolute inset-0 w-full h-full overflow-hidden transform-gpu will-change-transform shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]">
        <div className="absolute inset-0 bg-black/10 z-10"></div>
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10 w-full md:w-3/4 left-0"></div>
        
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105"
        />
      </div>
      
      <div ref={textRef} className="relative z-20 flex flex-col items-start text-left px-8 sm:px-16 md:px-24 w-full md:w-[60%] lg:w-[50%] pt-24">
        <div>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-light text-white leading-[1.05] tracking-tight drop-shadow-lg">
            Poctivé dřevo.<br/>
            <span className="italic font-medium text-[#E8DCC4]">Prémiový design.</span>
          </h1>
          <p className="mt-8 text-white/90 font-sans font-light text-lg md:text-xl max-w-md drop-shadow-md">
            Vytváříme prostory, které rezonují s vaší osobností. Měníme vize ve hmatatelnou dokonalost bez kompromisů.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

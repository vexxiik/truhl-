'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HorizontalGallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !wrapperRef.current) return;

    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.gallery-item');
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + wrapperRef.current?.offsetWidth,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="reference" className="w-full h-screen bg-[#FDFBF7] text-[#111111] overflow-hidden flex flex-col justify-center relative">
      <div className="absolute top-16 left-8 md:left-24 z-10">
        <h2 className="text-4xl md:text-6xl font-serif font-light mb-4">Vybraná díla.</h2>
        <p className="max-w-xs font-light text-[#666] text-sm">Ukázka z našich realizací privátních interiérů a luxusních komerčních prostor. Scrollujte pro průchod galerií.</p>
      </div>
      
      <div ref={wrapperRef} className="flex w-[300vw] h-[60vh] mt-24 items-center">
        {/* Item 1 */}
        <div className="gallery-item w-screen h-full flex flex-col justify-center items-center px-8 md:px-24">
          <div className="w-full max-w-5xl aspect-[21/9] bg-[#222] rounded-none overflow-hidden relative group shadow-2xl">
            <img src="/kitchen.jpg" alt="Kuchyně" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-[cubic-bezier(0.32,0.72,0,1)] opacity-90" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000"></div>
          </div>
          <div className="w-full max-w-5xl mt-6 flex justify-between items-center">
            <h3 className="font-serif text-2xl">Temná elegance</h3>
            <span className="text-xs uppercase tracking-widest text-[#888]">Moderní Kuchyně</span>
          </div>
        </div>

        {/* Item 2 */}
        <div className="gallery-item w-screen h-full flex flex-col justify-center items-center px-8 md:px-24">
          <div className="w-full max-w-5xl aspect-[21/9] bg-[#222] rounded-none overflow-hidden relative group shadow-2xl">
            <img src="/joinery.jpg" alt="Detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-[cubic-bezier(0.32,0.72,0,1)] opacity-90" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000"></div>
          </div>
          <div className="w-full max-w-5xl mt-6 flex justify-between items-center">
            <h3 className="font-serif text-2xl">Umění Detailu</h3>
            <span className="text-xs uppercase tracking-widest text-[#888]">Japonský masivní spoj</span>
          </div>
        </div>

        {/* Item 3 */}
        <div className="gallery-item w-screen h-full flex flex-col justify-center items-center px-8 md:px-24">
          <div className="w-full max-w-5xl aspect-[21/9] bg-[#222] rounded-none overflow-hidden relative group shadow-2xl">
            <img src="/hero-bg.webp" alt="Interiér" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-[cubic-bezier(0.32,0.72,0,1)] opacity-90" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000"></div>
          </div>
          <div className="w-full max-w-5xl mt-6 flex justify-between items-center">
            <h3 className="font-serif text-2xl">Rezidence Bubeneč</h3>
            <span className="text-xs uppercase tracking-widest text-[#888]">Kompletní Interiér</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalGallery;

"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import * as LucideIcons from 'lucide-react';
const ArrowRight = (LucideIcons as any).ArrowRight ?? (LucideIcons as any).Circle ?? (() => null);
const MapPin = (LucideIcons as any).MapPin ?? (LucideIcons as any).Circle ?? (() => null);
const Phone = (LucideIcons as any).Phone ?? (LucideIcons as any).Circle ?? (() => null);
const Clock = (LucideIcons as any).Clock ?? (LucideIcons as any).Circle ?? (() => null);
const Menu = (LucideIcons as any).Menu ?? (LucideIcons as any).Circle ?? (() => null);

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-medium text-[var(--brand-ink)]/80 hover:text-[var(--brand-ink)] transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} className="block py-3 text-lg text-center font-medium text-[var(--brand-ink)] hover:bg-[var(--brand-ink)]/10 rounded-lg transition-colors">
        {children}
    </a>
);


const TravellingObject = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 0.18, 0.4, 0.6], ["-5vw", "20vw", "-22vw", "-5vw"]);
  const y = useTransform(scrollYProgress, [0, 0.18, 0.4, 0.6], ["-10vh", "0vh", "20vh", "45vh"]);
  const rotate = useTransform(scrollYProgress, [0, 0.18, 0.4, 0.6], [-10, 5, -8, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.18, 0.4, 0.6], [1, 1.1, 0.9, 0.8]);
  const opacity = useTransform(scrollYProgress, [0.6, 0.65], [1, 0]);

  return (
    <motion.div
      className="pointer-events-none fixed left-1/2 top-1/2 z-20 w-[38vw] max-w-[480px] -translate-x-1/2 -translate-y-1/2 object-contain hidden md:block"
      style={{ x, y, rotate, scale, opacity }}
      aria-hidden="true"
    >
      <img
        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221200%22%20height%3D%22800%22%20viewBox%3D%220%200%201200%20800%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23111827%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2224%22%20width%3D%221152%22%20height%3D%22752%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23374151%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%239ca3af%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EStock%20image%20unavailable%3C%2Ftext%3E%3C%2Fsvg%3E"
        alt="A perfectly baked croissant, golden and flaky"
        className="w-full h-full object-contain"
        data-art-asset="product-image-1"
      />
    </motion.div>
  );
};
function GeneratedScreen() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen w-full relative overflow-x-clip bg-[var(--brand-ground)] text-[var(--brand-ink)] font-body">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@1,9..144,400&display=swap');
:root {
          --brand-ground: #1c1410; 
          --brand-ink: #f6efe6; 
          --brand-accent: #e7b26d; 
          --brand-accent-ink: #1c1410; 
          --brand-chapter: #f3e9dc; 
          --brand-chapter-ink: #211812;
        }

        h1, h2, h3, h4, h5, h6, .font-display, .font-display * { font-family: 'Manrope', sans-serif !important; } 
        *, body, .font-body, .font-body * { font-family: 'Manrope', sans-serif !important; } 
        .font-accent, .font-accent * { font-family: 'Fraunces', serif !important; }

        @keyframes typewriter-in { from { width: 0 } to { width: 100% } }
        @keyframes typewriter-caret { 50% { border-color: transparent } }
        
        .typewriter { 
          display: inline-block; 
          overflow: hidden; 
          white-space: nowrap; 
          border-right: 2px solid var(--brand-accent); 
          animation: typewriter-in 2s steps(24, end) both, typewriter-caret 0.8s step-end infinite; 
        }

        @media (prefers-reduced-motion: reduce) { 
          .typewriter { animation: none; width: auto; border-right: 0 } 
          .travelling-object-container { display: none; }
        }

        .horizontal-scrollbar-hide::-webkit-scrollbar { display: none; }
        .horizontal-scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
/* premium-display-brief faces */
*, body, .font-body, .font-body * { font-family: 'Manrope', sans-serif !important; }
h1, h2, h3, h4, h5, h6, .font-display, .font-display * { font-family: 'Manrope', sans-serif !important; }
.font-accent, .font-accent * { font-family: 'Fraunces', serif !important; }
code, pre, kbd, samp, .font-mono, .font-mono * { font-family: ui-monospace, 'JetBrains Mono', monospace !important; }
`}</style>
      
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-[var(--brand-accent)] opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-[var(--brand-accent)] opacity-10 blur-3xl" />
      </div>

      <div className="travelling-object-container">
        <TravellingObject />
      </div>

      <header className="absolute top-0 left-0 right-0 z-30 p-4 md:px-8 md:py-6">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <a href="#" className="text-2xl font-bold font-display">The Gilded Crust</a>
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#">Story</NavLink>
            <NavLink href="#">Products</NavLink>
            <NavLink href="#">Community</NavLink>
            <NavLink href="#">Contact</NavLink>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        {isMenuOpen && (
            <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-[var(--brand-ground)]/90 backdrop-blur-lg p-4">
                <div className="flex justify-between items-center mb-12">
                    <a href="#" className="text-2xl font-bold font-display">The Gilded Crust</a>
                    <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                        <Menu className="h-6 w-6 rotate-90" />
                    </Button>
                </div>
                <nav className="flex flex-col gap-4">
                    <MobileNavLink href="#">Story</MobileNavLink>
                    <MobileNavLink href="#">Products</MobileNavLink>
                    <MobileNavLink href="#">Community</MobileNavLink>
                    <MobileNavLink href="#">Contact</MobileNavLink>
                </nav>
            </div>
        )}
      </header>

      <main>
        <section data-art-region="hero-region" className="relative isolate overflow-hidden min-h-[88vh] flex items-center py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 text-left z-10" data-art-region="hero-text-region">
              <span className="typewriter font-mono uppercase text-xs tracking-[0.2em] text-[var(--brand-accent)]">From Our Ovens to Your Heart</span>
              <h1 data-art-typography="headline" className="mt-4 font-display text-[3.5rem] md:text-[6rem] lg:text-[7.5rem] leading-[0.9] tracking-[-0.04em] font-bold">
                Artisanally <em className="font-accent italic font-normal text-[var(--brand-accent)]">Baked</em> Perfection
              </h1>
              <p className="mt-6 max-w-lg text-lg text-[var(--brand-ink)]/70">
                Every loaf, pastry, and confection from The Gilded Crust is a testament to time-honored techniques, the finest local ingredients, and a whole lot of love.
              </p>
              <div className="mt-10 flex items-center gap-6">
                <Button className="bg-[var(--brand-accent)] text-[var(--brand-accent-ink)] rounded-full px-8 py-4 h-auto text-base font-semibold hover:bg-[var(--brand-accent)]/90">
                  Explore Our Menu
                </Button>
                <a href="#" className="group text-base font-semibold flex items-center gap-2">
                  Find Us <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-7 h-[24rem] md:h-[34rem] relative mt-12 lg:mt-0">
              <div className="md:hidden block">
                <img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221200%22%20height%3D%22800%22%20viewBox%3D%220%200%201200%20800%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23111827%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2224%22%20width%3D%221152%22%20height%3D%22752%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23374151%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%239ca3af%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EStock%20image%20unavailable%3C%2Ftext%3E%3C%2Fsvg%3E" alt="A perfectly baked croissant" className="w-full h-full object-cover rounded-2xl" data-art-asset="product-image-1" />
              </div>
              <img data-art-asset="product-image-2" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221200%22%20height%3D%22800%22%20viewBox%3D%220%200%201200%20800%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23111827%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2224%22%20width%3D%221152%22%20height%3D%22752%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23374151%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%239ca3af%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EStock%20image%20unavailable%3C%2Ftext%3E%3C%2Fsvg%3E" alt="Artisan bread loaf" className="hidden lg:block absolute left-0 bottom-6 w-[52%] aspect-[4/3] object-cover rounded-[1.5rem] md:-rotate-2 shadow-lg" />
              <img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221200%22%20height%3D%22800%22%20viewBox%3D%220%200%201200%20800%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23111827%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2224%22%20width%3D%221152%22%20height%3D%22752%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23374151%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%239ca3af%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EStock%20image%20unavailable%3C%2Ftext%3E%3C%2Fsvg%3E" alt="Slice of chocolate cake" className="hidden lg:block absolute left-[38%] top-4 h-36 w-36 rounded-full object-cover ring-8 ring-[var(--brand-ground)] shadow-lg" />
            </div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-left relative" data-art-region="story-text-region">
            <div aria-hidden="true" className="absolute -top-12 -left-8 text-[10rem] leading-none text-[var(--brand-accent)]/30 font-serif">“</div>
            <h2 data-art-typography="body" className="text-4xl md:text-6xl leading-[1.05] tracking-tight font-display font-bold">
              It started with a simple belief: that bread is best when it's <span className="text-[var(--brand-accent)]">honest</span>. No shortcuts, no compromises. Just flour, water, salt, and time.
            </h2>
            <div className="mt-12 flex items-center gap-4">
              <img src="https://i.pravatar.cc/150?u=elara-vance" alt="Elara Vance, Founder" className="h-14 w-14 rounded-full object-cover" />
              <div>
                <p className="font-semibold">Elara Vance</p>
                <p className="font-mono uppercase text-xs tracking-[0.2em] text-[var(--brand-ink)]/60">Founder & Head Baker</p>
              </div>
            </div>
          </div>
        </section>

        <section data-art-check="visual-requirement-3" className="py-24" data-art-region="product-gallery-region">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-4xl md:text-6xl font-display font-bold max-w-lg">Fresh From The Oven</h2>
            </div>
          </div>
          <div className="pl-4 sm:pl-6 lg:pl-8">
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 horizontal-scrollbar-hide">
              {[
                { src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%221067%22%20viewBox%3D%220%200%20800%201067%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23111827%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2224%22%20width%3D%22752%22%20height%3D%221019%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23374151%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%239ca3af%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EStock%20image%20unavailable%3C%2Ftext%3E%3C%2Fsvg%3E", alt: "Chocolate eclair", title: "Valrhona Chocolate Éclair" },
                { src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%221067%22%20viewBox%3D%220%200%20800%201067%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23111827%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2224%22%20width%3D%22752%22%20height%3D%221019%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23374151%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%239ca3af%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EStock%20image%20unavailable%3C%2Ftext%3E%3C%2Fsvg%3E", alt: "Sourdough loaf", title: "Country Sourdough" },
                { src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%221067%22%20viewBox%3D%220%200%20800%201067%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23111827%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2224%22%20width%3D%22752%22%20height%3D%221019%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23374151%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%239ca3af%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EStock%20image%20unavailable%3C%2Ftext%3E%3C%2Fsvg%3E", alt: "Colorful macarons", title: "Assorted French Macarons" },
                { src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%221067%22%20viewBox%3D%220%200%20800%201067%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23111827%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2224%22%20width%3D%22752%22%20height%3D%221019%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23374151%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%239ca3af%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EStock%20image%20unavailable%3C%2Ftext%3E%3C%2Fsvg%3E", alt: "Cinnamon roll", title: "Morning Cinnamon Bun" },
                { src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%221067%22%20viewBox%3D%220%200%20800%201067%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23111827%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2224%22%20width%3D%22752%22%20height%3D%221019%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23374151%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%239ca3af%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EStock%20image%20unavailable%3C%2Ftext%3E%3C%2Fsvg%3E", alt: "Fruit tart", title: "Seasonal Fruit Tart" },
              ].map((item, index) => (
                <div key={index} className="w-[78vw] md:w-[36vw] lg:w-[26vw] shrink-0 snap-start space-y-4">
                  <div className="aspect-[3/4] overflow-hidden rounded-[1.5rem]">
                    <img src={item.src} alt={item.alt} className="w-full h-full object-cover" data-art-layer="product-image-layer"/>
                  </div>
                  <p className="font-semibold text-center">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--brand-chapter)] text-[var(--brand-chapter-ink)]">
          <div className="relative min-h-[36rem] flex items-center">
            <img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221600%22%20height%3D%221200%22%20viewBox%3D%220%200%201600%201200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23111827%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2224%22%20width%3D%221552%22%20height%3D%221152%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23374151%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%239ca3af%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EStock%20image%20unavailable%3C%2Ftext%3E%3C%2Fsvg%3E" alt="A happy customer enjoying a pastry" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-chapter)] via-[var(--brand-chapter)]/70 to-transparent"></div>
            <div className="absolute inset-0 bg-[var(--brand-chapter)]/45 md:bg-transparent"></div>
            <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
              <div className="max-w-xl">
                <div className="w-16 h-1 bg-[var(--brand-accent)] mb-6"></div>
                <p className="text-3xl md:text-5xl leading-tight font-display font-bold">"This isn't just a bakery, it's a cornerstone of the neighborhood. The quality and warmth are unmatched."</p>
                <p className="mt-8 font-mono uppercase text-xs tracking-[0.2em]">MARCUS REID, LOCAL GUIDE</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-6xl leading-[1.05] font-display font-bold">Come say hello. We've saved a seat for you.</h2>
            </div>
            <div className="lg:col-start-9 lg:col-span-4 relative">
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle,var(--brand-ink)_1px,transparent_1px)] bg-[size:18px_18px] opacity-20 -z-10"></div>
              <div className="bg-[var(--brand-ink)]/5 rounded-[2rem] p-8 shadow-sm text-[var(--brand-ink)] space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-[var(--brand-accent)] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">The Gilded Crust</h3>
                    <p className="text-[var(--brand-ink)]/70">123 Artisan Way, Millfield</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-[var(--brand-accent)] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Opening Hours</h3>
                    <p className="text-[var(--brand-ink)]/70">Tue - Sun: 7am - 4pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-[var(--brand-accent)] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Get In Touch</h3>
                    <p className="text-[var(--brand-ink)]/70">(555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="relative isolate min-h-[70vh] flex items-end px-4 sm:px-6 lg:px-8 pb-16">
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(70%_70%_at_15%_100%,var(--brand-accent),transparent)] opacity-25"></div>
            <div>
                <h2 className="text-5xl md:text-7xl leading-[0.95] font-display font-bold">
                    Join our <em className="font-accent italic font-normal text-[var(--brand-accent)]">Community</em> Table.
                </h2>
                <a href="#" className="group mt-8 inline-block text-2xl font-semibold underline decoration-1 underline-offset-4 hover:decoration-2">
                    Catering & Special Orders
                    <ArrowRight className="inline-block h-6 w-6 ml-2 transition-transform group-hover:translate-x-2" />
                </a>
                <p className="mt-24 font-mono uppercase text-xs tracking-[0.2em] text-[var(--brand-ink)]/60">
                    Follow us on Instagram &nbsp;&middot;&nbsp; Newsletter Sign-up &nbsp;&middot;&nbsp; Baking Classes
                </p>
            </div>
        </section>

      </main>

      <footer className="bg-[var(--brand-chapter)] text-[var(--brand-chapter-ink)] py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="text-2xl font-bold font-display">The Gilded Crust</a>
            <p className="mt-2 text-sm text-[var(--brand-chapter-ink)]/70">© 2024. All rights reserved.</p>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold">Explore</h4>
            <a href="#" className="block text-sm text-[var(--brand-chapter-ink)]/70 hover:text-[var(--brand-chapter-ink)]">Our Story</a>
            <a href="#" className="block text-sm text-[var(--brand-chapter-ink)]/70 hover:text-[var(--brand-chapter-ink)]">Menu</a>
            <a href="#" className="block text-sm text-[var(--brand-chapter-ink)]/70 hover:text-[var(--brand-chapter-ink)]">Careers</a>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold">Connect</h4>
            <a href="#" className="block text-sm text-[var(--brand-chapter-ink)]/70 hover:text-[var(--brand-chapter-ink)]">Instagram</a>
            <a href="#" className="block text-sm text-[var(--brand-chapter-ink)]/70 hover:text-[var(--brand-chapter-ink)]">Facebook</a>
            <a href="#" className="block text-sm text-[var(--brand-chapter-ink)]/70 hover:text-[var(--brand-chapter-ink)]">Contact Us</a>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold">Visit</h4>
            <p className="text-sm text-[var(--brand-chapter-ink)]/70">123 Artisan Way, Millfield</p>
            <p className="text-sm text-[var(--brand-chapter-ink)]/70">(555) 123-4567</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

/* FLOWGEN_UNSPLASH_CREDITS_START binding=GeneratedScreen flowgen-unsplash-attribution:v1:%5B%7B%22alt%22%3A%22a%20piece%20of%20food%22%2C%22width%22%3A3140%2C%22height%22%3A1766%2C%22photoId%22%3A%22jJ3GRH8dWNw%22%2C%22version%22%3A1%2C%22imageUrl%22%3A%22https%3A%2F%2Fimages.unsplash.com%2Fphoto-1658740877399-0422c2addd6c%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3w4NDA4MDJ8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBjbG9zZSUyMHVwJTIwbW91dGglMjB3YXRlcmluZyUyMGNyb2lzc2FudCUyMGdvbGRlbiUyMGJyb3dufGVufDF8MHx8fDE3OTEzMzU0MzJ8MA%26ixlib%3Drb-4.1.0%26q%3D80%26w%3D1200%26h%3D800%22%2C%22unsplashUrl%22%3A%22https%3A%2F%2Funsplash.com%2Fphotos%2Fa-piece-of-food-jJ3GRH8dWNw%3Futm_source%3Dflowgen%26utm_medium%3Dreferral%22%2C%22photographerName%22%3A%22kimia%20kazemi%22%2C%22photographerProfileUrl%22%3A%22https%3A%2F%2Funsplash.com%2F%40kimick%3Futm_source%3Dflowgen%26utm_medium%3Dreferral%22%7D%2C%7B%22alt%22%3A%22Slices%20of%20dark%20bread%20in%20a%20wooden%20bowl%20beside%20a%20small%20divided%20spice%20dish%22%2C%22width%22%3A5400%2C%22height%22%3A3600%2C%22photoId%22%3A%22V32ETRuvdXE%22%2C%22version%22%3A1%2C%22imageUrl%22%3A%22https%3A%2F%2Fimages.unsplash.com%2Fphoto-1789152952866-6104d8837566%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3w4NDA4MDJ8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBmcmVzaGx5JTIwYmFrZWQlMjBhcnRpc2FuJTIwYnJlYWQlMjBydXN0aWMlMjBzZXR0aW5nfGVufDF8MHx8fDE3OTEzMzU0MzF8MA%26ixlib%3Drb-4.1.0%26q%3D80%26w%3D1200%26h%3D800%22%2C%22unsplashUrl%22%3A%22https%3A%2F%2Funsplash.com%2Fphotos%2Fdark-bread-and-spices-in-wooden-bowls-V32ETRuvdXE%3Futm_source%3Dflowgen%26utm_medium%3Dreferral%22%2C%22photographerName%22%3A%22Volodymyr%20Lymariev%22%2C%22photographerProfileUrl%22%3A%22https%3A%2F%2Funsplash.com%2F%40vlmrv%3Futm_source%3Dflowgen%26utm_medium%3Dreferral%22%7D%2C%7B%22alt%22%3A%22chocolate%20cake%20with%20chocolate%20syrup%22%2C%22width%22%3A4912%2C%22height%22%3A2760%2C%22photoId%22%3A%22E8DznhhRm3k%22%2C%22version%22%3A1%2C%22imageUrl%22%3A%22https%3A%2F%2Fimages.unsplash.com%2Fphoto-1607257882338-70f7dd2ae344%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3w4NDA4MDJ8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBkZWxpY2lvdXMlMjBjaG9jb2xhdGUlMjBjYWtlJTIwc2xpY2UlMjByaWNoJTIwdGV4dHVyZXxlbnwxfDB8fHwxNzkxMzM1NDMyfDA%26ixlib%3Drb-4.1.0%26q%3D80%26w%3D1200%26h%3D800%22%2C%22unsplashUrl%22%3A%22https%3A%2F%2Funsplash.com%2Fphotos%2Fchocolate-cake-with-chocolate-syrup-E8DznhhRm3k%3Futm_source%3Dflowgen%26utm_medium%3Dreferral%22%2C%22photographerName%22%3A%22Ayesha%20Firdaus%22%2C%22photographerProfileUrl%22%3A%22https%3A%2F%2Funsplash.com%2F%40ayeshafirdaus%3Futm_source%3Dflowgen%26utm_medium%3Dreferral%22%7D%2C%7B%22alt%22%3A%22round%20cake%20with%20assorted%20fruits%20on%20top%22%2C%22width%22%3A4288%2C%22height%22%3A2848%2C%22photoId%22%3A%22qrDbj7OV2EU%22%2C%22version%22%3A1%2C%22imageUrl%22%3A%22https%3A%2F%2Fimages.unsplash.com%2Fphoto-1508736375612-66c03035c629%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3w4NDA4MDJ8MHwxfHNlYXJjaHwyfHxiYWtlcnklMjBmcnVpdCUyMHRhcnR8ZW58MXwwfHx8MTc5MTMzNTQ5OXww%26ixlib%3Drb-4.1.0%26q%3D80%26w%3D800%26h%3D1067%22%2C%22unsplashUrl%22%3A%22https%3A%2F%2Funsplash.com%2Fphotos%2Fround-cake-with-assorted-fruits-on-top-qrDbj7OV2EU%3Futm_source%3Dflowgen%26utm_medium%3Dreferral%22%2C%22photographerName%22%3A%22Allen%20Rad%22%2C%22photographerProfileUrl%22%3A%22https%3A%2F%2Funsplash.com%2F%40allenrad%3Futm_source%3Dflowgen%26utm_medium%3Dreferral%22%7D%2C%7B%22alt%22%3A%22brown%20and%20white%20cupcakes%20on%20tray%22%2C%22width%22%3A4945%2C%22height%22%3A3709%2C%22photoId%22%3A%22oZqJMbQMJ-4%22%2C%22version%22%3A1%2C%22imageUrl%22%3A%22https%3A%2F%2Fimages.unsplash.com%2Fphoto-1584966164218-42b0c3225e41%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3w4NDA4MDJ8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBjaW5uYW1vbiUyMHJvbGwlMjBpY2luZ3xlbnwxfDB8fHwxNzkxMzM1NDk5fDA%26ixlib%3Drb-4.1.0%26q%3D80%26w%3D800%26h%3D1067%22%2C%22unsplashUrl%22%3A%22https%3A%2F%2Funsplash.com%2Fphotos%2Fbrown-and-white-cupcakes-on-tray-oZqJMbQMJ-4%3Futm_source%3Dflowgen%26utm_medium%3Dreferral%22%2C%22photographerName%22%3A%22Mark%20Olsen%22%2C%22photographerProfileUrl%22%3A%22https%3A%2F%2Funsplash.com%2F%40markolsen%3Futm_source%3Dflowgen%26utm_medium%3Dreferral%22%7D%2C%7B%22alt%22%3A%22Two%20coffees%20and%20pastries%20on%20a%20wooden%20table%22%2C%22width%22%3A7728%2C%22height%22%3A5152%2C%22photoId%22%3A%22FXNqY7Fx0lA%22%2C%22version%22%3A1%2C%22imageUrl%22%3A%22https%3A%2F%2Fimages.unsplash.com%2Fphoto-1777305380856-f92fcfce7307%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3w4NDA4MDJ8MHwxfHNlYXJjaHwyfHxiYWtlcnklMjBlY2xhaXIlMjBjaG9jb2xhdGV8ZW58MXwwfHx8MTc5MTMzNTQ5OXww%26ixlib%3Drb-4.1.0%26q%3D80%26w%3D800%26h%3D1067%22%2C%22unsplashUrl%22%3A%22https%3A%2F%2Funsplash.com%2Fphotos%2Ftwo-coffees-and-pastries-on-a-wooden-table-FXNqY7Fx0lA%3Futm_source%3Dflowgen%26utm_medium%3Dreferral%22%2C%22photographerName%22%3A%22Masha%22%2C%22photographerProfileUrl%22%3A%22https%3A%2F%2Funsplash.com%2F%40mashauu%3Futm_source%3Dflowgen%26utm_medium%3Dreferral%22%7D%2C%7B%22alt%22%3A%22bread%20on%20brown%20wooden%20table%22%2C%22width%22%3A5056%2C%22height%22%3A3379%2C%22photoId%22%3A%22USg-3Z9T4uY%22%2C%22version%22%3A1%2C%22imageUrl%22%3A%22https%3A%2F%2Fimages.unsplash.com%2Fphoto-1586765501019-cbe3973ef8fa%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3w4NDA4MDJ8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBzb3VyZG91Z2glMjBsb2FmJTIwc2xpY2VkfGVufDF8MHx8fDE3OTEzMzU1MDB8MA%26ixlib%3Drb-4.1.0%26q%3D80%26w%3D800%26h%3D1067%22%2C%22unsplashUrl%22%3A%22https%3A%2F%2Funsplash.com%2Fphotos%2Fbread-on-brown-wooden-table-USg-3Z9T4uY%3Futm_source%3Dflowgen%26utm_medium%3Dreferral%22%2C%22photographerName%22%3A%22Tommaso%20Urli%22%2C%22photographerProfileUrl%22%3A%22https%3A%2F%2Funsplash.com%2F%40tunnuz%3Futm_source%3Dflowgen%26utm_medium%3Dreferral%22%7D%2C%7B%22alt%22%3A%22French%20macaroons%20with%20different%20colors%22%2C%22width%22%3A2800%2C%22height%22%3A1867%2C%22photoId%22%3A%22hV1gChgMa-k%22%2C%22version%22%3A1%2C%22imageUrl%22%3A%22https%3A%2F%2Fimages.unsplash.com%2Fphoto-1569864358642-9d1684040f43%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3w4NDA4MDJ8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBjb2xvcmZ1bCUyMG1hY2Fyb25zfGVufDF8MHx8fDE3OTEzMzU1MDB8MA%26ixlib%3Drb-4.1.0%26q%3D80%26w%3D800%26h%3D1067%22%2C%22unsplashUrl%22%3A%22https%3A%2F%2Funsplash.com%2Fphotos%2Ffrench-macaroons-with-different-colors-hV1gChgMa-k%3Futm_source%3Dflowgen%26utm_medium%3Dreferral%22%2C%22photographerName%22%3A%22Chelsea%20Audibert%22%2C%22photographerProfileUrl%22%3A%22https%3A%2F%2Funsplash.com%2F%40chelseaaudibert%3Futm_source%3Dflowgen%26utm_medium%3Dreferral%22%7D%2C%7B%22alt%22%3A%22woman%20in%20gray%20crew%20neck%20t-shirt%20sitting%20on%20chair%22%2C%22width%22%3A6224%2C%22height%22%3A3394%2C%22photoId%22%3A%22FQrwX0c6ag0%22%2C%22version%22%3A1%2C%22imageUrl%22%3A%22https%3A%2F%2Fimages.unsplash.com%2Fphoto-1604138808764-e873853af44e%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3w4NDA4MDJ8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBoYXBweSUyMGN1c3RvbWVyJTIwcG9ydHJhaXQlMjBuYXR1cmFsJTIwbGlnaHR8ZW58MXwwfHx8MTc5MTMzNTUwMHww%26ixlib%3Drb-4.1.0%26q%3D80%26w%3D1600%26h%3D1200%22%2C%22unsplashUrl%22%3A%22https%3A%2F%2Funsplash.com%2Fphotos%2Fwoman-in-gray-crew-neck-t-shirt-sitting-on-chair-FQrwX0c6ag0%3Futm_source%3Dflowgen%26utm_medium%3Dreferral%22%2C%22photographerName%22%3A%22Can%20y%C4%B1lmaz%22%2C%22photographerProfileUrl%22%3A%22https%3A%2F%2Funsplash.com%2F%40icanyilmaz%3Futm_source%3Dflowgen%26utm_medium%3Dreferral%22%7D%5D */
function __FlowGenUnsplashCredits() {
  return (
    <aside data-flowgen-unsplash-attribution="v1" aria-label="Photography credits" style={{ display: 'block', width: '100%', clear: 'both' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '4px 14px', boxSizing: 'border-box', width: '100%', padding: '10px 16px', borderTop: '1px solid var(--border, rgba(127,127,127,.28))', background: 'var(--background, #ffffff)', color: 'var(--muted-foreground, #52525b)', fontSize: 11, lineHeight: 1.45 }}>
          <span key="jJ3GRH8dWNw" style={{ whiteSpace: 'nowrap' }}>
            Photo by <a href="https://unsplash.com/@kimick?utm_source=flowgen&utm_medium=referral" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>kimia kazemi</a>{' '}on <a href="https://unsplash.com/photos/a-piece-of-food-jJ3GRH8dWNw?utm_source=flowgen&utm_medium=referral" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Unsplash</a>
          </span>
          <span key="V32ETRuvdXE" style={{ whiteSpace: 'nowrap' }}>
            Photo by <a href="https://unsplash.com/@vlmrv?utm_source=flowgen&utm_medium=referral" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Volodymyr Lymariev</a>{' '}on <a href="https://unsplash.com/photos/dark-bread-and-spices-in-wooden-bowls-V32ETRuvdXE?utm_source=flowgen&utm_medium=referral" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Unsplash</a>
          </span>
          <span key="E8DznhhRm3k" style={{ whiteSpace: 'nowrap' }}>
            Photo by <a href="https://unsplash.com/@ayeshafirdaus?utm_source=flowgen&utm_medium=referral" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Ayesha Firdaus</a>{' '}on <a href="https://unsplash.com/photos/chocolate-cake-with-chocolate-syrup-E8DznhhRm3k?utm_source=flowgen&utm_medium=referral" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Unsplash</a>
          </span>
          <span key="qrDbj7OV2EU" style={{ whiteSpace: 'nowrap' }}>
            Photo by <a href="https://unsplash.com/@allenrad?utm_source=flowgen&utm_medium=referral" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Allen Rad</a>{' '}on <a href="https://unsplash.com/photos/round-cake-with-assorted-fruits-on-top-qrDbj7OV2EU?utm_source=flowgen&utm_medium=referral" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Unsplash</a>
          </span>
          <span key="oZqJMbQMJ-4" style={{ whiteSpace: 'nowrap' }}>
            Photo by <a href="https://unsplash.com/@markolsen?utm_source=flowgen&utm_medium=referral" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Mark Olsen</a>{' '}on <a href="https://unsplash.com/photos/brown-and-white-cupcakes-on-tray-oZqJMbQMJ-4?utm_source=flowgen&utm_medium=referral" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Unsplash</a>
          </span>
          <span key="FXNqY7Fx0lA" style={{ whiteSpace: 'nowrap' }}>
            Photo by <a href="https://unsplash.com/@mashauu?utm_source=flowgen&utm_medium=referral" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Masha</a>{' '}on <a href="https://unsplash.com/photos/two-coffees-and-pastries-on-a-wooden-table-FXNqY7Fx0lA?utm_source=flowgen&utm_medium=referral" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Unsplash</a>
          </span>
          <span key="USg-3Z9T4uY" style={{ whiteSpace: 'nowrap' }}>
            Photo by <a href="https://unsplash.com/@tunnuz?utm_source=flowgen&utm_medium=referral" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Tommaso Urli</a>{' '}on <a href="https://unsplash.com/photos/bread-on-brown-wooden-table-USg-3Z9T4uY?utm_source=flowgen&utm_medium=referral" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Unsplash</a>
          </span>
          <span key="hV1gChgMa-k" style={{ whiteSpace: 'nowrap' }}>
            Photo by <a href="https://unsplash.com/@chelseaaudibert?utm_source=flowgen&utm_medium=referral" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Chelsea Audibert</a>{' '}on <a href="https://unsplash.com/photos/french-macaroons-with-different-colors-hV1gChgMa-k?utm_source=flowgen&utm_medium=referral" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Unsplash</a>
          </span>
          <span key="FQrwX0c6ag0" style={{ whiteSpace: 'nowrap' }}>
            Photo by <a href="https://unsplash.com/@icanyilmaz?utm_source=flowgen&utm_medium=referral" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Can yılmaz</a>{' '}on <a href="https://unsplash.com/photos/woman-in-gray-crew-neck-t-shirt-sitting-on-chair-FQrwX0c6ag0?utm_source=flowgen&utm_medium=referral" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Unsplash</a>
          </span>
      </div>
    </aside>
  );
}

function SiteForMyBakeryClarifiedInner() {
  return (
    <>
      <GeneratedScreen />
      <__FlowGenUnsplashCredits />
    </>
  );
}
/* FLOWGEN_UNSPLASH_CREDITS_END */

export default function SiteForMyBakeryClarified() {
  return (
    <>
      <style>{"@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');\n\n:root, [data-theme] {\n  --primary: #e0e0e0;\n  --color-primary: #e0e0e0;\n  --ring: #e0e0e0;\n  --color-ring: #e0e0e0;\n  --sidebar-primary: #e0e0e0;\n  --primary-foreground: #111827;\n  --color-primary-foreground: #111827;\n  --sidebar-primary-foreground: #111827;\n  --button: #e0e0e0;\n  --button-foreground: #111827;\n  --color-button: #e0e0e0;\n  --color-button-foreground: #111827;\n  --accent: #5e5e5e;\n  --color-accent: #5e5e5e;\n  --accent-foreground: #ffffff;\n  --color-accent-foreground: #ffffff;\n  --destructive: #e05555;\n  --color-destructive: #e05555;\n  --destructive-foreground: #ffffff;\n  --color-destructive-foreground: #ffffff;\n  --secondary: #4a4a4a;\n  --color-secondary: #4a4a4a;\n  --secondary-foreground: #ffffff;\n  --color-secondary-foreground: #ffffff;\n  --background: #2e2e2e;\n  --color-background: #2e2e2e;\n  --card: #2e2e2e;\n  --color-card: #2e2e2e;\n  --popover: #2e2e2e;\n  --sidebar: #2e2e2e;\n  --muted: color-mix(in srgb, #2e2e2e 90%, #e0e0e0);\n  --color-muted: color-mix(in srgb, #2e2e2e 90%, #e0e0e0);\n  --foreground: #e0e0e0;\n  --color-foreground: #e0e0e0;\n  --card-foreground: #e0e0e0;\n  --color-card-foreground: #e0e0e0;\n  --popover-foreground: #e0e0e0;\n  --sidebar-foreground: #e0e0e0;\n  --muted-foreground: #e0e0e0aa;\n  --color-muted-foreground: #e0e0e0aa;\n  --border: #4a4a4a;\n  --color-border: #4a4a4a;\n  --input: #4a4a4a;\n  --sidebar-border: #4a4a4a;\n  --radius: 0.35rem;\n}\n\n/* === BRAND KIT VISUAL OVERRIDES === */\n\nbody { background-color: var(--background) !important; }\n.bg-background, .bg-white { background-color: var(--background) !important; }\n.bg-card { background-color: var(--card) !important; }\n.text-background { color: var(--background) !important; }\n\nbody { color: var(--foreground) !important; }\n.text-foreground, .text-card-foreground,\n.text-gray-900, .text-slate-900, .text-zinc-900, .text-neutral-900, .text-stone-900, .text-black { color: var(--foreground) !important; }\n.text-muted-foreground { color: var(--muted-foreground) !important; }\n\n.bg-primary,\n.bg-blue-400, .bg-blue-500, .bg-blue-600,\n.bg-indigo-400, .bg-indigo-500, .bg-indigo-600,\n.bg-violet-400, .bg-violet-500, .bg-violet-600,\n.bg-purple-400, .bg-purple-500, .bg-purple-600 { background-color: var(--primary) !important; }\n.text-primary,\n.text-blue-500, .text-blue-600,\n.text-indigo-500, .text-indigo-600,\n.text-violet-500, .text-violet-600,\n.text-purple-500, .text-purple-600 { color: var(--primary) !important; }\n.border-primary { border-color: var(--primary) !important; }\n.ring-primary { --tw-ring-color: var(--primary) !important; }\n.text-primary-foreground { color: var(--primary-foreground) !important; }\n\nbutton.bg-primary, a.bg-primary, [role=\"button\"].bg-primary,\nbutton[class*=\"hover:bg-primary\"]:hover,\na[class*=\"hover:bg-primary\"]:hover,\n[role=\"button\"][class*=\"hover:bg-primary\"]:hover { background-color: var(--button) !important; }\nbutton.bg-primary.text-primary-foreground,\na.bg-primary.text-primary-foreground,\n[role=\"button\"].bg-primary.text-primary-foreground { color: var(--button-foreground) !important; }\n\n.bg-accent { background-color: var(--accent) !important; }\n.text-accent { color: var(--accent) !important; }\n.border-accent { border-color: var(--accent) !important; }\n.text-accent-foreground { color: var(--accent-foreground) !important; }\n\n.bg-destructive { background-color: var(--destructive) !important; }\n.text-destructive { color: var(--destructive) !important; }\n.border-destructive { border-color: var(--destructive) !important; }\n.text-destructive-foreground { color: var(--destructive-foreground) !important; }\n\n.bg-secondary { background-color: var(--secondary) !important; }\n.text-secondary { color: var(--secondary) !important; }\n.text-secondary-foreground { color: var(--secondary-foreground) !important; }\n\n.border-border,\n.border-gray-100, .border-slate-100, .border-zinc-100,\n.border-gray-200, .border-slate-200, .border-zinc-200, .border-neutral-200,\n.border-gray-300, .border-slate-300, .border-zinc-300, .border-neutral-300,\n.divide-border > * + * { border-color: var(--border) !important; }\n\n/* === RADIUS (all rounded-* → theme radius scale) === */\n.rounded-none  { border-radius: 0               !important; }\n.rounded-sm    { border-radius: 0.175rem       !important; }\n.rounded       { border-radius: 0.35rem    !important; }\n.rounded-md    { border-radius: 0.35rem    !important; }\n.rounded-lg    { border-radius: 0.525rem       !important; }\n.rounded-xl    { border-radius: 0.7rem         !important; }\n.rounded-2xl   { border-radius: 1.05rem         !important; }\n.rounded-3xl   { border-radius: 1.4rem         !important; }\n.rounded-full  { border-radius: 9999px          !important; }\n/* top/bottom/left/right variants */\n.rounded-t-sm, .rounded-t    { border-top-left-radius: 0.175rem;  border-top-right-radius: 0.175rem  !important; }\n.rounded-t-md, .rounded-t-lg { border-top-left-radius: 0.35rem; border-top-right-radius: 0.35rem !important; }\n.rounded-b-sm, .rounded-b    { border-bottom-left-radius: 0.175rem;  border-bottom-right-radius: 0.175rem  !important; }\n.rounded-b-md, .rounded-b-lg { border-bottom-left-radius: 0.35rem; border-bottom-right-radius: 0.35rem !important; }\n/* arbitrary values, pseudo-element variants and inline radii are clamped on CONTROLS only\n   (operator decision 2026-09-15, docs/superpowers/specs/2026-09-15-premium-display-brief.md P5):\n   the drift this rule was written for is a pill button or an input wandering off the\n   theme's scale. Sections, chapters, cards and media keep an authored rounded-[…] so a\n   curved chapter or a 2.5rem surface can exist; the same function serves preview and export. */\nbutton[class*=\"rounded-[\"], a[class*=\"rounded-[\"], input[class*=\"rounded-[\"], select[class*=\"rounded-[\"], textarea[class*=\"rounded-[\"], [role=\"button\"][class*=\"rounded-[\"] { border-radius: 0.35rem !important; }\nbutton[class*=\"before:rounded-[\"]::before, a[class*=\"before:rounded-[\"]::before, [role=\"button\"][class*=\"before:rounded-[\"]::before { border-radius: 0.35rem !important; }\nbutton[class*=\"after:rounded-[\"]::after, a[class*=\"after:rounded-[\"]::after, [role=\"button\"][class*=\"after:rounded-[\"]::after { border-radius: 0.35rem !important; }\nbutton[style*=\"border-radius\"], a[style*=\"border-radius\"], input[style*=\"border-radius\"], select[style*=\"border-radius\"], textarea[style*=\"border-radius\"], [role=\"button\"][style*=\"border-radius\"] { border-radius: 0.35rem !important; }\n\n/* === SCREEN THEME GUIDANCE V2 — exact editable token snapshot === */\n:root, [data-theme] {\n  --background: #2e2e2e;\n  --foreground: #e0e0e0;\n  --card: #454545;\n  --card-foreground: #e0e0e0;\n  --popover: #4d4d4d;\n  --popover-foreground: #e0e0e0;\n  --primary: #e0e0e0;\n  --primary-foreground: #1a1a1a;\n  --secondary: #4a4a4a;\n  --secondary-foreground: #e0e0e0;\n  --muted: #404040;\n  --muted-foreground: #bebebe;\n  --accent: #5e5e5e;\n  --accent-foreground: #e0e0e0;\n  --destructive: #e05555;\n  --destructive-foreground: #ffffff;\n  --border: #4a4a4a;\n  --input: #404040;\n  --ring: #b5b5b5;\n  --radius: 0.35rem;\n  --chart-1: #b5b5b5;\n  --chart-2: #8a8a8a;\n  --chart-3: #6a6a6a;\n  --chart-4: #e0e0e0;\n  --chart-5: #d0d0d0;\n  --sidebar: #262626;\n  --sidebar-foreground: #e0e0e0;\n  --sidebar-primary: #e0e0e0;\n  --sidebar-primary-foreground: #1a1a1a;\n  --sidebar-accent: #3a3a3a;\n  --sidebar-accent-foreground: #e0e0e0;\n  --sidebar-border: #4a4a4a;\n  --sidebar-ring: #b5b5b5;\n  --bg-0: #2e2e2e;\n  --bg-100: #3a3a3a;\n  --bg-200: #404040;\n  --bg-300: #4a4a4a;\n  --text-100: #e0e0e0;\n  --text-200: #c0c0c0;\n  --text-300: #909090;\n  --text-400: #6a6a6a;\n  --color-background: #2e2e2e;\n  --color-foreground: #e0e0e0;\n  --color-card: #454545;\n  --color-card-foreground: #e0e0e0;\n  --color-popover: #4d4d4d;\n  --color-popover-foreground: #e0e0e0;\n  --color-primary: #e0e0e0;\n  --color-primary-foreground: #1a1a1a;\n  --color-secondary: #4a4a4a;\n  --color-secondary-foreground: #e0e0e0;\n  --color-muted: #404040;\n  --color-muted-foreground: #bebebe;\n  --color-accent: #5e5e5e;\n  --color-accent-foreground: #e0e0e0;\n  --color-destructive: #e05555;\n  --color-destructive-foreground: #ffffff;\n  --color-border: #4a4a4a;\n  --color-input: #404040;\n  --color-ring: #b5b5b5;\n  --color-chart-1: #b5b5b5;\n  --color-chart-2: #8a8a8a;\n  --color-chart-3: #6a6a6a;\n  --color-chart-4: #e0e0e0;\n  --color-chart-5: #d0d0d0;\n  --color-sidebar: #262626;\n  --color-sidebar-foreground: #e0e0e0;\n  --color-sidebar-primary: #e0e0e0;\n  --color-sidebar-primary-foreground: #1a1a1a;\n  --color-sidebar-accent: #3a3a3a;\n  --color-sidebar-accent-foreground: #e0e0e0;\n  --color-sidebar-border: #4a4a4a;\n  --color-sidebar-ring: #b5b5b5;\n  --color-bg-0: #2e2e2e;\n  --color-bg-100: #3a3a3a;\n  --color-bg-200: #404040;\n  --color-bg-300: #4a4a4a;\n  --color-text-100: #e0e0e0;\n  --color-text-200: #c0c0c0;\n  --color-text-300: #909090;\n  --color-text-400: #6a6a6a;\n  --button: #e0e0e0;\n  --button-foreground: #1a1a1a;\n  --color-button: #e0e0e0;\n  --color-button-foreground: #1a1a1a;\n  --font-sans: Inter, Montserrat, sans-serif;\n  --font-heading: Montserrat, sans-serif;\n  --font-display: Montserrat, sans-serif;\n  --font-mono: Fira Code, monospace;\n  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --shadow-brutal-sm-val: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --shadow-brutal-val: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --shadow-brutal-lg-val: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --shadow-brutal-lg-hover-val: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --shadow-brutal-xl-val: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n}\nbody { background-color: var(--background) !important; color: var(--foreground) !important; font-family: Inter, Montserrat, sans-serif !important; }\n.bg-background { background-color: #2e2e2e !important; }\n.text-background { color: #2e2e2e !important; }\n.border-background { border-color: #2e2e2e !important; }\n.bg-foreground { background-color: #e0e0e0 !important; }\n.text-foreground { color: #e0e0e0 !important; }\n.border-foreground { border-color: #e0e0e0 !important; }\n.bg-card { background-color: #454545 !important; }\n.text-card { color: #454545 !important; }\n.border-card { border-color: #454545 !important; }\n.bg-card-foreground { background-color: #e0e0e0 !important; }\n.text-card-foreground { color: #e0e0e0 !important; }\n.border-card-foreground { border-color: #e0e0e0 !important; }\n.bg-popover { background-color: #4d4d4d !important; }\n.text-popover { color: #4d4d4d !important; }\n.border-popover { border-color: #4d4d4d !important; }\n.bg-popover-foreground { background-color: #e0e0e0 !important; }\n.text-popover-foreground { color: #e0e0e0 !important; }\n.border-popover-foreground { border-color: #e0e0e0 !important; }\n.bg-primary { background-color: #e0e0e0 !important; }\n.text-primary { color: #e0e0e0 !important; }\n.border-primary { border-color: #e0e0e0 !important; }\n.bg-primary-foreground { background-color: #1a1a1a !important; }\n.text-primary-foreground { color: #1a1a1a !important; }\n.border-primary-foreground { border-color: #1a1a1a !important; }\n.bg-secondary { background-color: #4a4a4a !important; }\n.text-secondary { color: #4a4a4a !important; }\n.border-secondary { border-color: #4a4a4a !important; }\n.bg-secondary-foreground { background-color: #e0e0e0 !important; }\n.text-secondary-foreground { color: #e0e0e0 !important; }\n.border-secondary-foreground { border-color: #e0e0e0 !important; }\n.bg-muted { background-color: #404040 !important; }\n.text-muted { color: #404040 !important; }\n.border-muted { border-color: #404040 !important; }\n.bg-muted-foreground { background-color: #bebebe !important; }\n.text-muted-foreground { color: #bebebe !important; }\n.border-muted-foreground { border-color: #bebebe !important; }\n.bg-accent { background-color: #5e5e5e !important; }\n.text-accent { color: #5e5e5e !important; }\n.border-accent { border-color: #5e5e5e !important; }\n.bg-accent-foreground { background-color: #e0e0e0 !important; }\n.text-accent-foreground { color: #e0e0e0 !important; }\n.border-accent-foreground { border-color: #e0e0e0 !important; }\n.bg-destructive { background-color: #e05555 !important; }\n.text-destructive { color: #e05555 !important; }\n.border-destructive { border-color: #e05555 !important; }\n.bg-destructive-foreground { background-color: #ffffff !important; }\n.text-destructive-foreground { color: #ffffff !important; }\n.border-destructive-foreground { border-color: #ffffff !important; }\n.bg-border { background-color: #4a4a4a !important; }\n.text-border { color: #4a4a4a !important; }\n.border-border { border-color: #4a4a4a !important; }\n.bg-input { background-color: #404040 !important; }\n.text-input { color: #404040 !important; }\n.border-input { border-color: #404040 !important; }\n.bg-ring { background-color: #b5b5b5 !important; }\n.text-ring { color: #b5b5b5 !important; }\n.border-ring { border-color: #b5b5b5 !important; }\n.bg-chart-1 { background-color: #b5b5b5 !important; }\n.text-chart-1 { color: #b5b5b5 !important; }\n.border-chart-1 { border-color: #b5b5b5 !important; }\n.bg-chart-2 { background-color: #8a8a8a !important; }\n.text-chart-2 { color: #8a8a8a !important; }\n.border-chart-2 { border-color: #8a8a8a !important; }\n.bg-chart-3 { background-color: #6a6a6a !important; }\n.text-chart-3 { color: #6a6a6a !important; }\n.border-chart-3 { border-color: #6a6a6a !important; }\n.bg-chart-4 { background-color: #e0e0e0 !important; }\n.text-chart-4 { color: #e0e0e0 !important; }\n.border-chart-4 { border-color: #e0e0e0 !important; }\n.bg-chart-5 { background-color: #d0d0d0 !important; }\n.text-chart-5 { color: #d0d0d0 !important; }\n.border-chart-5 { border-color: #d0d0d0 !important; }\n.bg-sidebar { background-color: #262626 !important; }\n.text-sidebar { color: #262626 !important; }\n.border-sidebar { border-color: #262626 !important; }\n.bg-sidebar-foreground { background-color: #e0e0e0 !important; }\n.text-sidebar-foreground { color: #e0e0e0 !important; }\n.border-sidebar-foreground { border-color: #e0e0e0 !important; }\n.bg-sidebar-primary { background-color: #e0e0e0 !important; }\n.text-sidebar-primary { color: #e0e0e0 !important; }\n.border-sidebar-primary { border-color: #e0e0e0 !important; }\n.bg-sidebar-primary-foreground { background-color: #1a1a1a !important; }\n.text-sidebar-primary-foreground { color: #1a1a1a !important; }\n.border-sidebar-primary-foreground { border-color: #1a1a1a !important; }\n.bg-sidebar-accent { background-color: #3a3a3a !important; }\n.text-sidebar-accent { color: #3a3a3a !important; }\n.border-sidebar-accent { border-color: #3a3a3a !important; }\n.bg-sidebar-accent-foreground { background-color: #e0e0e0 !important; }\n.text-sidebar-accent-foreground { color: #e0e0e0 !important; }\n.border-sidebar-accent-foreground { border-color: #e0e0e0 !important; }\n.bg-sidebar-border { background-color: #4a4a4a !important; }\n.text-sidebar-border { color: #4a4a4a !important; }\n.border-sidebar-border { border-color: #4a4a4a !important; }\n.bg-sidebar-ring { background-color: #b5b5b5 !important; }\n.text-sidebar-ring { color: #b5b5b5 !important; }\n.border-sidebar-ring { border-color: #b5b5b5 !important; }\n.bg-bg-0 { background-color: #2e2e2e !important; }\n.text-bg-0 { color: #2e2e2e !important; }\n.border-bg-0 { border-color: #2e2e2e !important; }\n.bg-bg-100 { background-color: #3a3a3a !important; }\n.text-bg-100 { color: #3a3a3a !important; }\n.border-bg-100 { border-color: #3a3a3a !important; }\n.bg-bg-200 { background-color: #404040 !important; }\n.text-bg-200 { color: #404040 !important; }\n.border-bg-200 { border-color: #404040 !important; }\n.bg-bg-300 { background-color: #4a4a4a !important; }\n.text-bg-300 { color: #4a4a4a !important; }\n.border-bg-300 { border-color: #4a4a4a !important; }\n.bg-text-100 { background-color: #e0e0e0 !important; }\n.text-text-100 { color: #e0e0e0 !important; }\n.border-text-100 { border-color: #e0e0e0 !important; }\n.bg-text-200 { background-color: #c0c0c0 !important; }\n.text-text-200 { color: #c0c0c0 !important; }\n.border-text-200 { border-color: #c0c0c0 !important; }\n.bg-text-300 { background-color: #909090 !important; }\n.text-text-300 { color: #909090 !important; }\n.border-text-300 { border-color: #909090 !important; }\n.bg-text-400 { background-color: #6a6a6a !important; }\n.text-text-400 { color: #6a6a6a !important; }\n.border-text-400 { border-color: #6a6a6a !important; }\nbutton.bg-primary, a.bg-primary, [role=\"button\"].bg-primary { background-color: var(--button) !important; color: var(--button-foreground) !important; }\n* { font-family: Inter, Montserrat, sans-serif !important; }\n.font-body, .font-body * { font-family: Inter, Montserrat, sans-serif !important; }\nh1, h2, h3, h4, h5, h6, .font-display, .font-display * { font-family: Montserrat, sans-serif !important; }\ncode, pre, kbd, samp, .font-mono, .font-mono * { font-family: Fira Code, monospace !important; }\n.shadow-sm, .shadow-brutal-sm { box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05) !important; }\n.shadow, .shadow-md, .shadow-brutal { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) !important; }\n.shadow-lg, .shadow-xl, .shadow-2xl, .shadow-brutal-lg, .shadow-brutal-xl,\n.shadow-brutal-hover, .hover\\:shadow-brutal-hover:hover,\n.shadow-brutal-lg-hover, .hover\\:shadow-brutal-lg-hover:hover { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) !important; }\n\n/* === RADIUS (all rounded-* → theme radius scale) === */\n.rounded-none  { border-radius: 0               !important; }\n.rounded-sm    { border-radius: 0.175rem       !important; }\n.rounded       { border-radius: 0.35rem    !important; }\n.rounded-md    { border-radius: 0.35rem    !important; }\n.rounded-lg    { border-radius: 0.525rem       !important; }\n.rounded-xl    { border-radius: 0.7rem         !important; }\n.rounded-2xl   { border-radius: 1.05rem         !important; }\n.rounded-3xl   { border-radius: 1.4rem         !important; }\n.rounded-full  { border-radius: 9999px          !important; }\n/* top/bottom/left/right variants */\n.rounded-t-sm, .rounded-t    { border-top-left-radius: 0.175rem;  border-top-right-radius: 0.175rem  !important; }\n.rounded-t-md, .rounded-t-lg { border-top-left-radius: 0.35rem; border-top-right-radius: 0.35rem !important; }\n.rounded-b-sm, .rounded-b    { border-bottom-left-radius: 0.175rem;  border-bottom-right-radius: 0.175rem  !important; }\n.rounded-b-md, .rounded-b-lg { border-bottom-left-radius: 0.35rem; border-bottom-right-radius: 0.35rem !important; }\n/* arbitrary values, pseudo-element variants and inline radii are clamped on CONTROLS only\n   (operator decision 2026-09-15, docs/superpowers/specs/2026-09-15-premium-display-brief.md P5):\n   the drift this rule was written for is a pill button or an input wandering off the\n   theme's scale. Sections, chapters, cards and media keep an authored rounded-[…] so a\n   curved chapter or a 2.5rem surface can exist; the same function serves preview and export. */\nbutton[class*=\"rounded-[\"], a[class*=\"rounded-[\"], input[class*=\"rounded-[\"], select[class*=\"rounded-[\"], textarea[class*=\"rounded-[\"], [role=\"button\"][class*=\"rounded-[\"] { border-radius: 0.35rem !important; }\nbutton[class*=\"before:rounded-[\"]::before, a[class*=\"before:rounded-[\"]::before, [role=\"button\"][class*=\"before:rounded-[\"]::before { border-radius: 0.35rem !important; }\nbutton[class*=\"after:rounded-[\"]::after, a[class*=\"after:rounded-[\"]::after, [role=\"button\"][class*=\"after:rounded-[\"]::after { border-radius: 0.35rem !important; }\nbutton[style*=\"border-radius\"], a[style*=\"border-radius\"], input[style*=\"border-radius\"], select[style*=\"border-radius\"], textarea[style*=\"border-radius\"], [role=\"button\"][style*=\"border-radius\"] { border-radius: 0.35rem !important; }"}</style>
      <SiteForMyBakeryClarifiedInner />
    </>
  );
}

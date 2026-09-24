import React from 'react';
import HeroSection from '@/components/HeroScrollVideo';
import HorizontalGallery from '@/components/HorizontalGallery';
import Reveal from '@/components/Reveal';

export default function Home() {
  return (
    <main className="min-h-screen w-full block bg-[#FDFBF7] text-[#111111] font-sans selection:bg-[#E8DCC4] selection:text-[#111]">
      {/* Highly Visible Nav */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4">
        <nav className="w-full h-14 bg-white border border-[#111]/10 rounded-full flex items-center justify-between px-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <span className="font-serif italic font-medium text-[#111] text-lg">Jan Novák</span>
          <div className="flex gap-8 hidden md:flex items-center">
            <a href="#sluzby" className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#555] hover:text-[#111] transition-colors duration-300">Služby</a>
            <a href="#reference" className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#555] hover:text-[#111] transition-colors duration-300">Reference</a>
            <a href="#o-nas" className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#555] hover:text-[#111] transition-colors duration-300">Příběh</a>
            <a href="#faq" className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#555] hover:text-[#111] transition-colors duration-300">FAQ</a>
            <a href="#kontakt" className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#555] hover:text-[#111] transition-colors duration-300">Kontakt</a>
          </div>
          <a href="#kontakt" className="hidden md:inline-flex text-[10px] uppercase tracking-widest bg-[#111] text-white px-5 py-2 rounded-full hover:bg-[#8A7961] transition-colors">
            Poptávka
          </a>
        </nav>
      </header>

      {/* 1. Asymmetrical Hero Section */}
      <HeroSection />


      {/* 2. Co děláme (Services) - Premium Bento */}
      <section id="sluzby" className="w-full px-4 sm:px-8 py-32 md:py-48 z-10 relative bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-8">
            <Reveal>
              <div className="w-8 h-[1px] bg-[#111] mb-8 mx-auto md:mx-0"></div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-[1.1]">
                Co pro vás <br />
                <span className="italic text-[#8A7961]">vytvoříme</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-[#555] font-light leading-relaxed max-w-sm">
                Spojujeme tradiční truhlařinu s moderními technologiemi. Neřešíme jen dřevo, ale celkovou harmonii a funkčnost prostoru.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
            {/* Main Service - Large Card with Image */}
            <div className="md:col-span-8 group">
              <Reveal>
                <div className="relative w-full h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden bg-[#111]">
                  <img src="/kitchen.jpg" alt="Kuchyně" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-40 transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-10 md:p-16 flex flex-col">
                    <span className="text-[#E8DCC4] font-serif text-xl italic mb-4">01</span>
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">Kuchyně a Bydlení</h3>
                    <p className="text-white/80 font-light text-sm md:text-base leading-relaxed max-w-md">
                      Kompletní realizace na míru. Pracovní a kuchyňské desky z kamene, masivu i luxusního kompozitu. Zajišťujeme precizní bezspárové spoje pro dokonalou hygienu a estetiku.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-4 flex flex-col gap-6">
              {/* Service 2 */}
              <Reveal delay={0.1}>
                <div className="relative rounded-[2rem] p-10 h-[240px] md:h-[288px] flex flex-col justify-between overflow-hidden group bg-[#111]">
                  <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2000" alt="Osvětlení" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                  <span className="relative z-10 text-[#E8DCC4] font-serif text-xl italic">02</span>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-serif text-white mb-3">Chytré LED osvětlení</h3>
                    <p className="text-white/70 font-light text-sm leading-relaxed">
                      Skryté zafrézované hliníkové profily, difuzory a senzory pohybu. Vaše šatna se rozsvítí přesně tehdy, když potřebujete.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Service 3 */}
              <Reveal delay={0.2}>
                <div className="relative rounded-[2rem] p-10 h-[240px] md:h-[288px] flex flex-col justify-between overflow-hidden group bg-[#111]">
                  <img src="/joinery.jpg" alt="Detail" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                  <span className="relative z-10 text-[#E8DCC4] font-serif text-xl italic">03</span>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-serif text-white mb-3">Atypický solitér</h3>
                    <p className="text-white/70 font-light text-sm leading-relaxed">
                      Jídelní stoly z jednoho kusu kmenu (live edge), masivní postele bez vrzání a umělecké komody s respektem ke kresbě dřeva.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Horizontal GSAP Gallery */}
      <HorizontalGallery />

      {/* 4. O nás & Vybavení (The Craftsman & Machines) */}
      <section id="o-nas" className="w-full bg-[#FDFBF7] pt-32 md:pt-48 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row gap-16 md:gap-32 w-full mb-32">
            <div className="w-full md:w-1/2">
              <Reveal>
                <div className="w-full aspect-[3/4] relative overflow-hidden bg-[#E8DCC4] rounded-[2rem] shadow-xl">
                  <img src="/carpenter.jpg" alt="Mistr Truhlář" className="absolute inset-0 w-full h-full object-cover scale-105" />
                </div>
              </Reveal>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <Reveal delay={0.2}>
                <div className="w-8 h-[1px] bg-[#111] mb-8"></div>
                <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 leading-[1.1]">
                  &quot;Dřevo neklame.<br />Ukáže každou chybu, ale i absolutní <span className="italic text-[#8A7961]">mistrovství</span>.&quot;
                </h2>
                <div className="space-y-6 text-[#555] font-light leading-relaxed">
                  <p>
                    Truhlářství pro nás není jen práce, je to posedlost dokonalostí. Začal jsem před 20 lety v malé dílně. Dnes vedu tým, který používá průmyslové technologie, ale náš přístup zůstal stejný. Ke každému klientovi přistupujeme s prázdným listem papíru.
                  </p>
                  <p>
                    Tvoříme <strong>fotorealistické 3D vizualizace</strong>, které vám dají absolutní jistotu ještě před tím, než vůbec uřízneme první centimetr masivu. Naší zárukou je vaše absolutní spokojenost.
                  </p>
                </div>
                <div className="mt-12 flex flex-col gap-2">
                  <span className="font-serif italic text-2xl text-[#111]">Jan Novák</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#888]">Zakladatel a Mistr Truhlář</span>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Premium Technologies & Partners Section */}
          <Reveal>
            <div className="w-full bg-[#F3EFE8] rounded-[3rem] p-12 md:p-20 text-[#111] shadow-sm relative overflow-hidden border border-[#111]/5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                <div>
                  <h3 className="text-sm font-sans font-bold uppercase tracking-widest mb-8 text-[#8A7961]">Naše technologie</h3>
                  <p className="text-[#555] font-light text-base leading-relaxed mb-10 max-w-md">
                    Ruční práce je nenahraditelná pro finální detaily, ale pro absolutní přesnost korpusů a spojů se spoléháme na high-tech průmyslové vybavení.
                  </p>
                  <ul className="text-[#111] font-light space-y-5 list-none">
                    <li className="flex items-center gap-5 border-b border-[#111]/10 pb-4"><span className="font-serif italic text-[#8A7961]">01</span> Pětiosé CNC centrum Homag</li>
                    <li className="flex items-center gap-5 border-b border-[#111]/10 pb-4"><span className="font-serif italic text-[#8A7961]">02</span> Olepovačka hran s PUR lepidlem (nulová spára)</li>
                    <li className="flex items-center gap-5 border-b border-[#111]/10 pb-4"><span className="font-serif italic text-[#8A7961]">03</span> Formátovací pila Altendorf</li>
                    <li className="flex items-center gap-5"><span className="font-serif italic text-[#8A7961]">04</span> Bezvzduchová lakovna (Airless)</li>
                  </ul>
                </div>
                
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-sans font-bold uppercase tracking-widest mb-8 text-[#8A7961]">Prémiové materiály a kování</h3>
                    <p className="text-[#555] font-light text-base leading-relaxed mb-10 max-w-md">
                      Spolupracujeme pouze s ověřenými dodavateli, abychom zaručili, že dvířka vaší kuchyně budou i za 20 let fungovat jako první den.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-4">
                    {['Blum', 'Hettich', 'Egger', 'Kronospan', 'Technistone', 'Corian', 'Festool', 'Osmo', 'Monocoat'].map((brand) => (
                      <div key={brand} className="flex flex-col items-start justify-center group cursor-default">
                        <div className="w-8 h-[1px] bg-[#111]/10 mb-3 group-hover:bg-[#8A7961] transition-colors duration-500"></div>
                        <span className="text-sm font-serif text-[#111] tracking-wider group-hover:text-[#8A7961] transition-colors duration-500">{brand}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Pricing Framework (Ceník) - Premium Light Design */}
      <section id="cenik" className="w-full bg-[#EAE4D9] py-32 md:py-48 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <Reveal>
            <div className="text-center md:text-left mb-24 md:flex md:justify-between md:items-end">
              <div>
                <h3 className="text-xs font-sans font-bold uppercase tracking-[0.25em] mb-6 text-[#8A7961]">Transparentní přístup</h3>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#111] mb-6 md:mb-0">Investice do hodnoty.</h2>
              </div>
              <p className="text-[#555] font-light max-w-sm text-sm">
                Nevyrábíme sériový nábytek. Tvoříme originály na míru. Náš ceník odráží reálný proces a použitý materiál.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={0.1}>
              <div className="p-10 flex flex-col h-full rounded-[2rem] bg-transparent border border-[#111]/10 hover:border-[#8A7961]/50 hover:bg-[#FDFBF7]/50 transition-all duration-500 group">
                <div className="text-[#8A7961] font-serif text-sm italic mb-8">Fáze 01</div>
                <h3 className="text-2xl font-serif mb-2 text-[#111]">Konzultace a Zaměření</h3>
                <div className="text-4xl font-light mb-8 text-[#111] mt-4">ZDARMA</div>
                <div className="h-[1px] w-full bg-[#111]/10 mb-8 group-hover:bg-[#8A7961]/30 transition-colors"></div>
                <ul className="text-[#555] text-sm font-light space-y-4 flex-grow list-none">
                  <li className="flex items-start gap-3"><span className="text-[#8A7961]">✓</span> Setkání u nás v showroomu nebo doma</li>
                  <li className="flex items-start gap-3"><span className="text-[#8A7961]">✓</span> Zaměření prostoru laserem</li>
                  <li className="flex items-start gap-3"><span className="text-[#8A7961]">✓</span> Výběr vzorků materiálů</li>
                </ul>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="p-10 flex flex-col h-full rounded-[2rem] bg-[#FDFBF7] text-[#111] transform md:-translate-y-4 shadow-xl border border-[#111]/5 relative">
                <div className="absolute top-0 inset-x-0 h-1 bg-[#8A7961]"></div>
                <div className="text-[#8A7961] font-serif text-sm italic mb-8">Fáze 02</div>
                <h3 className="text-2xl font-serif mb-2">3D Projekt a Vizualizace</h3>
                <div className="text-4xl font-light mb-8 mt-4">od 5 000 <span className="text-xl text-[#666]">Kč</span></div>
                <div className="h-[1px] w-full bg-[#111]/10 mb-8"></div>
                <ul className="text-[#555] text-sm font-light space-y-4 flex-grow list-none">
                  <li className="flex items-start gap-3"><span className="text-[#111] font-medium">✓</span> Kompletní prostorové řešení</li>
                  <li className="flex items-start gap-3"><span className="text-[#111] font-medium">✓</span> Fotorealistické vizualizace</li>
                  <li className="flex items-start gap-3"><span className="text-[#111] font-medium">✓</span> Výběr kování a detailů</li>
                </ul>
                <div className="mt-8 p-4 bg-[#EAE4D9]/50 rounded-xl">
                  <strong className="text-[#111] font-medium text-xs">Při následné realizaci je tato částka plně odečtena.</strong>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="p-10 flex flex-col h-full rounded-[2rem] bg-transparent border border-[#111]/10 hover:border-[#8A7961]/50 hover:bg-[#FDFBF7]/50 transition-all duration-500 group">
                <div className="text-[#8A7961] font-serif text-sm italic mb-8">Fáze 03</div>
                <h3 className="text-2xl font-serif mb-2 text-[#111]">Samotná realizace</h3>
                <div className="text-4xl font-light mb-8 text-[#111] mt-4">Individuální</div>
                <div className="h-[1px] w-full bg-[#111]/10 mb-8 group-hover:bg-[#8A7961]/30 transition-colors"></div>
                <ul className="text-[#555] text-sm font-light space-y-4 flex-grow list-none">
                  <li className="flex items-start gap-3"><span className="text-[#8A7961]">✓</span> Přesná kalkulace na korunu</li>
                  <li className="flex items-start gap-3"><span className="text-[#8A7961]">✓</span> Reálná spotřeba materiálu</li>
                  <li className="flex items-start gap-3"><span className="text-[#8A7961]">✓</span> Prémiové kování v základu</li>
                  <li className="flex items-start gap-3"><span className="text-[#8A7961]">✓</span> Precizní výroba a montáž</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. FAQ (Důkladné) */}
      <section id="faq" className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-32 z-10 relative">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-light text-[#111]">Vše, co potřebujete vědět</h2>
          </div>
        </Reveal>
        
        <div className="space-y-2">
          {[
            {
              q: "Jak dlouho trvá realizace zakázky od prvního kontaktu?",
              a: "Standardní doba výroby je 6–10 týdnů od schválení finálního návrhu a zaplacení zálohy. Závisí to na komplexnosti projektu a případných nadstandardních materiálech (speciální dýhy z Itálie nebo kamenné desky na míru)."
            },
            {
              q: "Pracujete jen s masivem, nebo i s laminem?",
              a: "Zpracováváme jak luxusní masiv (dub, ořech, jasan), tak prémiové deskové materiály (Egger, Kronospan). Do luxusních kuchyní často kombinujeme odolné HPL lamináty na korpusy a pravou dýhu na pohledové plochy."
            },
            {
              q: "Dodáváte i spotřebiče k novým kuchyním?",
              a: "Ano. Jako certifikovaní partneři několika značek (Miele, Bosch, Siemens) vám dokážeme dodat spotřebiče za výhodnějších podmínek a zajistíme jejich přesné vestavění a odborné zapojení."
            },
            {
              q: "Děláte i rekonstrukce, nebo jen nový nábytek?",
              a: "Součástí našich služeb u komplexních zakázek je často i příprava instalací (voda, plyn, elektro). Spolupracujeme se stálým týmem řemeslníků, takže vám můžeme dodat interiér na klíč bez vašich starostí."
            },
            {
              q: "Co když chci kamennou desku? Děláte i to?",
              a: "Zajišťujeme kompletní dodávku technického kamene (Technistone), přírodní žuly i keramiky. Zaměření probíhá s absolutní přesností až po finálním ukotvení spodních skříněk naší kuchyně."
            }
          ].map((faq, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <details className="group border-b border-[#111]/10 [&_summary::-webkit-details-marker]:hidden pb-6 mb-6">
                <summary className="w-full cursor-pointer flex items-center justify-between text-xl font-serif text-[#111] list-none hover:text-[#8A7961] transition-colors">
                  {faq.q}
                  <span className="text-2xl font-light group-open:-rotate-45 transition-transform duration-500 origin-center text-[#8A7961]">+</span>
                </summary>
                <div className="pt-4 text-[#666] font-sans font-light leading-relaxed pr-12">
                  {faq.a}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 7. Contact Form / CTA */}
      <section id="kontakt" className="w-full bg-[#F3EFE8] flex flex-col md:flex-row z-10 relative border-t border-[#111]/5">
        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
          <Reveal>
            <div className="w-8 h-[1px] bg-[#111] mb-8"></div>
            <h2 className="text-4xl md:text-6xl font-serif font-light text-[#111] mb-8 leading-[1.1]">
              Začněme váš <br />projekt.
            </h2>
            <p className="text-[#666] font-light mb-12 max-w-md">Každý velký projekt začíná jednoduchým rozhovorem. Zanechte nám zprávu a my se vám obratem ozveme.</p>
            <div className="space-y-6">
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-[#8A7961] font-bold mb-1">E-mail</span>
                <a href="mailto:info@jannovak.cz" className="text-xl font-serif hover:text-[#8A7961] transition-colors">info@jannovak.cz</a>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-[#8A7961] font-bold mb-1">Telefon</span>
                <a href="tel:+420777123456" className="text-xl font-serif hover:text-[#8A7961] transition-colors">+420 777 123 456</a>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-[#8A7961] font-bold mb-1">Adresa dílny</span>
                <span className="text-lg font-light text-[#111]">Dřevařská 12, Praha (pouze po dohodě)</span>
              </div>
            </div>
          </Reveal>
        </div>
        
        <div className="w-full md:w-1/2 bg-[#FDFBF7] p-12 md:p-24 flex flex-col justify-center border-l border-[#111]/5">
          <Reveal delay={0.2}>
            <form className="w-full max-w-md flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-[#111] font-bold">Jméno a příjmení</label>
                <input type="text" className="w-full bg-transparent border-b border-[#111]/20 py-3 outline-none focus:border-[#8A7961] transition-colors font-serif text-lg placeholder-[#111]/20" placeholder="Karel Nový" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-[#111] font-bold">Telefon</label>
                <input type="tel" className="w-full bg-transparent border-b border-[#111]/20 py-3 outline-none focus:border-[#8A7961] transition-colors font-serif text-lg placeholder-[#111]/20" placeholder="735 124 351" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-[#111] font-bold">E-mail</label>
                <input type="email" className="w-full bg-transparent border-b border-[#111]/20 py-3 outline-none focus:border-[#8A7961] transition-colors font-serif text-lg placeholder-[#111]/20" placeholder="vas@email.cz" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-[#111] font-bold">O jaký projekt jde?</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-[#111]/20 py-3 outline-none focus:border-[#8A7961] transition-colors font-serif text-lg resize-none placeholder-[#111]/20" placeholder="Krátce popište svou představu (např. kuchyně na míru, vestavěné skříně...)"></textarea>
              </div>
              <button type="button" className="mt-4 group relative inline-flex items-center justify-center rounded-none bg-[#111] text-white px-8 py-5 font-sans text-xs uppercase tracking-widest font-medium hover:bg-[#8A7961] transition-all duration-500 w-full sm:w-max">
                <span>Odeslat poptávku</span>
                <span className="ml-4 transform group-hover:translate-x-2 transition-transform duration-500">→</span>
              </button>
            </form>
          </Reveal>
        </div>
      </section>


      {/* Footer with Vexx. Design */}
      <footer className="w-full bg-[#FDFBF7] py-16 border-t border-[#111]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col items-center">
          <div className="flex flex-col items-center mb-12">
            <span className="font-serif italic font-medium text-3xl tracking-wide text-[#111] mb-2">Jan Novák</span>
            <span className="text-xs tracking-[0.2em] uppercase text-[#888]">Zakázkové Truhlářství</span>
          </div>
          
          <div className="w-full h-[1px] bg-[#111]/5 mb-12"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
            <p className="text-[#888] text-sm font-light">© 2026 Všechna práva vyhrazena.</p>
            
            <a href="https://vexx.cz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
              <span className="text-[#888] text-xs uppercase tracking-widest font-light">Design by</span>
              <div className="flex items-baseline">
                <span className="font-sans font-bold text-[#111] text-xl tracking-tighter">Vexx</span>
                <span className="text-[#3b82f6] font-bold text-2xl leading-none">.</span>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-body selection:bg-rose-500 selection:text-white min-h-screen bg-[#FFFDF9] text-gray-900">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 rounded-none bg-[#FFFDF9]/90 backdrop-blur-xl border-b border-rose-500/20 flex justify-between items-center px-6 md:px-12 py-6 transition-all">
        <div className="font-headline text-3xl font-bold tracking-tighter text-rose-600 uppercase">AURA</div>
        <div className="hidden md:flex gap-12">
          <a className="font-serif text-lg tracking-tight text-gray-900 border-b border-transparent hover:border-rose-500 hover:text-rose-600 transition-colors duration-300" href="#colecao">Coleção</a>
          <a className="font-serif text-lg tracking-tight text-gray-900 border-b border-transparent hover:border-rose-500 hover:text-rose-600 transition-colors duration-300" href="#lookbook">Lookbook</a>
          <a className="font-serif text-lg tracking-tight text-gray-900 border-b border-transparent hover:border-rose-500 hover:text-rose-600 transition-colors duration-300" href="#sobre">Sobre Nós</a>
        </div>
        <div className="flex items-center gap-6 text-gray-900">
          <button className="hover:text-rose-600 transition-all duration-500 active:opacity-70 active:scale-95">
            <span className="material-symbols-outlined font-light text-[26px]">shopping_bag</span>
          </button>
          <button 
            className="hover:text-rose-600 transition-all duration-500 active:opacity-70 active:scale-95 z-50 relative"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="material-symbols-outlined font-light text-[30px]">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>

      {/* Full Screen Menu */}
      <div 
        className={`fixed inset-0 bg-rose-600/95 backdrop-blur-2xl z-40 transition-all duration-700 ease-in-out flex items-center justify-center ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center gap-12 text-center">
          {Object.entries({'#colecao': 'Coleções', '#lookbook': 'Lookbook', '#sobre': 'Sobre a Marca', '#lojas': 'Lojas Físicas', '#contato': 'Fale Conosco'}).map(([link, title], idx) => (
            <a 
              key={idx} 
              href={link} 
              className="font-headline text-5xl md:text-7xl text-white/80 hover:text-white hover:scale-110 transition-all duration-500 drop-shadow-lg"
              onClick={() => setMenuOpen(false)}
            >
              {title}
            </a>
          ))}
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 via-transparent to-[#FFFDF9]/10 z-10"></div>
        <img 
          alt="Hero Fashion" 
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.9]" 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
        />
        <div className="relative z-20 text-center space-y-8 px-6 mt-24">
          <h1 className="font-headline text-6xl md:text-9xl font-bold tracking-tighter text-white drop-shadow-2xl">
            Cores do Verão
          </h1>
          <p className="font-label text-white font-medium uppercase tracking-[0.3rem] text-sm md:text-base drop-shadow-md">
            Nova Coleção Resort 2026
          </p>
          <div className="pt-8 bg-">
            <button className="px-12 py-4 bg-white text-rose-600 font-bold text-xs uppercase tracking-widest transition-all duration-500 shadow-xl hover:bg-rose-600 hover:text-white hover:border-transparent border border-transparent">
              Explorar Coleção
            </button>
          </div>
        </div>
      </section>

      {/* Collection: Product Grid */}
      <section id="colecao" className="py-24 md:py-32 px-6 md:px-12 bg-[#FFFDF9]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-rose-200 pb-8">
          <h2 className="font-headline text-5xl md:text-6xl text-rose-600 font-bold">Destaques</h2>
          <span className="font-label text-rose-400 font-semibold text-xs uppercase tracking-[0.2rem]">Peças Selecionadas</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {/* Product 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] overflow-hidden bg-rose-50 mb-6 p-[0.3rem] rounded-xl shadow-sm group-hover:shadow-xl transition-all duration-500">
              <img alt="Vestido Coral" className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1500&auto=format&fit=crop" />
            </div>
            <div className="flex justify-between items-start px-2">
              <div>
                <h3 className="font-body text-sm text-gray-900 font-bold">VESTIDO EVASÊ CORAL</h3>
                <p className="font-label text-rose-500 text-[11px] mt-1 font-medium">LINHO MISTO</p>
              </div>
              <span className="font-body text-sm text-gray-900 font-bold">R$ 1.250</span>
            </div>
          </div>
          {/* Product 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] overflow-hidden bg-rose-50 mb-6 p-[0.3rem] rounded-xl shadow-sm group-hover:shadow-xl transition-all duration-500">
              <img alt="Blusa Seda" className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1500&auto=format&fit=crop" />
            </div>
            <div className="flex justify-between items-start px-2">
              <div>
                <h3 className="font-body text-sm text-gray-900 font-bold">CONJUNTO SEDA ESTAMPADA</h3>
                <p className="font-label text-rose-500 text-[11px] mt-1 font-medium">FLORAL EXCLUSIVO</p>
              </div>
              <span className="font-body text-sm text-gray-900 font-bold">R$ 890</span>
            </div>
          </div>
          {/* Product 3 */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] overflow-hidden bg-rose-50 mb-6 p-[0.3rem] rounded-xl shadow-sm group-hover:shadow-xl transition-all duration-500">
              <img alt="Bolsa Couro" className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1500&auto=format&fit=crop" />
            </div>
            <div className="flex justify-between items-start px-2">
              <div>
                <h3 className="font-body text-sm text-gray-900 font-bold">JAQUETA COURO AMARELO</h3>
                <p className="font-label text-rose-500 text-[11px] mt-1 font-medium">COLEÇÃO ATELIÊ</p>
              </div>
              <span className="font-body text-sm text-gray-900 font-bold">R$ 2.400</span>
            </div>
          </div>
          {/* Product 4 */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] overflow-hidden bg-rose-50 mb-6 p-[0.3rem] rounded-xl shadow-sm group-hover:shadow-xl transition-all duration-500">
              <img alt="Conjunto Verão" className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1500&auto=format&fit=crop" />
            </div>
            <div className="flex justify-between items-start px-2">
              <div>
                <h3 className="font-body text-sm text-gray-900 font-bold">VESTIDO TÚNICA ESMERALDA</h3>
                <p className="font-label text-rose-500 text-[11px] mt-1 font-medium">ALGODÃO EGÍPCIO</p>
              </div>
              <span className="font-body text-sm text-gray-900 font-bold">R$ 750</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Us (Sobre Nós) Section - Brand New */}
      <section id="sobre" className="py-24 bg-rose-600 text-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="font-headline text-5xl md:text-6xl font-bold">
              Nosso Manifesto
            </h2>
            <p className="font-body text-lg md:text-xl font-light leading-relaxed text-rose-50">
              A **AURA** nasceu da crença de que a moda não é apenas sobre vestir, mas sobre sentir e expressar sua verdadeira essência de forma vibrante. 
            </p>
            <p className="font-body text-lg md:text-xl font-light leading-relaxed text-rose-50">
              Nossas peças são desenhadas com inspiração nas cores quentes do mediterrâneo, capturando a energia do sol e a suavidade da seda, garantindo luxo sustentável e designs únicos que dialogam com a mulher moderna, forte e que não tem medo de usar cores.
            </p>
            <button className="mt-8 px-10 py-4 bg-white text-rose-600 font-bold text-xs uppercase tracking-widest hover:bg-rose-50 transition-colors shadow-lg rounded-full">
              Conheça Nossa História
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              <img alt="Ateliê Aura" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1500&auto=format&fit=crop" />
              <div className="absolute inset-0 bg-rose-900/10 hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Silhouette: Editorial Mosaic */}
      <section id="lookbook" className="py-24 md:py-48 px-6 md:px-12 bg-[#FFFDF9]">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center">
          <div className="grid grid-cols-12 gap-4 md:gap-8 items-start w-full">
            {/* Main Editorial Image */}
            <div className="col-span-12 lg:col-span-7 mb-12 lg:mb-0">
              <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                <img alt="Editorial Main" className="w-full h-[60vh] md:h-[80vh] object-cover hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1500&auto=format&fit=crop" />
                <div className="absolute inset-x-0 bottom-0 top-[50%] bg-gradient-to-t from-rose-900/90 via-rose-900/40 to-transparent flex items-end p-8 md:p-12">
                  <h3 className="font-headline text-5xl md:text-7xl font-bold leading-none text-white drop-shadow-md">Vibração<br />Essencial</h3>
                </div>
              </div>
            </div>
            {/* Secondary Cluster */}
            <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-4 md:gap-8">
              <div className="col-span-2 aspect-[16/10] overflow-hidden rounded-2xl shadow-lg">
                <img alt="Detail shot" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1500&auto=format&fit=crop" />
              </div>
              <div className="col-span-1 aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                <img alt="Texture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1500&auto=format&fit=crop" />
              </div>
              <div className="col-span-1 pt-4 md:pt-12 px-2">
                <p className="font-body text-sm text-gray-600 leading-relaxed mb-6 font-medium">
                  Uma curadoria de formas e contrastes. Exploramos os limites das cores quentes para celebrar o empoderamento feminino e a estética maximalista.
                </p>
                <a className="font-label text-[11px] font-bold uppercase tracking-[0.2rem] text-rose-600 border-b-2 border-rose-300 pb-1 inline-block hover:border-rose-600 hover:text-rose-800 transition-colors" href="#">Ver Editorial</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 w-full flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-16 gap-8">
        <div className="font-headline text-3xl font-bold tracking-tighter text-rose-600">AURA</div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <a className="font-sans text-[11px] uppercase font-bold tracking-[0.1rem] text-gray-500 hover:text-rose-600 transition-colors duration-300" href="#">Newsletter</a>
          <a className="font-sans text-[11px] uppercase font-bold tracking-[0.1rem] text-gray-500 hover:text-rose-600 transition-colors duration-300" href="#">Privacidade</a>
          <a className="font-sans text-[11px] uppercase font-bold tracking-[0.1rem] text-gray-500 hover:text-rose-600 transition-colors duration-300" href="#">Termos</a>
          <a className="font-sans text-[11px] uppercase font-bold tracking-[0.1rem] text-gray-500 hover:text-rose-600 transition-colors duration-300" href="#">Envios e Devoluções</a>
        </div>
        <div className="font-sans text-[11px] font-bold uppercase tracking-[0.1rem] text-gray-400">
          © 2026 AURA ATELIÊ. TODOS OS DIREITOS RESERVADOS.
        </div>
      </footer>
    </div>
  );
}

export default App;

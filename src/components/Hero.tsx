import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Image with Parallax & Grayscale */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        {/* Usando Imagem Exclusiva de Moda (Mais robusta no Unsplash) */}
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
          alt="High fashion model" 
          className="w-full h-full object-cover grayscale opacity-60"
        />
        <div className="dark-overlay" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center mt-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="uppercase tracking-[0.3em] text-xs text-white/70 mb-6 block"
        >
          Collection 2026
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="playfair text-6xl md:text-8xl lg:text-9xl text-white font-medium tracking-tight mb-8"
        >
          Noir 
          <span className="italic block mt-2 text-white/90">Elegance</span>
        </motion.h1>
        
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.2, duration: 1 }}
        >
          <button className="group relative overflow-hidden bg-white text-black px-8 py-4 uppercase tracking-widest text-xs font-semibold hover:bg-white/90 transition-all duration-300">
            <span className="relative z-10 transition-colors group-hover:text-white">Discover the Collection</span>
            <div className="absolute inset-0 h-full w-0 bg-black transition-all duration-500 ease-out group-hover:w-full z-0"></div>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 48] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full h-1/2 bg-white absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}

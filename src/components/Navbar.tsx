import { ShoppingBag, Search, Menu, User, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 mix-blend-difference text-white"
      >
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-white/70 transition-colors"
          >
            <Menu className="w-5 h-5 md:w-5 md:h-5" strokeWidth={1.5} />
            <span className="hidden md:block">Menu</span>
          </button>
        </div>

        <a href="/" className="playfair text-2xl tracking-widest absolute left-1/2 -translate-x-1/2 uppercase font-medium">
          Sartorial
        </a>

        <div className="flex items-center gap-6">
          <button className="hidden md:block hover:text-white/70 transition-colors">
            <Search className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button className="hidden md:block hover:text-white/70 transition-colors">
            <User className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button className="hover:text-white/70 transition-colors relative">
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            <span className="absolute -top-1 -right-2 text-[10px] bg-white text-black w-4 h-4 rounded-full flex items-center justify-center font-medium">0</span>
          </button>
        </div>
      </motion.nav>

      {/* Full-screen Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-black text-white flex flex-col p-6 md:p-12"
          >
            <div className="flex justify-between items-center w-full">
              <span className="playfair text-2xl tracking-widest uppercase font-medium select-none">Sartorial</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-white/60 transition-colors flex items-center gap-2 uppercase tracking-widest text-sm"
              >
                <span className="hidden md:block">Close</span>
                <X strokeWidth={1.5} className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center items-center md:items-start max-w-4xl mx-auto w-full gap-8">
              <nav className="flex flex-col gap-6 md:gap-8 text-center md:text-left">
                {['The Archive', 'New Arrivals', 'Essentials', 'Footwear', 'Accessories', 'Journal'].map((item, i) => (
                  <motion.a 
                    key={item}
                    href="#"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="playfair text-4xl md:text-6xl lg:text-7xl font-medium text-white/70 hover:text-white hover:italic transition-all duration-300"
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>
            </div>
            
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col md:flex-row justify-between items-center text-xs text-white/40 tracking-widest uppercase gap-4"
            >
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">Pinterest</a>
                    <a href="#" className="hover:text-white transition-colors">Client Services</a>
                </div>
                <span>© {new Date().getFullYear()} Sartorial</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

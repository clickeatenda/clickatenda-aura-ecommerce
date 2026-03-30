import { motion } from 'framer-motion';

export function Lookbook() {
  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="md:col-span-5 order-2 md:order-1 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="playfair text-5xl md:text-6xl lg:text-7xl font-medium leading-none mb-8">
                The <br/>
                <span className="italic text-white/70">Silhouette</span>
              </h2>
              <p className="text-white/60 mb-10 max-w-md leading-relaxed">
                Form follows void. Exploring the intersection between minimalist structure and the organic movement of the human body. Every fold, every seam is calculated to create a monumental presence.
              </p>
              <button className="pb-2 border-b border-white uppercase text-xs tracking-[0.2em] font-medium hover:text-white/70 hover:border-white/70 transition-colors">
                Explore Editorial
              </button>
            </motion.div>
          </div>

          {/* Asymmetric Imagery */}
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4 md:gap-8 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="aspect-[4/5] overflow-hidden"
              >
                <img 
                   src="https://images.unsplash.com/photo-1550614000-4b95d466f911?q=80&w=1000&auto=format&fit=crop" 
                   alt="Editorial Close up" 
                   className="w-full h-full object-cover img-noir hover:scale-105 transition-transform duration-[2s]"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="aspect-square overflow-hidden mt-12 md:mt-24"
              >
                <img 
                   src="https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?q=80&w=1000&auto=format&fit=crop" 
                   alt="Editorial Full length" 
                   className="w-full h-full object-cover img-noir hover:scale-105 transition-transform duration-[2s]"
                />
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

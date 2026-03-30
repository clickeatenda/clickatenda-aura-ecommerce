import { ArrowDownRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function BrandStory() {
  return (
    <section className="py-32 bg-[#0a0a0a] text-white/80 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 max-w-5xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h3 className="playfair text-3xl mb-8">Uncompromising <br/> Quality</h3>
            <p className="text-sm leading-relaxed mb-6">
              Our garments are not merely assembled; they are architected. We source the finest materials from heritage mills across Italy and Japan, ensuring each thread contributes to a lifetime of wear.
            </p>
            <p className="text-sm leading-relaxed mb-10 text-white/50">
              The Sartorial ethos rejects the ephemeral nature of seasonal trends. Instead, we focus on permanence—silhouettes that endure, fabrics that build character, and construction that withstands the test of time.
            </p>
            
            <a href="#" className="flex items-center gap-4 group w-full md:w-max border border-white/20 p-4 hover:bg-white hover:text-black transition-colors duration-300">
              <span className="text-xs uppercase tracking-widest font-semibold flex-1">Read Our Manifesto</span>
              <ArrowDownRight className="w-4 h-4 " />
            </a>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.2 }}
             className="relative aspect-square md:aspect-auto md:h-full bg-white/5 flex items-center justify-center p-12"
          >
            {/* Subtle brand mark or abstract graphic */}
            <div className="h-full w-full border border-white/10 rounded-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-x-0 h-[1px] bg-white/10" />
                <div className="absolute inset-y-0 w-[1px] bg-white/10" />
                <div className="h-3/4 w-3/4 border border-white/20 rounded-full flex items-center justify-center">
                    <span className="playfair text-6xl italic text-white/20">S</span>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

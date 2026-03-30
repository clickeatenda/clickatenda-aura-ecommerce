import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const products = [
  { id: 1, name: 'Obsidian Overcoat', price: '$890', category: 'Outerwear', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, name: 'Silk Noir Dress', price: '$1,200', category: 'Dresses', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, name: 'Tailored Ash Trousers', price: '$450', category: 'Bottoms', image: 'https://images.unsplash.com/photo-1434389678232-040cb2a6234f?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, name: 'Cashmere Monolith', price: '$600', category: 'Knitwear', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop' }
];

export function FeaturedCollection() {
  return (
    <section className="py-32 bg-[#050505] text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="uppercase tracking-[0.2em] text-xs text-white/50 mb-4 block">Archive 01</span>
            <h2 className="playfair text-4xl md:text-5xl font-medium">Featured Pieces</h2>
          </div>
          <a href="#" className="uppercase text-xs tracking-widest border-b border-white hover:text-white/70 transition-colors pb-1">
            View the Full Archive
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
            >
              {/* Image Container with Reveal Effect */}
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-white/5">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
                />
                
                {/* Overlay UI elements triggered on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] glass-panel border-x-0 border-b-0 border-t-white/20">
                  <button className="w-full flex items-center justify-between text-white uppercase text-xs tracking-widest font-medium group/btn">
                    <span>Quick Add</span>
                    <ShoppingBag className="w-4 h-4 text-white/70 group-hover/btn:text-white transition-colors" />
                  </button>
                </div>
              </div>

              {/* Product Meta */}
              <div className="flex items-center justify-between font-medium">
                <div>
                  <h3 className="text-sm tracking-wide mb-1">{product.name}</h3>
                  <span className="text-xs text-white/50">{product.category}</span>
                </div>
                <span className="text-sm">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

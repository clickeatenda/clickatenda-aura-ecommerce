import { ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-2">
            <h2 className="playfair text-3xl mb-6">Sartorial</h2>
            <p className="text-white/60 text-sm max-w-sm leading-relaxed mb-8">
              Elevating the everyday through uncompromising craftsmanship and minimalist aesthetics. Curated for the modern vanguard.
            </p>
            <div className="flex items-center border-b border-white/20 pb-2 max-w-sm">
              <input 
                type="email" 
                placeholder="Subscribe to our newsletter" 
                className="bg-transparent border-none outline-none w-full text-sm placeholder:text-white/40"
              />
              <button className="text-white hover:text-white/70 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="uppercase text-xs tracking-widest font-semibold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Essentials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Editorials</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="uppercase text-xs tracking-widest font-semibold mb-6">Customer Care</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Sartorial. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

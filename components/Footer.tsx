
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-section-alt-dark text-white py-10 relative overflow-hidden border-t border-border-dark">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-auto items-center justify-center">
              <img
                src="assets/vsd-logo.png"
                alt="VSD Logo"
                className="brand-logo w-auto object-contain brightness-110 drop-shadow-[0_0_8px_rgba(19,236,236,0.5)]"
              />
            </div>
            {/* <span className="font-bold text-slate-300 tracking-tighter">VSD</span> */}
          </div>

          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>

          <p>© 2024 VSD Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

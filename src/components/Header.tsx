'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const properties = [
  { name: 'Sector 51 — Flagship Property', href: '/properties/sector-51' },
  { name: 'Sector 46 — Comfort Retreat', href: '/properties/sector-46' },
  { name: 'Sector 42 — Urban Connect', href: '/properties/sector-42' },
  { name: 'Sector 45 — Boutique Hotel', href: '/properties/sector-45' },
];

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Properties', href: '/properties', children: properties },
  { name: 'Amenities', href: '/amenities' },
  { name: 'Dining', href: '/dining' },
  { name: 'Events', href: '/events' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top contact bar */}
      <div className="animate-topbar bg-navy text-white text-xs py-2.5 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a href="tel:+917011080455" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-3 h-3" /> +91 70110 80455
            </a>
            <a href="mailto:devang@imperialstayz.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-3 h-3" /> devang@imperialstayz.com
            </a>
          </div>
          <span className="text-gold-light italic tracking-wider font-jost">Where Elegance Meets Comfort</span>
        </div>
      </div>

      {/* Main header */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'glass shadow-lg' : 'bg-white/95 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 bg-primary rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-base font-jost">IS</span>
              </div>
              <div>
                <span className="text-lg font-semibold text-navy font-jost leading-tight block">Imperial Stayz</span>
                <span className="text-[9px] text-gold tracking-[0.25em] uppercase font-jost block">Premium Hotels · Gurugram</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setDropdownOpen(item.name)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <Link
                    href={item.href}
                    className="nav-link px-3.5 py-2 text-[13px] font-medium text-gray-700 hover:text-primary transition-colors font-jost uppercase tracking-wider flex items-center gap-1"
                  >
                    {item.name}
                    {item.children && <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${dropdownOpen === item.name ? 'rotate-180' : ''}`} />}
                  </Link>

                  {item.children && dropdownOpen === item.name && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="bg-white shadow-xl rounded-xl py-2 min-w-[280px] border border-gray-100">
                        <div className="px-4 py-2 border-b border-gray-100">
                          <span className="text-[10px] font-semibold text-gold uppercase tracking-[0.15em] font-jost">Gurugram Properties</span>
                        </div>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-primary hover:text-white transition-colors font-jost"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Book Now + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/booking"
                className="hidden lg:inline-flex bg-primary text-white px-7 py-2.5 rounded-lg text-[13px] font-semibold uppercase tracking-wider hover:bg-primary-dark transition-colors font-jost shadow-md"
              >
                Book Now
              </Link>
              <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-700" aria-label="Menu">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => !item.children && setIsOpen(false)}
                    className="block px-4 py-3.5 min-h-[44px] flex items-center text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg font-jost uppercase tracking-wider"
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-6 space-y-1 pb-2">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-gray-500 hover:text-primary font-jost">
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3">
                <Link href="/booking" onClick={() => setIsOpen(false)} className="block w-full text-center bg-primary text-white px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider font-jost">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

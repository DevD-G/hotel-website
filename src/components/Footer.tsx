'use client';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold font-jost">IS</span>
              </div>
              <div>
                <span className="text-lg font-semibold font-jost block">Imperial Stayz</span>
                <span className="text-[9px] text-gold tracking-[0.25em] uppercase font-jost block">Premium Hotels</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Where Elegance Meets Comfort. Premium properties across Gurugram&apos;s prime sectors,
              offering well-appointed rooms designed for corporate and extended stays.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-7 font-jost uppercase tracking-widest text-white/70">Quick Links</h4>
            <ul className="space-y-3.5">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Properties', href: '/properties' },
                { name: 'Rooms & Suites', href: '/rooms' },
                { name: 'Amenities', href: '/amenities' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-gold transition-colors text-sm">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h4 className="text-sm font-semibold mb-7 font-jost uppercase tracking-widest text-white/70">Our Properties</h4>
            <ul className="space-y-3.5">
              {[
                { name: 'Sector 51 — Flagship', href: '/properties/sector-51' },
                { name: 'Sector 46 — Comfort Retreat', href: '/properties/sector-46' },
                { name: 'Sector 42 — Urban Connect', href: '/properties/sector-42' },
                { name: 'Sector 45 — Boutique Hotel', href: '/properties/sector-45' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-gold transition-colors text-sm">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-7 font-jost uppercase tracking-widest text-white/70">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <a href="https://share.google/rxVTNbdbg3tyOOVp3" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm leading-relaxed hover:text-gold transition-colors">
                  1210P, Sector 51, Gurugram, Haryana, 122018
                </a>
              </li>
              <li>
                <a href="tel:+917011080455" className="flex gap-3 text-gray-400 hover:text-white transition-colors">
                  <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.04)' }}>
                    <Phone className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-sm self-center">+91 70110 80455</span>
                </a>
              </li>
              <li>
                <a href="mailto:devang@imperialstayz.com" className="flex gap-3 text-gray-400 hover:text-white transition-colors">
                  <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.04)' }}>
                    <Mail className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-sm self-center">devang@imperialstayz.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs tracking-wider font-jost">&copy; {new Date().getFullYear()} Imperial Stayz. All Rights Reserved.</p>
          <div className="flex gap-4 sm:gap-8">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-white transition-colors text-xs tracking-wider font-jost">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="text-gray-500 hover:text-white transition-colors text-xs tracking-wider font-jost">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

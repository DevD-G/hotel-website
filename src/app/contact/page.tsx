'use client';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { MapPin, Phone, Mail, Clock, Building2, ArrowRight } from 'lucide-react';

const locations = [
  { name: 'Sector 51 - Flagship', address: '1210P, Sector 51, Gurugram, Haryana, 122018', mapNum: 39, mapLabel: 'Sector 51 Exterior' },
  { name: 'Sector 46 - Comfort Retreat', address: 'Sector 46, Gurugram, Haryana', mapNum: 32, mapLabel: 'Sector 46 Exterior' },
  { name: 'Sector 42 - Urban Connect', address: 'Sector 42, Gurugram, Haryana', mapNum: 46, mapLabel: 'Sector 42 Exterior' },
  { name: 'Sector 45 - Boutique Hotel', address: 'Sector 45, Gurugram, Haryana', mapNum: 24, mapLabel: 'Sector 45 Exterior' },
];

const contactInfo = [
  { icon: Phone, title: 'Phone', value: '+91 70110 80455', href: 'tel:+917011080455' },
  { icon: Mail, title: 'Email', value: 'devang@imperialstayz.com', href: 'mailto:devang@imperialstayz.com' },
  { icon: MapPin, title: 'Head Office', value: '1210P, Sector 51, Gurugram, Haryana, 122018', href: 'https://share.google/rxVTNbdbg3tyOOVp3' },
  { icon: Clock, title: 'Working Hours', value: '24/7 — We never close', href: '' },
];

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative" style={{ height: 400 }}>
        <ImagePlaceholder number={102} label="Contact Page Hero - Reception" className="w-full h-full !rounded-none" aspect="" />
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))' }}>
          <div className="text-center text-white px-6">
            <p className="section-divider text-gold text-xs uppercase tracking-[0.3em] mb-4 font-jost">Get in Touch</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-jost">Contact Us</h1>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — Info */}
          <div>
            <h2 className="text-2xl font-semibold text-navy font-jost mb-3">We&apos;d Love to Hear From You</h2>
            <p className="text-gray-500 leading-relaxed mb-6 text-sm">
              Whether you&apos;re looking to book a room, plan a corporate event, set up a corporate tie-up, or just have a question — we&apos;re here to help.
            </p>

            {/* Compact contact cards — 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {contactInfo.map((c, i) => {
                const inner = (
                  <div className="flex items-center gap-3 p-4 bg-light-gray rounded-xl hover:shadow-sm transition-shadow">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shrink-0">
                      <c.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold text-navy font-jost uppercase tracking-wider">{c.title}</div>
                      <div className="text-sm text-gray-500 truncate">{c.value}</div>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="hover:text-primary transition-colors">{inner}</a>
                ) : (
                  <div key={i}>{inner}</div>
                );
              })}
            </div>

            {/* Corporate enquiries */}
            <div className="bg-cream p-5 rounded-xl border-l-4 border-gold">
              <h3 className="font-semibold text-navy font-jost mb-1 text-sm flex items-center gap-2">
                <Building2 className="w-4 h-4 text-primary" /> Corporate Enquiries
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">For B2B partnerships, corporate tie-ups, and bulk bookings, contact Devang Gupta, Managing Partner, directly at +91 70110 80455 or devang@imperialstayz.com</p>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white rounded-2xl shadow-lg p-7 border border-gray-100">
            <h3 className="text-lg font-semibold text-navy font-jost mb-5">Send Us a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5 font-jost">Full Name *</label>
                  <input type="text" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50/50 focus:border-primary focus:outline-none focus:bg-white transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5 font-jost">Email *</label>
                  <input type="email" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50/50 focus:border-primary focus:outline-none focus:bg-white transition-all" placeholder="john@company.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5 font-jost">Phone</label>
                  <input type="tel" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50/50 focus:border-primary focus:outline-none focus:bg-white transition-all" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5 font-jost">Subject</label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50/50 focus:border-primary focus:outline-none focus:bg-white transition-all cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Room Booking</option>
                    <option>Corporate Tie-Up</option>
                    <option>Event Booking</option>
                    <option>Feedback</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5 font-jost">Message *</label>
                <textarea rows={4} required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50/50 focus:border-primary focus:outline-none focus:bg-white transition-all resize-none" placeholder="Tell us how we can help..." />
              </div>
              <button type="submit" className="w-full bg-primary text-white py-3.5 rounded-xl font-semibold uppercase tracking-wider text-sm hover:bg-primary-dark transition-colors font-jost flex items-center justify-center gap-2 shadow-md">
                Send Message <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 px-6 bg-light-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-divider text-gold text-xs uppercase tracking-[0.3em] mb-4 font-jost">Find Us</p>
            <h2 className="text-3xl font-semibold text-navy font-jost">Our Locations</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {locations.map((loc) => (
              <a key={loc.name} href="https://share.google/rxVTNbdbg3tyOOVp3" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                <ImagePlaceholder number={loc.mapNum} label={loc.mapLabel} className="w-full h-36 !rounded-none" aspect="" />
                <div className="p-4">
                  <h3 className="font-semibold text-navy font-jost text-sm mb-1 group-hover:text-primary transition-colors">{loc.name}</h3>
                  <p className="text-xs text-gray-400 flex items-start gap-1.5">
                    <MapPin className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                    {loc.address}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

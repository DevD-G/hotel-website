'use client';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { Building2, Users, Award, Zap, Shield, Utensils, Clock, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative" style={{ height: 350 }}>
        <ImagePlaceholder number={15} label="About Page Hero - Hotel Exterior" className="w-full h-full !rounded-none" aspect="" />
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))' }}>
          <div className="text-center text-white px-6">
            <p className="section-divider text-gold text-xs uppercase tracking-[0.3em] mb-4 font-jost">About Us</p>
            <h1 className="text-4xl md:text-5xl font-semibold font-jost">Our Story</h1>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-divider text-gold text-xs uppercase tracking-[0.3em] mb-4 font-jost justify-start">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-navy font-jost mb-6 leading-tight">Imperial Stayz: Elevating Your Corporate Experience</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Imperial Stayz is a fast-expanding premium hotel chain headquartered in Gurugram, Haryana.
              Founded with a vision to redefine corporate hospitality, we operate distinct property hubs
              strategically mapped across Gurugram&apos;s prime sectors to serve every commercial district.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Our consolidated portfolio of well-appointed, premium rooms is designed specifically for
              corporate and extended stays. Each property maintains standardized excellence while offering
              unique differentiators tailored to specific guest needs.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              We don&apos;t just offer rooms — we create experiences that bring guests back. From in-house
              commercial kitchens and unique event spaces to 24/7 reliability and seamless corporate billing,
              every aspect of Imperial Stayz is engineered for the modern business traveler.
            </p>
            <div className="bg-cream p-6 rounded-xl border-l-4 border-gold">
              <p className="italic text-navy font-jost text-lg">
                &ldquo;We don&apos;t just offer rooms — we create experiences that bring guests back.&rdquo;
              </p>
              <p className="text-sm text-gray-500 mt-2">— Devang Gupta, Managing Partner</p>
            </div>
          </div>
          <div className="space-y-4">
            <ImagePlaceholder number={16} label="About - Lobby Reception" className="w-full h-72 shadow-xl" aspect="" />
            <div className="grid grid-cols-2 gap-4">
              <ImagePlaceholder number={17} label="About - Room Interior" className="w-full h-40" aspect="" />
              <ImagePlaceholder number={18} label="About - Dining Area" className="w-full h-40" aspect="" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { icon: Building2, val: 'Multi', label: 'Premium Properties' },
            { icon: Users, val: 'Many', label: 'Rooms Across Gurugram' },
            { icon: Award, val: '4.6/5', label: 'Google Reviews Rating' },
            { icon: Zap, val: '8.3/10', label: 'Booking.com Score' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <s.icon className="w-8 h-8 mb-3 text-white" />
              <div className="text-3xl font-bold font-jost">{s.val}</div>
              <div className="text-sm text-white/80 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Standardization */}
      <section className="py-24 px-6 bg-light-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-divider text-gold text-xs uppercase tracking-[0.3em] mb-4 font-jost">Our Standards</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-navy font-jost">Standardized Excellence Across All Properties</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: '24/7 Reliability', desc: 'Uninterrupted power backup generators and dedicated 24-hour on-site property managers to ensure seamless, flawless operations.' },
              { icon: Shield, title: 'Arrival & Infrastructure', desc: 'Ample, secure parking spaces and comprehensive 24/7 CCTV surveillance at every single location.' },
              { icon: Target, title: 'High-Speed Tech & Comfort', desc: 'Complimentary high-speed Wi-Fi, Smart LED TVs, and climate-controlled environments in every room.' },
              { icon: Utensils, title: 'Kitchen Confidence', desc: 'In-house commercial kitchens at ALL properties maintaining strict, standardized food quality and operational hygiene.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-500 text-center flex flex-col border border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-navy font-jost mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed flex-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Validation & Trust */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-divider text-gold text-xs uppercase tracking-[0.3em] mb-4 font-jost">Trust & Recognition</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-navy font-jost mb-12">Validation & Trust: The Blueprint in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-navy font-jost mb-2">4.6/5</div>
              <div className="text-gold font-semibold mb-1">★★★★☆</div>
              <div className="text-gray-500 text-sm">Google Reviews</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-navy font-jost mb-2">8.3/10</div>
              <div className="text-primary font-semibold mb-1">Excellent</div>
              <div className="text-gray-500 text-sm">Booking.com</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm">Also highly rated across TripAdvisor (4/5), MakeMyTrip, and Goibibo.</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
            <div className="bg-cream p-4 rounded-xl"><strong className="block text-navy font-jost">Culinary</strong>Amazing Food</div>
            <div className="bg-cream p-4 rounded-xl"><strong className="block text-navy font-jost">Operations</strong>Impeccable Cleanliness</div>
            <div className="bg-cream p-4 rounded-xl"><strong className="block text-navy font-jost">Logistics</strong>Prime Location</div>
            <div className="bg-cream p-4 rounded-xl"><strong className="block text-navy font-jost">Hospitality</strong>Supportive Staff</div>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import BookingWidget from '@/components/BookingWidget';
import {
  Wifi, Car, Shield, Utensils, Tv, Snowflake, Clock, Coffee, Star,
  ChevronDown, ChevronLeft, ChevronRight, MapPin, Phone, Building2, Users, Award, Zap,
  ArrowRight
} from 'lucide-react';

const properties = [
  { slug: 'sector-51', name: 'Sector 51', tag: 'Flagship Property', rooms: 16, type: 'Business Hotel', desc: 'Functional, quiet corporate base. Direct access to NH-48 corridor, near Sector 53-54 commercial belt.', diff: '1RK Deluxe & Studio Rooms', imgLabel: 'Sector 51 Room', imgNum: 7 },
  { slug: 'sector-46', name: 'Sector 46', tag: 'Comfort Retreat', rooms: 24, type: 'Comfort Stay', desc: 'Calm, established residential comfort. Near Sector 46 Rapid Metro, 10 mins from Artemis Hospital.', diff: 'Elegant Residential Rooms', imgLabel: 'Sector 46 Room', imgNum: 6 },
  { slug: 'sector-42', name: 'Sector 42', tag: 'Urban Connect', rooms: 16, type: 'Comfort Stay', desc: 'Centralized, high-energy urban access. 5 mins from IFFCO Chowk Metro, 10 mins from DLF Cyber Hub.', diff: 'Premium Terrace + Hotel-Style Rooms', imgLabel: 'Sector 42 Exterior', imgNum: 8 },
  { slug: 'sector-45', name: 'Sector 45', tag: 'Boutique Hotel', rooms: 18, type: 'Boutique Hotel', desc: 'Premium urban convenience. 2 mins from Galleria Market, 5 mins from Fortis Memorial Hospital, near DLF Phase IV.', diff: 'Roof + Banquet Hall Facility', imgLabel: 'Sector 45 Exterior', imgNum: 5 },
];

const amenities = [
  { icon: Wifi, title: 'High-Speed WiFi', desc: 'Complimentary high-speed internet in every room and common area' },
  { icon: Car, title: 'Secure Parking', desc: 'Ample, secure parking spaces at every location' },
  { icon: Shield, title: '24/7 CCTV', desc: 'Comprehensive surveillance for your safety and peace of mind' },
  { icon: Utensils, title: 'In-Room Dining', desc: 'Prompt 24/7 in-room dining from our in-house commercial kitchen' },
  { icon: Tv, title: 'Smart LED TV', desc: 'Smart LED TVs in every room with streaming access' },
  { icon: Snowflake, title: 'Climate Control', desc: 'Individual climate-controlled environments for your comfort' },
  { icon: Clock, title: '24/7 Front Desk', desc: 'Round-the-clock front desk with dedicated property managers' },
  { icon: Coffee, title: 'Corporate Catering', desc: 'Customized catering for banquets, meetings & networking events' },
];

const testimonials = [
  { name: 'Rajesh Mehta', role: 'VP Operations, TechCorp India', text: 'Imperial Stayz has been our go-to accommodation partner for visiting executives. The rooms are immaculate, the food is outstanding, and the location in Sector 45 is unbeatable for Gurugram business travel.', rating: 5 },
  { name: 'Priya Sharma', role: 'Travel Manager, ConsultPro', text: 'We shifted our entire corporate housing to Imperial Stayz last quarter. The 1RK rooms in Sector 51 are perfect for our project teams on extended deployments. Corporate tie-ups make procurement seamless.', rating: 5 },
  { name: 'Amit Kapoor', role: 'Family Guest', text: 'We chose the Sector 46 property for a medical visit to Medanta. The calm, residential vibe and the warmth of the staff made a stressful time much more bearable. Highly recommend for families.', rating: 4 },
];

const faqs = [
  { q: 'Where are Imperial Stayz properties located?', a: 'Imperial Stayz operates distinct property hubs strategically located across Gurugram — in Sector 45 (Flagship), Sector 46 (Comfort Retreat), Sector 51 (Business Hub), and Sector 42 (Urban Connect).' },
  { q: 'Do you offer corporate billing and tie-ups?', a: 'Yes! We provide seamless corporate tie-up capabilities and dedicated B2B account support. Contact us to set up a corporate account.' },
  { q: 'Is there in-house dining available?', a: 'Absolutely. All our properties feature in-house commercial kitchens maintaining strict, standardized food quality and operational hygiene. We offer 24/7 in-room dining as well as corporate catering for events.' },
  { q: 'What event spaces are available?', a: 'Each property features unique rooftop and terrace spaces designed for after-event parties, corporate get-togethers, and open-air networking. Our Sector 45 flagship includes a full banquet hall facility.' },
  { q: 'How do I book a room?', a: 'You can book directly through our website using the booking widget, call us at +91 70110 80455, or email devang@imperialstayz.com. We also accept bookings through major OTA platforms.' },
  { q: 'Is parking available at all properties?', a: 'Yes, all properties offer ample, secure parking spaces along with comprehensive 24/7 CCTV surveillance.' },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const heroSlides = [
    { num: 1, label: 'Hero - Hotel Exterior' },
    { num: 2, label: 'Hero - Premium Room Interior' },
    { num: 3, label: 'Hero - Rooftop Event Space' },
  ];

  useEffect(() => {
    const t = setInterval(() => setCurrentSlide((p) => (p + 1) % heroSlides.length), 6000);
    return () => clearInterval(t);
  }, [heroSlides.length]);

  useEffect(() => {
    const t = setInterval(() => setTestimonialIndex((p) => (p + 1) % testimonials.length), 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative" style={{ minHeight: '85vh' }}>
        <div className="relative overflow-hidden" style={{ height: '85vh', minHeight: 600, maxHeight: 900 }}>
          {heroSlides.map((slide, i) => (
            <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
              <ImagePlaceholder number={slide.num} label={slide.label} className="w-full h-full !rounded-none" aspect="" />
            </div>
          ))}

          {/* Gradient overlay */}
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)', zIndex: 3 }} />

          {/* Hero text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6" style={{ zIndex: 4 }}>
            <p className="text-white text-sm sm:text-base uppercase tracking-[0.4em] mb-6 font-jost font-medium drop-shadow-lg">Welcome to Imperial Stayz</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-jost mb-6 leading-tight tracking-tight">
              Where Elegance<br />Meets Comfort
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mb-10 leading-relaxed">
              Premium properties across Gurugram&apos;s prime sectors, offering well-appointed rooms designed for corporate and extended stays.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/booking" className="bg-primary text-white px-8 py-3.5 rounded-lg font-semibold uppercase tracking-wider text-sm hover:bg-primary-dark transition-colors font-jost shadow-lg">
                Book Now
              </Link>
              <Link href="/properties" className="border border-white/40 text-white px-8 py-3.5 rounded-lg font-semibold uppercase tracking-wider text-sm hover:bg-white hover:text-navy transition-colors font-jost" style={{ backdropFilter: 'blur(8px)' }}>
                Explore Properties
              </Link>
            </div>
          </div>

          {/* Dots */}
          <div className="absolute left-1/2 -translate-x-1/2 flex gap-3" style={{ bottom: 120, zIndex: 5 }}>
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => setCurrentSlide(i)} className={`rounded-full transition-all duration-500 ${i === currentSlide ? 'w-10 h-2 bg-primary' : 'w-2 h-2 bg-white/40'}`} />
            ))}
          </div>

          {/* Arrows */}
          <button onClick={() => setCurrentSlide((p) => (p === 0 ? heroSlides.length - 1 : p - 1))} className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full hidden sm:flex items-center justify-center border border-white/20 hover:bg-primary hover:border-primary transition-colors" style={{ zIndex: 5, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}>
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button onClick={() => setCurrentSlide((p) => (p + 1) % heroSlides.length)} className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full hidden sm:flex items-center justify-center border border-white/20 hover:bg-primary hover:border-primary transition-colors" style={{ zIndex: 5, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}>
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Booking widget */}
        <div className="max-w-6xl mx-auto px-6 -mt-20 relative" style={{ zIndex: 10 }}>
          <BookingWidget />
        </div>
      </section>

      {/* ═══════════════════ ABOUT ═══════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <ImagePlaceholder number={4} label="About - Lobby Reception" className="w-full aspect-[4/3] shadow-2xl" aspect="" />
            <div className="absolute -bottom-8 -right-8 bg-primary text-white p-7 rounded-2xl shadow-xl hidden lg:block animate-float">
              <div className="text-4xl font-bold font-jost">IS</div>
              <div className="text-sm text-blue-200 font-jost">Premium Rooms</div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold/30 rounded-2xl hidden lg:block" />
          </div>

          <div>
            <p className="section-divider text-gold text-xs uppercase tracking-[0.3em] mb-4 font-jost justify-start">About Imperial Stayz</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-navy font-jost mb-6 leading-tight">
              Elevating Your Corporate<br className="hidden md:block" />Experience in Gurugram
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Imperial Stayz is a fast-expanding premium hotel chain in Gurugram, offering a consolidated portfolio of well-appointed rooms across strategically located properties. Each property is designed specifically for corporate and extended stays, combining modern comfort with professional amenities.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              With seamless corporate tie-up capabilities and dedicated B2B account support, we make procurement effortless for businesses of all sizes.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { icon: Building2, val: 'Multi', label: 'Properties' },
                { icon: Users, val: 'Many', label: 'Premium Rooms' },
                { icon: Award, val: '4.6/5', label: 'Google Rating' },
                { icon: Zap, val: '8.3/10', label: 'Booking.com' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-navy font-jost">{s.val}</div>
                    <div className="text-xs text-gray-400 font-jost">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-lg font-semibold uppercase tracking-wider text-sm hover:bg-primary-dark transition-colors font-jost shadow-md group">
              Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ AMENITIES ═══════════════════ */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-divider text-gold text-xs uppercase tracking-[0.3em] mb-4 font-jost">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-navy font-jost">Standardized Excellence Across All Properties</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100 hover:border-primary/20 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-500">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-base font-semibold text-navy font-jost mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed flex-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ PROPERTIES ═══════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-divider text-gold text-xs uppercase tracking-[0.3em] mb-4 font-jost">Our Properties</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-navy font-jost">Explore Every Corner of Imperial Stayz</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {properties.map((prop) => (
              <Link key={prop.slug} href={`/properties/${prop.slug}`} className="group block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
                  <div className="relative overflow-hidden">
                    <div className="group-hover:scale-105 transition-transform duration-700">
                      <ImagePlaceholder number={prop.imgNum} label={prop.imgLabel} className="w-full h-64 !rounded-none" aspect="" />
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 text-primary px-4 py-1.5 rounded-full text-[11px] font-semibold font-jost uppercase tracking-wider shadow-sm" style={{ backdropFilter: 'blur(8px)' }}>
                      {prop.tag}
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-navy font-jost group-hover:text-primary transition-colors">
                        Imperial Stayz — {prop.name}
                      </h3>
                      <span className="text-[11px] text-gray-400 bg-gray-50 px-3 py-1 rounded-full font-jost shrink-0 ml-3">{prop.rooms} Rooms</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-5 leading-relaxed flex-1">{prop.desc}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                      <span className="text-xs text-gold font-medium font-jost flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" /> {prop.diff}
                      </span>
                      <span className="text-sm text-primary font-semibold font-jost uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Details <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════ DINING & EVENTS ═══════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {[
            { num: 12, imgLabel: 'Kitchen Dining Area', sub: 'The Kitchen Confidence', title: 'In-House Commercial Kitchens', p1: 'Installed at ALL properties to maintain strict, standardized food quality and operational hygiene. We offer customized corporate catering for banquets, executive meetings, and rooftop networking events.', p2: 'Prompt, 24/7 in-room dining ensures business travelers are fed according to their schedules, not traditional restaurant hours.', link: '/dining', linkText: 'Explore Dining' },
            { num: 13, imgLabel: 'Rooftop Event Terrace', sub: 'Unique Event Spaces', title: 'Rooftops, Terraces & Banquet Halls', p1: 'Each property features a unique rooftop or terrace space, specifically designed for after-event parties, corporate get-togethers, and open-air networking.', p2: 'Supported by dedicated Event Managers who handle end-to-end logistics, allowing corporate organizers to focus entirely on their guests.', link: '/events', linkText: 'Explore Events' },
          ].map((s, i) => (
            <div key={i}>
              <div className="relative rounded-2xl overflow-hidden mb-8 group">
                <div className="group-hover:scale-105 transition-transform duration-700">
                  <ImagePlaceholder number={s.num} label={s.imgLabel} className="w-full h-72 !rounded-none" aspect="" />
                </div>
              </div>
              <p className="section-divider text-gold text-xs uppercase tracking-[0.3em] mb-4 font-jost justify-start">{s.sub}</p>
              <h3 className="text-2xl font-semibold text-navy font-jost mb-4">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-3">{s.p1}</p>
              <p className="text-gray-500 leading-relaxed">{s.p2}</p>
              <Link href={s.link} className="inline-flex items-center gap-2 mt-6 text-primary font-semibold uppercase tracking-wider text-sm hover:text-primary-dark transition-colors font-jost group/lnk">
                {s.linkText} <ArrowRight className="w-4 h-4 group-hover/lnk:translate-x-2 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
      <section className="py-24 px-6 bg-brown relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-40 h-40 border border-white/5 rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-white/5 rounded-full" />

        <div className="max-w-4xl mx-auto text-center text-white relative" style={{ zIndex: 2 }}>
          <p className="section-divider text-gold-light text-xs uppercase tracking-[0.3em] mb-4 font-jost">Guest Reviews</p>
          <h2 className="text-3xl md:text-4xl font-semibold font-jost mb-14">What Our Guests Say</h2>

          <div className="relative">
            <div className="rounded-2xl p-6 sm:p-8 lg:p-14 border border-white/10" style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
              <div className="text-6xl text-gold-light/30 font-serif leading-none mb-4">&ldquo;</div>
              <div className="flex justify-center mb-6 gap-1">
                {Array.from({ length: testimonials[testimonialIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-light text-gold-light" />
                ))}
              </div>
              <p className="text-lg lg:text-xl leading-relaxed mb-8 text-white/90 max-w-2xl mx-auto">
                {testimonials[testimonialIndex].text}
              </p>
              <div className="font-semibold font-jost text-lg">{testimonials[testimonialIndex].name}</div>
              <div className="text-sm text-white/50 mt-1">{testimonials[testimonialIndex].role}</div>
            </div>

            <div className="flex justify-center gap-3 mt-10">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setTestimonialIndex(i)} className={`rounded-full transition-all duration-500 ${i === testimonialIndex ? 'w-10 h-2 bg-white' : 'w-2 h-2 bg-white/30'}`} />
              ))}
            </div>

            <button onClick={() => setTestimonialIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1))} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-11 h-11 bg-white rounded-full hidden md:flex items-center justify-center shadow-lg hover:bg-primary group/b transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-700 group-hover/b:text-white" />
            </button>
            <button onClick={() => setTestimonialIndex((p) => (p + 1) % testimonials.length)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-11 h-11 bg-white rounded-full hidden md:flex items-center justify-center shadow-lg hover:bg-primary group/b transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-700 group-hover/b:text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <section className="py-24 px-6 bg-light-gray">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-divider text-gold text-xs uppercase tracking-[0.3em] mb-4 font-jost">Have Questions?</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-navy font-jost">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left group">
                  <span className="font-semibold text-navy font-jost pr-4 group-hover:text-primary transition-colors">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${activeFaq === i ? 'bg-primary rotate-180' : 'bg-gray-50'}`}>
                    <ChevronDown className={`w-4 h-4 ${activeFaq === i ? 'text-white' : 'text-primary'}`} />
                  </div>
                </button>
                <div className={`accordion-content ${activeFaq === i ? 'open' : ''}`}>
                  <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CONTACT ═══════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="relative">
            <a href="https://share.google/rxVTNbdbg3tyOOVp3" target="_blank" rel="noopener noreferrer" className="block">
              <ImagePlaceholder number={14} label="Map - Sector 51 Location" className="w-full h-[250px] sm:h-[350px] md:h-[450px] shadow-xl cursor-pointer hover:opacity-90 transition-opacity" aspect="" />
            </a>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/20 rounded-xl hidden lg:block" style={{ zIndex: -1 }} />
          </div>

          <div>
            <p className="section-divider text-gold text-xs uppercase tracking-[0.3em] mb-4 font-jost justify-start">Get in Touch</p>
            <h2 className="text-3xl font-semibold text-navy font-jost mb-8">Visit Us or Send a Message</h2>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-navy font-jost mb-1">Head Office</div>
                  <a href="https://share.google/rxVTNbdbg3tyOOVp3" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-primary transition-colors">1210P, Sector 51, Gurugram, Haryana, 122018</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-navy font-jost mb-1">Phone</div>
                  <a href="tel:+917011080455" className="text-sm text-gray-400 hover:text-primary transition-colors">+91 70110 80455</a>
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full border border-gray-200 rounded-xl px-5 py-3.5 text-sm bg-gray-50/50 focus:border-primary focus:outline-none focus:bg-white transition-all" />
                <input type="email" placeholder="Your Email" className="w-full border border-gray-200 rounded-xl px-5 py-3.5 text-sm bg-gray-50/50 focus:border-primary focus:outline-none focus:bg-white transition-all" />
              </div>
              <input type="text" placeholder="Subject" className="w-full border border-gray-200 rounded-xl px-5 py-3.5 text-sm bg-gray-50/50 focus:border-primary focus:outline-none focus:bg-white transition-all" />
              <textarea rows={4} placeholder="Your Message" className="w-full border border-gray-200 rounded-xl px-5 py-3.5 text-sm bg-gray-50/50 focus:border-primary focus:outline-none focus:bg-white transition-all resize-none" />
              <button type="submit" className="bg-primary text-white px-8 py-3.5 rounded-lg font-semibold uppercase tracking-wider text-sm hover:bg-primary-dark transition-colors font-jost shadow-md inline-flex items-center gap-2">
                Send Message <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

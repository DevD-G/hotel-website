'use client';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Link from 'next/link';
import { Utensils, Clock, Users, ChefHat } from 'lucide-react';

export default function DiningPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[400px]">
        <ImagePlaceholder number={108} label="Dining Hero - Food Spread / Kitchen" className="w-full h-full !rounded-none" aspect="" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="section-divider text-[var(--color-gold)] text-xs uppercase tracking-[0.3em] mb-4 font-jost">The Kitchen Confidence</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-jost">Dining & Catering</h1>
            <p className="mt-4 text-gray-300 max-w-xl mx-auto">In-house commercial kitchens at every property</p>
          </div>
        </div>
      </section>

      {/* Dining Philosophy */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-divider text-[var(--color-gold)] text-xs uppercase tracking-[0.3em] mb-4 font-jost justify-start">Our Approach</p>
            <h2 className="text-3xl font-semibold text-[var(--color-navy)] font-jost mb-6">The Engine: In-House Commercial Kitchens</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Installed at ALL properties to maintain strict, standardized food quality and operational hygiene. Our commercial-grade kitchens are the backbone of the Imperial Stayz dining experience.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Whether it&apos;s a quick meal before a meeting, a late-night dinner after a long day, or a gourmet spread for a corporate banquet — our culinary team delivers consistently excellent food tailored to your schedule.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: ChefHat, title: 'Professional Chefs', desc: 'Trained culinary team at each property' },
                { icon: Clock, title: '24/7 Service', desc: 'In-room dining anytime, any day' },
                { icon: Users, title: 'Corporate Catering', desc: 'Banquets, meetings & events' },
                { icon: Utensils, title: 'Multi-Cuisine', desc: 'Indian, Continental & Chinese' },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-[var(--color-light-gray)] rounded-lg">
                  <item.icon className="w-6 h-6 text-[var(--color-primary)] mb-2" />
                  <h4 className="font-semibold text-[var(--color-navy)] text-sm font-jost">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <ImagePlaceholder number={109} label="Commercial Kitchen Interior" className="w-full h-64" aspect="" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <ImagePlaceholder number={110} label="Food Plating / Dish" className="w-full h-40" aspect="" />
              <ImagePlaceholder number={111} label="In-Room Dining Setup" className="w-full h-40" aspect="" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-semibold text-[var(--color-navy)] font-jost">Our Dining Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'In-Room Dining',
                desc: 'Prompt, 24/7 in-room dining service ensuring business travelers are fed according to their intensive schedules, not traditional restaurant hours.',
                imgNum: 112, imgLabel: 'In-Room Dining Tray',
              },
              {
                title: 'Corporate Catering',
                desc: 'Customized, professional catering services capable of scaling for banquets, executive meetings, and rooftop networking events.',
                imgNum: 113, imgLabel: 'Corporate Catering Setup',
              },
              {
                title: 'Event Dining',
                desc: 'Specialized menus for rooftop events, corporate get-togethers, and celebrations. Our team works with your event manager for seamless coordination.',
                imgNum: 114, imgLabel: 'Event Dining on Rooftop',
              },
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <ImagePlaceholder number={service.imgNum} label={service.imgLabel} className="w-full h-52" aspect="" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[var(--color-navy)] font-jost mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[var(--color-primary)]">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-semibold font-jost mb-4">Plan Your Next Corporate Event</h2>
          <p className="text-blue-100 mb-8">Get in touch with our team to customize a dining experience for your group or event.</p>
          <Link href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-3.5 rounded-md font-semibold uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors font-jost">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}

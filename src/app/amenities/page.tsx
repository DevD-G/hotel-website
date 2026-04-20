'use client';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { Wifi, Car, Shield, Utensils, Tv, Snowflake, Clock, Coffee, Zap, Shirt, Bath, Key } from 'lucide-react';

const amenityGroups = [
  {
    title: 'In-Room Amenities',
    items: [
      { icon: Wifi, name: 'High-Speed WiFi', desc: 'Complimentary high-speed wireless internet access in every room' },
      { icon: Tv, name: 'Smart LED TV', desc: 'Smart LED televisions with streaming access and premium channels' },
      { icon: Snowflake, name: 'Climate Control', desc: 'Individual air conditioning and heating in every room' },
      { icon: Bath, name: 'Attached Bathroom', desc: 'Modern attached bathrooms with premium toiletries and hot water 24/7' },
      { icon: Coffee, name: 'Tea/Coffee Maker', desc: 'In-room electric kettle with complimentary tea and coffee sachets' },
      { icon: Shirt, name: 'Wardrobe & Iron', desc: 'Spacious wardrobe and ironing facilities available on request' },
    ],
  },
  {
    title: 'Property Facilities',
    items: [
      { icon: Car, name: 'Secure Parking', desc: 'Ample, secure parking spaces at every single location' },
      { icon: Shield, name: '24/7 CCTV Surveillance', desc: 'Comprehensive security coverage with modern CCTV systems' },
      { icon: Zap, name: 'Power Backup', desc: 'Uninterrupted power backup generators ensuring zero downtime' },
      { icon: Key, name: 'Keycard Access', desc: 'Electronic keycard systems for enhanced security and convenience' },
      { icon: Clock, name: '24/7 Front Desk', desc: 'Dedicated on-site property managers available round the clock' },
      { icon: Utensils, name: 'In-House Kitchen', desc: 'Commercial kitchens at all properties with 24/7 in-room dining' },
    ],
  },
];

export default function AmenitiesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[400px]">
        <ImagePlaceholder number={103} label="Amenities Hero - Modern Room with Amenities" className="w-full h-full !rounded-none" aspect="" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="section-divider text-[var(--color-gold)] text-xs uppercase tracking-[0.3em] mb-4 font-jost">What We Offer</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-jost">Amenities & Facilities</h1>
            <p className="mt-4 text-gray-300 max-w-xl mx-auto">Standardized excellence across all our properties</p>
          </div>
        </div>
      </section>

      {/* Amenity Groups */}
      {amenityGroups.map((group, gi) => (
        <section key={gi} className={`py-20 px-6 ${gi % 2 === 1 ? 'bg-[var(--color-light-gray)]' : ''}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-navy)] font-jost mb-10 text-center">{group.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.items.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow flex gap-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <item.icon className="w-7 h-7 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-navy)] font-jost mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

    </div>
  );
}

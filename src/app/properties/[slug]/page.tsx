'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import BookingWidget from '@/components/BookingWidget';
import { MapPin, Wifi, Car, Shield, Utensils, Tv, Snowflake, Clock, Phone, Mail, ArrowRight } from 'lucide-react';

const propertyData: Record<string, {
  name: string; tag: string; rooms: number; type: string; vibe: string;
  proximity: string; idealFor: string; diff: string; address: string;
  heroNum: number; heroLabel: string;
  galleryNums: { num: number; label: string }[];
  roomTypes: { name: string; price: string; imgNum: number; imgLabel: string; features: string[] }[];
}> = {
  'sector-51': {
    name: 'Sector 51', tag: 'Flagship Property', rooms: 15, type: 'Business Hotel',
    vibe: 'Functional, quiet corporate base',
    proximity: 'Direct access to NH-48 corridor, near Sector 53-54 commercial belt, 15 mins to Cyber City.',
    idealFor: 'Extended corporate deployments, project teams, and professionals requiring highway connectivity.',
    diff: '1RK Deluxe & Studio Rooms',
    address: '1210P, Sector 51, Gurugram, Haryana, 122018',
    heroNum: 39, heroLabel: 'Sector 51 - Building Exterior',
    galleryNums: [
      { num: 40, label: 'S51 - Lobby' },
      { num: 41, label: 'S51 - 1RK Kitchen' },
      { num: 42, label: 'S51 - Room' },
      { num: 43, label: 'S51 - Common Area' },
    ],
    roomTypes: [
      { name: '1RK Deluxe', price: '₹2,500', imgNum: 44, imgLabel: 'S51 1RK Deluxe Room', features: ['Queen Bed', 'Kitchenette', 'WiFi', 'Smart LED TV', 'AC', 'Work Desk'] },
      { name: '1RK Studio with Sofa', price: '₹4,500', imgNum: 45, imgLabel: 'S51 1RK Studio Room', features: ['King Bed', 'Sofa', 'Kitchenette', 'Living Area', 'WiFi', 'Smart LED TV', 'AC', 'Washer'] },
    ],
  },
  'sector-46': {
    name: 'Sector 46', tag: 'Comfort Retreat', rooms: 14, type: 'Comfort Stay',
    vibe: 'Calm, established residential comfort',
    proximity: 'Near Sector 46 Rapid Metro, 10 mins from Artemis Hospital, 12 mins from Medanta.',
    idealFor: 'Healthcare visitors, extended family stays, and medical tourism requiring a homely, elegant retreat.',
    diff: 'Roof + Elegant Residential Rooms',
    address: 'Sector 46, Gurugram, Haryana',
    heroNum: 32, heroLabel: 'Sector 46 - Building Exterior',
    galleryNums: [
      { num: 33, label: 'S46 - Lobby/Reception' },
      { num: 34, label: 'S46 - Room Interior' },
      { num: 35, label: 'S46 - Rooftop' },
      { num: 36, label: 'S46 - Common Area' },
    ],
    roomTypes: [
      { name: 'Comfort Room', price: '₹2,200', imgNum: 37, imgLabel: 'S46 Comfort Room', features: ['Queen Bed', 'WiFi', 'Smart LED TV', 'AC', 'Attached Bath'] },
      { name: 'Deluxe Residential', price: '₹3,200', imgNum: 38, imgLabel: 'S46 Deluxe Residential', features: ['King Bed', 'WiFi', 'Smart LED TV', 'AC', 'Balcony', 'Work Desk'] },
    ],
  },
  'sector-42': {
    name: 'Sector 42', tag: 'Urban Connect', rooms: 15, type: 'Comfort Stay',
    vibe: 'Centralized, high-energy urban access',
    proximity: '5 mins from IFFCO Chowk Metro, 10 mins from DLF Cyber Hub/Cyber City, near Udyog Vihar.',
    idealFor: 'Executives, VIP project teams, and professionals needing to be in the center of Gurugram\'s commercial district.',
    diff: 'Premium Terrace + Hotel-Style Rooms',
    address: 'Sector 42, Gurugram, Haryana',
    heroNum: 46, heroLabel: 'Sector 42 - Building Exterior',
    galleryNums: [
      { num: 47, label: 'S42 - Terrace/Rooftop' },
      { num: 48, label: 'S42 - Lobby' },
      { num: 49, label: 'S42 - Room' },
      { num: 50, label: 'S42 - Deluxe Room' },
    ],
    roomTypes: [
      { name: 'Standard Room', price: '₹2,500', imgNum: 51, imgLabel: 'S42 Standard Room', features: ['Queen Bed', 'WiFi', 'Smart LED TV', 'AC', 'Work Desk'] },
      { name: 'Deluxe Room', price: '₹3,500', imgNum: 52, imgLabel: 'S42 Deluxe Room', features: ['King Bed', 'WiFi', 'Smart LED TV', 'AC', 'Work Desk', 'Terrace Access'] },
    ],
  },
  'sector-45': {
    name: 'Sector 45', tag: 'Boutique Hotel', rooms: 18, type: 'Boutique Hotel',
    vibe: 'Premium urban convenience',
    proximity: '2 mins from Galleria Market, 5 mins from Fortis Memorial Hospital, near DLF Phase IV.',
    idealFor: 'Corporate events requiring banqueting combined with premium accommodation.',
    diff: 'Roof + Banquet Hall Facility',
    address: 'Sector 45, Gurugram, Haryana',
    heroNum: 24, heroLabel: 'Sector 45 - Building Exterior',
    galleryNums: [
      { num: 25, label: 'S45 - Lobby/Reception' },
      { num: 26, label: 'S45 - Banquet Hall' },
      { num: 27, label: 'S45 - Rooftop View' },
      { num: 28, label: 'S45 - Corridor/Common Area' },
    ],
    roomTypes: [
      { name: 'Standard Room', price: '₹2,500', imgNum: 29, imgLabel: 'S45 Standard Room', features: ['Queen Bed', 'WiFi', 'Smart LED TV', 'AC', 'Attached Bath'] },
      { name: 'Deluxe Room', price: '₹3,500', imgNum: 30, imgLabel: 'S45 Deluxe Room', features: ['King Bed', 'WiFi', 'Smart LED TV', 'AC', 'Mini Fridge', 'Work Desk'] },
      { name: 'Premium Suite', price: '₹5,000', imgNum: 31, imgLabel: 'S45 Premium Suite', features: ['King Bed', 'Living Area', 'WiFi', 'Smart LED TV', 'AC', 'Mini Bar', 'City View'] },
    ],
  },
};

const amenityIcons = [
  { icon: Wifi, label: 'Free WiFi' },
  { icon: Car, label: 'Parking' },
  { icon: Shield, label: 'CCTV' },
  { icon: Utensils, label: 'Dining' },
  { icon: Tv, label: 'Smart LED TV' },
  { icon: Snowflake, label: 'AC' },
  { icon: Clock, label: '24/7 Desk' },
];

export default function PropertyDetailPage() {
  const { slug } = useParams();
  const prop = propertyData[slug as string];

  if (!prop) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-3xl font-semibold text-navy font-jost">Property not found</h1>
        <Link href="/properties" className="mt-4 inline-block text-primary hover:text-primary-dark transition-colors">View all properties</Link>
      </div>
    );
  }

  const details = [
    { label: 'Vibe', value: prop.vibe },
    { label: 'Proximity', value: prop.proximity },
    { label: 'Ideal For', value: prop.idealFor },
    { label: 'Differentiator', value: prop.diff },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative" style={{ height: 420 }}>
        <ImagePlaceholder number={prop.heroNum} label={prop.heroLabel} className="w-full h-full !rounded-none" aspect="" />
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))' }}>
          <div className="text-center text-white px-6">
            <span className="inline-block bg-primary text-white px-4 py-1.5 rounded-full text-[11px] font-semibold font-jost uppercase tracking-wider mb-4">{prop.tag}</span>
            <h1 className="text-4xl md:text-5xl font-semibold font-jost mb-3">Imperial Stayz — {prop.name}</h1>
            <p className="text-gray-300 font-jost">{prop.type} · {prop.rooms} Rooms</p>
          </div>
        </div>
      </section>

      {/* Booking Widget */}
      <div className="max-w-6xl mx-auto px-6 -mt-16 relative mb-20" style={{ zIndex: 10 }}>
        <BookingWidget />
      </div>

      {/* Property Details + Sidebar */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-navy font-jost mb-8">About This Property</h2>

            {/* Key-value details — proper table alignment */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-10">
              {details.map((d, i) => (
                <div key={i} className={`grid grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] ${i < details.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div className="bg-gray-50 px-6 py-4 font-semibold text-sm text-navy font-jost">{d.label}</div>
                  <div className="px-6 py-4 text-sm text-gray-600 leading-relaxed">{d.value}</div>
                </div>
              ))}
            </div>

            {/* Amenities */}
            <h3 className="text-xl font-semibold text-navy font-jost mb-5">Amenities</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
              {amenityIcons.map((a, i) => (
                <div key={i} className="flex flex-col items-center gap-2 bg-white p-5 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                    <a.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs text-gray-600 font-jost font-medium">{a.label}</span>
                </div>
              ))}
            </div>

            {/* Gallery */}
            <h3 className="text-xl font-semibold text-navy font-jost mb-5">Property Gallery</h3>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {prop.galleryNums.map((g) => (
                <ImagePlaceholder key={g.num} number={g.num} label={g.label} className="w-full h-48" aspect="" />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-7 border border-gray-100 sticky top-24">
              <h3 className="text-lg font-semibold text-navy font-jost mb-5">Contact & Location</h3>
              <div className="space-y-4 mb-7">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary-light flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <a href="https://share.google/rxVTNbdbg3tyOOVp3" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 leading-relaxed hover:text-primary transition-colors">{prop.address}</a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary-light flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <a href="tel:+917011080455" className="text-sm text-gray-500 hover:text-primary transition-colors">+91 70110 80455</a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary-light flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <a href="mailto:devang@imperialstayz.com" className="text-sm text-gray-500 hover:text-primary transition-colors">devang@imperialstayz.com</a>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden mb-6">
                <ImagePlaceholder number={prop.heroNum + 100} label={`Map - ${prop.name}`} className="w-full h-40 !rounded-xl" aspect="" />
              </div>

              <Link href="/booking" className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3.5 rounded-xl font-semibold uppercase tracking-wider text-sm hover:bg-primary-dark transition-colors font-jost shadow-md">
                Book This Property <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-20 px-6 bg-light-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-divider text-gold text-xs uppercase tracking-[0.3em] mb-4 font-jost">Accommodations</p>
            <h2 className="text-3xl font-semibold text-navy font-jost">Available Room Types</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prop.roomTypes.map((room, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
                <div className="relative overflow-hidden">
                  <ImagePlaceholder number={room.imgNum} label={room.imgLabel} className="w-full h-52 !rounded-none" aspect="" />
                  <div className="absolute top-4 right-4 bg-white/90 px-4 py-1.5 rounded-full shadow-sm" style={{ backdropFilter: 'blur(8px)' }}>
                    <span className="text-primary font-bold font-jost text-sm">{room.price}</span>
                    <span className="text-gray-400 text-[10px] ml-1 font-jost">/night</span>
                  </div>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-navy font-jost mb-4">{room.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-6 flex-1">
                    {room.features.map((f, j) => (
                      <span key={j} className="text-xs bg-gray-50 text-gray-500 px-3 py-1.5 rounded-lg font-jost">{f}</span>
                    ))}
                  </div>
                  <Link href="/booking" className="block text-center border-2 border-primary text-primary py-2.5 rounded-xl text-sm font-semibold uppercase tracking-wider hover:bg-primary hover:text-white transition-colors font-jost mt-auto">
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

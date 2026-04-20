'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import {
  CalendarDays, Users, Home, CreditCard, Check, Bed, Maximize2,
  Wifi, Tv, Snowflake, Coffee, Bath, UtensilsCrossed, Refrigerator,
  Sofa, Eye, Shirt, Dock, ChevronLeft, ChevronRight, X
} from 'lucide-react';

interface RoomOption {
  name: string;
  price: string;
  photos: { num: number; label: string }[];
  bedType: string;
  roomSize: string;
  maxGuests: number;
  features: string[];
  breakfast: { included: boolean; addOnPrice?: string };
  highlight?: string;
}

const propertyRooms: Record<string, { label: string; rooms: RoomOption[] }> = {
  'sector-51': {
    label: 'Imperial Stayz - Sector 51 (Flagship)',
    rooms: [
      {
        name: '1RK Deluxe', price: '₹2,500',
        photos: [{ num: 44, label: 'S51 1RK Deluxe' }, { num: 42, label: 'S51 Room' }, { num: 41, label: 'S51 Kitchen' }],
        bedType: 'Queen Bed', roomSize: '220 sq ft', maxGuests: 2,
        features: ['Free WiFi', 'Kitchenette', 'Smart LED TV', 'AC', 'Work Desk', 'Attached Bath'],
        breakfast: { included: false, addOnPrice: '₹250' },
      },
      {
        name: '1RK Studio with Sofa', price: '₹4,500',
        photos: [{ num: 45, label: 'S51 Studio' }, { num: 42, label: 'S51 Room' }, { num: 41, label: 'S51 Kitchen' }, { num: 43, label: 'S51 Living' }],
        bedType: 'King Bed', roomSize: '380 sq ft', maxGuests: 3,
        features: ['Free WiFi', 'Kitchenette', 'Living Area', 'Sofa', 'Smart LED TV', 'AC', 'Work Desk', 'Washer'],
        breakfast: { included: true },
        highlight: 'Best Value',
      },
    ],
  },
  'sector-46': {
    label: 'Imperial Stayz - Sector 46 (Comfort)',
    rooms: [
      {
        name: 'Comfort Room', price: '₹2,200',
        photos: [{ num: 37, label: 'S46 Comfort' }, { num: 34, label: 'S46 Interior' }, { num: 33, label: 'S46 Reception' }],
        bedType: 'Queen Bed', roomSize: '200 sq ft', maxGuests: 2,
        features: ['Free WiFi', 'Smart LED TV', 'AC', 'Attached Bath', 'Coffee Maker'],
        breakfast: { included: false, addOnPrice: '₹200' },
      },
      {
        name: 'Deluxe Residential', price: '₹3,200',
        photos: [{ num: 38, label: 'S46 Deluxe' }, { num: 34, label: 'S46 Room' }, { num: 35, label: 'S46 Rooftop' }],
        bedType: 'King Bed', roomSize: '300 sq ft', maxGuests: 3,
        features: ['Free WiFi', 'Smart LED TV', 'AC', 'Balcony', 'Work Desk', 'Private Bathroom', 'Coffee Maker'],
        breakfast: { included: true },
        highlight: 'Popular',
      },
    ],
  },
  'sector-42': {
    label: 'Imperial Stayz - Sector 42 (Urban)',
    rooms: [
      {
        name: 'Standard Room', price: '₹2,500',
        photos: [{ num: 51, label: 'S42 Standard' }, { num: 49, label: 'S42 Room' }, { num: 48, label: 'S42 Lobby' }],
        bedType: 'Queen Bed', roomSize: '220 sq ft', maxGuests: 2,
        features: ['Free WiFi', 'Smart LED TV', 'AC', 'Work Desk', 'Attached Bath'],
        breakfast: { included: false, addOnPrice: '₹250' },
      },
      {
        name: 'Deluxe Room', price: '₹3,500',
        photos: [{ num: 52, label: 'S42 Deluxe' }, { num: 50, label: 'S42 Interior' }, { num: 47, label: 'S42 Terrace' }],
        bedType: 'King Bed', roomSize: '320 sq ft', maxGuests: 3,
        features: ['Free WiFi', 'Smart LED TV', 'AC', 'Work Desk', 'Terrace Access', 'Private Bathroom', 'Mini Fridge'],
        breakfast: { included: true },
        highlight: 'Terrace Access',
      },
    ],
  },
  'sector-45': {
    label: 'Imperial Stayz - Sector 45 (Boutique)',
    rooms: [
      {
        name: 'Standard Room', price: '₹2,500',
        photos: [{ num: 29, label: 'S45 Standard' }, { num: 25, label: 'S45 Lobby' }, { num: 28, label: 'S45 Corridor' }],
        bedType: 'Queen Bed', roomSize: '200 sq ft', maxGuests: 2,
        features: ['Free WiFi', 'Smart LED TV', 'AC', 'Attached Bath', 'Coffee Maker'],
        breakfast: { included: false, addOnPrice: '₹250' },
      },
      {
        name: 'Deluxe Room', price: '₹3,500',
        photos: [{ num: 30, label: 'S45 Deluxe' }, { num: 25, label: 'S45 Lobby' }, { num: 27, label: 'S45 Rooftop' }],
        bedType: 'King Bed', roomSize: '280 sq ft', maxGuests: 2,
        features: ['Free WiFi', 'Smart LED TV', 'AC', 'Mini Fridge', 'Work Desk', 'Private Bathroom'],
        breakfast: { included: true },
      },
      {
        name: 'Premium Suite', price: '₹5,000',
        photos: [{ num: 31, label: 'S45 Suite' }, { num: 30, label: 'S45 Deluxe' }, { num: 27, label: 'S45 Rooftop' }, { num: 26, label: 'S45 Banquet' }],
        bedType: 'King Bed', roomSize: '400 sq ft', maxGuests: 3,
        features: ['Free WiFi', 'Smart LED TV', 'AC', 'Living Area', 'Mini Bar', 'City View', 'Work Desk', 'Private Bathroom'],
        breakfast: { included: true },
        highlight: 'Best Experience',
      },
    ],
  },
};

const featureIconMap: Record<string, typeof Wifi> = {
  'WiFi': Wifi, 'Free WiFi': Wifi, 'Smart LED TV': Tv, 'AC': Snowflake,
  'Attached Bath': Bath, 'Private Bathroom': Bath, 'Mini Fridge': Refrigerator,
  'Mini Bar': Refrigerator, 'Kitchenette': UtensilsCrossed, 'Work Desk': Dock,
  'Sofa': Sofa, 'Living Area': Sofa, 'City View': Eye, 'Balcony': Eye,
  'Terrace Access': Eye, 'Washer': Shirt, 'Coffee Maker': Coffee,
};

function RoomSelectCard({ room, selected, onSelect }: { room: RoomOption; selected: boolean; onSelect: () => void }) {
  const [photoIdx, setPhotoIdx] = useState(0);
  const photos = room.photos;
  const touchStartX = useRef(0);
  const nextIdx = useCallback(() => setPhotoIdx((p) => (p + 1) % photos.length), [photos.length]);

  useEffect(() => {
    if (photos.length <= 1) return;
    const mq = window.matchMedia('(max-width: 639px)');
    if (!mq.matches) return;
    const t = setInterval(nextIdx, 3000);
    return () => clearInterval(t);
  }, [photos.length, nextIdx]);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? nextIdx() : setPhotoIdx((p) => (p === 0 ? photos.length - 1 : p - 1)); }
  };

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left rounded-2xl border-2 overflow-hidden transition-all duration-200 ${
        selected ? 'border-[var(--color-primary)] shadow-lg ring-1 ring-[var(--color-primary)]/20' : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
      }`}
    >
      <div className="flex flex-col sm:flex-row">
        {/* Photo — 40% */}
        <div className="sm:w-[40%] relative group shrink-0" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <ImagePlaceholder
            number={photos[photoIdx].num}
            label={photos[photoIdx].label}
            className="w-full h-40 sm:h-full sm:min-h-[200px] !rounded-none"
            aspect=""
          />
          {photos.length > 1 && (
            <>
              <div
                role="button"
                onClick={(e) => { e.stopPropagation(); setPhotoIdx((p) => (p === 0 ? photos.length - 1 : p - 1)); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-3.5 h-3.5 text-gray-700" />
              </div>
              <div
                role="button"
                onClick={(e) => { e.stopPropagation(); setPhotoIdx((p) => (p + 1) % photos.length); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="w-3.5 h-3.5 text-gray-700" />
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {photos.map((_, i) => (
                  <span key={i} className={`rounded-full transition-all ${i === photoIdx ? 'w-4 h-1 bg-white' : 'w-1 h-1 bg-white/50'}`} />
                ))}
              </div>
            </>
          )}
          {room.highlight && (
            <span className="absolute top-2 right-2 bg-green-600 text-white text-[9px] px-2 py-0.5 rounded font-jost font-semibold uppercase tracking-wider">
              {room.highlight}
            </span>
          )}
          {/* Selection indicator */}
          {selected && (
            <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-[var(--color-primary)] flex items-center justify-center shadow">
              <Check className="w-4 h-4 text-white" />
            </div>
          )}
        </div>

        {/* Details — 60% */}
        <div className="sm:w-[60%] p-4 sm:p-5 flex flex-col">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-base sm:text-lg font-semibold text-[var(--color-navy)] font-jost">{room.name}</h3>
            <div className="text-right shrink-0">
              <div className="text-lg font-bold text-[var(--color-navy)] font-jost">{room.price}</div>
              <div className="text-[10px] text-gray-400">/night</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 mb-3">
            <span className="flex items-center gap-1"><Bed className="w-3 h-3" /> {room.bedType}</span>
            <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" /> {room.roomSize}</span>
            <span className="flex items-center gap-1"><Users className="w-3 h-3" /> Up to {room.maxGuests}</span>
          </div>

          <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
            {room.features.slice(0, 6).map((f, i) => {
              const Icon = featureIconMap[f] || Check;
              return (
                <span key={i} className="flex items-center gap-1 text-xs text-gray-500">
                  <Icon className="w-3 h-3 text-[var(--color-primary)]" /> {f}
                </span>
              );
            })}
            {room.features.length > 6 && (
              <span className="text-xs text-gray-400">+{room.features.length - 6} more</span>
            )}
          </div>

          <div className={`flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md w-fit ${
            room.breakfast.included ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
          }`}>
            <UtensilsCrossed className="w-3 h-3" />
            {room.breakfast.included ? 'Breakfast included' : `Breakfast ${room.breakfast.addOnPrice || 'on request'}`}
          </div>
        </div>
      </div>
    </button>
  );
}

function BookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    property: searchParams.get('property') || 'sector-51',
    roomType: searchParams.get('room') || '',
    checkin: searchParams.get('checkin') || '',
    checkout: searchParams.get('checkout') || '',
    adults: searchParams.get('adults') || '2',
    rooms: searchParams.get('rooms') || '1',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  const selectedProperty = propertyRooms[form.property];
  const selectedRoom = selectedProperty?.rooms.find(r => r.name === form.roomType);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    if (step === 3) router.push('/booking/payment');
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--color-navy)] py-12 px-6">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-jost mb-3">Book Your Stay</h1>
          <p className="text-gray-400">Select your property, dates, and room type</p>
        </div>
      </section>

      {/* Maintenance Notice */}
      <section className="py-20 px-6">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.049.58.025 1.192-.14 1.743" /></svg>
          </div>
          <h2 className="text-2xl font-semibold text-[var(--color-navy)] font-jost mb-3">We&apos;re Doing Some Maintenance</h2>
          <p className="text-gray-500 leading-relaxed mb-8">Our online booking system is currently under maintenance. Kindly contact us directly for bookings and we&apos;ll be happy to assist you.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/contact" className="bg-[var(--color-primary)] text-white px-8 py-3.5 rounded-xl font-semibold uppercase tracking-wider text-sm hover:bg-[var(--color-primary-dark)] transition-colors font-jost shadow-md">Contact Us</a>
            <a href="tel:+917011080455" className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-3.5 rounded-xl font-semibold uppercase tracking-wider text-sm hover:bg-[var(--color-primary)] hover:text-white transition-colors font-jost">Call +91 70110 80455</a>
          </div>
        </div>
      </section>
    </div>
  );

  // --- BOOKING FORM (temporarily disabled) ---
  // eslint-disable-next-line no-unreachable
  return (
    <div>
      <section className="bg-[var(--color-navy)] py-12 px-6">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-jost mb-3">Book Your Stay</h1>
          <p className="text-gray-400">Select your property, dates, and room type</p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="bg-white border-b py-6 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4">
            {[
              { n: 1, label: 'Select Room', icon: Home },
              { n: 2, label: 'Guest Details', icon: Users },
              { n: 3, label: 'Review & Pay', icon: CreditCard },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step >= s.n ? 'bg-[var(--color-primary)] text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > s.n ? <Check className="w-4 h-4" /> : s.n}
                </div>
                <span className={`text-sm font-jost hidden sm:inline ${step >= s.n ? 'text-[var(--color-navy)]' : 'text-gray-400'}`}>{s.label}</span>
                {i < 2 && <div className="w-12 h-px bg-gray-300 mx-2" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Step 1: Room Selection */}
          {step === 1 && (
            <div>
              {/* Property + Dates */}
              <div className="bg-white rounded-xl shadow-lg p-5 sm:p-8 border border-gray-100 mb-8">
                <h2 className="text-xl font-semibold text-[var(--color-navy)] font-jost mb-6">Stay Details</h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-jost">Property</label>
                    <select value={form.property} onChange={(e) => setForm({ ...form, property: e.target.value, roomType: '' })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none">
                      {Object.entries(propertyRooms).map(([val, p]) => <option key={val} value={val}>{p.label}</option>)}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-jost">Check-in</label>
                      <input type="date" value={form.checkin} onChange={(e) => setForm({ ...form, checkin: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-jost">Check-out</label>
                      <input type="date" value={form.checkout} onChange={(e) => setForm({ ...form, checkout: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-jost">Adults</label>
                      <select value={form.adults} onChange={(e) => setForm({ ...form, adults: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none">
                        {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-jost">Rooms</label>
                      <select value={form.rooms} onChange={(e) => setForm({ ...form, rooms: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none">
                        {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Room Type Cards */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-[var(--color-navy)] font-jost mb-5">Choose Your Room</h2>
                <div className="space-y-4">
                  {selectedProperty?.rooms.map((room, i) => (
                    <RoomSelectCard
                      key={i}
                      room={room}
                      selected={form.roomType === room.name}
                      onSelect={() => setForm({ ...form, roomType: room.name })}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={handleNext}
                className="w-full bg-[var(--color-primary)] text-white py-3.5 rounded-xl font-semibold uppercase tracking-wider text-sm hover:bg-[var(--color-primary-dark)] transition-colors font-jost shadow-md"
              >
                Continue to Guest Details
              </button>
            </div>
          )}

          {/* Step 2: Guest Details */}
          {step === 2 && (
            <div className="bg-white rounded-xl shadow-lg p-5 sm:p-8 border border-gray-100">
              {/* Selected room summary */}
              {selectedRoom && (
                <div className="flex items-center gap-4 p-4 bg-[var(--color-light-gray)] rounded-xl mb-6">
                  <ImagePlaceholder number={selectedRoom.photos[0].num} label={selectedRoom.photos[0].label} className="w-20 h-16 shrink-0" aspect="" />
                  <div>
                    <div className="font-semibold text-[var(--color-navy)] font-jost text-sm">{selectedRoom.name}</div>
                    <div className="text-xs text-gray-500">{selectedProperty?.label} · {selectedRoom.price}/night</div>
                  </div>
                </div>
              )}

              <h2 className="text-xl font-semibold text-[var(--color-navy)] font-jost mb-6">Guest Details</h2>
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-jost">First Name *</label>
                    <input type="text" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-jost">Last Name *</label>
                    <input type="text" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-jost">Email *</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-jost">Phone *</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none" required />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-jost">Special Requests</label>
                  <textarea rows={3} value={form.specialRequests} onChange={(e) => setForm({ ...form, specialRequests: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none resize-none" placeholder="Any special requirements..." />
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <button onClick={() => setStep(1)} className="flex-1 border-2 border-gray-200 text-gray-600 py-3.5 rounded-md font-semibold uppercase tracking-wider text-sm hover:bg-gray-50 transition-colors font-jost">Back</button>
                <button onClick={handleNext} className="flex-1 bg-[var(--color-primary)] text-white py-3.5 rounded-md font-semibold uppercase tracking-wider text-sm hover:bg-[var(--color-primary-dark)] transition-colors font-jost">Review Booking</button>
              </div>
            </div>
          )}

          {/* Step 3: Review */}
          {step === 3 && (
            <div className="bg-white rounded-xl shadow-lg p-5 sm:p-8 border border-gray-100">
              <h2 className="text-xl font-semibold text-[var(--color-navy)] font-jost mb-6">Review Your Booking</h2>

              {/* Room summary card */}
              {selectedRoom && (
                <div className="flex flex-col sm:flex-row gap-4 p-4 bg-[var(--color-light-gray)] rounded-xl mb-6">
                  <ImagePlaceholder number={selectedRoom.photos[0].num} label={selectedRoom.photos[0].label} className="w-full sm:w-32 h-24 shrink-0" aspect="" />
                  <div className="flex-1">
                    <div className="font-semibold text-[var(--color-navy)] font-jost">{selectedRoom.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{selectedRoom.bedType} · {selectedRoom.roomSize} · Up to {selectedRoom.maxGuests} guests</div>
                    <div className="text-lg font-bold text-[var(--color-primary)] font-jost mt-2">{selectedRoom.price}<span className="text-xs font-normal text-gray-400 ml-1">/night</span></div>
                  </div>
                </div>
              )}

              <div className="space-y-4 mb-8">
                <div className="bg-[var(--color-light-gray)] p-5 rounded-lg">
                  <h3 className="font-semibold text-[var(--color-navy)] font-jost mb-3">Booking Summary</h3>
                  <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] gap-3 text-sm">
                    <span className="text-gray-500">Property</span>
                    <span>{selectedProperty?.label}</span>
                    <span className="text-gray-500">Room Type</span>
                    <span>{form.roomType || 'Not selected'}</span>
                    <span className="text-gray-500">Check-in</span>
                    <span>{form.checkin || 'Not set'}</span>
                    <span className="text-gray-500">Check-out</span>
                    <span>{form.checkout || 'Not set'}</span>
                    <span className="text-gray-500">Guests</span>
                    <span>{form.adults} Adults</span>
                    <span className="text-gray-500">Rooms</span>
                    <span>{form.rooms}</span>
                  </div>
                </div>
                <div className="bg-[var(--color-light-gray)] p-5 rounded-lg">
                  <h3 className="font-semibold text-[var(--color-navy)] font-jost mb-3">Guest Information</h3>
                  <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] gap-3 text-sm">
                    <span className="text-gray-500">Name</span>
                    <span>{form.firstName} {form.lastName}</span>
                    <span className="text-gray-500">Email</span>
                    <span>{form.email}</span>
                    <span className="text-gray-500">Phone</span>
                    <span>{form.phone}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <button onClick={() => setStep(2)} className="flex-1 border-2 border-gray-200 text-gray-600 py-3.5 rounded-md font-semibold uppercase tracking-wider text-sm hover:bg-gray-50 transition-colors font-jost">Back</button>
                <button onClick={handleNext} className="flex-1 bg-[var(--color-primary)] text-white py-3.5 rounded-md font-semibold uppercase tracking-wider text-sm hover:bg-[var(--color-primary-dark)] transition-colors font-jost">
                  <CreditCard className="w-4 h-4 inline mr-2" />
                  Proceed to Payment
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="py-40 text-center">Loading...</div>}>
      <BookingForm />
    </Suspense>
  );
}

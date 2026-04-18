'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { CalendarDays, Users, Home, CreditCard, Check } from 'lucide-react';

const properties = [
  { value: 'sector-51', label: 'Imperial Stayz - Sector 51 (Flagship)', rooms: ['1RK Deluxe - ₹2,500', '1RK Studio with Sofa - ₹4,500'] },
  { value: 'sector-46', label: 'Imperial Stayz - Sector 46 (Comfort)', rooms: ['Comfort Room - ₹2,200', 'Deluxe Residential - ₹3,200'] },
  { value: 'sector-42', label: 'Imperial Stayz - Sector 42 (Urban)', rooms: ['Standard Room - ₹2,500', 'Deluxe Room - ₹3,500'] },
  { value: 'sector-45', label: 'Imperial Stayz - Sector 45 (Boutique)', rooms: ['Standard Room - ₹2,500', 'Deluxe Room - ₹3,500', 'Premium Suite - ₹5,000'] },
];

function BookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    property: searchParams.get('property') || 'sector-51',
    roomType: '',
    checkin: searchParams.get('checkin') || '',
    checkout: searchParams.get('checkout') || '',
    adults: searchParams.get('adults') || '2',
    children: searchParams.get('children') || '0',
    rooms: searchParams.get('rooms') || '1',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  const selectedProperty = properties.find(p => p.value === form.property);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    if (step === 3) router.push('/booking/payment');
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--color-navy)] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-4xl font-semibold font-[family-name:var(--font-jost)] mb-3">Book Your Stay</h1>
          <p className="text-gray-400">Select your property, dates, and room type</p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="bg-white border-b py-6 px-4">
        <div className="max-w-4xl mx-auto">
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
                <span className={`text-sm font-[family-name:var(--font-jost)] hidden sm:inline ${step >= s.n ? 'text-[var(--color-navy)]' : 'text-gray-400'}`}>{s.label}</span>
                {i < 2 && <div className="w-12 h-px bg-gray-300 mx-2" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Step 1: Room Selection */}
          {step === 1 && (
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-xl font-semibold text-[var(--color-navy)] font-[family-name:var(--font-jost)] mb-6">Select Your Room</h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-[family-name:var(--font-jost)]">Property</label>
                  <select value={form.property} onChange={(e) => setForm({ ...form, property: e.target.value, roomType: '' })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none">
                    {properties.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-[family-name:var(--font-jost)]">Check-in</label>
                    <input type="date" value={form.checkin} onChange={(e) => setForm({ ...form, checkin: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-[family-name:var(--font-jost)]">Check-out</label>
                    <input type="date" value={form.checkout} onChange={(e) => setForm({ ...form, checkout: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-[family-name:var(--font-jost)]">Adults</label>
                    <select value={form.adults} onChange={(e) => setForm({ ...form, adults: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none">
                      {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-[family-name:var(--font-jost)]">Children</label>
                    <select value={form.children} onChange={(e) => setForm({ ...form, children: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none">
                      {[0,1,2,3].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-[family-name:var(--font-jost)]">Rooms</label>
                    <select value={form.rooms} onChange={(e) => setForm({ ...form, rooms: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none">
                      {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-[family-name:var(--font-jost)]">Room Type</label>
                  <div className="space-y-2">
                    {selectedProperty?.rooms.map((room, i) => (
                      <label key={i} className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${form.roomType === room ? 'border-[var(--color-primary)] bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                        <input type="radio" name="roomType" value={room} checked={form.roomType === room} onChange={(e) => setForm({ ...form, roomType: e.target.value })} className="accent-[var(--color-primary)]" />
                        <span className="text-sm font-[family-name:var(--font-jost)]">{room}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <button onClick={handleNext} className="mt-8 w-full bg-[var(--color-primary)] text-white py-3.5 rounded-md font-semibold uppercase tracking-wider text-sm hover:bg-[var(--color-primary-dark)] transition-colors font-[family-name:var(--font-jost)]">
                Continue to Guest Details
              </button>
            </div>
          )}

          {/* Step 2: Guest Details */}
          {step === 2 && (
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-xl font-semibold text-[var(--color-navy)] font-[family-name:var(--font-jost)] mb-6">Guest Details</h2>
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-[family-name:var(--font-jost)]">First Name *</label>
                    <input type="text" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-[family-name:var(--font-jost)]">Last Name *</label>
                    <input type="text" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-[family-name:var(--font-jost)]">Email *</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-[family-name:var(--font-jost)]">Phone *</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none" required />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-[family-name:var(--font-jost)]">Special Requests</label>
                  <textarea rows={3} value={form.specialRequests} onChange={(e) => setForm({ ...form, specialRequests: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none resize-none" placeholder="Any special requirements..." />
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <button onClick={() => setStep(1)} className="flex-1 border-2 border-gray-200 text-gray-600 py-3.5 rounded-md font-semibold uppercase tracking-wider text-sm hover:bg-gray-50 transition-colors font-[family-name:var(--font-jost)]">Back</button>
                <button onClick={handleNext} className="flex-1 bg-[var(--color-primary)] text-white py-3.5 rounded-md font-semibold uppercase tracking-wider text-sm hover:bg-[var(--color-primary-dark)] transition-colors font-[family-name:var(--font-jost)]">Review Booking</button>
              </div>
            </div>
          )}

          {/* Step 3: Review */}
          {step === 3 && (
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-xl font-semibold text-[var(--color-navy)] font-[family-name:var(--font-jost)] mb-6">Review Your Booking</h2>
              <div className="space-y-4 mb-8">
                <div className="bg-[var(--color-light-gray)] p-5 rounded-lg">
                  <h3 className="font-semibold text-[var(--color-navy)] font-[family-name:var(--font-jost)] mb-3">Booking Summary</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div><span className="text-gray-500">Property:</span></div>
                    <div>{selectedProperty?.label}</div>
                    <div><span className="text-gray-500">Room Type:</span></div>
                    <div>{form.roomType || 'Not selected'}</div>
                    <div><span className="text-gray-500">Check-in:</span></div>
                    <div>{form.checkin || 'Not set'}</div>
                    <div><span className="text-gray-500">Check-out:</span></div>
                    <div>{form.checkout || 'Not set'}</div>
                    <div><span className="text-gray-500">Guests:</span></div>
                    <div>{form.adults} Adults, {form.children} Children</div>
                    <div><span className="text-gray-500">Rooms:</span></div>
                    <div>{form.rooms}</div>
                  </div>
                </div>
                <div className="bg-[var(--color-light-gray)] p-5 rounded-lg">
                  <h3 className="font-semibold text-[var(--color-navy)] font-[family-name:var(--font-jost)] mb-3">Guest Information</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div><span className="text-gray-500">Name:</span></div>
                    <div>{form.firstName} {form.lastName}</div>
                    <div><span className="text-gray-500">Email:</span></div>
                    <div>{form.email}</div>
                    <div><span className="text-gray-500">Phone:</span></div>
                    <div>{form.phone}</div>
                  </div>
                </div>
                <div className="bg-[var(--color-cream)] p-5 rounded-lg border border-[var(--color-gold)]/20">
                  <h3 className="font-semibold text-[var(--color-navy)] font-[family-name:var(--font-jost)] mb-2">Estimated Total</h3>
                  <div className="text-2xl font-bold text-[var(--color-primary)] font-[family-name:var(--font-jost)]">₹2,500 - ₹10,000</div>
                  <p className="text-xs text-gray-500 mt-1">Final price depends on room type and duration. Taxes included.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button onClick={() => setStep(2)} className="flex-1 border-2 border-gray-200 text-gray-600 py-3.5 rounded-md font-semibold uppercase tracking-wider text-sm hover:bg-gray-50 transition-colors font-[family-name:var(--font-jost)]">Back</button>
                <button onClick={handleNext} className="flex-1 bg-[var(--color-primary)] text-white py-3.5 rounded-md font-semibold uppercase tracking-wider text-sm hover:bg-[var(--color-primary-dark)] transition-colors font-[family-name:var(--font-jost)]">
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

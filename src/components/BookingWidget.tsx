'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CalendarDays, Users, Home, Search } from 'lucide-react';

const propertyOptions = [
  { value: 'sector-51', label: 'Imperial Stayz — Sector 51' },
  { value: 'sector-46', label: 'Imperial Stayz — Sector 46' },
  { value: 'sector-42', label: 'Imperial Stayz — Sector 42' },
  { value: 'sector-45', label: 'Imperial Stayz — Sector 45' },
];

export default function BookingWidget() {
  const router = useRouter();
  const [form, setForm] = useState({
    property: 'sector-51',
    checkin: '',
    checkout: '',
    adults: '2',
    rooms: '1',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = new URLSearchParams(form).toString();
    router.push(`/booking?${q}`);
  };

  const inputBase = "w-full border-b-2 border-gray-200 py-2.5 text-sm text-navy bg-transparent font-jost focus:border-primary focus:outline-none transition-colors";
  const labelBase = "flex items-center gap-2 text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2.5 font-jost";

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 border border-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-5 items-end">
        {/* Property */}
        <div className="lg:col-span-2">
          <label className={labelBase}><Home className="w-3 h-3" /> Property</label>
          <select value={form.property} onChange={(e) => setForm({ ...form, property: e.target.value })} className={`${inputBase} cursor-pointer`}>
            {propertyOptions.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
          </select>
        </div>

        {/* Check-in */}
        <div>
          <label className={labelBase}><CalendarDays className="w-3 h-3" /> Check-in</label>
          <input type="date" value={form.checkin} onChange={(e) => setForm({ ...form, checkin: e.target.value })} className={inputBase} required />
        </div>

        {/* Check-out */}
        <div>
          <label className={labelBase}><CalendarDays className="w-3 h-3" /> Check-out</label>
          <input type="date" value={form.checkout} onChange={(e) => setForm({ ...form, checkout: e.target.value })} className={inputBase} required />
        </div>

        {/* Guests */}
        <div>
          <label className={labelBase}><Users className="w-3 h-3" /> Guests</label>
          <select value={form.adults} onChange={(e) => setForm({ ...form, adults: e.target.value })} className={`${inputBase} cursor-pointer`}>
            {[1,2,3,4,5,6].map((n) => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
          </select>
        </div>

        {/* Search */}
        <div>
          <button type="submit" className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold uppercase tracking-wider text-sm hover:bg-primary-dark transition-colors font-jost flex items-center justify-center gap-2 shadow-md">
            <Search className="w-4 h-4" /> Search
          </button>
        </div>
      </div>

      {/* Benefits strip */}
      <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {['Best Rate Guarantee', 'Corporate Billing', 'No Hidden Charges', 'Instant Confirmation'].map((t) => (
          <span key={t} className="flex items-center gap-2 text-[11px] text-gray-400 font-jost">
            <span className="w-1 h-1 rounded-full bg-gold" /> {t}
          </span>
        ))}
      </div>
    </form>
  );
}

'use client';
import { useState } from 'react';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { X } from 'lucide-react';

const galleryImages = [
  { num: 73, label: 'Gallery - S45 Exterior', category: 'sector-45' },
  { num: 74, label: 'Gallery - S45 Lobby', category: 'sector-45' },
  { num: 75, label: 'Gallery - S45 Banquet Hall', category: 'sector-45' },
  { num: 76, label: 'Gallery - S45 Rooftop', category: 'sector-45' },
  { num: 77, label: 'Gallery - S45 Standard Room', category: 'sector-45' },
  { num: 78, label: 'Gallery - S45 Deluxe Room', category: 'sector-45' },
  { num: 79, label: 'Gallery - S46 Exterior', category: 'sector-46' },
  { num: 80, label: 'Gallery - S46 Room Interior', category: 'sector-46' },
  { num: 81, label: 'Gallery - S46 Rooftop', category: 'sector-46' },
  { num: 82, label: 'Gallery - S46 Common Area', category: 'sector-46' },
  { num: 83, label: 'Gallery - S51 Exterior', category: 'sector-51' },
  { num: 84, label: 'Gallery - S51 1RK Kitchen', category: 'sector-51' },
  { num: 85, label: 'Gallery - S51 Room', category: 'sector-51' },
  { num: 86, label: 'Gallery - S51 Common Area', category: 'sector-51' },
  { num: 87, label: 'Gallery - S42 Exterior', category: 'sector-42' },
  { num: 88, label: 'Gallery - S42 Terrace', category: 'sector-42' },
  { num: 89, label: 'Gallery - S42 Room', category: 'sector-42' },
  { num: 90, label: 'Gallery - S42 Deluxe Room', category: 'sector-42' },
  { num: 91, label: 'Gallery - Dining / Kitchen', category: 'dining' },
  { num: 92, label: 'Gallery - Corporate Catering', category: 'dining' },
  { num: 93, label: 'Gallery - Rooftop Event', category: 'events' },
  { num: 94, label: 'Gallery - Banquet Setup', category: 'events' },
  { num: 95, label: 'Gallery - Outdoor Terrace Event', category: 'events' },
  { num: 96, label: 'Gallery - Reception / Staff', category: 'general' },
];

const categories = [
  { value: 'all', label: 'All' },
  { value: 'sector-45', label: 'Sector 45' },
  { value: 'sector-46', label: 'Sector 46' },
  { value: 'sector-51', label: 'Sector 51' },
  { value: 'sector-42', label: 'Sector 42' },
  { value: 'dining', label: 'Dining' },
  { value: 'events', label: 'Events' },
  { value: 'general', label: 'General' },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === 'all' ? galleryImages : galleryImages.filter(img => img.category === filter);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[400px]">
        <ImagePlaceholder number={97} label="Gallery Page Hero - Collage of Hotel Photos" className="w-full h-full !rounded-none" aspect="" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="section-divider text-[var(--color-gold)] text-xs uppercase tracking-[0.3em] mb-4 font-jost">Photo Gallery</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-jost">Our Gallery</h1>
            <p className="mt-4 text-gray-300 max-w-xl mx-auto">Explore our properties, rooms, dining, and event spaces</p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-6 bg-white border-b sticky top-20 z-30">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => setFilter(c.value)}
              className={`px-4 py-2 rounded-full text-sm font-semibold font-jost uppercase tracking-wider transition-colors ${
                filter === c.value ? 'bg-[var(--color-primary)] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <button
                key={img.num}
                onClick={() => setLightbox(i)}
                className="group cursor-pointer"
              >
                <ImagePlaceholder
                  number={img.num}
                  label={img.label}
                  className="w-full h-40 sm:h-48 lg:h-56 xl:h-60 group-hover:opacity-90 transition-opacity"
                  aspect=""
                />
              </button>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-20">No images in this category yet.</p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-white hover:text-gray-300" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <ImagePlaceholder
              number={filtered[lightbox].num}
              label={filtered[lightbox].label}
              className="w-full h-[70vh]"
              aspect=""
            />
          </div>
        </div>
      )}
    </div>
  );
}

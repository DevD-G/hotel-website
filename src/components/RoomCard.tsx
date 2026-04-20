'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import ImagePlaceholder from './ImagePlaceholder';
import {
  ChevronLeft, ChevronRight, X, Bed, Maximize2, Users,
  Wifi, Tv, Snowflake, Coffee, Bath, UtensilsCrossed,
  Refrigerator, Sofa, Eye, Shirt, Dock, Check
} from 'lucide-react';

export interface RoomPhoto {
  num: number;
  label: string;
}

export interface RoomType {
  name: string;
  price: string;
  priceNote?: string;
  photos: RoomPhoto[];
  bedType: string;
  roomSize: string;
  maxGuests: number;
  features: string[];
  breakfast: { included: boolean; addOnPrice?: string };
  highlight?: string;
}

const featureIconMap: Record<string, typeof Wifi> = {
  'WiFi': Wifi,
  'Free WiFi': Wifi,
  'Smart LED TV': Tv,
  'AC': Snowflake,
  'Climate Control': Snowflake,
  'Attached Bath': Bath,
  'Private Bathroom': Bath,
  'Mini Fridge': Refrigerator,
  'Mini Bar': Refrigerator,
  'Kitchenette': UtensilsCrossed,
  'Work Desk': Dock,
  'Sofa': Sofa,
  'Living Area': Sofa,
  'City View': Eye,
  'Balcony': Eye,
  'Terrace Access': Eye,
  'Washer': Shirt,
  'Coffee Maker': Coffee,
};

function getFeatureIcon(feature: string) {
  return featureIconMap[feature] || Check;
}

export default function RoomCard({ room, slug }: { room: RoomType; slug: string }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  const photos = room.photos;
  const prevPhoto = () => setPhotoIndex((p) => (p === 0 ? photos.length - 1 : p - 1));
  const nextPhoto = useCallback(() => setPhotoIndex((p) => (p + 1) % photos.length), [photos.length]);

  // Auto-play on mobile (< 640px)
  useEffect(() => {
    if (photos.length <= 1) return;
    const mq = window.matchMedia('(max-width: 639px)');
    if (!mq.matches) return;
    const t = setInterval(nextPhoto, 3000);
    return () => clearInterval(t);
  }, [photos.length, nextPhoto]);

  const handleTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEnd.current = e.changedTouches[0].clientX;
    const diff = touchStart.current - touchEnd.current;
    if (Math.abs(diff) > 50) { diff > 0 ? nextPhoto() : prevPhoto(); }
  };

  const openModal = (idx: number) => {
    setModalIndex(idx);
    setModalOpen(true);
  };

  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col lg:flex-row">

          {/* Photo Carousel — 40% */}
          <div className="lg:w-[40%] relative group shrink-0" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <button onClick={() => openModal(photoIndex)} className="block w-full">
              <ImagePlaceholder
                number={photos[photoIndex].num}
                label={photos[photoIndex].label}
                className="w-full h-48 sm:h-56 lg:h-full lg:min-h-[320px] !rounded-none cursor-pointer"
                aspect=""
              />
            </button>

            {/* Arrows — hidden on mobile */}
            {photos.length > 1 && (
              <>
                <button
                  onClick={prevPhoto}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 shadow-md hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-700" />
                </button>
                <button
                  onClick={nextPhoto}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 shadow-md hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                >
                  <ChevronRight className="w-4 h-4 text-gray-700" />
                </button>
              </>
            )}

            {/* Dot indicators */}
            {photos.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPhotoIndex(i)}
                    className={`rounded-full transition-all duration-300 ${i === photoIndex ? 'w-6 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50'}`}
                  />
                ))}
              </div>
            )}

            {/* Photo count badge */}
            <button
              onClick={() => openModal(0)}
              className="absolute top-3 left-3 bg-black/60 text-white text-[11px] px-2.5 py-1 rounded-lg font-jost flex items-center gap-1.5 hover:bg-black/80 transition-colors"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
              {photos.length} photos
            </button>

            {/* Highlight badge */}
            {room.highlight && (
              <div className="absolute top-3 right-3 bg-green-600 text-white text-[10px] px-2.5 py-1 rounded-lg font-jost font-semibold uppercase tracking-wider">
                {room.highlight}
              </div>
            )}
          </div>

          {/* Room Details — 60% */}
          <div className="lg:w-[60%] p-5 sm:p-6 lg:p-7 flex flex-col">

            {/* Header row */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-navy font-jost mb-1.5">{room.name}</h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Bed className="w-3.5 h-3.5" /> {room.bedType}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5" /> {room.roomSize}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" /> Up to {room.maxGuests} guests
                  </span>
                </div>
              </div>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 mb-5">
              {room.features.map((feature, i) => {
                const Icon = getFeatureIcon(feature);
                return (
                  <span key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    {feature}
                  </span>
                );
              })}
            </div>

            {/* Breakfast option */}
            <div className={`flex items-center gap-2 text-sm mb-5 px-3 py-2.5 rounded-lg ${room.breakfast.included ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'}`}>
              <UtensilsCrossed className="w-4 h-4 shrink-0" />
              {room.breakfast.included ? (
                <span><strong>Breakfast included</strong></span>
              ) : (
                <span>Breakfast available {room.breakfast.addOnPrice ? `at ${room.breakfast.addOnPrice}/person` : 'on request'}</span>
              )}
            </div>

            {/* Divider + Price + CTA */}
            <div className="mt-auto pt-5 border-t border-gray-100 flex items-end justify-between gap-4">
              <div>
                <div className="text-2xl font-bold text-navy font-jost">
                  {room.price}
                  <span className="text-sm font-normal text-gray-400 ml-1">/night</span>
                </div>
                {room.priceNote && (
                  <p className="text-xs text-gray-400 mt-0.5">{room.priceNote}</p>
                )}
              </div>
              <Link
                href={`/booking?property=${slug}&room=${encodeURIComponent(room.name)}`}
                className="bg-primary text-white px-7 py-3 rounded-xl font-semibold uppercase tracking-wider text-sm hover:bg-primary-dark transition-colors font-jost shadow-md shrink-0"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col" onClick={() => setModalOpen(false)}>
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 shrink-0" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-white font-jost font-semibold text-lg">{room.name}</h3>
            <button onClick={() => setModalOpen(false)} className="text-white/70 hover:text-white p-1">
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Main image */}
          <div className="flex-1 flex items-center justify-center px-4 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setModalIndex((p) => (p === 0 ? photos.length - 1 : p - 1))}
              className="absolute left-2 sm:left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <div className="max-w-5xl w-full">
              <ImagePlaceholder
                number={photos[modalIndex].num}
                label={photos[modalIndex].label}
                className="w-full h-[60vh] md:h-[70vh]"
                aspect=""
              />
            </div>

            <button
              onClick={() => setModalIndex((p) => (p + 1) % photos.length)}
              className="absolute right-2 sm:right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Thumbnail strip */}
          <div className="px-6 py-4 shrink-0" onClick={(e) => e.stopPropagation()}>
            <div className="flex gap-2 justify-center overflow-x-auto">
              {photos.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setModalIndex(i)}
                  className={`shrink-0 rounded-lg overflow-hidden transition-all ${i === modalIndex ? 'ring-2 ring-white scale-105' : 'opacity-50 hover:opacity-80'}`}
                >
                  <ImagePlaceholder
                    number={photo.num}
                    label={photo.label}
                    className="w-20 h-14"
                    aspect=""
                  />
                </button>
              ))}
            </div>
            <p className="text-center text-white/50 text-xs mt-2 font-jost">
              {modalIndex + 1} / {photos.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

'use client';
import { useState } from 'react';

interface ImagePlaceholderProps {
  number: number;
  label: string;
  className?: string;
  aspect?: string;
}

const gradientMap: Record<string, string> = {
  hero: 'ph-hero',
  room: 'ph-room',
  lobby: 'ph-lobby',
  reception: 'ph-lobby',
  about: 'ph-lobby',
  standard: 'ph-room',
  deluxe: 'ph-room',
  premium: 'ph-room',
  suite: 'ph-room',
  dining: 'ph-dining',
  kitchen: 'ph-dining',
  food: 'ph-dining',
  event: 'ph-event',
  rooftop: 'ph-event',
  terrace: 'ph-event',
  banquet: 'ph-event',
  exterior: 'ph-exterior',
  map: 'ph-exterior',
  sector: 'ph-exterior',
};

function getGradient(label: string): string {
  const lower = label.toLowerCase();
  for (const [key, cls] of Object.entries(gradientMap)) {
    if (lower.includes(key)) return cls;
  }
  return 'ph-hero';
}

export default function ImagePlaceholder({ number, label, className = '', aspect = 'aspect-video' }: ImagePlaceholderProps) {
  const [hasImage, setHasImage] = useState(true);

  if (hasImage) {
    return (
      <div className={`relative overflow-hidden rounded-xl ${aspect} ${className}`}>
        <img
          src={`/images/photo-${number}.jpg`}
          alt={label}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          onError={() => setHasImage(false)}
        />
      </div>
    );
  }

  return (
    <div className={`image-placeholder ph-shimmer ph-pattern ${getGradient(label)} ${aspect} ${className}`}>
      <div className="absolute bottom-0 left-0 right-0 h-1/3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)', zIndex: 1 }} />
    </div>
  );
}

'use client';
import { useState, useRef } from 'react';

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
  const [imgSrc, setImgSrc] = useState(`/images/photo-${number}.jpg`);
  const [hasImage, setHasImage] = useState(true);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('number', String(number));

    try {
      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) {
        setImgSrc(`${data.path}?t=${Date.now()}`);
        setHasImage(true);
      }
    } catch {
      // silently fail
    }
    setUploading(false);
  };

  // Hidden file input
  const fileInput = (
    <input
      ref={fileRef}
      type="file"
      accept="image/*"
      className="hidden"
      onChange={handleUpload}
    />
  );

  // Upload button overlay
  const uploadBtn = (
    <button
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); fileRef.current?.click(); }}
      className="absolute top-2 right-2 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white font-jost text-[11px] font-semibold cursor-pointer hover:scale-105 transition-transform"
      style={{ zIndex: 20, background: 'rgba(12,93,205,0.9)', backdropFilter: 'blur(4px)' }}
    >
      {uploading ? (
        <span>Uploading...</span>
      ) : (
        <>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          {hasImage ? 'Replace' : 'Upload'}
        </>
      )}
    </button>
  );

  if (hasImage) {
    return (
      <div className={`relative overflow-hidden rounded-xl ${aspect} ${className}`}>
        {fileInput}
        <img
          src={imgSrc}
          alt={label}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          onError={() => setHasImage(false)}
        />
        {uploadBtn}
      </div>
    );
  }

  // Placeholder with upload
  return (
    <div
      className={`image-placeholder ph-shimmer ph-pattern ${getGradient(label)} ${aspect} ${className} cursor-pointer`}
      onClick={() => fileRef.current?.click()}
    >
      {fileInput}
      {/* Dev label */}
      <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-white font-jost" style={{ zIndex: 10, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', fontSize: 10 }}>
        <span className="font-bold">#{number}</span>
        <span className="opacity-70">·</span>
        <span className="opacity-70 truncate max-w-[180px]">{label}</span>
      </div>
      {/* Upload prompt */}
      <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ zIndex: 5 }}>
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-2" style={{ background: 'rgba(255,255,255,0.1)', border: '2px dashed rgba(255,255,255,0.3)' }}>
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" /></svg>
        </div>
        <span className="text-white/40 text-xs font-jost">Click to upload photo</span>
      </div>
      {uploading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50" style={{ zIndex: 15 }}>
          <span className="text-white font-jost text-sm">Uploading...</span>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 h-1/3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)', zIndex: 1 }} />
    </div>
  );
}

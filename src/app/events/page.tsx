'use client';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Link from 'next/link';
import { Users, Star, MapPin, PartyPopper } from 'lucide-react';

const eventSpaces = [
  {
    name: 'Sector 51 Terrace',
    property: 'Flagship Property',
    capacity: 'Up to 30 guests',
    features: ['Terrace space', 'Professional AV setup', 'In-house catering', 'Dedicated event manager'],
    idealFor: 'Corporate events, seminars, workshops, celebrations',
    imgNum: 115, imgLabel: 'S51 Terrace Event Setup',
  },
  {
    name: 'Sector 45 Rooftop',
    property: 'Flagship Property',
    capacity: 'Up to 80 guests',
    features: ['Open-air rooftop', 'City views', 'Ambient lighting', 'BBQ capability'],
    idealFor: 'After-parties, networking events, cocktail evenings',
    imgNum: 116, imgLabel: 'S45 Rooftop Event',
  },
  {
    name: 'Sector 46 Terrace',
    property: 'Comfort Retreat',
    capacity: 'Up to 80 guests',
    features: ['Intimate terrace', 'Residential setting', 'Catering available', 'Customizable layout'],
    idealFor: 'Small corporate gatherings, team outings, family events',
    imgNum: 117, imgLabel: 'S46 Terrace Event',
  },
  {
    name: 'Sector 42 Premium Terrace with Pool',
    property: 'Urban Connect',
    capacity: 'Up to 60 guests',
    features: ['Premium terrace space', 'Pool access', 'Central location', 'Full catering', 'Sound system available'],
    idealFor: 'Corporate get-togethers, product launches, open-air networking',
    imgNum: 118, imgLabel: 'S42 Premium Terrace Event',
  },
];

export default function EventsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[455px]">
        <ImagePlaceholder number={119} label="Events Hero - Banquet/Rooftop Event" className="w-full h-full !rounded-none" aspect="" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="section-divider text-[var(--color-gold)] text-xs uppercase tracking-[0.3em] mb-4 font-jost">Events & Gatherings</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-jost">Unique Event Spaces</h1>
            <p className="mt-4 text-gray-300 max-w-xl mx-auto">Rooftops, terraces & banquet halls for every occasion</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[var(--color-navy)] font-jost mb-6">Host Your Next Event with Us</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Each Imperial Stayz property features unique rooftop or terrace spaces specifically designed for after-event parties,
            corporate get-togethers, and open-air networking. Our Sector 45 flagship also includes a dedicated banquet hall
            for larger events.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Every event is supported by dedicated Event Managers who handle end-to-end logistics — from catering and setup
            to AV equipment and cleanup — allowing organizers to focus entirely on their guests.
          </p>
        </div>
      </section>

      {/* Event Spaces */}
      <section className="py-16 px-6 bg-[var(--color-light-gray)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-[var(--color-navy)] font-jost mb-10 text-center">Our Event Venues</h2>
          <div className="space-y-10">
            {eventSpaces.map((space, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-2">
                <ImagePlaceholder number={space.imgNum} label={space.imgLabel} className="w-full h-48 sm:h-56 lg:h-full !rounded-none" aspect="" />
                <div className="p-8">
                  <div className="text-xs text-[var(--color-primary)] font-semibold uppercase tracking-wider mb-2 font-jost">{space.property}</div>
                  <h3 className="text-xl font-semibold text-[var(--color-navy)] font-jost mb-4">{space.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-4 h-4 text-[var(--color-primary)]" />
                    <span className="text-sm text-gray-600">{space.capacity}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {space.features.map((f, j) => (
                      <span key={j} className="text-xs bg-blue-50 text-[var(--color-primary)] px-3 py-1 rounded-full">{f}</span>
                    ))}
                  </div>
                  <div className="flex items-start gap-2 mb-6">
                    <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-600"><strong>Ideal For:</strong> {space.idealFor}</span>
                  </div>
                  <Link href="/contact" className="inline-block bg-[var(--color-primary)] text-white px-6 py-2.5 rounded-md text-sm font-semibold uppercase tracking-wider hover:bg-[var(--color-primary-dark)] transition-colors font-jost">
                    Enquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[var(--color-brown)]">
        <div className="max-w-3xl mx-auto text-center text-white">
          <PartyPopper className="w-10 h-10 mx-auto mb-4 text-[var(--color-gold-light)]" />
          <h2 className="text-3xl font-semibold font-jost mb-4">Planning Something Special?</h2>
          <p className="text-gray-200 mb-8">Let our event team handle the logistics while you focus on your guests. Corporate events, celebrations, or networking — we&apos;ve got the perfect space.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="inline-block bg-[var(--color-primary)] text-white px-8 py-3.5 rounded-md font-semibold uppercase tracking-wider text-sm hover:bg-[var(--color-primary-dark)] transition-colors font-jost">Contact Us</Link>
            <a href="tel:+917011080455" className="inline-block border-2 border-white text-white px-8 py-3.5 rounded-md font-semibold uppercase tracking-wider text-sm hover:bg-white hover:text-[var(--color-navy)] transition-colors font-jost">Call Now</a>
          </div>
        </div>
      </section>
    </div>
  );
}

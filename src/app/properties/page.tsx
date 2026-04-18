import Link from 'next/link';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { MapPin, Star, ArrowRight } from 'lucide-react';

const properties = [
  {
    slug: 'sector-51', name: 'Sector 51', tag: 'Flagship Property', rooms: 15, type: 'Business Hotel',
    vibe: 'Functional, quiet corporate base',
    proximity: 'Direct access to NH-48 corridor, near Sector 53-54 commercial belt, 15 mins to Cyber City.',
    idealFor: 'Extended corporate deployments, project teams, and professionals requiring highway connectivity.',
    diff: '1RK Deluxe & Studio Rooms',
    imgNum: 21, imgLabel: 'Sector 51 Property Exterior',
  },
  {
    slug: 'sector-46', name: 'Sector 46', tag: 'Comfort Retreat', rooms: 14, type: 'Comfort Stay',
    vibe: 'Calm, established residential comfort',
    proximity: 'Near Sector 46 Rapid Metro, 10 mins from Artemis Hospital, 12 mins from Medanta.',
    idealFor: 'Healthcare visitors, extended family stays, and medical tourism requiring a homely, elegant retreat.',
    diff: 'Roof + Elegant Residential Rooms',
    imgNum: 20, imgLabel: 'Sector 46 Property Exterior',
  },
  {
    slug: 'sector-42', name: 'Sector 42', tag: 'Urban Connect', rooms: 15, type: 'Comfort Stay',
    vibe: 'Centralized, high-energy urban access',
    proximity: '5 mins from IFFCO Chowk Metro, 10 mins from DLF Cyber Hub/Cyber City, near Udyog Vihar.',
    idealFor: 'Executives, VIP project teams, and professionals needing to be in the absolute center of Gurugram\'s commercial district.',
    diff: 'Premium Terrace + Hotel-Style Rooms',
    imgNum: 22, imgLabel: 'Sector 42 Property Exterior',
  },
  {
    slug: 'sector-45', name: 'Sector 45', tag: 'Boutique Hotel', rooms: 18, type: 'Boutique Hotel',
    vibe: 'Premium urban convenience',
    proximity: '2 mins from Galleria Market, 5 mins from Fortis Memorial Hospital, near DLF Phase IV.',
    idealFor: 'Corporate events requiring banqueting combined with premium accommodation.',
    diff: 'Roof + Banquet Hall Facility',
    imgNum: 19, imgLabel: 'Sector 45 Property Exterior',
  },
];

export default function PropertiesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative" style={{ height: 350 }}>
        <ImagePlaceholder number={23} label="Properties Page Hero - Multiple Buildings" className="w-full h-full !rounded-none" aspect="" />
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))' }}>
          <div className="text-center text-white px-6">
            <p className="section-divider text-gold text-xs uppercase tracking-[0.3em] mb-4 font-jost">Our Portfolio</p>
            <h1 className="text-4xl md:text-5xl font-semibold font-jost">Our Properties</h1>
            <p className="mt-3 text-gray-300 max-w-xl mx-auto">Distinct property hubs strategically mapped across Gurugram&apos;s prime sectors</p>
          </div>
        </div>
      </section>

      {/* Properties List */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {properties.map((prop, i) => (
            <div key={prop.slug} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <ImagePlaceholder number={prop.imgNum} label={prop.imgLabel} className="w-full h-80 shadow-xl" aspect="" />
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="inline-block bg-primary text-white px-4 py-1.5 rounded-full text-[11px] font-semibold font-jost uppercase tracking-wider mb-4">
                  {prop.tag}
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold text-navy font-jost mb-6">
                  Imperial Stayz — {prop.name}
                </h2>

                {/* Key-value details — aligned grid */}
                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden mb-6">
                  {[
                    { label: 'Scale', value: `${prop.rooms} Rooms · ${prop.type}` },
                    { label: 'Vibe', value: prop.vibe },
                    { label: 'Proximity', value: prop.proximity },
                    { label: 'Ideal For', value: prop.idealFor },
                  ].map((d, j) => (
                    <div key={j} className={`grid grid-cols-[110px_1fr] md:grid-cols-[140px_1fr] ${j < 3 ? 'border-b border-gray-100' : ''}`}>
                      <div className="bg-gray-50 px-5 py-3.5 text-xs font-semibold text-navy font-jost uppercase tracking-wider">{d.label}</div>
                      <div className="px-5 py-3.5 text-sm text-gray-600 leading-relaxed">{d.value}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-cream px-5 py-3 rounded-xl inline-flex items-center gap-2 mb-6">
                  <Star className="w-3.5 h-3.5 text-gold" />
                  <span className="text-xs text-gold font-semibold font-jost">{prop.diff}</span>
                </div>

                <div className="block">
                  <Link href={`/properties/${prop.slug}`} className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-lg font-semibold uppercase tracking-wider text-sm hover:bg-primary-dark transition-colors font-jost shadow-md group">
                    View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function TermsPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color-navy)] font-[family-name:var(--font-jost)] mb-8">Terms & Conditions</h1>
        <div className="prose prose-gray max-w-none space-y-6 text-sm text-gray-600 leading-relaxed">
          <p><strong>Last updated:</strong> January 2025</p>

          <h2 className="text-xl font-semibold text-[var(--color-navy)] font-[family-name:var(--font-jost)] mt-8">1. Booking & Reservations</h2>
          <p>All bookings are subject to availability. Reservations can be made through our website, by phone (+91 70110 80455), or via email. A valid credit/debit card or advance payment is required to confirm your reservation.</p>

          <h2 className="text-xl font-semibold text-[var(--color-navy)] font-[family-name:var(--font-jost)] mt-8">2. Check-in & Check-out</h2>
          <p>Standard check-in time is 12:00 PM and check-out time is 11:00 AM. Early check-in and late check-out are subject to availability and may incur additional charges. A valid government-issued photo ID is required at check-in.</p>

          <h2 className="text-xl font-semibold text-[var(--color-navy)] font-[family-name:var(--font-jost)] mt-8">3. Cancellation Policy</h2>
          <p>Free cancellation is available up to 24 hours before the check-in date. Cancellations made within 24 hours of check-in or no-shows will be charged the first night&apos;s room rate. Refunds for eligible cancellations will be processed within 5-7 business days.</p>

          <h2 className="text-xl font-semibold text-[var(--color-navy)] font-[family-name:var(--font-jost)] mt-8">4. Payment</h2>
          <p>We accept all major credit/debit cards, UPI, net banking, and cash payments. All rates are inclusive of applicable taxes. Corporate billing arrangements are available upon request.</p>

          <h2 className="text-xl font-semibold text-[var(--color-navy)] font-[family-name:var(--font-jost)] mt-8">5. Property Rules</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Smoking is prohibited in all indoor areas</li>
            <li>Pets are not allowed on the premises</li>
            <li>Visitors must be registered at the front desk</li>
            <li>Quiet hours are observed from 10:00 PM to 7:00 AM</li>
            <li>Damage to property will be charged to the guest</li>
            <li>The management reserves the right to refuse service</li>
          </ul>

          <h2 className="text-xl font-semibold text-[var(--color-navy)] font-[family-name:var(--font-jost)] mt-8">6. Liability</h2>
          <p>Imperial Stayz is not responsible for loss or damage to personal belongings. Safe deposit facilities are available at the front desk. Guests are advised to secure their valuables.</p>

          <h2 className="text-xl font-semibold text-[var(--color-navy)] font-[family-name:var(--font-jost)] mt-8">7. Corporate Tie-Ups</h2>
          <p>Corporate rates and billing arrangements are available for businesses. Terms of corporate agreements will be governed by the specific contract signed between Imperial Stayz and the corporate entity.</p>

          <h2 className="text-xl font-semibold text-[var(--color-navy)] font-[family-name:var(--font-jost)] mt-8">8. Governing Law</h2>
          <p>These terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in Gurugram, Haryana.</p>

          <h2 className="text-xl font-semibold text-[var(--color-navy)] font-[family-name:var(--font-jost)] mt-8">9. Contact</h2>
          <p>
            Imperial Stayz<br />
            1210P, Sector 51, Gurugram, Haryana, 122018<br />
            Email: devang@imperialstayz.com<br />
            Phone: +91 70110 80455
          </p>
        </div>
      </div>
    </div>
  );
}

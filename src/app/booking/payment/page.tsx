'use client';
import { useState } from 'react';
import Link from 'next/link';
import { CreditCard, Check, Lock, Wallet, Building2, Smartphone } from 'lucide-react';

export default function PaymentPage() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-lg mx-auto text-center">
        <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.049.58.025 1.192-.14 1.743" /></svg>
        </div>
        <h2 className="text-2xl font-semibold text-[var(--color-navy)] font-jost mb-3">We&apos;re Doing Some Maintenance</h2>
        <p className="text-gray-500 leading-relaxed mb-8">Our online booking system is currently under maintenance. Kindly contact us directly for bookings and we&apos;ll be happy to assist you.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/contact" className="bg-[var(--color-primary)] text-white px-8 py-3.5 rounded-xl font-semibold uppercase tracking-wider text-sm hover:bg-[var(--color-primary-dark)] transition-colors font-jost shadow-md">Contact Us</Link>
          <a href="tel:+917011080455" className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-3.5 rounded-xl font-semibold uppercase tracking-wider text-sm hover:bg-[var(--color-primary)] hover:text-white transition-colors font-jost">Call +91 70110 80455</a>
        </div>
      </div>
    </div>
  );

  // --- PAYMENT FORM (temporarily disabled) ---
  // eslint-disable-next-line no-unreachable
  const [method, setMethod] = useState('card');
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePay = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
    }, 2000);
  };

  if (success) {
    return (
      <div className="py-20 px-6">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-semibold text-[var(--color-navy)] font-jost mb-4">Booking Confirmed!</h1>
          <p className="text-gray-600 mb-2">Thank you for choosing Imperial Stayz.</p>
          <p className="text-gray-500 text-sm mb-8">
            A confirmation email has been sent to your registered email address.
            Your booking reference is <strong className="text-[var(--color-navy)]">IS-{Math.random().toString(36).substring(2, 8).toUpperCase()}</strong>
          </p>
          <div className="bg-[var(--color-cream)] p-6 rounded-xl mb-8 text-left">
            <h3 className="font-semibold text-[var(--color-navy)] font-jost mb-3">What&apos;s Next?</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Check your email for the detailed booking confirmation</li>
              <li>• You can call +91 70110 80455 for any modifications</li>
              <li>• Check-in time is 12:00 PM, Check-out is 11:00 AM</li>
              <li>• Carry a valid photo ID for check-in</li>
            </ul>
          </div>
          <div className="flex gap-4 justify-center">
            <Link href="/" className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-md font-semibold uppercase tracking-wider text-sm hover:bg-[var(--color-primary-dark)] transition-colors font-jost">
              Back to Home
            </Link>
            <Link href="/contact" className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-3 rounded-md font-semibold uppercase tracking-wider text-sm hover:bg-[var(--color-primary)] hover:text-white transition-colors font-jost">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-[var(--color-navy)] py-12 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-3xl font-semibold font-jost mb-2">Payment</h1>
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" /> Secure payment — your data is encrypted
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Order Summary */}
          <div className="bg-[var(--color-light-gray)] p-6 rounded-xl mb-8">
            <h3 className="font-semibold text-[var(--color-navy)] font-jost mb-3">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-500">Room Charges (Demo)</span><span>₹3,500</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Taxes (18%)</span><span>₹630</span></div>
              <div className="border-t pt-2 mt-2 flex justify-between font-semibold text-[var(--color-navy)]">
                <span>Total</span><span className="text-lg">₹4,130</span>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-lg font-semibold text-[var(--color-navy)] font-jost mb-6">Select Payment Method</h3>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-8">
              {[
                { id: 'card', label: 'Card', icon: CreditCard },
                { id: 'upi', label: 'UPI', icon: Smartphone },
                { id: 'netbanking', label: 'Net Banking', icon: Building2 },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMethod(m.id)}
                  className={`p-4 rounded-lg border text-center transition-colors ${
                    method === m.id ? 'border-[var(--color-primary)] bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <m.icon className={`w-6 h-6 mx-auto mb-2 ${method === m.id ? 'text-[var(--color-primary)]' : 'text-gray-400'}`} />
                  <span className="text-sm font-jost">{m.label}</span>
                </button>
              ))}
            </div>

            {/* Card Form */}
            {method === 'card' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-jost">Card Number</label>
                  <input type="text" placeholder="1234 5678 9012 3456" maxLength={19} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-jost">Expiry</label>
                    <input type="text" placeholder="MM/YY" maxLength={5} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-jost">CVV</label>
                    <input type="text" placeholder="123" maxLength={3} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-jost">Name on Card</label>
                  <input type="text" placeholder="JOHN DOE" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none" />
                </div>
              </div>
            )}

            {method === 'upi' && (
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-jost">UPI ID</label>
                <input type="text" placeholder="yourname@upi" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none" />
              </div>
            )}

            {method === 'netbanking' && (
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-jost">Select Bank</label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none bg-white">
                  <option>State Bank of India</option>
                  <option>HDFC Bank</option>
                  <option>ICICI Bank</option>
                  <option>Axis Bank</option>
                  <option>Punjab National Bank</option>
                  <option>Kotak Mahindra Bank</option>
                  <option>Other</option>
                </select>
              </div>
            )}

            <button
              onClick={handlePay}
              disabled={processing}
              className="mt-8 w-full bg-[var(--color-primary)] text-white py-4 rounded-md font-semibold uppercase tracking-wider text-sm hover:bg-[var(--color-primary-dark)] transition-colors font-jost disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {processing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  Pay ₹4,130 (Demo)
                </>
              )}
            </button>

            <p className="text-xs text-gray-400 text-center mt-4">
              This is a demo payment page. No real transactions will be processed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Lock, ArrowRight } from 'lucide-react';

export default function EnrollModal({ modalState, onClose }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!modalState.isOpen) return null;

  const mode = modalState.mode; // 'enroll' | 'contact' | 'privacy' | 'terms'

  const resetAndClose = () => {
    setError('');
    setSubmitted(false);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!fullName.trim() || fullName.trim().length < 2) {
      setError('Please enter your full name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    if (mode === 'enroll') {
      const cleanedPhone = phone.replace(/[\s()-]/g, '');
      if (!/^\+?[0-9]{8,15}$/.test(cleanedPhone)) {
        setError('Please enter a valid 10-digit mobile number for instant course access.');
        return;
      }
    }

    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-heading"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#241510]/75 backdrop-blur-xs overflow-y-auto"
      onClick={resetAndClose}
    >
      <div
        className="bg-[#FFF8F0] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#3B2118]/15 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#3B2118] text-[#FFF8F0] px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold tracking-widest text-[#C47A44] uppercase">
              {mode === 'enroll' && 'Instant Lifetime Access'}
              {mode === 'contact' && 'Student Support Desk'}
              {mode === 'privacy' && 'Legal Information'}
              {mode === 'terms' && 'Academy Policies'}
            </p>
            <h3 id="modal-heading" className="font-serif-display text-2xl font-bold text-white">
              {mode === 'enroll' && 'Complete Baking Course Enrollment'}
              {mode === 'contact' && 'Contact Chef Sarah’s Team'}
              {mode === 'privacy' && 'Privacy Policy'}
              {mode === 'terms' && 'Terms & Conditions'}
            </h3>
          </div>
          <button
            type="button"
            onClick={resetAndClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Policy View */}
        {(mode === 'privacy' || mode === 'terms') && (
          <div className="p-6 sm:p-8 space-y-4 text-sm text-[#241510]/85 leading-relaxed max-h-[70vh] overflow-y-auto">
            {mode === 'privacy' ? (
              <>
                <p>
                  <strong>1. Student Data Protection:</strong> Bakery Academy respects your privacy.
                  We collect only your name, email address, and phone number to provision your course
                  account, deliver recipe PDFs, and issue your signed Certificate of Completion.
                </p>
                <p>
                  <strong>2. Payment Security:</strong> All payments are processed through
                  PCI-DSS compliant 256-bit encrypted gateways. We never store raw card details or
                  UPI PINs on our servers.
                </p>
                <p>
                  <strong>3. Communication:</strong> You will receive transactional course access
                  emails and optional curriculum update notices. We never sell or rent student lists.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>1. Lifetime Course License:</strong> Enrollment in the Complete Baking
                  Course grants one individual lifetime streaming access to all 6 modules (30+ video
                  lessons) and downloadable recipe guides.
                </p>
                <p>
                  <strong>2. Intellectual Property:</strong> All recipe formulations, scaling sheets,
                  and video demonstrations are proprietary to Chef Sarah and Bakery Academy. You are
                  encouraged to bake and sell creations made from these recipes, but redistributing
                  the course videos or PDF files is prohibited.
                </p>
                <p>
                  <strong>3. Certification:</strong> Your personalized Certificate of Completion is
                  unlocked upon finishing the 6 core modules.
                </p>
              </>
            )}
            <div className="pt-4">
              <button
                type="button"
                onClick={resetAndClose}
                className="w-full py-3 px-6 text-sm font-semibold text-white bg-[#3B2118] hover:bg-[#241510] rounded-xl cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

        {/* Enrollment or Contact Form View */}
        {(mode === 'enroll' || mode === 'contact') && (
          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#C47A44]/15 text-[#3B2118] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-[#C47A44]" />
                </div>
                <h4 className="font-serif-display text-3xl font-bold text-[#3B2118]">
                  {mode === 'enroll'
                    ? `Welcome to Cake Artistry Hub, ${fullName}!`
                    : `Thank You, ${fullName}!`}
                </h4>
                <p className="text-sm sm:text-base text-[#241510]/80 leading-relaxed">
                  {mode === 'enroll'
                    ? `Your enrollment for the Complete Baking Course (₹4,999) is confirmed. We have sent your instant login link and the 50+ Recipe Masterbook PDF to ${email}.`
                    : `We have received your message and our student support team will reply to ${email} within 4 business hours.`}
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={resetAndClose}
                    className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-[#3B2118] hover:bg-[#241510] rounded-xl cursor-pointer"
                  >
                    Return to Course Page
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {mode === 'enroll' && (
                  <div className="bg-[#F7EFE4] rounded-2xl p-4 border border-[#3B2118]/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-[#8B5E3C] uppercase">
                        Complete Baking Course
                      </p>
                      <p className="text-xs text-[#241510]/75">
                        30+ Videos · 50+ Recipes · Certificate · Lifetime Access
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-[#241510]/50 line-through block tabular-nums">
                        ₹9,999
                      </span>
                      <span className="font-serif-display text-2xl font-bold text-[#3B2118] tabular-nums">
                        ₹4,999
                      </span>
                    </div>
                  </div>
                )}

                {error && (
                  <div
                    role="alert"
                    className="p-3.5 rounded-xl bg-red-900/10 border border-red-800/30 text-xs sm:text-sm text-red-900 font-medium"
                  >
                    {error}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="enroll-name"
                    className="block text-xs font-semibold text-[#3B2118] uppercase tracking-wider mb-1.5"
                  >
                    Full Name *
                  </label>
                  <input
                    id="enroll-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g., Priya Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#3B2118]/20 text-sm text-[#241510] focus:outline-2 focus:outline-[#C47A44]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="enroll-email"
                    className="block text-xs font-semibold text-[#3B2118] uppercase tracking-wider mb-1.5"
                  >
                    Email Address *
                  </label>
                  <input
                    id="enroll-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="priya@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#3B2118]/20 text-sm text-[#241510] focus:outline-2 focus:outline-[#C47A44]"
                  />
                </div>

                {mode === 'enroll' ? (
                  <>
                    <div>
                      <label
                        htmlFor="enroll-phone"
                        className="block text-xs font-semibold text-[#3B2118] uppercase tracking-wider mb-1.5"
                      >
                        Mobile Number (WhatsApp &amp; SMS Access) *
                      </label>
                      <input
                        id="enroll-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#3B2118]/20 text-sm text-[#241510] focus:outline-2 focus:outline-[#C47A44]"
                      />
                    </div>

                    <div>
                      <span className="block text-xs font-semibold text-[#3B2118] uppercase tracking-wider mb-2">
                        Preferred Payment Method
                      </span>
                      <div className="grid grid-cols-3 gap-2.5">
                        {[
                          { id: 'upi', label: 'UPI / GPay' },
                          { id: 'card', label: 'Credit / Debit' },
                          { id: 'netbanking', label: 'NetBanking' },
                        ].map((method) => (
                          <button
                            key={method.id}
                            type="button"
                            onClick={() => setPaymentMethod(method.id)}
                            className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-colors cursor-pointer whitespace-nowrap ${
                              paymentMethod === method.id
                                ? 'bg-[#3B2118] text-white border-[#3B2118]'
                                : 'bg-white text-[#241510]/80 border-[#3B2118]/15 hover:border-[#3B2118]/40'
                            }`}
                          >
                            {method.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-[#3B2118] uppercase tracking-wider mb-1.5"
                    >
                      Your Question about the Course
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ask about ingredients, oven requirements, or course modules..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#3B2118]/20 text-sm text-[#241510] focus:outline-2 focus:outline-[#C47A44]"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-4 px-6 text-sm sm:text-base font-semibold text-white bg-[#3B2118] hover:bg-[#241510] rounded-xl shadow-md hover:shadow-lg transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>
                    {mode === 'enroll'
                      ? 'COMPLETE ENROLLMENT · ₹4,999'
                      : 'SEND MESSAGE'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="pt-1 flex items-center justify-center gap-4 text-xs text-[#241510]/65">
                  <span className="inline-flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-[#C47A44]" />
                    256-Bit SSL Encrypted
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C47A44]" />
                    Instant Course Activation
                  </span>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

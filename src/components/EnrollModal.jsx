import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function EnrollModal({ modalState, onClose }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!modalState.isOpen) return null;

  const mode = modalState.mode; // 'enroll' | 'contact' | 'privacy' | 'terms'

  const resetAndClose = () => {
    setError('');
    setSubmitted(false);
    onClose();
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    setError('');

    // Validate name
    if (!fullName.trim() || fullName.trim().length < 2) {
      setError('Please enter your full name.');
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    // Validate phone
    const cleanedPhone = phone.replace(/[\s()-]/g, '');

    if (!cleanedPhone || !/^\+?[0-9]{8,15}$/.test(cleanedPhone)) {
      setError('Please enter a valid mobile number.');
      return;
    }

    const whatsappMessage = `Hello Cake Artistry Hub,

I am interested in the Complete Baking Course.

Name: ${fullName}
Email: ${email}
Phone: ${phone}

Please share the course details and enrollment information with me.`;

    const whatsappUrl = `https://wa.me/918920202827?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, '_blank');
  };

  const handleContactSubmit = (e) => {
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

    if (!message.trim()) {
      setError('Please enter your question or message.');
      return;
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
              {mode === 'enroll' && 'Course Enquiry'}
              {mode === 'contact' && 'Student Support Desk'}
              {mode === 'privacy' && 'Legal Information'}
              {mode === 'terms' && 'Academy Policies'}
            </p>

            <h3
              id="modal-heading"
              className="font-serif-display text-2xl font-bold text-white"
            >
              {mode === 'enroll' && 'Interested in the Baking Course?'}
              {mode === 'contact' && 'Contact Cake Artistry Hub'}
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
                  <strong>1. Student Data Protection:</strong> Cake Artistry
                  Hub respects your privacy. We collect only the information
                  necessary to respond to your enquiries and provide course
                  information.
                </p>

                <p>
                  <strong>2. Information Security:</strong> We take reasonable
                  measures to protect the information you provide through our
                  website and communication channels.
                </p>

                <p>
                  <strong>3. Communication:</strong> Information submitted
                  through the website may be used to respond to your course
                  enquiries and provide relevant course updates.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>1. Course Information:</strong> Course details,
                  modules, learning materials, and access information are
                  provided by Cake Artistry Hub.
                </p>

                <p>
                  <strong>2. Intellectual Property:</strong> Course materials,
                  recipe formulations, guides, videos, and demonstrations are
                  proprietary to Cake Artistry Hub. Redistribution or
                  unauthorized sharing of course materials is prohibited.
                </p>

                <p>
                  <strong>3. Course Enquiries:</strong> Visitors can contact
                  Cake Artistry Hub through the available communication
                  channels to receive additional information about the course.
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
                  Thank You, {fullName}!
                </h4>

                <p className="text-sm sm:text-base text-[#241510]/80 leading-relaxed">
                  We have received your message. Our student support team will
                  get back to you regarding your course enquiry.
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
              <form
                onSubmit={
                  mode === 'enroll'
                    ? handleWhatsApp
                    : handleContactSubmit
                }
                className="space-y-4"
                noValidate
              >
                {/* Course Information */}
                {mode === 'enroll' && (
                  <div className="bg-[#F7EFE4] rounded-2xl p-4 border border-[#3B2118]/10">
                    <p className="text-xs font-bold text-[#8B5E3C] uppercase">
                      Complete Baking Course
                    </p>

                    <p className="text-xs text-[#241510]/75 mt-1">
                      30+ Videos · 50+ Recipes · Certificate · Course Support
                    </p>

                    <p className="text-sm text-[#241510]/80 mt-3 leading-relaxed">
                      Interested in learning more? Submit your details and
                      continue the conversation directly on WhatsApp.
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div
                    role="alert"
                    className="p-3.5 rounded-xl bg-red-900/10 border border-red-800/30 text-xs sm:text-sm text-red-900 font-medium"
                  >
                    {error}
                  </div>
                )}

                {/* Full Name */}
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

                {/* Email */}
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

                {/* Phone / WhatsApp */}
                <div>
                  <label
                    htmlFor="enroll-phone"
                    className="block text-xs font-semibold text-[#3B2118] uppercase tracking-wider mb-1.5"
                  >
                    WhatsApp / Mobile Number *
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

                {/* Contact Message */}
                {mode === 'contact' && (
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

                {/* Main Button */}
                <button
                  type="submit"
                  className={`w-full py-4 px-6 text-sm sm:text-base font-semibold text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer ${
                    mode === 'enroll'
                      ? 'bg-[#25D366] hover:bg-[#1DA851]'
                      : 'bg-[#3B2118] hover:bg-[#241510]'
                  }`}
                >
                  <span>
                    {mode === 'enroll'
                      ? 'CHAT WITH US ON WHATSAPP'
                      : 'SEND MESSAGE'}
                  </span>

                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* WhatsApp / Security Information */}
                <div className="pt-1 flex items-center justify-center gap-4 text-xs text-[#241510]/65">
                  {mode === 'enroll' ? (
                    <span className="inline-flex items-center gap-1">
                      WhatsApp: +91 89202 02827
                    </span>
                  ) : (
                    <>
                      <span className="inline-flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#C47A44]" />
                        Your information is handled securely
                      </span>
                    </>
                  )}
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}


import React from 'react';
import { Building2, Globe, Mail, Phone, MapPin, ExternalLink, HeartHandshake, Heart } from 'lucide-react';

const OurPartners = () => {
  const partners = [
    {
      id: 1,
      name: 'Disability Equals Ability',
      tagline: 'Empowering individuals with disabilities',
      website: 'https://disabilityequalsability.org/',
      contactPage: 'https://disabilityequalsability.org/contact',
      email: 'info@disabilityequalsability.org',
      phone: '+44 7459 017609',
      address: 'The Gateway, 85 Sankey Street, Warrington, WA1 1SR',
      description:
        'A nonprofit organisation focused on empowering individuals with disabilities through advocacy, support services, education, awareness, and community partnerships.',
      logo: '/DisabilityEqualsAbility.avif',
      accentFrom: 'from-pink-400',
      accentTo: 'to-purple-500',
      badgeBg: 'bg-pink-100',
      badgeText: 'text-pink-600',
      iconColor: 'text-pink-500',
      borderHover: 'hover:border-pink-300',
    },
    {
      id: 2,
      name: 'SNJ Charitable Trust',
      tagline: 'Empowering Lives Through Health & Education',
      website: 'https://snjcharitabletrust.org/',
      contactPage: 'https://snjcharitabletrust.org/contact/',
      email: 'snjtrust@gmail.com',
      emailAlt: 'dksareen@snjcharitabletrust.org',
      phoneUK: '+44 (0) 7823 891071',
      phoneIndia: '+91 92191 77757',
      addressUK: '200 Dudley Road, Wolverhampton, WV2 3DR, United Kingdom',
      addressIndia: '1 Omkar Road, Dehradun, Uttarakhand 248001, India',
      description:
        'A zero-administrative, volunteer-driven UK & India charity founded in 2004, passionate about health, education, digital inclusion, mental wellbeing, and uplifting underserved communities.',
      logo: '/SNJ-Charitable-trust-logo.png',
      accentFrom: 'from-teal-400',
      accentTo: 'to-blue-500',
      badgeBg: 'bg-teal-100',
      badgeText: 'text-teal-600',
      iconColor: 'text-teal-500',
      borderHover: 'hover:border-teal-300',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_white,_transparent_35%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 mb-5">
              <HeartHandshake className="w-4 h-4" />
              <span className="text-sm font-medium">Working together for impact</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Our Partners
            </h1>
            <p className="mt-4 text-base sm:text-lg text-pink-50 leading-7 max-w-2xl">
              We're proud to highlight organisations whose work supports inclusion,
              education, and community wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* ── Partner cards ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex flex-col gap-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className={`bg-white rounded-3xl shadow-xl border border-slate-100 ${partner.borderHover} hover:shadow-2xl transition-all duration-300`}
            >
              <div className="grid lg:grid-cols-[1fr_1.4fr] gap-0 items-stretch">

                {/* ── Left: logo + visit button ── */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none p-8 flex flex-col items-center justify-center gap-5 min-h-[260px]">
                  <div className="w-28 h-28 rounded-2xl bg-white shadow-md flex items-center justify-center p-2">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain rounded-xl"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback icon — hidden unless image fails */}
                    <div className="w-full h-full items-center justify-center hidden">
                      <Building2 className={`w-12 h-12 ${partner.iconColor}`} />
                    </div>
                  </div>

                  <div className="text-center">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${partner.accentFrom} ${partner.accentTo} text-white px-5 py-2.5 text-sm font-semibold shadow-md hover:scale-105 transition`}
                    >
                      Visit Website
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* ── Right: details ── */}
                <div className="p-6 sm:p-8 rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none">
                  {/* Heading */}
                  <div className="flex items-start gap-3 mb-6">
                    <div className={`w-11 h-11 rounded-xl ${partner.badgeBg} flex items-center justify-center shrink-0`}>
                      <HeartHandshake className={`w-5 h-5 ${partner.iconColor}`} />
                    </div>
                    <div>
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl sm:text-2xl font-bold text-slate-800 hover:underline"
                      >
                        {partner.name}
                      </a>
                      <p className={`text-sm font-medium mt-0.5 ${partner.badgeText}`}>
                        {partner.tagline}
                      </p>
                      <p className="text-slate-600 mt-2 leading-7 text-sm">
                        {partner.description}
                      </p>
                    </div>
                  </div>

                  {/* Contact grid */}
                  <div className="grid sm:grid-cols-2 gap-3">

                    {/* Website */}
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl border border-slate-200 p-3.5 hover:border-pink-300 hover:shadow-sm transition group"
                    >
                      <div className="flex items-start gap-2.5">
                        <Globe className="w-4 h-4 text-pink-500 mt-0.5 shrink-0" />
                        <div>
                          <p className="font-semibold text-slate-800 text-sm">Website</p>
                          <p className="text-xs text-slate-500 break-all mt-0.5">{partner.website}</p>
                        </div>
                      </div>
                    </a>

                    {/* Contact page */}
                    <a
                      href={partner.contactPage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl border border-slate-200 p-3.5 hover:border-purple-300 hover:shadow-sm transition"
                    >
                      <div className="flex items-start gap-2.5">
                        <ExternalLink className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
                        <div>
                          <p className="font-semibold text-slate-800 text-sm">Contact Page</p>
                          <p className="text-xs text-slate-500 break-all mt-0.5">{partner.contactPage}</p>
                        </div>
                      </div>
                    </a>

                    {/* Email(s) */}
                    <div className="rounded-2xl border border-slate-200 p-3.5">
                      <div className="flex items-start gap-2.5">
                        <Mail className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                        <div>
                          <p className="font-semibold text-slate-800 text-sm">Email</p>
                          <p className="text-xs text-slate-500 mt-0.5 break-all">{partner.email}</p>
                          {partner.emailAlt && (
                            <p className="text-xs text-slate-500 mt-0.5 break-all">{partner.emailAlt}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Phone(s) */}
                    <div className="rounded-2xl border border-slate-200 p-3.5">
                      <div className="flex items-start gap-2.5">
                        <Phone className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <div>
                          <p className="font-semibold text-slate-800 text-sm">Phone</p>
                          {partner.phone && (
                            <p className="text-xs text-slate-500 mt-0.5">{partner.phone}</p>
                          )}
                          {partner.phoneUK && (
                            <p className="text-xs text-slate-500 mt-0.5">UK: {partner.phoneUK}</p>
                          )}
                          {partner.phoneIndia && (
                            <p className="text-xs text-slate-500 mt-0.5">India: {partner.phoneIndia}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Address(es) — full width */}
                    <div className="sm:col-span-2 rounded-2xl border border-slate-200 p-3.5">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                        <div>
                          <p className="font-semibold text-slate-800 text-sm">Address</p>
                          {partner.address && (
                            <p className="text-xs text-slate-500 mt-0.5 leading-5">{partner.address}</p>
                          )}
                          {partner.addressUK && (
                            <p className="text-xs text-slate-500 mt-0.5 leading-5">
                              <span className="font-medium text-slate-600">UK: </span>{partner.addressUK}
                            </p>
                          )}
                          {partner.addressIndia && (
                            <p className="text-xs text-slate-500 mt-0.5 leading-5">
                              <span className="font-medium text-slate-600">India: </span>{partner.addressIndia}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-0.5 shadow-xl">
          <div className="bg-white rounded-[calc(1.5rem-2px)] px-8 py-7 text-center">
            <Heart className="w-6 h-6 text-pink-500 mx-auto mb-3" />
            <p className="text-slate-700 text-base leading-7 max-w-2xl mx-auto">
              We value partnerships that advance inclusion, accessibility, and
              financial confidence for children, families, and communities.
              Interested in partnering with ChequeItOut?{' '}
              <a href="/about" className="text-pink-500 font-semibold hover:underline">
                Get in touch →
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurPartners;
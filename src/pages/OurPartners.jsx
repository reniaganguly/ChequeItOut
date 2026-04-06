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
    {
      id: 3,
      name: 'NaariSamata',
      tagline: 'Protecting & Empowering Women and Children',
      website: 'https://naarisamata.org/',
      contactPage: 'https://naarisamata.org/home/contact-us/',
      email: 'anita.rajan@naarisamata.org',
      emailAlt: 'support@naarisamata.org',
      phone: '+44 7788 597 922',
      addressUK: '79 Dunston Road, London, SW11 5YB, United Kingdom',
      addressIndia: '2-2-647/A/85, Saibaba Nagar Colony, Amberpet, Telangana 500013, Hyderabad, India',
      description:
        'A CIO registered in England & Wales (Charity No. 1194814), the United States, and India. NaariSamatā campaigns tirelessly for the safety, dignity, and rights of women, children, and marginalised communities through education, awareness, and empowerment programmes.',
      logo: '/NaariSamata.png',
      accentFrom: 'from-rose-400',
      accentTo: 'to-orange-400',
      badgeBg: 'bg-rose-100',
      badgeText: 'text-rose-600',
      iconColor: 'text-rose-500',
      borderHover: 'hover:border-rose-300',
    },
    {
      id: 4,
      name: 'Birmingham Youth City Board',
      tagline: 'Young Voices Shaping Birmingham\'s Future',
      website: 'https://www.birmingham.gov.uk/info/50283/birmingham_city_partnership/2666/birmingham_city_partnership_board/3',
      contactPage: 'https://www.birmingham.gov.uk/info/50283/birmingham_city_partnership/2666/birmingham_city_partnership_board/3',
      email: 'soulla.yiasouma@birmingham.gov.uk',
      phone: null,
      address: '31 Meadow Road, Harborne, Birmingham, B17 8DH',
      description:
        'A group of young people aged 11–18 from Birmingham who work with Birmingham City Council and partners to ensure young people\'s voices shape policy, service delivery, and city development. Members are involved in Youth Parliament, social activism, and community advisory groups.',
      logo: '/BirminghamYouthCityBoard.png',
      accentFrom: 'from-blue-400',
      accentTo: 'to-indigo-500',
      badgeBg: 'bg-blue-100',
      badgeText: 'text-blue-600',
      iconColor: 'text-blue-500',
      borderHover: 'hover:border-blue-300',
    },
    {
      id: 5,
      name: 'Hamari Pahchan',
      tagline: 'Building Identity & Opportunity for the Underprivileged',
      website: 'https://hamaripahchan.org/',
      contactPage: 'https://hamaripahchan.org/contact/',
      email: 'info@hamaripahchan.org',
      emailAlt: 'pahchanhamari@gmail.com',
      phone: '+91 8882 590 888',
      address: '1121, Upper Ground Floor, Mahipalpur Bypass, Opposite Arjun Camp, New Delhi 110037, India',
      description:
        'A Delhi-based NGO founded in 2015 empowering marginalised communities through education, skill development, menstrual health awareness, elderly welfare, environmental sustainability, and hunger eradication. To date they have educated 22,500+ children and empowered 4,000+ women.',
      logo: '/HamariPahchan.png',
      accentFrom: 'from-amber-400',
      accentTo: 'to-yellow-400',
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-600',
      iconColor: 'text-amber-500',
      borderHover: 'hover:border-amber-300',
    },
    {
      id: 6,
      name: 'Afroganza',
      tagline: 'Celebrating African Culture & Creative Impact',
      website: 'https://www.instagram.com/_afroganza/',
      contactPage: 'https://www.instagram.com/_afroganza/',
      email: null,
      phone: null,
      address: '107 The Silver Yard, 100 Moor Street Queensway, Birmingham, B4 6GF',
      addressAlt: '305 Mary Vale Road, Birmingham, England, B30 1PL',
      description:
        'A Birmingham-based creative organisation celebrating African culture, art, and community through vibrant events, fashion soirées, and arts programming. Operating as Afro Ganza Creative Impact CIC, they bring communities together through culture and creative expression.',
      logo: '/Afroganza.png',
      accentFrom: 'from-green-400',
      accentTo: 'to-emerald-500',
      badgeBg: 'bg-green-100',
      badgeText: 'text-green-600',
      iconColor: 'text-green-500',
      borderHover: 'hover:border-green-300',
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
            {/* Partner count badge */}
            <div className="mt-6 inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm font-semibold">{partners.length} Partner Organisations</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partner cards ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex flex-col gap-10">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className={`bg-white rounded-3xl shadow-xl border border-slate-100 ${partner.borderHover} hover:shadow-2xl transition-all duration-300`}
            >
              <div className="grid lg:grid-cols-[1fr_1.4fr] gap-0 items-stretch">

                {/* ── Left: logo + visit button ── */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none p-8 flex flex-col items-center justify-center gap-5 min-h-[240px]">
                  <div className="w-28 h-28 rounded-2xl bg-white shadow-md flex items-center justify-center p-2 relative">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain rounded-xl"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback icon */}
                    <div className="w-full h-full items-center justify-center hidden absolute inset-0 rounded-xl">
                      <Building2 className={`w-12 h-12 ${partner.iconColor}`} />
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-base font-bold text-slate-700 mb-3">{partner.name}</h3>
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
                  <div className="flex items-start gap-3 mb-5">
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
                      className="rounded-2xl border border-slate-200 p-3.5 hover:border-pink-300 hover:shadow-sm transition"
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

                    {/* Email */}
                    {(partner.email || partner.emailAlt) && (
                      <div className="rounded-2xl border border-slate-200 p-3.5">
                        <div className="flex items-start gap-2.5">
                          <Mail className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                          <div>
                            <p className="font-semibold text-slate-800 text-sm">Email</p>
                            {partner.email && (
                              <p className="text-xs text-slate-500 mt-0.5 break-all">{partner.email}</p>
                            )}
                            {partner.emailAlt && (
                              <p className="text-xs text-slate-500 mt-0.5 break-all">{partner.emailAlt}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Phone */}
                    {(partner.phone || partner.phoneUK || partner.phoneIndia) && (
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
                    )}

                    {/* Address — full width */}
                    {(partner.address || partner.addressUK || partner.addressIndia || partner.addressAlt) && (
                      <div className={`${(partner.email || partner.emailAlt) && (partner.phone || partner.phoneUK) ? 'sm:col-span-2' : 'sm:col-span-2'} rounded-2xl border border-slate-200 p-3.5`}>
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
                            {partner.addressAlt && (
                              <p className="text-xs text-slate-500 mt-0.5 leading-5">
                                <span className="font-medium text-slate-600">Also at: </span>{partner.addressAlt}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom note ── */}
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
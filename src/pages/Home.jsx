import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ArrowRight,
  BookOpen,
  Calculator,
  Download,
  Users,
  Star,
  Target,
  Heart,
  Coins,
  HeartHandshake,
  Award,
  X,
  ChevronLeft,
  ChevronRight,
  Expand
} from 'lucide-react';

import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isRibbonPaused, setIsRibbonPaused] = useState(false);

  const latestNews = [
    'ChequeItOut Founder Renia wins Rotary Young Citizen Award 2026',
    'Delivers financial literacy workshop to 16–18 year olds at EY Early Careers programme in the UK',
    'Leading Project “Esparsh” with SNJ Charity to establish a Digital Centre and deliver digital & financial literacy in a leprosy colony in Haridwar, India',
    'Organised a charity Afternoon Tea with Afro Ganza to raise funds for the Digital Centre',
    'Delivered financial literacy workshops to student groups at Uthando House, South Africa'
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Interactive Learning',
      description: 'Fun lessons that make money concepts easy to understand for kids aged 10-16'
    },
    {
      icon: Calculator,
      title: 'Budgeting Tools',
      description: 'Kid-friendly calculators and games to practice real-world money skills'
    },
    {
      icon: Download,
      title: 'Free Resources',
      description: 'Downloadable worksheets and activities for home and classroom use'
    },
    {
      icon: Users,
      title: 'Family Friendly',
      description: 'Trusted by parents and teachers to provide quality financial education'
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: '5000+',
      label: 'Children Educated'
    },
    {
      icon: BookOpen,
      number: '20+',
      label: 'Schools Partnered'
    },
    {
      icon: Award,
      number: '1500+',
      label: 'Resources Downloaded'
    },
    {
      icon: Star,
      number: '4.9/5',
      label: 'Rating'
    }
  ];

  const testimonials = [
    {
      name: 'Uthando House Team',
      role: 'Community development organisation, South Africa',
      text:
        'We saw a big improvement in how the kids handle money after the first ChequeItOut lesson and have even started a budget plan together.',
      rating: 5,
      linkLabel: 'Visit Uthando House ↗',
      linkUrl: 'https://uthandohouse.org'
    },
    {
      name: 'EY Financial Literacy Workshop Students',
      role: '16–18 year olds at EY Early Careers Programme',
      text:
        'The workshop was interactive and fun, with competitions and challenges that helped us understand fraud, investing, and credit scores in a clear way.',
      rating: 5
    },
    {
      name: 'Workshop Participant, EY',
      role: 'Student feedback',
      text:
        'The session was very informative and motivating. It helped me think about starting my pension early and budgeting more confidently.',
      rating: 5
    },
    {
      name: 'Uthando House Students',
      role: 'Financial literacy programme participants',
      text:
        'Learning about budgeting and saving with ChequeItOut has helped us feel more confident about our finances and plan for future goals.',
      rating: 5,
      linkLabel: 'Read Uthando feedback ↗',
      linkUrl: 'https://uthandohouse.org'
    }
  ];

  const eventPhotos = Array.from(
    { length: 18 },
    (_, i) => `/images/header-image-${i + 1}.jpeg`
  );

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = '';
  };

  const showPrevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === null ? null : (prev - 1 + eventPhotos.length) % eventPhotos.length
    );
  };

  const showNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === null ? null : (prev + 1) % eventPhotos.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;

      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrevImage();
      if (e.key === 'ArrowRight') showNextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-pink-500 text-white text-md sm:text-lg py-2 border-b border-pink-400">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center text-lg gap-2 font-semibold">
              <Coins className="h-6 w-6" />
              Latest News
            </span>

            <div className="flex-1 overflow-hidden">
              <div className="news-scroll">
                <div className="news-scroll__content">
                  {latestNews.concat(latestNews).map((item, index) => (
                    <span key={index} className="news-scroll__item">
                      <span className="news-scroll__dot" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-tr from-pink-100 via-blue-50 to-green-50 overflow-hidden -mb-px">
        <div className="mx-auto px-4 pt-2 pb-0 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] gap-3 lg:gap-5 items-center">
            <div className="flex items-center justify-center lg:justify-start gap-3 rounded-2xl backdrop-blur-sm px-4 py-3 shadow-sm border border-white/50">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                <HeartHandshake className="h-5 w-5" />
              </div>

              <div className="text-center lg:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pink-500">
                  Latest Moments
                </p>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-display leading-tight">
                  Event Highlights
                </h2>
              </div>
            </div>

            <div
               className={`event-ribbon rounded-2xl backdrop-blur-sm  shadow-sm py-3 sm:py-4 ${
                  isRibbonPaused ? 'is-paused' : ''
                }`}
              onTouchStart={() => setIsRibbonPaused(true)}
              onPointerDown={() => setIsRibbonPaused(true)}
              onMouseLeave={() => setIsRibbonPaused(false)}
            >
              <div className="event-ribbon__track">
                {eventPhotos.concat(eventPhotos).map((src, index) => {
                  const actualIndex = index % eventPhotos.length;

                  return (
                    <button
                      key={index}
                      type="button"
                      className="event-ribbon__item"
                      onClick={() => openLightbox(actualIndex)}
                      aria-label={`Open event highlight ${actualIndex + 1}`}
                    >
                      <div className="event-ribbon__media">
                        <img
                          src={src}
                          alt={`ChequeItOut event highlight ${actualIndex + 1}`}
                          loading="lazy"
                        />
                      </div>

                      <div className="event-ribbon__zoom">
                        <Expand className="h-4 w-4" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/88 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Event image lightbox"
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute -top-12 right-0 sm:top-4 sm:right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-lg hover:bg-white"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={showPrevImage}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-lg hover:bg-white"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <button
              type="button"
              onClick={showNextImage}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-lg hover:bg-white"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <div className="rounded-3xl bg-white/8 border border-white/15 shadow-2xl p-3 sm:p-5">
              <div className="flex items-center justify-between gap-4 px-2 pb-3 text-white">
                <p className="text-sm sm:text-base font-semibold">
                  Event Highlight {selectedImageIndex + 1}
                </p>
                <p className="text-xs sm:text-sm text-white/75">
                  {selectedImageIndex + 1} / {eventPhotos.length}
                </p>
              </div>

              <div className="flex items-center justify-center rounded-2xl bg-white/95 min-h-[280px] sm:min-h-[420px] lg:min-h-[560px] p-3 sm:p-5">
                <img
                  src={eventPhotos[selectedImageIndex]}
                  alt={`ChequeItOut event highlight ${selectedImageIndex + 1}`}
                  className="max-h-[72vh] w-auto max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-100 via-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center rounded-full">
                <img
                  className="h-16 w-16 rounded-full animate-bounce"
                  src="/Logo.webp"
                  alt="ChequeItOut"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-display">
              Welcome to <span className="text-pink-500">ChequeItOut!</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Making financial literacy fun, simple, and engaging for kids.
              Let&apos;s learn about money together! 🎉
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="text-lg px-8 py-4 text-white shadow-lg transform hover:scale-105 transition-all duration-300"
                style={{ backgroundColor: '#e879a7' }}
                onClick={() => handleNavigation('/kit-corner')}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Kids&apos; Corner
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-2 border-blue-400 text-blue-600 hover:bg-blue-400 hover:text-pink-500 transform hover:scale-105 transition-all duration-300"
                onClick={() => handleNavigation('/resources')}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Worksheets
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Why Kids <span className="text-pink-500">Love</span> ChequeItOut
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make learning about money as fun as playing your favorite game!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-pink-200 bg-white rounded-xl"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-pink-100 to-blue-100 rounded-full w-fit">
                    <feature.icon className="h-8 w-8 text-pink-500" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 font-display">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Start Your <span className="text-blue-500">Money Journey</span> Today!
            </h2>
            <p className="text-xl text-gray-600">
              Choose your adventure and dive into the world of smart money management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-3 cursor-pointer bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 rounded-xl"
              onClick={() => handleNavigation('/kit-corner')}
            >
              <CardHeader className="text-center pb-4">
                <div
                  className="mx-auto mb-4 p-4 rounded-full w-fit"
                  style={{ backgroundColor: '#e879a7' }}
                >
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-pink-600 font-display">
                  Learn &amp; Play
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Interactive lessons about saving, spending, and everything money!
                </p>
                <Button
                  className="w-full text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: '#e879a7' }}
                >
                  Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-3 cursor-pointer bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200 rounded-xl"
              onClick={() => handleNavigation('/tools')}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-teal-500 rounded-full w-fit">
                  <Calculator className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-teal-600 font-display">
                  Fun Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Try our budgeting calculator and other cool money tools!
                </p>
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Explore Tools <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-3 cursor-pointer bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 rounded-xl"
              onClick={() => handleNavigation('/resources')}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-blue-500 rounded-full w-fit">
                  <Download className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-600 font-display">
                  Free Stuff
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Download worksheets, activity books, and more resources!
                </p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Get Resources <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

       {/* Achievements */}
              <div className="my-10 mx-6 sm:m-16 sm:mx-40">
                <Card className="bg-gradient-to-r from-blue-50 to-pink-50 border-pink-200 rounded-xl">
                  <CardHeader>
                    <CardTitle className="text-3xl font-black text-gray-900 text-center font-display">
                      Our Impact So Far
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="text-center">
                          <div className="bg-white p-4 rounded-full w-fit mx-auto mb-4 shadow-lg border border-pink-100">
                            <achievement.icon className="h-8 w-8 text-pink-500" />
                          </div>
                          <div className="text-3xl font-bold text-pink-500 mb-2">{achievement.number}</div>
                          <div className="text-sm text-gray-600 font-medium">{achievement.label}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

      {/* Testimonials Section – What People Are Saying */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              What People Are <span className="text-pink-500">Saying</span>
            </h2>
            <p className="text-xl text-gray-600">
              Hear from the communities, partners, and students learning with ChequeItOut.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-pink-200 rounded-xl"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <p className="font-semibold text-gray-900">— {testimonial.name}</p>
                  {testimonial.role && (
                    <p className="text-xs text-gray-500 mt-1">{testimonial.role}</p>
                  )}
                  {testimonial.linkUrl && testimonial.linkLabel && (
                    <a
                      href={testimonial.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-xs text-pink-500 font-semibold hover:underline"
                    >
                      {testimonial.linkLabel}
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

{/* Awards & Media Section */}
<section className="py-20 bg-gradient-to-br from-rose-50 via-white to-sky-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-row lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-white text-pink-600 px-4 py-2 text-xs font-semibold shadow-sm border border-pink-100 mb-4">
          <Heart className="h-4 w-4" />
          Recognised for real-world impact
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
          Awards &amp; <span className="text-pink-500">Media</span>
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl">
          Explore how ChequeItOut and founder Renia Ganguly are being recognised
          for youth-led financial literacy, community projects, and meaningful
          social impact across the UK and beyond.
        </p>
      </div>

      <Button
        onClick={() => handleNavigation('/awards-media')}
        className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
      >
        View all Awards &amp; Media
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>

    <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-8">
      <Card className="overflow-hidden border border-pink-100 rounded-3xl bg-white/90 shadow-xl shadow-pink-100/40">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-pink-50 text-pink-600 px-3 py-1 text-xs font-semibold mb-4">
              <Award className="h-4 w-4" />
              Featured recognition
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 font-display leading-tight mb-4">
              Rotary Young Citizen Award 2026
            </h3>

            <p className="text-sm sm:text-base text-gray-700 leading-7 mb-4">
              Renia Ganguly, founder of ChequeItOut, received the Rotary Young
              Citizen Award 2026 for building a peer-led financial literacy
              platform and for championing youth voice through civic and community work.
            </p>

            <p className="text-sm sm:text-base text-gray-700 leading-7 mb-6">
              This recognition highlights ChequeItOut&apos;s mission to make financial
              education accessible, engaging, and relevant for children and young people.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="https://magazine.rotarygbi.org/rotary-young-citizen-june-2026"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full">
                  Read feature
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>

              <Button
                variant="outline"
                className="rounded-full border-pink-200 text-pink-600 hover:bg-pink-50"
                onClick={() => handleNavigation('/awards-media')}
              >
                Explore full coverage
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="rounded-2xl bg-rose-50 border border-rose-100 px-4 py-3">
                <p className="text-lg text-start font-bold text-gray-900">2026</p>
                <p className="text-xs text-gray-600 mt-1">Award year</p>
              </div>
              <div className="rounded-2xl bg-sky-50 border border-sky-100 px-4 py-3">
                <p className="text-lg text-start font-bold text-gray-900">UK</p>
                <p className="text-xs text-gray-600 mt-1">Recognition spotlight</p>
              </div>
              <div className="rounded-2xl bg-emerald-50 border border-emerald-100 px-4 py-3 col-span-2 sm:col-span-1">
                <p className="text-lg text-start font-bold text-gray-900">Youth-led</p>
                <p className="text-xs text-gray-600 mt-1">Mission-driven impact</p>
              </div>
            </div>
          </div>

          <div className="h-full bg-gradient-to-br from-pink-50 via-white to-purple-50 p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-pink-100">
            <div className="rounded-2xl overflow-hidden shadow-md border border-white/60 mb-4 bg-white">
              <img
                src="/rotary-young-citizen.jpeg"
                alt="Renia Ganguly receiving the Rotary Young Citizen Award 2026"
                className="w-full h-56 sm:h-56 object-contain"
              />
            </div>

            <div className="rounded-2xl overflow-hidden border border-pink-100 bg-white shadow-sm">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/Y7HpUGsw0Ag"
                  title="Renia Ganguly - Rotary Young Citizen Awards 2026"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="space-y-6">
        <Card className="border border-blue-100 rounded-3xl bg-white/90 shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="text-2xl font-bold text-gray-900 font-display">
              In the media
            </CardTitle>
            <p className="text-sm text-gray-600">
              Selected coverage from outlets highlighting ChequeItOut&apos;s growing impact.
            </p>
          </CardHeader>

          <CardContent className="space-y-4">
            {[
              {
                title: 'Grapevine Birmingham',
                text: 'Birmingham student wins prestigious Rotary Young Citizen Award 2026',
                href: 'https://www.grapevinebirmingham.com/birmingham-student-wins-prestigious-rotary-young-citizen-award-2026/'
              },
              {
                title: 'BirminghamWorld',
                text: 'Birmingham student wins Rotary Young Citizen Award 2026',
                href: 'https://www.birminghamworld.uk/your-world/birmingham-student-wins-prestigious-rotary-young-citizen-award-2026-8664792'
              },
              {
                title: 'Birmingham Magazine',
                text: 'Renia Ganguly wins Rotary Young Citizen Award for financial literacy initiative',
                href: 'https://birminghammagazine.co.uk/birmingham-teen-renia-ganguly-wins-rotary-young-citizen-award-for-financial-literacy-initiative/'
              },
              {
                title: 'Rotary Magazine',
                text: 'Rotary Young Citizen Awards, June 2026',
                href: 'https://magazine.rotarygbi.org/rotary-young-citizen-june-2026'
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-gray-100 bg-gradient-to-r from-white to-slate-50 p-4 hover:border-pink-200 hover:shadow-md transition-all duration-300"
              >
                <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-600 mt-1 leading-6">{item.text}</p>
              </a>
            ))}
          </CardContent>
        </Card>

        <Card className="border border-pink-100 rounded-3xl bg-pink-500 text-black shadow-lg">
          <CardContent className="p-6 pt-2">
            <h3 className="text-xl font-bold font-display mb-2">
              More stories, awards, and community highlights
            </h3>
            <p className="text-sm text-gray-500 leading-6 mb-4">
              Visit the full Awards &amp; Media page to explore more recognition,
              press mentions, photos, and milestone updates.
            </p>
            <Button
              onClick={() => handleNavigation('/awards-media')}
              style={{backgroundColor: '#e879a7',}}
              className="text-pink cursor-pointer rounded-full"
            >
              Open Awards &amp; Media page
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</section>

      {/* Our Partners Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <HeartHandshake className="h-4 w-4" />
            Working together for impact
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
            Our <span className="text-pink-500">Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;re proud to collaborate with organisations that share our commitment
            to inclusion, education, and community wellbeing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Partner 1 — Disability Equals Ability */}
          <Card className="border-2 border-pink-100 hover:border-pink-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden bg-white">
            <CardContent className="p-0">
              <div className="flex items-stretch">
                <div className="w-1.5 bg-gradient-to-b from-pink-400 to-purple-500 shrink-0" />
                <div className="flex-1 p-5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center shrink-0 shadow-sm p-1.5">
                      <img
                        src="/DisabilityEqualsAbility.avif"
                        alt="Disability Equals Ability logo"
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 leading-snug">
                        Disability Equals Ability
                      </h3>
                      <p className="text-xs text-pink-500 font-medium mt-0.5">
                        Empowering individuals with disabilities
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Empowering individuals with disabilities through advocacy,
                    support services, and education.
                  </p>
                  <div className="flex flex-col xs:flex-row gap-2">
                    <Button
                      className="text-white shadow-sm hover:shadow-md hover:scale-105 cursor-pointer transition-all duration-300 rounded-full px-4 py-2 text-sm"
                      style={{ backgroundColor: '#e879a7' }}
                      onClick={() => handleNavigation('/ourpartners')}
                    >
                      <HeartHandshake className="mr-1.5 h-3.5 w-3.5" />
                      View Details
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                    <a
                      href="https://disabilityequalsability.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="border-2 border-purple-300 cursor-pointer text-purple-600 hover:bg-purple-50 rounded-full px-4 py-2 text-sm w-full xs:w-auto transition-all duration-300"
                      >
                        Visit Website ↗
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Partner 2 — SNJ Charitable Trust */}
          <Card className="border-2 border-teal-100 hover:border-teal-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden bg-white">
            <CardContent className="p-0">
              <div className="flex items-stretch">
                <div className="w-1.5 bg-gradient-to-b from-teal-400 to-blue-500 shrink-0" />
                <div className="flex-1 p-5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center shrink-0 shadow-sm p-1.5">
                      <img
                        src="/SNJ-Charitable-trust-logo.png"
                        alt="SNJ Charitable Trust logo"
                        className="w-full h-full object-contain rounded-lg"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 leading-snug">
                        SNJ Charitable Trust
                      </h3>
                      <p className="text-xs text-teal-500 font-medium mt-0.5">
                        Health, Education &amp; Digital Inclusion
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    A volunteer-driven UK &amp; India charity uplifting underserved
                    communities through health, education, and digital skills.
                  </p>
                  <div className="flex flex-col xs:flex-row gap-2">
                    <Button
                      className="bg-teal-500 hover:bg-teal-600 text-white cursor-pointer shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 rounded-full px-4 py-2 text-sm"
                      onClick={() => handleNavigation('/ourpartners')}
                    >
                      <HeartHandshake className="mr-1.5 h-3.5 w-3.5" />
                      View Details
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                    <a
                      href="https://snjcharitabletrust.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="border-2 border-teal-300 cursor-pointer text-teal-600 hover:bg-teal-50 rounded-full px-4 py-2 text-sm w-full xs:w-auto transition-all duration-300"
                      >
                        Visit Website ↗
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA link */}
        <div className="text-center mt-10">
          <button
            onClick={() => handleNavigation('/ourpartners')}
            className="inline-flex items-center gap-2 cursor-pointer text-pink-500 font-semibold hover:text-pink-700 underline underline-offset-4 transition-colors duration-200"
          >
            See all partner information
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-400 to-blue-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Ready to Become a Money Expert? 🚀
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our community of young money masters and start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.google.com/forms/d/1iYrrINnAHDErko6Pkjdi6APkB_wYsGQr9OTG0NACub4/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-white !text-pink-600 hover:bg-gray-100 shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Target className="mr-2 h-5 w-5" />
                Join as Ambassador
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-2 border-white !text-black hover:bg-white hover:text-pink-600 shadow-lg transform hover:scale-105 transition-all duration-300"
              onClick={() => handleNavigation('/about')}
            >
              <Users className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

























// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// import { ArrowRight, BookOpen, Calculator, Download, Users, Star, Target, Heart, Coins, HeartHandshake } from 'lucide-react';

// import { Button } from '../components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

// const Home = () => {
//   const navigate = useNavigate();

//   // Function to handle navigation
//   const handleNavigation = (path) => {
//     navigate(path);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const features = [
//     {
//       icon: BookOpen,
//       title: 'Interactive Learning',
//       description: 'Fun lessons that make money concepts easy to understand for kids aged 10-16'
//     },
//     {
//       icon: Calculator,
//       title: 'Budgeting Tools',
//       description: 'Kid-friendly calculators and games to practice real-world money skills'
//     },
//     {
//       icon: Download,
//       title: 'Free Resources',
//       description: 'Downloadable worksheets and activities for home and classroom use'
//     },
//     {
//       icon: Users,
//       title: 'Family Friendly',
//       description: 'Trusted by parents and teachers to provide quality financial education'
//     }
//   ];

//   const testimonials = [
//     {
//       name: 'Sarah M., Parent',
//       text: 'My daughter loves the interactive lessons! She\'s actually excited about learning about money now.',
//       rating: 5
//     },
//     {
//       name: 'Mr. Johnson, Teacher',
//       text: 'ChequeItOut has transformed how I teach financial literacy. The kids are so engaged!',
//       rating: 5
//     },
//     {
//       name: 'Emma, Age 14',
//       text: 'I finally understand how budgeting works thanks to the fun calculator tools!',
//       rating: 5
//     }
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-pink-100 via-blue-50 to-green-50 py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <div className="mb-8">
//               <div className="inline-flex items-center justify-center rounded-full">
//                 <img className='h-16 w-16 rounded-full animate-bounce' src="/Logo.webp" alt="ChequeItOut" />
//                 {/* <Coins className="h-16 w-16 text-pink-400 animate-pulse" /> */}
//               </div>
//             </div>
//             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-display">
//               Welcome to <span className="text-pink-500">ChequeItOut!</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
//               Making financial literacy fun, simple, and engaging for kids. 
//               Let's learn about money together! 🎉
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//               <Button 
//                 size="lg" 
//                 className="text-lg px-8 py-4 text-white shadow-lg transform hover:scale-105 transition-all duration-300"
//                 style={{ backgroundColor: '#e879a7' }}
//                 onClick={() => handleNavigation('/kit-corner')}
//               >
//                 <BookOpen className="mr-2 h-5 w-5" />
//                 Explore Kids' Corner
//               </Button>
//               <Button 
//                 size="lg" 
//                 variant="outline" 
//                 className="text-lg px-8 py-4 border-2 border-blue-400 text-blue-600 hover:bg-blue-400 hover:text-pink-500 transform hover:scale-105 transition-all duration-300"
//                 onClick={() => handleNavigation('/resources')}
//               >
//                 <Download className="mr-2 h-5 w-5" />
//                 Download Worksheets
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
//               Why Kids <span className="text-pink-500">Love</span> ChequeItOut
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               We make learning about money as fun as playing your favorite game!
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <Card 
//                 key={index} 
//                 className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-pink-200 bg-white rounded-xl"
//               >
//                 <CardHeader>
//                   <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-pink-100 to-blue-100 rounded-full w-fit">
//                     <feature.icon className="h-8 w-8 text-pink-500" />
//                   </div>
//                   <CardTitle className="text-xl font-bold text-gray-900 font-display">
//                     {feature.title}
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-600">{feature.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Quick Access Section */}
//       <section className="py-20 bg-gradient-to-br from-pink-50 via-blue-50 to-green-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
//               Start Your <span className="text-blue-500">Money Journey</span> Today!
//             </h2>
//             <p className="text-xl text-gray-600">
//               Choose your adventure and dive into the world of smart money management
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <Card 
//               className="hover:shadow-xl transition-all duration-300 hover:-translate-y-3 cursor-pointer bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 rounded-xl" 
//               onClick={() => handleNavigation('/kit-corner')}
//             >
//               <CardHeader className="text-center pb-4">
//                 <div className="mx-auto mb-4 p-4 rounded-full w-fit" style={{ backgroundColor: '#e879a7' }}>
//                   <BookOpen className="h-10 w-10 text-white" />
//                 </div>
//                 <CardTitle className="text-2xl font-bold text-pink-600 font-display">
//                   Learn & Play
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="text-center">
//                 <p className="text-gray-600 mb-6">
//                   Interactive lessons about saving, spending, and everything money!
//                 </p>
//                 <Button 
//                   className="w-full text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
//                   style={{ backgroundColor: '#e879a7' }}
//                 >
//                   Start Learning <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card 
//               className="hover:shadow-xl transition-all duration-300 hover:-translate-y-3 cursor-pointer bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200 rounded-xl" 
//               onClick={() => handleNavigation('/tools')}
//             >
//               <CardHeader className="text-center pb-4">
//                 <div className="mx-auto mb-4 p-4 bg-teal-500 rounded-full w-fit">
//                   <Calculator className="h-10 w-10 text-white" />
//                 </div>
//                 <CardTitle className="text-2xl font-bold text-teal-600 font-display">
//                   Fun Tools
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="text-center">
//                 <p className="text-gray-600 mb-6">
//                   Try our budgeting calculator and other cool money tools!
//                 </p>
//                 <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
//                   Explore Tools <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card 
//               className="hover:shadow-xl transition-all duration-300 hover:-translate-y-3 cursor-pointer bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 rounded-xl" 
//               onClick={() => handleNavigation('/resources')}
//             >
//               <CardHeader className="text-center pb-4">
//                 <div className="mx-auto mb-4 p-4 bg-blue-500 rounded-full w-fit">
//                   <Download className="h-10 w-10 text-white" />
//                 </div>
//                 <CardTitle className="text-2xl font-bold text-blue-600 font-display">
//                   Free Stuff
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="text-center">
//                 <p className="text-gray-600 mb-6">
//                   Download worksheets, activity books, and more resources!
//                 </p>
//                 <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
//                   Get Resources <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
//               What People Are <span className="text-pink-500">Saying</span>
//             </h2>
//             <p className="text-xl text-gray-600">
//               Join thousands of happy kids, parents, and teachers!
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-pink-200 rounded-xl">
//                 <CardContent className="pt-6">
//                   <div className="flex items-center mb-4">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
//                     ))}
//                   </div>
//                   <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
//                   <p className="font-semibold text-gray-900">— {testimonial.name}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>


//       {/* Our Partners Section */}
//       <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
//          {/* Section heading */}
//           <div className="text-center mb-14">
//             <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 rounded-full px-4 py-2 text-sm font-semibold mb-4">
//               <HeartHandshake className="h-4 w-4" />
//               Working together for impact
//             </div>
//             <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
//               Our <span className="text-pink-500">Partners</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               We're proud to collaborate with organisations that share our commitment
//               to inclusion, education, and community wellbeing.
//             </p>
//           </div>
//        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

//   {/* Partner 1 — Disability Equals Ability */}
//   <Card className="border-2 border-pink-100 hover:border-pink-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden bg-white">
//     <CardContent className="p-0">
//       <div className="flex items-stretch">
//         <div className="w-1.5 bg-gradient-to-b from-pink-400 to-purple-500 shrink-0" />
//         <div className="flex-1 p-5">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center shrink-0 shadow-sm p-1.5">
//               <img
//                 src="/DisabilityEqualsAbility.avif"
//                 alt="Disability Equals Ability logo"
//                 className="w-full h-full object-contain rounded-lg"
//               />
//             </div>
//             <div>
//               <h3 className="text-base font-bold text-gray-900 leading-snug">
//                 Disability Equals Ability
//               </h3>
//               <p className="text-xs text-pink-500 font-medium mt-0.5">
//                 Empowering individuals with disabilities
//               </p>
//             </div>
//           </div>
//           <p className="text-gray-600 text-sm leading-relaxed mb-4">
//             Empowering individuals with disabilities through advocacy,
//             support services, and education.
//           </p>
//           <div className="flex flex-col xs:flex-row gap-2">
//             <Button
//               className="text-white shadow-sm hover:shadow-md hover:scale-105  cursor-pointer transition-all duration-300 rounded-full px-4 py-2 text-sm"
//               style={{ backgroundColor: '#e879a7' }}
//               onClick={() => handleNavigation('/ourpartners')}
//             >
//               <HeartHandshake className="mr-1.5 h-3.5 w-3.5" />
//               View Details
//               <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
//             </Button>
//             <a href="https://disabilityequalsability.org" target="_blank" rel="noopener noreferrer">
//               <Button variant="outline" className="border-2 border-purple-300  cursor-pointer text-purple-600 hover:bg-purple-50 rounded-full px-4 py-2 text-sm w-full xs:w-auto transition-all duration-300">
//                 Visit Website ↗
//               </Button>
//             </a>
//           </div>
//         </div>
//       </div>
//     </CardContent>
//   </Card>

//   {/* Partner 2 — SNJ Charitable Trust */}
//   <Card className="border-2 border-teal-100 hover:border-teal-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden bg-white">
//     <CardContent className="p-0">
//       <div className="flex items-stretch">
//         <div className="w-1.5 bg-gradient-to-b from-teal-400 to-blue-500 shrink-0" />
//         <div className="flex-1 p-5">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center shrink-0 shadow-sm p-1.5">
//               <img
//                 src="/SNJ-Charitable-trust-logo.png"
//                 alt="SNJ Charitable Trust logo"
//                 className="w-full h-full object-contain rounded-lg"
//                 onError={(e) => { e.currentTarget.style.display = 'none'; }}
//               />
//             </div>
//             <div>
//               <h3 className="text-base font-bold text-gray-900 leading-snug">
//                 SNJ Charitable Trust
//               </h3>
//               <p className="text-xs text-teal-500 font-medium mt-0.5">
//                 Health, Education & Digital Inclusion
//               </p>
//             </div>
//           </div>
//           <p className="text-gray-600 text-sm leading-relaxed mb-4">
//             A volunteer-driven UK & India charity uplifting underserved
//             communities through health, education, and digital skills.
//           </p>
//           <div className="flex flex-col xs:flex-row gap-2">
//             <Button
//               className="bg-teal-500 hover:bg-teal-600 text-white  cursor-pointer shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 rounded-full px-4 py-2 text-sm"
//               onClick={() => handleNavigation('/ourpartners')}
//             >
//               <HeartHandshake className="mr-1.5 h-3.5 w-3.5" />
//               View Details
//               <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
//             </Button>
//             <a href="https://snjcharitabletrust.org" target="_blank" rel="noopener noreferrer">
//               <Button variant="outline" className="border-2 border-teal-300 cursor-pointer text-teal-600 hover:bg-teal-50 rounded-full px-4 py-2 text-sm w-full xs:w-auto transition-all duration-300">
//                 Visit Website ↗
//               </Button>
//             </a>
//           </div>
//         </div>
//       </div>
//     </CardContent>
//   </Card>

// </div>
// {/* Bottom CTA link */}
//     <div className="text-center mt-10">
//       <button
//         onClick={() => handleNavigation('/ourpartners')}
//         className="inline-flex items-center gap-2 cursor-pointer text-pink-500 font-semibold hover:text-pink-700 underline underline-offset-4 transition-colors duration-200"
//       >
//         See all partner information
//         <ArrowRight className="h-4 w-4" />
//       </button>
//     </div>
//       </section>


//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-pink-400 to-blue-500">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
//             Ready to Become a Money Expert? 🚀
//           </h2>
//           <p className="text-xl text-white/90 mb-8">
//             Join our community of young money masters and start your journey today!
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a href="https://docs.google.com/forms/d/1iYrrINnAHDErko6Pkjdi6APkB_wYsGQr9OTG0NACub4/viewform?edit_requested=true" target='_blank'>
//               <Button 
//               size="lg" 
//               className="text-lg px-8 py-4 bg-white !text-pink-600 hover:bg-gray-100 shadow-lg transform hover:scale-105 transition-all duration-300"
//             >
//               <Target className="mr-2 h-5 w-5" />
//               Join as Ambassador
//             </Button>
//             </a>
//             <Button 
//               size="lg" 
//               variant="outline" 
//               className="text-lg px-8 py-4 border-2 border-white !text-black hover:bg-white hover:text-pink-600 shadow-lg transform hover:scale-105 transition-all duration-300"
//               onClick={() => handleNavigation('/about')}
//             >
//               <Users className="mr-2 h-5 w-5" />
//               Contact Us
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

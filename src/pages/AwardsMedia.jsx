import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  Heart,
  HeartHandshake,
  Newspaper,
  PlayCircle,
  Sparkles,
  ExternalLink,
  CalendarDays,
  Mic,
  BadgeCheck
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const AwardsMedia = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mediaCoverage = [
    {
      outlet: 'Grapevine Birmingham',
      title: 'Birmingham student wins prestigious Rotary Young Citizen Award 2026',
      href: 'https://www.birminghamworld.uk/your-world/birmingham-student-wins-prestigious-rotary-young-citizen-award-2026-8664792',
      image: '/images/Media-cover-1.png',
      category: 'News coverage'
    },
    {
      outlet: 'BirminghamWorld',
      title: 'Birmingham student wins Rotary Young Citizen Award 2026',
      href: 'https://birminghammagazine.co.uk/birmingham-teen-renia-ganguly-wins-rotary-young-citizen-award-for-financial-literacy-initiative/',
      image: '/images/Media-cover-2.png',
      category: 'Regional media'
    },
    {
      outlet: 'Birmingham Magazine',
      title: 'Renia Ganguly wins Rotary Young Citizen Award for financial literacy initiative',
      href: 'https://www.grapevinebirmingham.com/birmingham-student-wins-prestigious-rotary-young-citizen-award-2026/',
      image: '/images/Media-cover-3.png',
      category: 'Magazine feature'
    },
    {
      outlet: 'Rotary Magazine',
      title: 'Rotary Young Citizen Awards, June 2026',
      href: 'https://magazine.rotarygbi.org/rotary-young-citizen-june-2026',
      image: '/images/Media-cover-4.png',
      category: 'Award coverage'
    }
  ];

  const timelineItems = [
    {
      year: '2026',
      title: 'Rotary Young Citizen Award',
      text: 'Renia Ganguly and ChequeItOut were recognised for youth-led financial literacy and community impact.'
    },
    {
      year: '2026',
      title: 'EY Early Careers workshop spotlight',
      text: 'ChequeItOut delivered a financial literacy workshop for 16–18 year olds in the UK.'
    },
    {
      year: '2026',
      title: 'Project Esparsh visibility',
      text: 'Community work with SNJ Charity and digital inclusion efforts gained wider attention.'
    },
    {
      year: '2026',
      title: 'International youth engagement',
      text: 'Workshops and impact stories from South Africa and India continued to expand ChequeItOut’s reach.'
    }
  ];

  const moreStories = [
    {
      icon: Mic,
      title: 'Community voice and youth leadership',
      text: 'ChequeItOut continues to amplify youth-led conversations around money confidence, digital literacy, and opportunity.'
    },
    {
      icon: Newspaper,
      title: 'Growing press interest',
      text: 'Media stories are helping more families, educators, and communities discover the platform and its mission.'
    },
    {
      icon: BadgeCheck,
      title: 'Recognition with purpose',
      text: 'Every award and mention reflects practical social impact, not just publicity.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-sky-50 py-20 sm:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-12 h-40 w-40 rounded-full bg-pink-200/40 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white text-pink-600 px-4 py-2 text-xs font-semibold shadow-sm border border-pink-100 mb-5">
              <Heart className="h-4 w-4" />
              Awards, recognition, and media mentions
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-display leading-tight mb-5">
              Awards &amp; <span className="text-pink-500">Media</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-8 max-w-2xl">
              Discover how ChequeItOut and founder Renia Ganguly are being recognised
              for youth-led financial literacy, community action, and empowering
              young people through meaningful education.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="https://magazine.rotarygbi.org/rotary-young-citizen-june-2026"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-6">
                  Read Rotary feature
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>

              <Button
                variant="outline"
                className="rounded-full border-pink-200 text-pink-600 hover:bg-pink-50 px-6"
                onClick={() => handleNavigation('/contact')}
              >
                Media enquiry
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-8">
            <Card className="border border-pink-100 rounded-3xl overflow-hidden shadow-xl bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-6 sm:p-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-pink-50 text-pink-600 px-3 py-1 text-xs font-semibold mb-4">
                    <Award className="h-4 w-4" />
                    Featured recognition
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-display mb-4">
                    Rotary Young Citizen Award 2026
                  </h2>

                  <p className="text-gray-700 leading-7 mb-4">
                    Renia Ganguly, founder of ChequeItOut, received the Rotary Young Citizen Award 2026
                    for her peer-led financial literacy work and youth engagement.
                  </p>

                  <p className="text-gray-700 leading-7 mb-6">
                    The recognition celebrates the platform’s mission to make financial education more
                    accessible, relatable, and empowering for children and young people.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://magazine.rotarygbi.org/rotary-young-citizen-june-2026"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full">
                        Read article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-pink-50 via-white to-purple-50 border-t lg:border-t-0 lg:border-l border-pink-100 p-6 sm:p-8">
                  <div className="rounded-2xl overflow-hidden shadow-md border border-white bg-white mb-4">
                    <img
                      src="/rotary-young-citizen.jpeg"
                      alt="Renia Ganguly receiving the Rotary Young Citizen Award 2026"
                      className="w-full h-72 object-contain"
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

            <Card className="border border-sky-100 rounded-3xl bg-gradient-to-br from-sky-50 via-white to-pink-50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 font-display">
                  Quick highlights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  'Youth-led financial literacy platform',
                  'Award-winning social impact work',
                  'International workshops and partnerships',
                  'Recognised by regional and national media'
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-2xl bg-white border border-sky-100 p-4"
                  >
                    <Sparkles className="h-5 w-5 text-pink-500 mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-700 leading-6">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-white text-blue-600 px-4 py-2 text-xs font-semibold shadow-sm border border-blue-100 mb-4">
              <Newspaper className="h-4 w-4" />
              Press mentions and features
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Media <span className="text-blue-500">Coverage</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A growing collection of coverage highlighting ChequeItOut’s story, mission, and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaCoverage.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl overflow-hidden border border-white bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.outlet}
                    className="w-full h-56 object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 text-slate-600 px-3 py-1 text-xs font-medium mb-3">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2">
                    {item.outlet}
                  </h3>
                  <p className="text-sm text-gray-600 leading-6">
                    {item.title}
                  </p>
                  <div className="mt-4 inline-flex items-center text-pink-600 font-semibold text-sm">
                    Read coverage
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-pink-50 text-pink-600 px-4 py-2 text-xs font-semibold mb-4">
              <CalendarDays className="h-4 w-4" />
              Recognition journey
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Awards &amp; impact <span className="text-pink-500">timeline</span>
            </h2>
          </div>

          <div className="space-y-6">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-[110px_1fr] gap-4 rounded-3xl border border-pink-100 bg-gradient-to-r from-pink-50/70 to-white p-5 sm:p-6"
              >
                <div>
                  <div className="inline-flex rounded-full bg-pink-500 text-white px-4 py-2 text-sm font-bold">
                    {item.year}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-7">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-rose-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-white text-rose-600 px-4 py-2 text-xs font-semibold shadow-sm border border-rose-100 mb-4">
              <PlayCircle className="h-4 w-4" />
              More Awards &amp; Media news
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              More <span className='text-pink-600'>stories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Additional highlights that help explain the wider impact behind the headlines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {moreStories.map((item, index) => {
              const Icon = item.icon;

              return (
                <Card
                  key={index}
                  className="rounded-3xl border border-white bg-white/90 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 pt-5">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-pink-600 mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-7">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 text-white px-4 py-2 text-xs font-semibold mb-4 border border-white/20">
            <HeartHandshake className="h-4 w-4" />
            Press and partnership enquiries
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
            Want to feature ChequeItOut?
          </h2>

          <p className="text-lg text-white/90 leading-8 max-w-2xl mx-auto mb-8">
            Reach out for media enquiries, collaborations, speaking opportunities,
            or more information about our work and impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => handleNavigation('/contact')}
              style={{color: '#000'}}
              className="bg-white hover:bg-pink-50 cursor-pointer rounded-full px-6"
            >
              Contact us
            </Button>

            <Button
              variant="outline"
              onClick={() => handleNavigation('/about')}
              className="border-2 border-white text-pink-600 hover:text-white cursor-pointer hover:bg-white/10 rounded-full px-6"
            >
              Learn more about us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AwardsMedia;
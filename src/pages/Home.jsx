import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowRight, BookOpen, Calculator, Download, Users, Star, Target, Heart, Coins, HeartHandshake } from 'lucide-react';

import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Home = () => {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  const testimonials = [
    {
      name: 'Sarah M., Parent',
      text: 'My daughter loves the interactive lessons! She\'s actually excited about learning about money now.',
      rating: 5
    },
    {
      name: 'Mr. Johnson, Teacher',
      text: 'ChequeItOut has transformed how I teach financial literacy. The kids are so engaged!',
      rating: 5
    },
    {
      name: 'Emma, Age 14',
      text: 'I finally understand how budgeting works thanks to the fun calculator tools!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-100 via-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center rounded-full">
                <img className='h-16 w-16 rounded-full animate-bounce' src="/Logo.webp" alt="ChequeItOut" />
                {/* <Coins className="h-16 w-16 text-pink-400 animate-pulse" /> */}
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-display">
              Welcome to <span className="text-pink-500">ChequeItOut!</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Making financial literacy fun, simple, and engaging for kids. 
              Let's learn about money together! 🎉
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 text-white shadow-lg transform hover:scale-105 transition-all duration-300"
                style={{ backgroundColor: '#e879a7' }}
                onClick={() => handleNavigation('/kit-corner')}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Kids' Corner
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
                <div className="mx-auto mb-4 p-4 rounded-full w-fit" style={{ backgroundColor: '#e879a7' }}>
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-pink-600 font-display">
                  Learn & Play
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

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              What People Are <span className="text-pink-500">Saying</span>
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of happy kids, parents, and teachers!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-pink-200 rounded-xl">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Our Partners Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
         {/* Section heading */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 rounded-full px-4 py-2 text-sm font-semibold mb-4">
              <HeartHandshake className="h-4 w-4" />
              Working together for impact
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Our <span className="text-pink-500">Partners</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're proud to collaborate with organisations that share our commitment
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
              className="text-white shadow-sm hover:shadow-md hover:scale-105  cursor-pointer transition-all duration-300 rounded-full px-4 py-2 text-sm"
              style={{ backgroundColor: '#e879a7' }}
              onClick={() => handleNavigation('/ourpartners')}
            >
              <HeartHandshake className="mr-1.5 h-3.5 w-3.5" />
              View Details
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
            <a href="https://disabilityequalsability.org" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-2 border-purple-300  cursor-pointer text-purple-600 hover:bg-purple-50 rounded-full px-4 py-2 text-sm w-full xs:w-auto transition-all duration-300">
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
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 leading-snug">
                SNJ Charitable Trust
              </h3>
              <p className="text-xs text-teal-500 font-medium mt-0.5">
                Health, Education & Digital Inclusion
              </p>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            A volunteer-driven UK & India charity uplifting underserved
            communities through health, education, and digital skills.
          </p>
          <div className="flex flex-col xs:flex-row gap-2">
            <Button
              className="bg-teal-500 hover:bg-teal-600 text-white  cursor-pointer shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 rounded-full px-4 py-2 text-sm"
              onClick={() => handleNavigation('/ourpartners')}
            >
              <HeartHandshake className="mr-1.5 h-3.5 w-3.5" />
              View Details
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
            <a href="https://snjcharitabletrust.org" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-2 border-teal-300 cursor-pointer text-teal-600 hover:bg-teal-50 rounded-full px-4 py-2 text-sm w-full xs:w-auto transition-all duration-300">
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
            <a href="https://docs.google.com/forms/d/1iYrrINnAHDErko6Pkjdi6APkB_wYsGQr9OTG0NACub4/viewform?edit_requested=true" target='_blank'>
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

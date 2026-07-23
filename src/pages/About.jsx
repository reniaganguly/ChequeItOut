import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Heart,
  Target,
  Users,
  Award,
  ArrowRight,
  BookOpen,
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  Star,
  CheckCircle2
} from 'lucide-react';

import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const About = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pillars = [
    {
      icon: Target,
      title: 'Our Mission',
      color: 'text-pink-600',
      iconBg: 'bg-pink-100',
      border: 'border-pink-100',
      points: [
        'Create age-appropriate and engaging financial education resources.',
        'Support parents and teachers with practical learning tools.',
        'Build confidence in young people around money management.'
      ],
      description:
        'We aim to close the financial literacy gap by making money education accessible, inclusive, practical, and engaging for children and young people.'
    },
    {
      icon: Heart,
      title: 'Our Vision',
      color: 'text-teal-600',
      iconBg: 'bg-teal-100',
      border: 'border-teal-100',
      points: [
        'Financially literate young adults who make informed decisions.',
        'Reduced financial stress and improved wellbeing.',
        'A generation empowered to build long-term security.'
      ],
      description:
        'We envision a world where every young person, regardless of background, is equipped with the financial skills needed to navigate adult life with confidence.'
    },
    {
      icon: ShieldCheck,
      title: 'Our Promise',
      color: 'text-emerald-600',
      iconBg: 'bg-emerald-100',
      border: 'border-emerald-100',
      points: [
        'We read every message personally.',
        'We aim to reply within 24 hours on weekdays.',
        'We keep improving based on feedback from families and educators.'
      ],
      description:
        'We are committed to building trustworthy, helpful, and human-centred learning experiences for children, families, teachers, and partners.'
    }
  ];

  const highlights = [
    {
      icon: BookOpen,
      title: 'Learning made practical',
      text: 'We turn money concepts into relatable, age-appropriate lessons.'
    },
    {
      icon: Users,
      title: 'Built for young people',
      text: 'Our content is shaped around how children and teens actually learn.'
    },
    {
      icon: Sparkles,
      title: 'Engaging by design',
      text: 'We make financial education feel clear, friendly, and motivating.'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white via-rose-50/30 to-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-12 h-56 w-56 -translate-x-1/2 rounded-full bg-pink-200/25 blur-3xl" />
        <div className="absolute right-10 top-40 h-40 w-40 rounded-full bg-sky-200/25 blur-3xl" />
        <div className="absolute bottom-24 left-10 h-40 w-40 rounded-full bg-emerald-200/20 blur-3xl" />
      </div>

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <header className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-xs sm:text-sm font-semibold text-pink-600 shadow-sm backdrop-blur mb-4">
            <HeartHandshake className="h-4 w-4" />
            Our story and purpose
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display">
            About <span className="text-pink-500">ChequeItOut</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
            Our mission is to empower every child with the financial knowledge and confidence
            they need to build a bright and secure future. We’re working to make money
            learning feel practical, engaging, and accessible from an early age.
          </p>
        </header>

        <div className="mb-10 md:mb-14 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card
                key={index}
                className="rounded-2xl border border-white/70 bg-white/85 shadow-sm backdrop-blur"
              >
                <CardContent className="p-5 pt-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
                      <p className="mt-1 text-sm text-slate-600 leading-6">{item.text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mb-12 md:mb-16 rounded-[28px] border border-white/70 bg-gradient-to-br from-white via-pink-50/50 to-sky-50/60 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur">
          <CardContent className="p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 items-center">
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-3 py-1.5 text-xs font-semibold text-pink-700 mb-4">
                    Founder story
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display">
                    Meet Renia Ganguly
                  </h2>

                  <p className="mt-4 text-base md:text-lg leading-8 text-slate-600">
                    Hi, I&apos;m Renia, founder of ChequeItOut. Growing up in the UK, I often
                    wondered why we were never properly taught the basics of handling money,
                    and I realised how unprepared many young people feel when stepping into
                    the real world.
                  </p>
                </div>

                <div className="space-y-4 text-slate-600 leading-7">
                  <p>
                    <span className="font-semibold text-pink-600">
                      That’s why I created ChequeItOut
                    </span>{' '}
                    — to make financial education more accessible, engaging, and empowering
                    for young people who deserve practical guidance early in life.
                  </p>

                  <p>
                    <span className="font-semibold text-sky-600">
                      This is not just about numbers and jargon
                    </span>{' '}
                    — it’s about real life. We break down complex ideas into content that
                    feels relatable, age-appropriate, and easier to understand.
                  </p>

                  <p>
                    I truly believe that when children learn how to manage money early,
                    they’re not only learning about finance — they’re learning how to make
                    confident decisions about their futures.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-full max-w-sm">
                  <div className="rounded-[30px] border border-white/80 bg-white/90 p-5 shadow-xl">
                    <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-pink-100 via-white to-sky-100 p-6">
                      <img
                        src="/Renia-profile.png"
                        alt="Renia, founder of ChequeItOut"
                        className="mx-auto h-70 w-64 object-cover rounded-full ring-4 ring-white shadow-xl"
                      />

                      <div className="mt-5 text-center">
                        <h3 className="text-xl font-bold text-slate-900">Renia Ganguly</h3>
                        <p className="text-sm text-slate-600">Founder & Student</p>
                      </div>

                      <div className="mt-5 flex items-center justify-center gap-3 flex-wrap">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                          <Award className="h-4 w-4 text-pink-500" />
                          12th grade
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                          <Star className="h-4 w-4 text-amber-500" />
                          Youth-focused mission
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
          {pillars.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card
                key={index}
                className={`h-full rounded-3xl border ${item.border} bg-white/90 shadow-[0_18px_50px_rgba(15,23,42,0.05)]`}
              >
                <CardContent className="flex h-full flex-col p-6 md:p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.iconBg}`}>
                      <Icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <h3 className={`text-2xl font-bold font-display ${item.color}`}>
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 leading-7 mb-5">
                    {item.description}
                  </p>

                  <div className="space-y-3 mt-auto">
                    {item.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-3">
                        <CheckCircle2 className={`h-4 w-4 mt-1 shrink-0 ${item.color}`} />
                        <p className="text-sm text-slate-600 leading-6">{point}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mt-12 md:mt-16 rounded-3xl border border-slate-200 bg-slate-900 text-black shadow-[0_24px_70px_rgba(15,23,42,0.18)] overflow-hidden">
          <CardContent className="p-6 md:p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-pink-600 mb-4">
                  Let’s connect
                </div>
                <h3 className="text-2xl md:text-3xl text-black font-bold font-display">
                  Help us build better financial learning experiences
                </h3>
                <p className="mt-3 text-sm md:text-base text-gray-700 leading-7">
                  Whether you’re a parent, teacher, student, or potential partner, we’d love
                  to hear from you and learn how ChequeItOut can make a bigger impact.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => handleNavigation('/contact')}
                  className="bg-pink-500 hover:bg-pink-600 text-white rounded-xl h-12 px-6"
                >
                  Contact us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  onClick={() => handleNavigation('/kids-corner')}
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10 rounded-xl h-12 px-6"
                >
                  Explore Kids&apos; Corner
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default About;
































// import React, { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
// import { Button } from '../components/ui/button';
// import { Input } from '../components/ui/input';
// import { Label } from '../components/ui/label';
// import { Textarea } from '../components/ui/textarea';
// import { Heart, Target, Users, Mail, MapPin, Phone, Send, Star, BookOpen, Award, Loader2, HeartHandshake, ArrowRight   } from 'lucide-react';
// import { useToast } from '../hooks/use-toast.js';
// import { useNavigate } from 'react-router-dom';

// const About = () => {
//   const navigate = useNavigate();// Function to handle navigation
//   const handleNavigation = (path) => {
//     navigate(path);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   // Replace with your Google Apps Script Web App URL
//   const SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch(SCRIPT_URL, {
//         method: 'POST',
//         mode: 'no-cors', // Required for Google Apps Script
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData)
//       });

//       // no-cors mode doesn't return response, so we assume success
//       toast({
//         title: "Message Sent! 🎉",
//         description: "Thank you for contacting us. We'll get back to you soon!",
//         className: "border-pink-400 bg-gradient-to-r from-pink-50 to-blue-50 text-gray-900 shadow-xl",
//       });

      
//       // Clear form
//       setFormData({ name: '', email: '', subject: '', message: '' });
      
//     } catch (error) {
//       toast({
//         title: "Oops! Something went wrong 😔",
//         description: "Please try again or email us directly at chequeitout.contact@gmail.com",
//         variant: "destructive",
//       });
//       console.error('Form submission error:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   return (
//     <div className="min-h-screen py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
//             About <span className="text-pink-500">ChequeItOut</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Our mission is to empower every child with the financial knowledge and confidence 
//             they need to build a bright, secure future. Together, we're creating a generation of money-smart kids!
//           </p>
//         </div>

//         {/* Founder Story */}
//         <div className="mb-16">
//           <Card className="bg-gradient-to-br from-pink-50 via-blue-50 to-green-50 border-pink-200 rounded-xl">
//             <CardContent className="pt-8">
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//                 <div className="space-y-6">
//                   <div>
//                     <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
//                       Meet Renia Ganguly 👩‍🏫
//                     </h2>
//                     <p className="text-lg text-gray-600 leading-relaxed">
//                       Hi, I'm Renia, founder of ChequeItOut. Growing up in the UK, I often found myself wondering why we were never taught the basics of handling finances and I quickly realised how unprepared I felt stepping into the real world.
//                     </p>
//                   </div>
                  
//                   <div className="space-y-4">
//                     <p className="text-gray-600">
//                      <strong className='text-pink-400'>That's why I created ChequeItOut</strong> — a platform dedicated to making financial education accessible, engaging, and empowering for young people. What makes ChequeItOut different is that it's built from the perspective of someone who knows what it feels like to not know. 
//                     </p>
                    
//                     <p className="text-gray-600">
//                       <strong className='text-blue-400'>This isn't just about numbers and jargon</strong> — it's about real life. We break down complex concepts into fun, age-appropriate, and relatable content that speaks to young minds in their own language. We deliver content in ways that resonate with young people, using digital tools and formats they enjoy because financial education should not be boring or intimidating. It should be empowering.
//                     </p>
                    
//                     <p className="text-gray-600">
//                       I truly believe that when kids are taught how to manage money early on, they're not just learning about finances — they're learning how to take control of their futures.
//                     </p>
//                   </div>
//                 </div>
                
//                 {/* Right: founder photo with bottom label */}
//                   <div className="text-center">
//                     <div className="relative w-64 h-64 mx-auto">
//                       {/* Photo circle */}
//                       <img
//                         src="/Renia-profile.png"
//                         alt="Renia, Founder & Student"
//                         className="w-64 h-64 rounded-full shadow-xl ring-4 ring-white/70"
//                       />

//                       {/* Name + role pill, anchored to bottom of photo */}
//                       <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
//                         <div className="px-4 py-2 rounded-full bg-white/90 backdrop-blur border border-black/5 shadow-md">
//                           <p className="text-sm font-semibold text-gray-900 leading-tight">Renia</p>
//                           <p className="text-[11px] text-gray-600 -mt-0.5">Founder & Student</p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Spacing to account for the pill floating below the image */}
//                     <div className="mt-6 space-y-2">
//                       <div className="flex items-center justify-center space-x-2 text-gray-600">
//                         <Award className="h-4 w-4" />
//                         <span className="text-sm">12th grade</span>
//                       </div>
//                     </div>
//                   </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Mission & Vision & our promise */}
//         <div className="mb-16">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <Card className="border-2 border-pink-200 hover:shadow-lg transition-all duration-300 rounded-xl">
//               <CardHeader>
//                 <CardTitle className="text-2xl font-bold text-pink-500 font-display flex items-center">
//                   <Target className="mr-3 h-8 w-8" />
//                   Our Mission
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600 leading-relaxed mb-4">
//                   At ChequeItOut, our mission is to close the financial literacy gap by providing accessible, engaging, and inclusive financial education to children and young people. We believe that understanding money is a fundamental life skill, not a privilege, and we are committed to empowering the next generation with the knowledge and confidence they need to understand, manage, and grow their finances throughout life and to make informed financial decisions every step of the way.
//                 </p>
//                 <ul className="space-y-2 text-gray-600">
//                   <li className="flex items-start space-x-2">
//                     <Star className="h-4 w-4 text-pink-500 mt-1 flex-shrink-0" />
//                     <span>Create age-appropriate, engaging financial education resources</span>
//                   </li>
//                   <li className="flex items-start space-x-2">
//                     <Star className="h-4 w-4 text-pink-500 mt-1 flex-shrink-0" />
//                     <span>Support parents and teachers with practical tools</span>
//                   </li>
//                   <li className="flex items-start space-x-2">
//                     <Star className="h-4 w-4 text-pink-500 mt-1 flex-shrink-0" />
//                     <span>Build confidence in young people around money management</span>
//                   </li>
//                 </ul>
//               </CardContent>
//             </Card>

//             <Card className="border-2 border-teal-200 hover:shadow-lg transition-all duration-300 rounded-xl">
//               <CardHeader>
//                 <CardTitle className="text-2xl font-bold text-teal-500 font-display flex items-center">
//                   <Heart className="mr-3 h-8 w-8" />
//                   Our Vision
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600 leading-relaxed mb-4">
//                   We envision a world where every young person, regardless of their background or location, is equipped with essential financial skills for life. Through ChequeItOut, we aim to reshape how financial education is delivered, making it fun, relatable, and practical so that no child enters adulthood unprepared to navigate the financial realities of the modern world.
//                 </p>
//                 <ul className="space-y-2 text-gray-600">
//                   <li className="flex items-start space-x-2">
//                     <Star className="h-4 w-4 text-teal-500 mt-1 flex-shrink-0" />
//                     <span>Financially literate young adults who make informed decisions</span>
//                   </li>
//                   <li className="flex items-start space-x-2">
//                     <Star className="h-4 w-4 text-teal-500 mt-1 flex-shrink-0" />
//                     <span>Reduced financial stress and improved wellbeing</span>
//                   </li>
//                   <li className="flex items-start space-x-2">
//                     <Star className="h-4 w-4 text-teal-500 mt-1 flex-shrink-0" />
//                     <span>A generation empowered to build wealth and security</span>
//                   </li>
//                 </ul>
//               </CardContent>
//             </Card>

//              <Card className="border-2 border-green-200 bg-green-50 rounded-xl">
//               <CardContent className="pt-6">
//                 <div className="flex items-center space-x-3 mb-3">
//                   <div className="bg-green-500 rounded-full p-2">
//                     <Heart className="h-5 w-5 text-white" />
//                   </div>
//                   <h4 className="font-semibold text-green-800">Our Promise</h4>
//                 </div>
//                 <p className="text-green-700 text-sm">
//                   We read every message personally and aim to respond within 24 hours during weekdays. 
//                   Your thoughts and feedback help us create better resources for children everywhere!
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

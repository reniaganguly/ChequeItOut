import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Heart, Target, Users, Mail, MapPin, Phone, Send, Star, BookOpen, Award, Loader2 } from 'lucide-react';
import { useToast } from '../hooks/use-toast.js';

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Replace with your Google Apps Script Web App URL
  const SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // no-cors mode doesn't return response, so we assume success
      toast({
        title: "Message Sent! 🎉",
        description: "Thank you for contacting us. We'll get back to you soon!",
        className: "border-pink-400 bg-gradient-to-r from-pink-50 to-blue-50 text-gray-900 shadow-xl",
      });

      
      // Clear form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      toast({
        title: "Oops! Something went wrong 😔",
        description: "Please try again or email us directly at chequeitout.contact@gmail.com",
        variant: "destructive",
      });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const achievements = [
    {
      icon: Users,
      number: '1000+',
      label: 'Children Educated'
    },
    {
      icon: BookOpen,
      number: '20+',
      label: 'Schools Partnered'
    },
    {
      icon: Award,
      number: '500+',
      label: 'Resources Downloaded'
    },
    {
      icon: Star,
      number: '4.9/5',
      label: 'Parent Rating'
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
            About <span className="text-pink-500">ChequeItOut</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mission is to empower every child with the financial knowledge and confidence 
            they need to build a bright, secure future. Together, we're creating a generation of money-smart kids!
          </p>
        </div>

        {/* Founder Story */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-pink-50 via-blue-50 to-green-50 border-pink-200 rounded-xl">
            <CardContent className="pt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
                      Meet Renia 👩‍🏫
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Hi, I'm Renia, founder of ChequeItOut. Growing up in the UK, I often found myself wondering why we were never taught the basics of handling finances and I quickly realised how unprepared I felt stepping into the real world.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-600">
                     <strong className='text-pink-400'>That's why I created ChequeItOut</strong> — a platform dedicated to making financial education accessible, engaging, and empowering for young people. What makes ChequeItOut different is that it's built from the perspective of someone who knows what it feels like to not know. 
                    </p>
                    
                    <p className="text-gray-600">
                      <strong className='text-blue-400'>This isn't just about numbers and jargon</strong> — it's about real life. We break down complex concepts into fun, age-appropriate, and relatable content that speaks to young minds in their own language. We deliver content in ways that resonate with young people, using digital tools and formats they enjoy because financial education should not be boring or intimidating. It should be empowering.
                    </p>
                    
                    <p className="text-gray-600">
                      I truly believe that when kids are taught how to manage money early on, they're not just learning about finances — they're learning how to take control of their futures.
                    </p>
                  </div>
                </div>
                
                {/* Right: founder photo with bottom label */}
                  <div className="text-center">
                    <div className="relative w-64 h-64 mx-auto">
                      {/* Photo circle */}
                      <img
                        src="/Renia-profile.png"
                        alt="Renia, Founder & Student"
                        className="w-64 h-64 rounded-full shadow-xl ring-4 ring-white/70"
                      />

                      {/* Name + role pill, anchored to bottom of photo */}
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                        <div className="px-4 py-2 rounded-full bg-white/90 backdrop-blur border border-black/5 shadow-md">
                          <p className="text-sm font-semibold text-gray-900 leading-tight">Renia</p>
                          <p className="text-[11px] text-gray-600 -mt-0.5">Founder & Student</p>
                        </div>
                      </div>
                    </div>

                    {/* Spacing to account for the pill floating below the image */}
                    <div className="mt-6 space-y-2">
                      <div className="flex items-center justify-center space-x-2 text-gray-600">
                        <Award className="h-4 w-4" />
                        <span className="text-sm">12th grade</span>
                      </div>
                    </div>
                  </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mission & Vision */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-pink-200 hover:shadow-lg transition-all duration-300 rounded-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-pink-500 font-display flex items-center">
                  <Target className="mr-3 h-8 w-8" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At ChequeItOut, our mission is to close the financial literacy gap by providing accessible, engaging, and inclusive financial education to children and young people. We believe that understanding money is a fundamental life skill, not a privilege, and we are committed to empowering the next generation with the knowledge and confidence they need to understand, manage, and grow their finances throughout life and to make informed financial decisions every step of the way.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <Star className="h-4 w-4 text-pink-500 mt-1 flex-shrink-0" />
                    <span>Create age-appropriate, engaging financial education resources</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Star className="h-4 w-4 text-pink-500 mt-1 flex-shrink-0" />
                    <span>Support parents and teachers with practical tools</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Star className="h-4 w-4 text-pink-500 mt-1 flex-shrink-0" />
                    <span>Build confidence in young people around money management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-200 hover:shadow-lg transition-all duration-300 rounded-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-teal-500 font-display flex items-center">
                  <Heart className="mr-3 h-8 w-8" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We envision a world where every young person, regardless of their background or location, is equipped with essential financial skills for life. Through ChequeItOut, we aim to reshape how financial education is delivered, making it fun, relatable, and practical so that no child enters adulthood unprepared to navigate the financial realities of the modern world.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <Star className="h-4 w-4 text-teal-500 mt-1 flex-shrink-0" />
                    <span>Financially literate young adults who make informed decisions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Star className="h-4 w-4 text-teal-500 mt-1 flex-shrink-0" />
                    <span>Reduced financial stress and improved wellbeing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Star className="h-4 w-4 text-teal-500 mt-1 flex-shrink-0" />
                    <span>A generation empowered to build wealth and security</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-pink-50 border-pink-200 rounded-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-900 text-center font-display">
                Our Impact So Far 📊
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

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 font-display flex items-center">
                <Send className="mr-3 h-6 w-6 text-pink-500" />
                Get In Touch
              </CardTitle>
              <p className="text-gray-600">
                Have questions? Want to partner with us? We'd love to hear from you!
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      disabled={isSubmitting}
                      className="border-pink-200 focus:border-pink-400 focus:ring-pink-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      disabled={isSubmitting}
                      className="border-pink-200 focus:border-pink-400 focus:ring-pink-200"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    disabled={isSubmitting}
                    className="border-pink-200 focus:border-pink-400 focus:ring-pink-200"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more..."
                    rows={5}
                    required
                    disabled={isSubmitting}
                    className="border-pink-200 focus:border-pink-400 focus:ring-pink-200"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-pink-50 to-blue-50 border-pink-200 rounded-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 font-display">
                  Let's Connect! 🤝
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email Us</h4>
                    <p className="text-gray-600">chequeitout.contact@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Call Us</h4>
                    <p className="text-gray-600">+44 7469 241 531</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Based In</h4>
                    <p className="text-gray-600">London, United Kingdom</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ambassador Program */}
            <Card className="bg-gradient-to-r from-pink-400 to-blue-500 text-white rounded-xl">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 font-display">
                  🌟 Become a ChequeItOut Ambassador!
                </h3>
                <p className="text-white/90 mb-4">
                  Are you passionate about financial education? Join our community of educators, 
                  parents, and advocates making a difference in children's lives.
                </p>
                <a href="https://docs.google.com/forms/d/1iYrrINnAHDErko6Pkjdi6APkB_wYsGQr9OTG0NACub4/viewform?edit_requested=true" target='_blank'>
                  <Button className="bg-white !text-pink-600 hover:bg-gray-100 font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
                    <Users className="mr-2 h-4 w-4" />
                    Join Our Community
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Response Promise */}
            <Card className="border-2 border-green-200 bg-green-50 rounded-xl">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-green-500 rounded-full p-2">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-green-800">Our Promise</h4>
                </div>
                <p className="text-green-700 text-sm">
                  We read every message personally and aim to respond within 24 hours during weekdays. 
                  Your thoughts and feedback help us create better resources for children everywhere!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

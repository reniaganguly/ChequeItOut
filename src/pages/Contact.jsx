import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  HeartHandshake,
  Clock3,
  ShieldCheck,
  MessageCircle,
  Sparkles
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast.js';

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      toast({
        title: 'Message Sent! 🎉',
        description: "Thank you for contacting us. We'll get back to you soon!",
        className:
          'border-pink-400 bg-gradient-to-r from-pink-50 to-rose-50 text-gray-900 shadow-xl'
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: 'Oops! Something went wrong 😔',
        description:
          'Please try again or email us directly at chequeitout.contact@gmail.com',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: Mail,
      title: 'Email us',
      value: 'chequeitout.contact@gmail.com',
      href: 'mailto:chequeitout.contact@gmail.com',
      color: 'text-pink-600',
      bg: 'bg-pink-100'
    },
    {
      icon: Phone,
      title: 'Call or WhatsApp',
      value: '+44 7469 241 531',
      href: 'tel:+447469241531',
      color: 'text-sky-600',
      bg: 'bg-sky-100'
    },
    {
      icon: MapPin,
      title: 'Based in',
      value: 'London, United Kingdom',
      href: null,
      color: 'text-emerald-600',
      bg: 'bg-emerald-100'
    }
  ];

  const supportPoints = [
    {
      icon: Clock3,
      title: 'Fast response',
      text: 'We aim to reply within 24 hours on weekdays.'
    },
    {
      icon: HeartHandshake,
      title: 'Friendly support',
      text: 'We read every message personally and carefully.'
    },
    {
      icon: ShieldCheck,
      title: 'Trusted communication',
      text: 'Your details stay private and are used only to respond.'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white via-rose-50/40 to-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="absolute top-40 right-10 h-40 w-40 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute bottom-20 left-10 h-40 w-40 rounded-full bg-emerald-200/20 blur-3xl" />
      </div>

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <header className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 backdrop-blur px-4 py-2 text-xs sm:text-sm font-semibold text-pink-600 shadow-sm mb-4">
            <HeartHandshake className="h-4 w-4" />
            We’d love to hear from you
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display">
            Contact <span className="text-pink-500">ChequeItOut</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
            Whether you&apos;re a parent, teacher, student, or organisation, reach out to ask
            questions, explore partnerships, or share feedback. We&apos;re here to help make
            financial learning more accessible and engaging.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-600">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-slate-200 px-4 py-2 shadow-sm">
              <Clock3 className="h-4 w-4 text-pink-500" />
              Replies within 24 hours
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-slate-200 px-4 py-2 shadow-sm">
              <MessageCircle className="h-4 w-4 text-sky-500" />
              Real human support
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-slate-200 px-4 py-2 shadow-sm">
              <Sparkles className="h-4 w-4 text-emerald-500" />
              Friendly and helpful
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-8 items-stretch">
          <Card className="h-full rounded-3xl border border-white/70 bg-white/90 backdrop-blur shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <CardHeader className="pb-5">
              <CardTitle className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-slate-900 font-display">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-100 text-pink-600">
                  <Send className="h-5 w-5" />
                </div>
                Send us a message
              </CardTitle>
              <p className="text-sm md:text-base text-slate-600 mt-2 max-w-xl">
                Fill out the form below and tell us how we can help. We welcome questions,
                ideas, collaborations, and feedback.
              </p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-slate-700">
                      Full name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      disabled={isSubmitting}
                      className="h-12 rounded-xl border-slate-200 bg-white/80 focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:border-pink-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                      Email address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      disabled={isSubmitting}
                      className="h-12 rounded-xl border-slate-200 bg-white/80 focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:border-pink-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium text-slate-700">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to talk about?"
                    required
                    disabled={isSubmitting}
                    className="h-12 rounded-xl border-slate-200 bg-white/80 focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:border-pink-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-slate-700">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows={6}
                    required
                    disabled={isSubmitting}
                    className="min-h-[160px] rounded-2xl border-slate-200 bg-white/80 resize-none focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:border-pink-400"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-2">
                  <p className="text-xs sm:text-sm text-slate-500">
                    We only use your information to respond to your enquiry.
                  </p>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto min-w-[180px] h-12 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50"
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
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="flex h-full flex-col gap-6">
            <Card className="flex-1 rounded-3xl border border-pink-100 bg-gradient-to-br from-white via-pink-50/70 to-sky-50/70 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-slate-900 font-display">
                  Ways to reach us
                </CardTitle>
                <p className="text-sm md:text-base text-slate-600">
                  Choose the contact method that works best for you.
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {contactCards.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm"
                    >
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.bg}`}>
                        <Icon className={`h-5 w-5 ${item.color}`} />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-1 inline-block break-all text-sm text-slate-600 hover:text-pink-600 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm text-slate-600">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="flex flex-1 flex-col rounded-3xl border border-emerald-100 bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="flex h-full flex-col p-6">
                <div className="my-4">
                  <h3 className="text-xl font-bold text-slate-900 font-display">
                    Why people contact us
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-slate-600">
                    We support parents, educators, learners, and partners who want to make
                    financial education more practical and engaging.
                  </p>
                </div>

                <div className="space-y-4 mb-4">
                  {supportPoints.map((point, index) => {
                    const Icon = point.icon;

                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900">{point.title}</h4>
                          <p className="text-sm text-slate-600">{point.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-auto pt-2 pl-2 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 p-[1px]">
                  <div className="rounded-2xl bg-white px-4 py-4">
                    <p className="text-sm text-slate-700">
                      Prefer to learn more before reaching out?
                    </p>
                    <button
                      type="button"
                      onClick={() => handleNavigation('/about')}
                      className="mt-2 inline-flex items-center cursor-pointer text-sm font-semibold text-pink-600 hover:text-pink-700"
                    >
                      Visit our About page
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-emerald-200 bg-white/80 backdrop-blur px-4 sm:px-6 py-4 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <p className="text-sm md:text-base text-slate-700 leading-7">
              We aim to respond within 24 hours on weekdays. Your questions and ideas help us
              create better financial literacy resources for children and young people worldwide.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
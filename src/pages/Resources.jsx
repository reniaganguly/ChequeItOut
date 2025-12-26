import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Download, FileText, BookOpen, PenTool, Users, Star, Sparkles } from 'lucide-react';
import { useToast } from '../hooks/use-toast.js';

const Resources = () => {
  const { toast } = useToast();
  const resources = [
    {
      id: 'renia-handbook',
      title: 'ChequeItOut Money Smart Handbook',
      description: 'The complete financial literacy handbook by Renia! Features Penny the Piggy Bank guiding kids through 4 interactive modules: What is Money, Budgeting Basics, Banks & Safety, and Introduction to Investing.',
      type: 'Complete Handbook',
      pages: '24 pages',
      size: '13.4 MB',
      icon: Sparkles,
      color: 'from-pink-500 via-purple-500 to-blue-500',
      bgColor: '#ec4899',
      featured: true,
      downloadUrl: '/ChequeItOut Handbook - Renia G.pdf',
      features: [
        'Interactive activities & worksheets',
        'Design your own money, wallet & bank',
        'Real-world scenarios with Penny',
        'Completion certificate included',
        'Parent & teacher guide'
      ]
    },
    {
      id: 'handbook',
      title: 'ChequeItOut Christmas Competition 2025',
      description: 'A comprehensive 50-page guide covering all financial literacy basics for kids aged 10-16',
      type: 'PDF Guide',
      pages: '50 pages',
      size: '12.5 MB',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      bgColor: '#3b82f6', 
      downloadUrl: '/ChequeItOut Christmas Competition 2025.pdf',
      features: [
        'Interactive budgeting worksheets',
        'Real-world money scenarios',
        'Fun illustrations and comics',
        'Parent & teacher guide included'
      ]
    },
    {
      id: 'activities',
      title: 'Fun Activities Workbook',
      description: 'Engaging exercises, games, and challenges to make learning about money exciting and memorable',
      type: 'Activity Book',
      pages: '35 pages',
      size: '8.2 MB',
      icon: PenTool,
      color: 'from-pink-500 to-rose-500',
      bgColor: '#e879a7',
      features: [
        'Money-themed puzzles and games',
        'Budgeting challenges',
        'Savings goal planners',
        'Certificate of completion'
      ]
    },
    {
      id: 'lesson-plans',
      title: 'Teacher Lesson Plans',
      description: 'Ready-to-use lesson plans for educators to teach financial literacy in the classroom',
      type: 'Teaching Guide',
      pages: '25 pages',
      size: '6.8 MB',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      bgColor: '#10b981',
      features: [
        '10 complete lesson plans',
        'Assessment rubrics',
        'Printable worksheets',
        'Extension activities'
      ]
    },
    {
      id: 'worksheets',
      title: 'Printable Worksheets Pack',
      description: 'Collection of individual worksheets for specific financial topics and activities',
      type: 'Worksheet Collection',
      pages: '40 pages',
      size: '15.3 MB',
      icon: FileText,
      color: 'from-purple-500 to-violet-500',
      bgColor: '#8b5cf6',
      features: [
        'Budget planning templates',
        'Savings tracking sheets',
        'Spending diary pages',
        'Goal setting worksheets'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Mrs. Thompson, Primary School Teacher',
      text: 'These resources are fantastic! My Year 6 class loves the activities and the lesson plans are so well-structured.',
      rating: 5
    },
    {
      name: 'David, Parent of 12-year-old',
      text: 'The handbook has been perfect for teaching my son about money at home. Clear, fun, and age-appropriate.',
      rating: 5
    }
  ];

  const handleDownload = (resourceId, title, downloadUrl) => {
  if (downloadUrl) {
    // Construct absolute public URL to bypass React Router
    const publicUrl = window.location.origin + downloadUrl;
    window.open(publicUrl, '_blank');
     // Show success toast
      toast({
        title: "Download Started! 📥",
        description: `${title} is being downloaded. Check your downloads folder.`,
        className: "border-green-200 bg-green-50 text-green-900",
      });
  } else {
    toast({
        title: "Coming Soon! 🚀",
        description: `${title} will be available for download shortly. Stay tuned!`,
        className: "border-blue-200 bg-blue-50 text-blue-900",
      });
  }
};



  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
            <Download className="inline-block mr-4 h-12 w-12 text-pink-500 animate-bounce" />
            Free <span className="text-pink-500">Resources</span>! 📚
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Download our comprehensive collection of financial literacy resources! 
            Perfect for kids, parents, and teachers - everything you need to start learning about money.
          </p>
          <div className="bg-gradient-to-r from-pink-100 to-blue-100 p-4 rounded-lg inline-block border border-pink-200">
            <p className="text-lg font-semibold text-gray-900">
              🎉 All resources are <span className="text-pink-500">completely FREE</span> to download and use!
            </p>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <Card 
              key={resource.id} 
              className={`hover:shadow-xl transition-all duration-300 border-2 ${
                resource.featured 
                  ? 'border-pink-400 ring-4 ring-pink-200 scale-105' 
                  : 'border-gray-100 hover:border-pink-200'
              } overflow-hidden rounded-xl ${index === 0 ? 'lg:col-span-2' : ''}`}
            >

              {/* Resource Header */}
              <div className="p-6 text-white rounded-t-xl relative" style={{ background: `linear-gradient(135deg, ${resource.bgColor}, ${resource.bgColor}dd)` }}>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <resource.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold font-display">{resource.title}</CardTitle>
                    <p className="text-white/90 text-sm">{resource.type}</p>
                  </div>
                </div>
              </div>

              <CardContent className="pt-6">
                <p className="text-gray-600 mb-6">{resource.description}</p>
                
                {/* Resource Details */}
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <FileText className="h-4 w-4 mr-1 text-gray-500" />
                        {resource.pages}
                      </span>
                      <span className="flex items-center">
                        <Download className="h-4 w-4 mr-1 text-gray-500" />
                        {resource.size}
                      </span>
                    </div>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                      FREE
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
                  <ul className="space-y-2">
                    {resource.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Star className="h-4 w-4 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Download Button */}
                <Button 
                  className={`w-full text-white font-semibold py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                    resource.featured ? 'animate-pulse' : ''
                  }`}
                  style={{ backgroundColor: resource.bgColor }}
                  onClick={() => handleDownload(resource.id, resource.title, resource.downloadUrl)}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download {resource.type}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Usage Guidelines */}
        <Card className="mb-16 bg-gradient-to-r from-blue-50 to-pink-50 border-pink-200 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 text-center font-display">
              📖 How to Use These Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-pink-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-8 w-8 text-pink-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 font-display">For Parents</h3>
                <p className="text-gray-600 text-sm">
                  Use the handbook and worksheets for family money discussions. 
                  Create fun learning moments at home!
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 font-display">For Teachers</h3>
                <p className="text-gray-600 text-sm">
                  Integrate lesson plans into your curriculum. 
                  Engage students with interactive activities!
                </p>
              </div>
              <div className="text-center">
                <div className="bg-teal-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <PenTool className="h-8 w-8 text-teal-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 font-display">For Kids</h3>
                <p className="text-gray-600 text-sm">
                  Work through activities at your own pace. 
                  Have fun while learning about money!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Testimonials */}
        <Card className="mb-16 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 text-center font-display">
              What People Are Saying 💬
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-blue-50 p-6 rounded-lg border border-pink-100">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">— {testimonial.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-pink-400 to-blue-500 rounded-xl">
          <CardContent className="pt-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-display">
              Ready to Start Your Money Learning Journey? 🚀
            </h2>
            <p className="text-xl text-white/90 mb-6">
              Download our resources and begin teaching financial literacy today!
            </p>
            <Button 
              size="lg"
              className="bg-white !text-pink-600 hover:bg-gray-100 font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
              onClick={() => handleDownload('renia-handbook', 'ChequeItOut Money Smart Handbook', '/ChequeItOut Handbook - Renia G.pdf')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Money Smart Handbook
            </Button>
            <p className="text-sm text-white/80 mt-4">
              All resources are free to download, print, and share. No registration required!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resources;

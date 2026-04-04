import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { 
  PiggyBank, 
  ShoppingCart, 
  Building2, 
  CreditCard, 
  TrendingUp, 
  Users,
  CheckCircle,
  Clock,
  Play,
  Star
} from 'lucide-react';

const KidsCorner = () => {
  const [completedLessons, setCompletedLessons] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);

  // Add this helper function after your state declarations
  const openLesson = (lessonId) => {
    setSelectedLesson(lessonId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const lessons = [
    {
      id: 'budgeting',
      title: 'Basics of Budgeting',
      subtitle: 'Money In vs Money Out',
      description: 'Learn how to track your money coming in and going out, just like a game score!',
      icon: PiggyBank,
      color: 'from-pink-500 to-rose-500',
      bgColor: '#e879a7',
      difficulty: 'Beginner',
      duration: '15 min',
      content: {
        intro: "Welcome to budgeting basics! Think of budgeting like keeping score in your favorite game. Money coming in is like points you earn, and money going out is like points you spend on power-ups!",
        keyPoints: [
          "Income = Money coming IN (allowance, gifts, earnings)",
          "Expenses = Money going OUT (toys, sweets, savings)",
          "Budget = Your money plan to make sure you don't run out!",
          "Always try to have some money left over for savings"
        ],
        activity: "Create your first weekly budget using our fun calculator!"
      }
    },
    {
      id: 'saving-spending',
      title: 'Saving vs Spending',
      subtitle: 'Needs vs Wants',
      description: 'Discover the difference between things you need and things you want!',
      icon: ShoppingCart,
      color: 'from-blue-500 to-cyan-500',
      bgColor: '#3b82f6',
      difficulty: 'Beginner',
      duration: '12 min',
      content: {
        intro: "Let's learn about needs and wants! Needs are like the must-have items in a video game to survive, while wants are the cool extras that make the game more fun.",
        keyPoints: [
          "NEEDS: Food, clothes, shelter, school supplies",
          "WANTS: Latest toys, video games, trendy clothes",
          "Always budget for NEEDS first, then WANTS",
          "Saving helps you get your wants without breaking your budget!"
        ],
        activity: "Play our Needs vs Wants sorting game!"
      }
    },
    {
      id: 'banks',
      title: 'Understanding Banks',
      subtitle: 'How Money Works',
      description: 'Learn what banks do and how they keep your money safe and growing!',
      icon: Building2,
      color: 'from-green-500 to-emerald-500',
      bgColor: '#10b981',
      difficulty: 'Intermediate',
      duration: '18 min',
      content: {
        intro: "Banks are like super secure treasure chests that not only keep your money safe but also help it grow! Let's explore how this money magic works.",
        keyPoints: [
          "Banks keep your money safe from theft and loss",
          "You earn interest - free money for keeping money in the bank!",
          "Different accounts: savings (grows money) and current (daily use)",
          "Online banking lets you check your money anytime"
        ],
        activity: "Virtual bank account simulation!"
      }
    },
    {
      id: 'credit',
      title: 'What is Credit?',
      subtitle: 'Borrowing & Paying Back',
      description: 'Simple introduction to borrowing money and the importance of paying it back!',
      icon: CreditCard,
      color: 'from-purple-500 to-violet-500',
      bgColor: '#8b5cf6',
      difficulty: 'Advanced',
      duration: '20 min',
      content: {
        intro: "Credit is like borrowing a friend's game - you get to use it now, but you must return it later (sometimes with a little extra as a 'thank you').",
        keyPoints: [
          "Credit = Borrowing money that you pay back later",
          "Interest = Extra money you pay for borrowing (like a rental fee)",
          "Good credit = Being trustworthy with borrowed money",
          "Credit cards are not free money - you must pay it all back!"
        ],
        activity: "Credit scenario quiz - make smart borrowing decisions!"
      }
    },
    {
      id: 'investing',
      title: 'Intro to Investing',
      subtitle: 'Simple & Fun',
      description: 'Learn how to make your money grow by investing it wisely!',
      icon: TrendingUp,
      color: 'from-orange-500 to-amber-500',
      bgColor: '#f97316',
      difficulty: 'Advanced',
      duration: '25 min',
      content: {
        intro: "Investing is like planting seeds with your money - you plant them today, take care of them, and watch them grow into money trees over time!",
        keyPoints: [
          "Investing = Using money to buy things that might become worth more",
          "Stocks = Tiny pieces of companies you can own",
          "Risk = Sometimes investments go up, sometimes down",
          "Long-term = Best investments are held for many years"
        ],
        activity: "Virtual investment simulator - grow your money garden!"
      }
    },
    {
      id: 'money-community',
      title: 'Money in Everyday Life',
      subtitle: 'Family & Community',
      description: 'See how money works in families and communities around you!',
      icon: Users,
      color: 'from-teal-500 to-cyan-500',
      bgColor: '#14b8a6',
      difficulty: 'Beginner',
      duration: '16 min',
      content: {
        intro: "Money is everywhere in our daily lives! From family budgets to community projects, let's explore how money connects us all.",
        keyPoints: [
          "Families budget together for groceries, bills, and fun activities",
          "Communities use money for schools, parks, and public services",
          "Charity = Using money to help others in need",
          "Local businesses create jobs and serve the community"
        ],
        activity: "Design a community project and create a budget for it!"
      }
    }
  ];

  const toggleLessonComplete = (lessonId) => {
    setCompletedLessons(prev => 
      prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  const progressPercentage = (completedLessons.length / lessons.length) * 100;

  const LessonDetail = ({ lesson }) => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button 
          variant="outline" 
          onClick={() => {
            setSelectedLesson(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="mb-4 hover:bg-pink-50 border-pink-200"
        >
          ← Back to Lessons
        </Button>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Clock className="h-4 w-4" />
          <span>{lesson.duration}</span>
          <span>•</span>
          <span>{lesson.difficulty}</span>
        </div>
      </div>

      <Card className="text-white rounded-xl overflow-hidden" style={{ background: `linear-gradient(135deg, ${lesson.bgColor}, ${lesson.bgColor}dd)` }}>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-white/20 rounded-full">
              <lesson.icon className="h-8 w-8" />
            </div>
            <div>
              <CardTitle className="text-2xl font-display">{lesson.title}</CardTitle>
              <p className="text-white/90">{lesson.subtitle}</p>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Card className="rounded-xl">
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 font-display">Introduction</h3>
              <p className="text-gray-700 leading-relaxed">{lesson.content.intro}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 font-display">Key Learning Points</h3>
              <ul className="space-y-2">
                {lesson.content.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div 
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5"
                      style={{ backgroundColor: lesson.bgColor }}
                    >
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 font-display">Fun Activity</h3>
              <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-4 rounded-lg border border-pink-100">
                <p className="text-gray-700 mb-4">{lesson.content.activity}</p>
                <div className="flex space-x-3">
                  <Button 
                    className="text-white shadow-lg transform hover:scale-105 transition-all duration-300"
                    style={{ backgroundColor: lesson.bgColor }}
                    onClick={() => {
                      setSelectedLesson(lesson.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    {completedLessons.includes(lesson.id) ? 'Completed!' : 'Start Activity'}
                  </Button>
                  {completedLessons.includes(lesson.id) && (
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span className="font-medium">Well done!</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  if (selectedLesson) {
    const lesson = lessons.find(l => l.id === selectedLesson);
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {lesson ? <LessonDetail lesson={lesson} /> : null}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
            Welcome to <span className="text-pink-500">Kids' Corner</span>! 🎓
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your fun journey to becoming a money expert starts here! Complete lessons, play games, 
            and learn everything about smart money management.
          </p>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Your Progress</span>
              <span className="text-sm font-medium text-pink-500">{completedLessons.length}/{lessons.length} lessons</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
            <p className="text-xs text-gray-500 mt-2">
              {progressPercentage === 100 
                ? "🎉 Congratulations! You're a money expert!" 
                : `${Math.round(progressPercentage)}% complete - Keep going!`
              }
            </p>
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessons.map((lesson) => {
            const isCompleted = completedLessons.includes(lesson.id);
            
            return (
              <Card 
                key={lesson.id} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-gray-100 hover:border-pink-200 relative overflow-hidden rounded-xl bg-white"
                onClick={() => {
                      setSelectedLesson(lesson.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
              >
                {/* Completion badge */}
                {isCompleted && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full z-10">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                )}
                
                <CardHeader className="relative text-center">
                  <div 
                    className="inline-flex items-center justify-center p-4 rounded-full w-fit mx-auto mb-4 shadow-lg"
                    style={{ backgroundColor: lesson.bgColor }}
                  >
                    <lesson.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 font-display">
                    {lesson.title}
                  </CardTitle>
                  <p className="text-pink-500 font-medium">{lesson.subtitle}</p>
                </CardHeader>
                
                <CardContent className="relative">
                  <p className="text-gray-600 text-center mb-6">{lesson.description}</p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{lesson.duration}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      lesson.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                      lesson.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {lesson.difficulty}
                    </span>
                  </div>
                  
                  <Button 
                    className="w-full text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    style={{ 
                      backgroundColor: isCompleted ? '#10b981' : lesson.bgColor,
                    }}
                  >
                    {isCompleted ? (
                      <>
                        <Star className="mr-2 h-4 w-4" />
                        Review Lesson
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-4 w-4" />
                        Start Lesson
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Encouragement Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-pink-50 to-blue-50 border-pink-200 rounded-xl">
            <CardContent className="pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
                🌟 Keep Learning & Growing!
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Every lesson you complete brings you one step closer to becoming a money master! 
                Remember, the best time to learn about money is right now.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-pink-100">
                  <PiggyBank className="h-5 w-5 text-pink-500" />
                  <span className="text-sm font-medium">Smart Savers</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100">
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-medium">Future Investors</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-teal-100">
                  <Users className="h-5 w-5 text-teal-500" />
                  <span className="text-sm font-medium">Money Experts</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default KidsCorner;

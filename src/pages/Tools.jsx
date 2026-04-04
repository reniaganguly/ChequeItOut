import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input.jsx';
import { Label } from '../components/ui/label';
import { Slider } from '../components/ui/slider';
import { PiggyBank, ShoppingCart, Gift, Calculator, RefreshCw, Target, TrendingUp, AlertCircle } from 'lucide-react';

const Tools = () => {
  const [income, setIncome] = useState(20);
  const [spending, setSpending] = useState(12);
  const [saving, setSaving] = useState(5);
  const [sharing, setSharing] = useState(3);
  const [customGoal, setCustomGoal] = useState('');
  const [goalAmount, setGoalAmount] = useState(100);

  const total = spending + saving + sharing;
  const remaining = income - total;
  const isBalanced = remaining >= 0;

  const resetBudget = () => {
    setIncome(20);
    setSpending(12);
    setSaving(5);
    setSharing(3);
    setCustomGoal('');
    setGoalAmount(100);
  };

  const weeksToGoal = goalAmount > 0 && saving > 0 ? Math.ceil(goalAmount / saving) : 0;
  const monthsToGoal = Math.ceil(weeksToGoal / 4);

  const getAdvice = () => {
    if (remaining < 0) {
      return {
        type: 'warning',
        message: "Oops! You're spending more than you earn. Try reducing your spending or finding ways to earn more!",
        icon: AlertCircle,
        color: 'text-red-600'
      };
    } else if (saving < income * 0.2) {
      return {
        type: 'tip',
        message: "Great start! Try to save at least 20% of your income for future goals. You're doing well!",
        icon: Target,
        color: 'text-yellow-600'
      };
    } else {
      return {
        type: 'success',
        message: "Excellent budgeting! You're saving well and staying within your means. Keep it up!",
        icon: TrendingUp,
        color: 'text-green-600'
      };
    }
  };

  const advice = getAdvice();

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
            <Calculator className="inline-block mr-4 h-12 w-12 text-pink-500 animate-pulse" />
            Fun <span className="text-pink-500">Money Tools</span>! 🎮
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Play with our interactive budgeting calculator and learn how to manage your money like a pro! 
            Adjust the sliders and see what happens to your budget in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Budget Calculator */}
          <Card className="lg:col-span-2 bg-gradient-to-br from-pink-50 via-blue-50 to-green-50 border-pink-200 rounded-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold text-gray-900 font-display flex items-center">
                  <PiggyBank className="mr-3 h-8 w-8 text-pink-500" />
                  Interactive Budgeting Calculator
                </CardTitle>
                <Button 
                  variant="outline" 
                  onClick={resetBudget} 
                  className="flex items-center border-pink-200 hover:bg-pink-50 text-pink-600"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Reset
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Income Slider */}
              <div className="space-y-3">
                <Label className="text-lg font-semibold text-gray-900 flex items-center">
                  <Gift className="mr-2 h-5 w-5 text-green-500" />
                  Weekly Income (pocket money, gifts, etc.)
                </Label>
                <div className="flex items-center space-x-4">
                  <Slider
                    value={[income]}
                    onValueChange={(value) => setIncome(value[0])}
                    max={100}
                    min={5}
                    step={1}
                    className="flex-1"
                    rackcolor="bg-green-200"
                    thumbcolor="bg-green-500"
                  />
                  <div className="w-20 text-right">
                    <span className="text-2xl font-bold text-green-500">£{income}</span>
                  </div>
                </div>
              </div>

              {/* Spending Slider */}
              <div className="space-y-3">
                <Label className="text-lg font-semibold text-gray-900 flex items-center">
                  <ShoppingCart className="mr-2 h-5 w-5 text-blue-500" />
                  Weekly Spending (toys, sweets, activities)
                </Label>
                <div className="flex items-center space-x-4">
                  <Slider
                    value={[spending]}
                    onValueChange={(value) => setSpending(value[0])}
                    max={income}
                    min={0}
                    step={1}
                    className="flex-1"
                    rackcolor="bg-blue-200"
                    thumbcolor="bg-blue-500"
                  />
                  <div className="w-20 text-right">
                    <span className="text-2xl font-bold text-blue-500">£{spending}</span>
                  </div>
                </div>
              </div>

              {/* Saving Slider */}
              <div className="space-y-3">
                <Label className="text-lg font-semibold text-gray-900 flex items-center">
                  <PiggyBank className="mr-2 h-5 w-5 text-pink-500" />
                  Weekly Saving (for future goals)
                </Label>
                <div className="flex items-center space-x-4">
                  <Slider
                    value={[saving]}
                    onValueChange={(value) => setSaving(value[0])}
                    max={income}
                    min={0}
                    step={1}
                    className="flex-1"
                    rackcolor="bg-pink-200"
                    thumbcolor="bg-pink-500"
                  />
                  <div className="w-20 text-right">
                    <span className="text-2xl font-bold text-pink-500">£{saving}</span>
                  </div>
                </div>
              </div>

              {/* Sharing Slider */}
              <div className="space-y-3">
                <Label className="text-lg font-semibold text-gray-900 flex items-center">
                  <Gift className="mr-2 h-5 w-5 text-teal-500" />
                  Weekly Sharing (charity, helping others)
                </Label>
                <div className="flex items-center space-x-4">
                  <Slider
                    value={[sharing]}
                    onValueChange={(value) => setSharing(value[0])}
                    max={income}
                    min={0}
                    step={1}
                    className="flex-1"
                    rackcolor="bg-teal-200"
                    thumbcolor="bg-teal-500"
                  />
                  <div className="w-20 text-right">
                    <span className="text-2xl font-bold text-teal-500">£{sharing}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Budget Summary */}
          <Card className={`border-2 rounded-xl ${isBalanced ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 font-display">
                📊 Your Budget Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="font-medium">Income</span>
                  <span className="text-green-600 font-bold">+£{income}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="font-medium">Spending</span>
                  <span className="text-blue-600 font-bold">-£{spending}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="font-medium">Saving</span>
                  <span className="text-pink-500 font-bold">-£{saving}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="font-medium">Sharing</span>
                  <span className="text-teal-500 font-bold">-£{sharing}</span>
                </div>
                <hr className="my-3" />
                <div className={`flex justify-between items-center p-3 rounded-lg font-bold text-lg ${
                  isBalanced ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  <span>Remaining</span>
                  <span>{remaining >= 0 ? '+' : ''}£{remaining}</span>
                </div>
              </div>

              {/* Advice Box */}
              <div className={`p-4 rounded-lg border-2 ${
                advice.type === 'warning' ? 'bg-red-50 border-red-200' :
                advice.type === 'tip' ? 'bg-yellow-50 border-yellow-200' :
                'bg-green-50 border-green-200'
              }`}>
                <div className="flex items-start space-x-3">
                  <advice.icon className={`h-6 w-6 ${advice.color} mt-0.5`} />
                  <p className={`text-sm ${advice.color} font-medium leading-relaxed`}>
                    {advice.message}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Savings Goal Tracker */}
          <Card className="bg-gradient-to-br from-pink-50 to-blue-50 border-pink-200 rounded-xl">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 font-display flex items-center">
                <Target className="mr-3 h-6 w-6 text-pink-500" />
                🎯 Savings Goal Tracker
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="goal">What do you want to save for?</Label>
                <Input
                  id="goal"
                  value={customGoal}
                  onChange={(e) => setCustomGoal(e.target.value)}
                  placeholder="e.g., New bike, video game, trip..."
                  className="border-pink-200 focus:border-pink-400 focus:ring-pink-200"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="amount">How much does it cost?</Label>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold">£</span>
                  <Input
                    id="amount"
                    type="number"
                    value={goalAmount}
                    onChange={(e) => setGoalAmount(Number(e.target.value))}
                    min="1"
                    className="border-pink-200 focus:border-pink-400 focus:ring-pink-200"
                  />
                </div>
              </div>

              {saving > 0 && goalAmount > 0 && (
                <div className="bg-white p-4 rounded-lg space-y-3 shadow-sm">
                  <h4 className="font-semibold text-gray-900">Your Savings Plan:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Weekly savings:</span>
                      <span className="font-bold text-pink-500">£{saving}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time to reach goal:</span>
                      <span className="font-bold text-blue-500">
                        {weeksToGoal} weeks ({monthsToGoal} {monthsToGoal === 1 ? 'month' : 'months'})
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly savings:</span>
                      <span className="font-bold text-teal-500">£{(saving * 4).toFixed(0)}</span>
                    </div>
                  </div>
                  
                  {customGoal && (
                    <div className="mt-4 p-3 bg-gradient-to-r from-pink-100 to-blue-100 rounded-lg border border-pink-200">
                      <p className="text-center font-medium text-gray-900">
                        🎉 You can buy your <strong>{customGoal}</strong> in just {monthsToGoal} {monthsToGoal === 1 ? 'month' : 'months'}!
                      </p>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Fun Tips Section */}
        <Card className="mt-8 bg-gradient-to-r from-blue-50 to-teal-50 border-blue-200 rounded-xl">
          <CardContent className="pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center font-display">
              💡 Smart Money Tips for Kids
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-pink-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <PiggyBank className="h-8 w-8 text-pink-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Save First</h3>
                <p className="text-sm text-gray-600">Always save some money before spending on wants. Future you will thank you!</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Set Goals</h3>
                <p className="text-sm text-gray-600">Having a savings goal makes it easier and more fun to save money!</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Gift className="h-8 w-8 text-teal-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Share & Care</h3>
                <p className="text-sm text-gray-600">Sharing with others feels great and helps make the world better!</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Tools;

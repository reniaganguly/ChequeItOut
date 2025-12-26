import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Cookie, Info, Settings, Shield, Mail } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Cookie className="h-16 w-16 text-teal-500 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
            Cookie Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: December 9, 2025
          </p>
        </div>

        <Card className="mb-8 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-display flex items-center">
              <Info className="mr-3 h-6 w-6 text-blue-500" />
              What Are Cookies?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600">
            <p>
              Cookies are small text files that are placed on your device when you visit a website. They help the website remember information about your visit, making it easier to use and more useful to you.
            </p>
            <p>
              ChequeItOut uses cookies to improve your browsing experience and understand how visitors use our educational platform.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-display">
              Types of Cookies We Use
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-600">
            <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
              <h3 className="font-semibold text-pink-900 mb-2">1. Essential Cookies</h3>
              <p className="text-gray-700">
                These cookies are necessary for the Website to function properly. They enable basic functions like page navigation and access to secure areas. The Website cannot function properly without these cookies.
              </p>
              <p className="text-sm text-gray-600 mt-2"><strong>Examples:</strong> Session management, security</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">2. Analytics Cookies</h3>
              <p className="text-gray-700">
                These cookies help us understand how visitors interact with our Website by collecting and reporting information anonymously. This helps us improve our content and user experience.
              </p>
              <p className="text-sm text-gray-600 mt-2"><strong>Examples:</strong> Google Analytics, page views, bounce rates</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">3. Functional Cookies</h3>
              <p className="text-gray-700">
                These cookies enable enhanced functionality and personalization, such as remembering your preferences and choices.
              </p>
              <p className="text-sm text-gray-600 mt-2"><strong>Examples:</strong> Language preferences, recently viewed pages</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">4. Performance Cookies</h3>
              <p className="text-gray-700">
                These cookies collect information about how you use our Website, such as which pages you visit most often. This data helps us optimize performance.
              </p>
              <p className="text-sm text-gray-600 mt-2"><strong>Examples:</strong> Load times, error messages</p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-display flex items-center">
              <Settings className="mr-3 h-6 w-6 text-teal-500" />
              Managing Your Cookie Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600">
            <p>
              You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer.
            </p>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How to Manage Cookies in Your Browser:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data
                </li>
                <li>
                  <strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data
                </li>
                <li>
                  <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
                </li>
                <li>
                  <strong>Edge:</strong> Settings → Cookies and site permissions
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-4">
              <p className="text-yellow-900">
                <strong>Note:</strong> Disabling cookies may affect the functionality of our Website and prevent you from accessing certain features.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-display flex items-center">
              <Shield className="mr-3 h-6 w-6 text-green-500" />
              Third-Party Cookies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600">
            <p>
              In addition to our own cookies, we may use third-party cookies from trusted partners to help us analyze website traffic and improve user experience.
            </p>
            <p>
              These third parties have their own privacy policies, and we have no control over their cookies. We recommend reviewing their policies:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Google Analytics - <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">Privacy Policy</a></li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-display">
              Children's Privacy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600">
            <p>
              We take children's privacy seriously. We do not knowingly collect personal information from children under 13 through cookies without parental consent. If you are a parent and believe we have collected information from your child, please contact us.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-display">
              Updates to This Cookie Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600">
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. We will notify you of any significant changes by updating the "Last updated" date.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-teal-50 to-blue-50 border-teal-200 rounded-xl">
          <CardContent className="pt-6">
            <div className="text-center">
              <Mail className="h-12 w-12 text-teal-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">
                Questions About Cookies?
              </h3>
              <p className="text-gray-600 mb-4">
                If you have any questions about our use of cookies, please feel free to contact us.
              </p>
              <div className="space-y-2">
                <p className="text-gray-900 font-semibold">Email: chequeitout.contact@gmail.com</p>
                <p className="text-gray-600">Location: London, United Kingdom</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CookiePolicy;

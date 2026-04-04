import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Shield, Eye, Lock, Database, UserCheck, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-pink-500 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: December 9, 2025
          </p>
        </div>

        <Card className="mb-8 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-display flex items-center">
              <Eye className="mr-3 h-6 w-6 text-pink-500" />
              Our Commitment to Privacy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600">
            <p>
              At ChequeItOut, we are committed to protecting your privacy and ensuring the safety of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            <p>
              We believe in transparency and want you to feel confident that your data is secure when using our educational resources.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-display flex items-center">
              <Database className="mr-3 h-6 w-6 text-blue-500" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
              <p className="mb-2">When you contact us through our forms, we may collect:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Name and email address</li>
                <li>Subject and message content</li>
                <li>Any information you voluntarily provide</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Usage Information</h3>
              <p className="mb-2">We automatically collect certain information when you visit our site:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Browser type and version</li>
                <li>Pages visited and time spent</li>
                <li>Referring website addresses</li>
                <li>IP address and location data</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-display flex items-center">
              <Lock className="mr-3 h-6 w-6 text-teal-500" />
              How We Use Your Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600">
            <p>We use the collected information for:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Communication:</strong> Responding to your inquiries and providing customer support
              </li>
              <li>
                <strong>Improvement:</strong> Analyzing usage patterns to improve our website and resources
              </li>
              <li>
                <strong>Updates:</strong> Sending educational content and updates (only with your consent)
              </li>
              <li>
                <strong>Security:</strong> Protecting against fraudulent or illegal activity
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-display flex items-center">
              <UserCheck className="mr-3 h-6 w-6 text-green-500" />
              Data Protection & Your Rights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600">
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your data</li>
              <li><strong>Objection:</strong> Object to processing of your data</li>
              <li><strong>Portability:</strong> Receive your data in a portable format</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:chequeitout.contact@gmail.com" className="text-pink-500 hover:underline">
                chequeitout.contact@gmail.com
              </a>
            </p>
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
              ChequeItOut is designed for children, but we do not knowingly collect personal information from children under 13 without parental consent. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-display">
              Cookies & Tracking
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600">
            <p>
              We use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings. For more details, please see our{' '}
              <a href="/cookie-policy" className="text-pink-500 hover:underline">Cookie Policy</a>.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-display">
              Third-Party Links
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600">
            <p>
              Our website may contain links to third-party sites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-display">
              Changes to This Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated "Last updated" date.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-pink-50 to-blue-50 border-pink-200 rounded-xl">
          <CardContent className="pt-6">
            <div className="text-center">
              <Mail className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">
                Questions About Privacy?
              </h3>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy, please don't hesitate to contact us.
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

export default PrivacyPolicy;

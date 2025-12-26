import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { FileText, CheckCircle, AlertTriangle, Scale, UserX, Mail } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <FileText className="h-16 w-16 text-blue-500 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: December 9, 2025
          </p>
        </div>

        <Card className="mb-8 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-display flex items-center">
              <CheckCircle className="mr-3 h-6 w-6 text-green-500" />
              Agreement to Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600">
            <p>
              By accessing and using ChequeItOut ("the Website"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Website.
            </p>
            <p>
              These terms apply to all visitors, users, and others who access or use the service.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-display flex items-center">
              <Scale className="mr-3 h-6 w-6 text-pink-500" />
              Use of Services
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Permitted Use</h3>
              <p className="mb-2">You may use ChequeItOut for:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Accessing educational financial literacy resources</li>
                <li>Downloading free materials for personal or educational use</li>
                <li>Learning about banking and money management</li>
                <li>Contacting us with questions or feedback</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Prohibited Activities</h3>
              <p className="mb-2">You agree NOT to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Use the Website for any illegal purpose</li>
                <li>Distribute our content for commercial gain without permission</li>
                <li>Attempt to hack, disrupt, or damage the Website</li>
                <li>Impersonate ChequeItOut or its representatives</li>
                <li>Collect user information without consent</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-display">
              Intellectual Property Rights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600">
            <p>
              All content on ChequeItOut, including text, graphics, logos, images, worksheets, and software, is the property of ChequeItOut or its content suppliers and is protected by UK and international copyright laws.
            </p>
            <p>
              Our free resources are provided for personal and educational use. You may download and print materials for non-commercial purposes, but you may not modify, reproduce for sale, or distribute them without our explicit written permission.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-display">
              Educational Content Disclaimer
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600">
            <p>
              The financial literacy information provided on ChequeItOut is for educational purposes only. While we strive for accuracy, we do not provide professional financial advice.
            </p>
            <p>
              Always consult with qualified financial advisors for personalized financial guidance. We are not responsible for financial decisions made based on information from our Website.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-display flex items-center">
              <AlertTriangle className="mr-3 h-6 w-6 text-yellow-500" />
              Limitation of Liability
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600">
            <p>
              ChequeItOut and its founders, employees, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your access to or use of (or inability to access) the Website</li>
              <li>Any errors or omissions in content</li>
              <li>Unauthorized access to your personal information</li>
              <li>Any other matter related to the Website</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-display">
              Links to Third-Party Websites
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600">
            <p>
              Our Website may contain links to third-party websites for your convenience. We do not control or endorse these external sites and are not responsible for their content, privacy policies, or practices.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-display flex items-center">
              <UserX className="mr-3 h-6 w-6 text-red-500" />
              Termination
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600">
            <p>
              We reserve the right to terminate or suspend access to our Website immediately, without prior notice, for any reason, including if you breach these Terms of Service.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-display">
              Governing Law
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-display">
              Changes to Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600">
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by updating the "Last updated" date. Continued use of the Website after changes constitutes acceptance of the new Terms.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-50 to-pink-50 border-blue-200 rounded-xl">
          <CardContent className="pt-6">
            <div className="text-center">
              <Mail className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">
                Questions About These Terms?
              </h3>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us.
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

export default TermsOfService;

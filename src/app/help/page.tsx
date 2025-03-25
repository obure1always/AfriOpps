'use client';

import React from 'react';
import Link from 'next/link';
import { FaBook, FaLightbulb, FaFileAlt, FaQuestionCircle, FaEnvelope } from 'react-icons/fa';

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-xl text-gray-600">Find answers to your questions and get started with AfriOpps</p>
        </div>

        {/* Helpful Guides */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Link href="/guides/getting-started" className="group">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <FaBook className="text-primary text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Getting Started Guide</h3>
              <p className="text-gray-600 mb-4">Learn how to make the most of our platform</p>
              <span className="text-primary group-hover:text-primary-dark">Read more →</span>
            </div>
          </Link>

          <Link href="/guides/application-tips" className="group">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <FaLightbulb className="text-primary text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Application Tips</h3>
              <p className="text-gray-600 mb-4">Improve your chances of success</p>
              <span className="text-primary group-hover:text-primary-dark">Read more →</span>
            </div>
          </Link>

          <Link href="/guides/resume-writing" className="group">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <FaFileAlt className="text-primary text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Resume Writing Guide</h3>
              <p className="text-gray-600 mb-4">Create a standout resume</p>
              <span className="text-primary group-hover:text-primary-dark">Read more →</span>
            </div>
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I create an account?</h3>
              <p className="text-gray-600">Click the "Sign Up" button in the top right corner and follow the registration process. You'll need to provide your email address and create a password.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I search for opportunities?</h3>
              <p className="text-gray-600">Use the search bar on the homepage or browse through different categories. You can filter results by type (scholarships, internships, jobs), location, and other criteria.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I save opportunities?</h3>
              <p className="text-gray-600">Click the bookmark icon on any opportunity to save it. You can view all saved opportunities in your dashboard.</p>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <FaQuestionCircle className="text-primary text-3xl mr-4" />
            <h2 className="text-2xl font-bold text-gray-900">Still Need Help?</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you. Contact us with your questions or concerns.
          </p>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-primary" />
            <a href="mailto:support@afriopps.com" className="text-primary hover:text-primary-dark">
              support@afriopps.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 
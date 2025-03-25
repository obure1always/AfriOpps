'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaCheckCircle, FaUserPlus, FaSearch, FaBookmark, FaPaperPlane } from 'react-icons/fa';

export default function GettingStartedGuide() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/help" 
          className="inline-flex items-center text-primary hover:text-primary-dark mb-8"
        >
          <FaArrowLeft className="mr-2" />
          Back to Help Center
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Getting Started Guide</h1>
          <p className="text-lg text-gray-600 mb-8">
            Welcome to AfriOpps! This guide will help you make the most of our platform and find the opportunities that match your goals.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Create Your Account</h2>
              <div className="flex items-start space-x-4">
                <FaUserPlus className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 mb-4">
                    Start by creating your AfriOpps account. This will allow you to:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Save your favorite opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Track your applications</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Receive personalized recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Search for Opportunities</h2>
              <div className="flex items-start space-x-4">
                <FaSearch className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 mb-4">
                    Use our advanced search filters to find opportunities that match your:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Field of study or work</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Location preferences</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Experience level</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Save Opportunities</h2>
              <div className="flex items-start space-x-4">
                <FaBookmark className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 mb-4">
                    Build your opportunity collection by saving interesting positions:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Click the bookmark icon on any opportunity</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Access saved opportunities from your dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Organize opportunities by category</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Apply for Opportunities</h2>
              <div className="flex items-start space-x-4">
                <FaPaperPlane className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 mb-4">
                    When you're ready to apply:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Review all requirements carefully</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Prepare your application materials</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Submit your application before the deadline</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-12 p-6 bg-primary/5 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Need More Help?</h3>
            <p className="text-gray-600 mb-4">
              Check out our other guides or contact our support team for assistance.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="/guides/application-tips" 
                className="text-primary hover:text-primary-dark"
              >
                Application Tips →
              </Link>
              <Link 
                href="/guides/resume-writing" 
                className="text-primary hover:text-primary-dark"
              >
                Resume Writing Guide →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
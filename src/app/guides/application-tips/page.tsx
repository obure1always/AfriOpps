'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaCheckCircle, FaFileAlt, FaClock, FaUserEdit, FaEnvelope } from 'react-icons/fa';

export default function ApplicationTipsGuide() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Application Tips</h1>
          <p className="text-lg text-gray-600 mb-8">
            Maximize your chances of success with these proven application strategies for scholarships, internships, and jobs.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Before You Apply</h2>
              <div className="flex items-start space-x-4">
                <FaFileAlt className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 mb-4">
                    Take time to prepare your application materials:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Read the requirements thoroughly</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Gather all necessary documents</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Research the organization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Timing is Everything</h2>
              <div className="flex items-start space-x-4">
                <FaClock className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 mb-4">
                    Plan your application timeline:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Submit well before the deadline</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Allow time for document preparation</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Consider time zone differences</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Personalize Your Application</h2>
              <div className="flex items-start space-x-4">
                <FaUserEdit className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 mb-4">
                    Make your application stand out:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Tailor your cover letter to the opportunity</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Highlight relevant experience and skills</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Show enthusiasm for the organization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Follow Up</h2>
              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 mb-4">
                    After submitting your application:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Send a thank you email</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Follow up after the expected response time</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Keep track of application status</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-12 p-6 bg-primary/5 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Resources</h3>
            <p className="text-gray-600 mb-4">
              Check out our other guides for more detailed information.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="/guides/getting-started" 
                className="text-primary hover:text-primary-dark"
              >
                Getting Started Guide →
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
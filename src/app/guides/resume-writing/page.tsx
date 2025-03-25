'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaCheckCircle, FaFileWord, FaListUl, FaUserTie, FaMagic } from 'react-icons/fa';

export default function ResumeWritingGuide() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Resume Writing Guide</h1>
          <p className="text-lg text-gray-600 mb-8">
            Create a professional resume that highlights your skills and experience effectively.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Basic Structure</h2>
              <div className="flex items-start space-x-4">
                <FaFileWord className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 mb-4">
                    Your resume should include these essential sections:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Contact information</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Professional summary</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Work experience</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Education</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Skills</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Content Tips</h2>
              <div className="flex items-start space-x-4">
                <FaListUl className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 mb-4">
                    Make your content impactful:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Use action verbs to describe achievements</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Quantify results where possible</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Focus on relevant experience</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Keep descriptions concise and clear</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Formatting</h2>
              <div className="flex items-start space-x-4">
                <FaUserTie className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 mb-4">
                    Present your information professionally:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Use a clean, professional font</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Maintain consistent formatting</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Keep it to 1-2 pages</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Use bullet points for readability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Final Touches</h2>
              <div className="flex items-start space-x-4">
                <FaMagic className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 mb-4">
                    Before submitting:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Proofread for errors</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Save in PDF format</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Customize for each application</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-12 p-6 bg-primary/5 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Resources</h3>
            <p className="text-gray-600 mb-4">
              Learn more about the application process with our other guides.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="/guides/getting-started" 
                className="text-primary hover:text-primary-dark"
              >
                Getting Started Guide →
              </Link>
              <Link 
                href="/guides/application-tips" 
                className="text-primary hover:text-primary-dark"
              >
                Application Tips →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
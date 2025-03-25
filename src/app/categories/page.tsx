'use client';

import Link from 'next/link';
import { FaBriefcase, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

const categories = [
  {
    id: 'jobs',
    title: 'Jobs',
    description: 'Find full-time and part-time job opportunities across Africa',
    icon: FaBriefcase,
    count: 150,
    color: 'bg-blue-500',
  },
  {
    id: 'internships',
    title: 'Internships',
    description: 'Discover internship opportunities to kickstart your career',
    icon: FaLaptopCode,
    count: 75,
    color: 'bg-green-500',
  },
  {
    id: 'scholarships',
    title: 'Scholarships',
    description: 'Access educational funding and scholarship opportunities',
    icon: FaGraduationCap,
    count: 90,
    color: 'bg-purple-500',
  },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Opportunity Categories
          </h1>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Explore opportunities across different categories tailored for African talent
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className="relative group"
              >
                <div className="relative rounded-lg overflow-hidden transition-transform duration-200 transform hover:scale-105">
                  <div className={`absolute inset-0 ${category.color} opacity-75`} />
                  <div className="relative p-8">
                    <div className="flex items-center justify-between">
                      <category.icon className="h-8 w-8 text-white" />
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-gray-800">
                        {category.count} listings
                      </span>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-white">{category.title}</h3>
                    <p className="mt-2 text-sm text-white">{category.description}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Platform?</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <div className="h-12 w-12 mx-auto text-blue-500">
                  <svg className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Verified Opportunities</h3>
                <p className="mt-2 text-sm text-gray-500">All opportunities are verified and vetted for authenticity and quality.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <div className="h-12 w-12 mx-auto text-green-500">
                  <svg className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Fast Updates</h3>
                <p className="mt-2 text-sm text-gray-500">Get real-time updates about new opportunities matching your interests.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <div className="h-12 w-12 mx-auto text-purple-500">
                  <svg className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Comprehensive Resources</h3>
                <p className="mt-2 text-sm text-gray-500">Access guides, tips, and resources to help you succeed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
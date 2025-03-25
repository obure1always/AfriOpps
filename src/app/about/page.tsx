'use client';

import Image from 'next/image';
import { FaLightbulb, FaUsers, FaHandshake, FaGlobeAfrica, FaGraduationCap, FaBriefcase, FaGlobe } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-primary py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <Image
            src="/images/africa-map.jpg"
            alt="Africa Map"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            About AfriOpps
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-100">
            Empowering African talent to connect with opportunities across the continent
          </p>
        </div>
      </div>

      {/* Problem Statement Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <p className="text-lg text-gray-600 mb-6">
                Africa's youth face significant barriers in accessing quality opportunities across education, work experience, and employment. The continent's talent pool is vast, but the path to success is often unclear and fragmented.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaGraduationCap className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Limited access to quality education and scholarship opportunities for talented students</span>
                </li>
                <li className="flex items-start">
                  <FaBriefcase className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Scattered information about internships and job opportunities across different platforms</span>
                </li>
                <li className="flex items-start">
                  <FaGlobe className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Difficulty in finding pan-African opportunities that match skills and aspirations</span>
                </li>
                <li className="flex items-start">
                  <FaUsers className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Lack of a centralized platform connecting African talent with opportunities</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/problem-statement.jpg"
                alt="African youth seeking opportunities"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                  <Image
                    src="/images/mission.jpg"
                    alt="Our Mission"
                    width={600}
                    height={400}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 order-1 lg:order-2">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Mission
              </h2>
              <div className="mt-6 text-lg text-gray-500 space-y-4">
                <p>
                  At AfriOpps, we're on a mission to transform how African talent discovers and accesses opportunities across the continent. We believe in creating a unified platform that bridges the gap between talent and all forms of opportunities - from education to employment.
                </p>
                <p>
                  Our platform aims to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Centralize access to scholarships, internships, and job opportunities</li>
                  <li>Connect African talent with relevant opportunities across the continent</li>
                  <li>Support educational advancement through scholarship discovery</li>
                  <li>Facilitate career growth through internships and employment</li>
                  <li>Foster pan-African collaboration and economic development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              The passionate individuals behind AfriOpps
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* John Obure */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/team/john-obure.jpg"
                  alt="John Obure"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">John Obure</h3>
                <p className="text-primary font-semibold">CEO & Founder</p>
                <p className="mt-2 text-gray-500">
                  Visionary leader with a passion for connecting African talent with opportunities.
                </p>
              </div>
            </div>

            {/* Uwimana Chantal */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/team/uwimana-chantal.jpg"
                  alt="Uwimana Chantal"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Uwimana Chantal</h3>
                <p className="text-primary font-semibold">Managing Director</p>
                <p className="mt-2 text-gray-500">
                  Strategic leader driving operational excellence and growth.
                </p>
              </div>
            </div>

            {/* Fidele Nyandwi */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/team/fidele-nyandwi.jpg"
                  alt="Fidele Nyandwi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Fidele Nyandwi</h3>
                <p className="text-primary font-semibold">Head of Operations</p>
                <p className="mt-2 text-gray-500">
                  Operations expert ensuring smooth platform functionality and user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              The principles that guide everything we do
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex justify-center">
                <FaLightbulb className="h-12 w-12 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Innovation</h3>
              <p className="mt-2 text-gray-500">
                Constantly improving and innovating to better serve our community
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <FaUsers className="h-12 w-12 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Community</h3>
              <p className="mt-2 text-gray-500">
                Building a supportive community for African talent
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <FaHandshake className="h-12 w-12 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Trust</h3>
              <p className="mt-2 text-gray-500">
                Maintaining transparency and trust in all our operations
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <FaGlobeAfrica className="h-12 w-12 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Pan-African</h3>
              <p className="mt-2 text-gray-500">
                Embracing the diversity and unity of the African continent
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
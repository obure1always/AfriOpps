'use client';

import Link from 'next/link';
import { FaBriefcase, FaGraduationCap, FaLaptopCode, FaSearch, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const featuredOpportunities = {
  jobs: [
    {
      id: 'job1',
      title: 'Senior Software Engineer',
      company: 'Tech Africa',
      location: 'Remote',
      type: 'Full-time',
      salary: '$60,000 - $80,000',
      deadline: '2024-04-30',
      link: 'https://www.linkedin.com/jobs/',
    },
    {
      id: 'job2',
      title: 'Product Manager',
      company: 'African Fintech',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      salary: '$50,000 - $70,000',
      deadline: '2024-04-25',
      link: 'https://www.indeed.com/',
    },
  ],
  internships: [
    {
      id: 'intern1',
      title: 'Software Development Intern',
      company: 'Google Africa',
      location: 'Nairobi, Kenya',
      duration: '6 months',
      stipend: '$2,000/month',
      deadline: '2024-05-15',
      link: 'https://careers.google.com/jobs/results/',
    },
    {
      id: 'intern2',
      title: 'Data Science Intern',
      company: 'Microsoft Africa',
      location: 'Remote',
      duration: '3 months',
      stipend: '$1,800/month',
      deadline: '2024-05-01',
      link: 'https://careers.microsoft.com/',
    },
  ],
  scholarships: [
    {
      id: 'scholar1',
      title: 'ALX Software Engineering Program',
      organization: 'ALX Africa',
      coverage: 'Full Tuition',
      location: 'Online',
      deadline: '2024-06-30',
      link: 'https://www.alxafrica.com/',
    },
    {
      id: 'scholar2',
      title: 'Mastercard Foundation Scholars Program',
      organization: 'Various Universities',
      coverage: 'Full Scholarship',
      location: 'Multiple Countries',
      deadline: '2024-05-31',
      link: 'https://mastercardfdn.org/all/scholars/',
    },
  ],
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-primary">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="African professionals"
          />
          <div className="absolute inset-0 bg-primary mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find Your Next Opportunity in Africa
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-100">
            Discover jobs, internships, and scholarships tailored for African talent. Your future starts here.
          </p>
          <div className="mt-10">
            <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg">
              <div className="flex items-center p-4">
                <FaSearch className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search opportunities..."
                  className="ml-4 flex-1 border-none focus:ring-0 text-gray-800 placeholder-gray-400"
                />
                <button className="ml-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Explore Opportunities
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Find opportunities that match your interests and career goals
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/categories/jobs"
              className="relative group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="px-4 py-5 sm:p-6">
                <FaBriefcase className="h-8 w-8 text-primary" />
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">Jobs</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Find full-time and part-time job opportunities across Africa
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/categories/internships"
              className="relative group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="px-4 py-5 sm:p-6">
                <FaLaptopCode className="h-8 w-8 text-green-500" />
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">Internships</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Gain valuable experience through internship programs
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/categories/scholarships"
              className="relative group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="px-4 py-5 sm:p-6">
                <FaGraduationCap className="h-8 w-8 text-purple-500" />
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">Scholarships</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Access educational funding and scholarship opportunities
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Opportunities Section */}
      <div className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Featured Opportunities
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Latest opportunities from top organizations
            </p>
          </div>

          <div className="mt-12 space-y-12">
            {/* Featured Jobs */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Featured Jobs</h3>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featuredOpportunities.jobs.map((job) => (
                  <div key={job.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                      <h4 className="text-lg font-medium text-gray-900">{job.title}</h4>
                      <p className="mt-2 text-sm text-gray-500">{job.company}</p>
                      <div className="mt-4 flex items-center text-sm text-gray-500">
                        <FaMapMarkerAlt className="flex-shrink-0 mr-1.5 h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <FaClock className="flex-shrink-0 mr-1.5 h-4 w-4" />
                        Deadline: {new Date(job.deadline).toLocaleDateString()}
                      </div>
                      <div className="mt-4">
                        <a
                          href={job.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90"
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Internships */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Featured Internships</h3>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featuredOpportunities.internships.map((internship) => (
                  <div key={internship.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                      <h4 className="text-lg font-medium text-gray-900">{internship.title}</h4>
                      <p className="mt-2 text-sm text-gray-500">{internship.company}</p>
                      <div className="mt-4 flex items-center text-sm text-gray-500">
                        <FaMapMarkerAlt className="flex-shrink-0 mr-1.5 h-4 w-4" />
                        {internship.location}
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <FaClock className="flex-shrink-0 mr-1.5 h-4 w-4" />
                        Duration: {internship.duration}
                      </div>
                      <div className="mt-4">
                        <a
                          href={internship.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600"
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Scholarships */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Featured Scholarships</h3>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featuredOpportunities.scholarships.map((scholarship) => (
                  <div key={scholarship.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                      <h4 className="text-lg font-medium text-gray-900">{scholarship.title}</h4>
                      <p className="mt-2 text-sm text-gray-500">{scholarship.organization}</p>
                      <div className="mt-4 flex items-center text-sm text-gray-500">
                        <FaMapMarkerAlt className="flex-shrink-0 mr-1.5 h-4 w-4" />
                        {scholarship.location}
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <FaClock className="flex-shrink-0 mr-1.5 h-4 w-4" />
                        Deadline: {new Date(scholarship.deadline).toLocaleDateString()}
                      </div>
                      <div className="mt-4">
                        <a
                          href={scholarship.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-500 hover:bg-purple-600"
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to find your next opportunity?</span>
            <span className="block text-gray-100">Create an account today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
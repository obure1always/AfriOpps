'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBookmark, FaExternalLinkAlt, FaTrash } from 'react-icons/fa';

// Mock saved opportunities data
const mockSavedOpportunities = [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'Tech Africa',
    location: 'Remote',
    type: 'Full-time',
    category: 'jobs',
    deadline: '2024-05-01',
    savedAt: '2024-03-15',
    link: 'https://example.com/job1',
  },
  {
    id: '2',
    title: 'Data Science Internship',
    company: 'Data Insights Africa',
    location: 'Nairobi, Kenya',
    type: 'Internship',
    category: 'internships',
    deadline: '2024-04-15',
    savedAt: '2024-03-14',
    link: 'https://example.com/internship1',
  },
  {
    id: '3',
    title: 'Masters Scholarship in Technology',
    company: 'African Tech University',
    location: 'South Africa',
    type: 'Scholarship',
    category: 'scholarships',
    deadline: '2024-06-30',
    savedAt: '2024-03-13',
    link: 'https://example.com/scholarship1',
  },
];

export default function SavedPage() {
  const [savedOpportunities, setSavedOpportunities] = useState(mockSavedOpportunities);
  const [filter, setFilter] = useState('all');

  const handleRemove = (id: string) => {
    setSavedOpportunities(prev => prev.filter(opp => opp.id !== id));
  };

  const filteredOpportunities = filter === 'all'
    ? savedOpportunities
    : savedOpportunities.filter(opp => opp.category === filter);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Saved Opportunities
          </h1>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Manage your saved opportunities and track application deadlines
          </p>
        </div>

        <div className="mt-12">
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full ${
                filter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('jobs')}
              className={`px-4 py-2 rounded-full ${
                filter === 'jobs'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              Jobs
            </button>
            <button
              onClick={() => setFilter('internships')}
              className={`px-4 py-2 rounded-full ${
                filter === 'internships'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              Internships
            </button>
            <button
              onClick={() => setFilter('scholarships')}
              className={`px-4 py-2 rounded-full ${
                filter === 'scholarships'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              Scholarships
            </button>
          </div>

          {filteredOpportunities.length === 0 ? (
            <div className="text-center py-12">
              <FaBookmark className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No saved opportunities</h3>
              <p className="mt-1 text-sm text-gray-500">
                Start saving opportunities you're interested in.
              </p>
              <div className="mt-6">
                <Link
                  href="/opportunities"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Browse Opportunities
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul role="list" className="divide-y divide-gray-200">
                {filteredOpportunities.map((opportunity) => (
                  <li key={opportunity.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-medium text-gray-900 truncate">
                            {opportunity.title}
                          </h3>
                          <p className="mt-1 flex items-center text-sm text-gray-500">
                            {opportunity.company} • {opportunity.location}
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <a
                            href={opportunity.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-primary bg-primary/10 hover:bg-primary/20"
                          >
                            View <FaExternalLinkAlt className="ml-2 h-4 w-4" />
                          </a>
                          <button
                            onClick={() => handleRemove(opportunity.id)}
                            className="inline-flex items-center p-1 border border-transparent text-sm font-medium rounded-full text-red-600 hover:bg-red-50"
                          >
                            <FaTrash className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            Type: {opportunity.type}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <p>
                            Deadline: {new Date(opportunity.deadline).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
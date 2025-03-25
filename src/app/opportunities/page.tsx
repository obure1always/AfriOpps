'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Opportunity, SearchFilters } from '@/types';
import SearchBar from '@/components/SearchBar';
import OpportunityCard from '@/components/OpportunityCard';
import { Suspense } from 'react';

// Mock data - replace with actual API calls
const mockOpportunities: Opportunity[] = [
  {
    id: '1',
    title: 'Full Stack Developer Internship',
    description: 'Join our team as a Full Stack Developer Intern and work on exciting projects.',
    deadline: new Date('2024-12-31'),
    createdAt: new Date('2024-03-01'),
    createdBy: 'admin1',
    tags: ['internship', 'full-stack', 'react', 'node.js'],
    eligibility: ['undergraduate', 'graduate'],
    type: 'internship',
    status: 'active',
    requirements: ['React', 'Node.js', 'TypeScript'],
    benefits: ['Competitive stipend', 'Mentorship', 'Career growth'],
    location: 'Remote',
    organization: 'Tech Corp',
    link: 'https://techcorp.com/careers/internship-2024'
  },
  {
    id: '2',
    title: 'Software Engineering Scholarship',
    description: 'Full scholarship for African students pursuing software engineering.',
    deadline: new Date('2024-12-31'),
    createdAt: new Date('2024-03-01'),
    createdBy: 'admin1',
    tags: ['scholarship', 'software-engineering', 'education'],
    eligibility: ['undergraduate'],
    type: 'scholarship',
    status: 'active',
    requirements: ['High school diploma', 'Strong academic record'],
    benefits: ['Full tuition coverage', 'Monthly stipend', 'Mentorship program'],
    location: 'Kenya',
    organization: 'Tech Education Foundation',
    link: 'https://techedufoundation.org/scholarships/2024'
  },
  {
    id: '3',
    title: 'Senior Frontend Developer',
    description: 'Join our team as a Senior Frontend Developer and lead our frontend development efforts.',
    deadline: new Date('2024-12-31'),
    createdAt: new Date('2024-03-01'),
    createdBy: 'admin1',
    tags: ['job', 'frontend', 'senior', 'react'],
    eligibility: ['graduate'],
    type: 'job',
    status: 'active',
    requirements: ['5+ years experience', 'React', 'TypeScript'],
    benefits: ['Competitive salary', 'Health insurance', 'Remote work'],
    location: 'Nigeria',
    organization: 'Digital Solutions Inc',
    link: 'https://digitalsolutions.com/careers/senior-frontend'
  }
];

function OpportunitiesContent() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedType, setSelectedType] = useState<Opportunity['type'] | undefined>(
    (searchParams.get('type') as Opportunity['type']) || undefined
  );
  const [selectedLocation, setSelectedLocation] = useState<string | undefined>(
    searchParams.get('location') || undefined
  );
  const [savedOpportunities, setSavedOpportunities] = useState<string[]>([]);

  // Extract unique values for filters
  const locations = useMemo(() => {
    return Array.from(new Set(mockOpportunities.map(opp => opp.location)));
  }, []);

  const eligibilityOptions = useMemo(() => {
    return Array.from(new Set(mockOpportunities.flatMap(opp => opp.eligibility)));
  }, []);

  // Filter opportunities based on search and filters
  const filteredOpportunities = useMemo(() => {
    return mockOpportunities.filter(opportunity => {
      const matchesSearch = opportunity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opportunity.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = !selectedType || opportunity.type === selectedType;
      const matchesLocation = !selectedLocation || opportunity.location === selectedLocation;
      return matchesSearch && matchesType && matchesLocation;
    });
  }, [searchQuery, selectedType, selectedLocation]);

  const handleSearch = (filters: SearchFilters) => {
    setSearchQuery(filters.query);
    setSelectedType(filters.type);
    setSelectedLocation(filters.location);
  };

  const handleSaveOpportunity = (id: string) => {
    setSavedOpportunities(prev =>
      prev.includes(id) ? prev.filter(oppId => oppId !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Find Your Opportunity</h1>
          <p className="mt-4 text-lg text-gray-500">
            Discover jobs, internships, and scholarships across Africa
          </p>
        </div>

        <div className="mt-8">
          <SearchBar
            onSearch={handleSearch}
            opportunityTypes={['scholarship', 'internship', 'job']}
            locations={locations}
            eligibilityOptions={eligibilityOptions}
          />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {filteredOpportunities.map(opportunity => (
            <OpportunityCard
              key={opportunity.id}
              opportunity={opportunity}
              onSave={handleSaveOpportunity}
              isSaved={savedOpportunities.includes(opportunity.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function OpportunitiesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OpportunitiesContent />
    </Suspense>
  );
} 
'use client';

import { useState } from 'react';
import { SearchFilters, Opportunity } from '@/types';

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
  opportunityTypes: Opportunity['type'][];
  locations: string[];
  eligibilityOptions: string[];
}

export default function SearchBar({
  onSearch,
  opportunityTypes,
  locations,
  eligibilityOptions,
}: SearchBarProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    type: undefined,
    location: undefined,
    eligibility: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col space-y-4">
        {/* Main Search Input */}
        <div className="relative">
          <input
            type="text"
            value={filters.query}
            onChange={(e) => setFilters({ ...filters, query: e.target.value })}
            placeholder="Search opportunities..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-md hover:bg-primary/90"
          >
            Search
          </button>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Opportunity Type */}
          <select
            value={filters.type || ''}
            onChange={(e) =>
              setFilters({
                ...filters,
                type: e.target.value as Opportunity['type'] | undefined,
              })
            }
            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">All Types</option>
            {opportunityTypes.map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>

          {/* Location */}
          <select
            value={filters.location || ''}
            onChange={(e) =>
              setFilters({ ...filters, location: e.target.value || undefined })
            }
            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>

          {/* Eligibility */}
          <select
            value={filters.eligibility[0] || ''}
            onChange={(e) =>
              setFilters({
                ...filters,
                eligibility: e.target.value ? [e.target.value] : [],
              })
            }
            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">All Eligibility</option>
            {eligibilityOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </form>
  );
} 
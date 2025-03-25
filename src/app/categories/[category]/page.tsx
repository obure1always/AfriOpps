'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import OpportunityCard from '@/components/OpportunityCard';
import { FaFilter } from 'react-icons/fa';
import { Opportunity } from '@/types';

// Sample opportunities data
const opportunitiesData: Record<string, Opportunity[]> = {
  jobs: [
    {
      id: 'job1',
      title: 'Senior Software Engineer',
      description: 'Join our team as a Senior Software Engineer and help build the future of African tech.',
      deadline: new Date('2024-04-30'),
      createdAt: new Date('2024-03-01'),
      createdBy: 'admin1',
      tags: ['job', 'software-engineering', 'senior'],
      eligibility: ['graduate'],
      type: 'job',
      status: 'active',
      requirements: ['5+ years experience', 'React & Node.js', 'System Design'],
      benefits: ['Competitive salary', 'Remote work', 'Health insurance'],
      location: 'Remote',
      organization: 'Tech Africa',
      link: 'https://www.linkedin.com/jobs/',
    },
    {
      id: 'job2',
      title: 'Product Manager',
      description: 'Lead product development for our fintech solutions.',
      deadline: new Date('2024-04-25'),
      createdAt: new Date('2024-03-01'),
      createdBy: 'admin1',
      tags: ['job', 'product-management', 'fintech'],
      eligibility: ['graduate'],
      type: 'job',
      status: 'active',
      requirements: ['3+ years in Product Management', 'Fintech experience', 'MBA preferred'],
      benefits: ['Stock options', 'Leadership role', 'International travel'],
      location: 'Lagos, Nigeria',
      organization: 'African Fintech',
      link: 'https://www.indeed.com/',
    },
    {
      id: 'job3',
      title: 'UX Designer',
      description: 'Create beautiful and intuitive user experiences for African users.',
      deadline: new Date('2024-05-15'),
      createdAt: new Date('2024-03-01'),
      createdBy: 'admin1',
      tags: ['job', 'ux-design', 'design'],
      eligibility: ['graduate'],
      type: 'job',
      status: 'active',
      requirements: ['3+ years UX design', 'Portfolio required', 'Figma expertise'],
      benefits: ['Creative environment', 'Training budget', 'Flexible hours'],
      location: 'Cape Town, South Africa',
      organization: 'Design Africa',
      link: 'https://www.behance.net/jobs',
    },
    {
      id: 'job4',
      title: 'Data Scientist',
      description: 'Work on big data projects that impact millions of users.',
      deadline: new Date('2024-05-10'),
      createdAt: new Date('2024-03-01'),
      createdBy: 'admin1',
      tags: ['job', 'data-science', 'machine-learning'],
      eligibility: ['graduate'],
      type: 'job',
      status: 'active',
      requirements: ['ML expertise', 'Python & R', 'PhD preferred'],
      benefits: ['Research opportunities', 'Conference budget', 'Remote work'],
      location: 'Nairobi, Kenya',
      organization: 'Analytics Africa',
      link: 'https://www.kaggle.com/jobs',
    },
    {
      id: 'job5',
      title: 'DevOps Engineer',
      description: 'Build and maintain our cloud infrastructure.',
      deadline: new Date('2024-05-20'),
      createdAt: new Date('2024-03-01'),
      createdBy: 'admin1',
      tags: ['job', 'devops', 'cloud'],
      eligibility: ['graduate'],
      type: 'job',
      status: 'active',
      requirements: ['AWS certification', 'Kubernetes', 'CI/CD expertise'],
      benefits: ['Remote first', 'Learning allowance', 'Latest tech stack'],
      location: 'Remote',
      organization: 'Cloud Africa',
      link: 'https://www.stackoverflow.com/jobs',
    },
    {
      id: 'job6',
      title: 'Marketing Manager',
      description: 'Lead our marketing efforts across Africa.',
      deadline: new Date('2024-05-05'),
      createdAt: new Date('2024-03-01'),
      createdBy: 'admin1',
      tags: ['job', 'marketing', 'management'],
      eligibility: ['graduate'],
      type: 'job',
      status: 'active',
      requirements: ['5+ years marketing', 'Digital marketing', 'Team management'],
      benefits: ['Performance bonus', 'Team events', 'Career growth'],
      location: 'Accra, Ghana',
      organization: 'Growth Africa',
      link: 'https://www.linkedin.com/jobs/',
    },
    {
      id: 'job7',
      title: 'Sales Director',
      description: 'Drive enterprise sales across the continent.',
      deadline: new Date('2024-05-25'),
      createdAt: new Date('2024-03-01'),
      createdBy: 'admin1',
      tags: ['job', 'sales', 'management'],
      eligibility: ['graduate'],
      type: 'job',
      status: 'active',
      requirements: ['7+ years enterprise sales', 'Network', 'Leadership'],
      benefits: ['High commission', 'Car allowance', 'Health insurance'],
      location: 'Multiple Locations',
      organization: 'Enterprise Africa',
      link: 'https://www.glassdoor.com/jobs',
    },
    {
      id: 'job8',
      title: 'HR Manager',
      description: 'Lead HR initiatives for our growing team.',
      deadline: new Date('2024-05-15'),
      createdAt: new Date('2024-03-01'),
      createdBy: 'admin1',
      tags: ['job', 'hr', 'management'],
      eligibility: ['graduate'],
      type: 'job',
      status: 'active',
      requirements: ['HR certification', 'Employment law', 'Culture building'],
      benefits: ['Work-life balance', 'Professional development', 'Healthcare'],
      location: 'Johannesburg, South Africa',
      organization: 'People Africa',
      link: 'https://www.linkedin.com/jobs/',
    },
  ],
  internships: [
    {
      id: 'internship1',
      title: 'Software Development Intern',
      description: 'Gain hands-on experience in software development.',
      deadline: new Date('2024-05-15'),
      createdAt: new Date('2024-03-01'),
      createdBy: 'admin1',
      tags: ['internship', 'software-development'],
      eligibility: ['undergraduate'],
      type: 'internship',
      status: 'active',
      requirements: ['Basic programming knowledge', 'Eager to learn'],
      benefits: ['Stipend', 'Mentorship', 'Career growth'],
      location: 'Remote',
      organization: 'Tech Africa',
      link: 'https://www.linkedin.com/jobs/',
    },
    {
      id: 'intern2',
      title: 'Data Science Intern',
      description: 'Work on AI/ML projects at Microsoft.',
      deadline: new Date('2024-05-01'),
      createdAt: new Date('2024-03-01'),
      createdBy: 'admin1',
      tags: ['internship', 'data-science', 'machine-learning'],
      eligibility: ['undergraduate'],
      type: 'internship',
      status: 'active',
      requirements: ['ML knowledge', 'Python', 'Statistics'],
      benefits: ['Paid internship', 'Equipment provided', 'Learning opportunities'],
      location: 'Remote',
      organization: 'Microsoft Africa',
      link: 'https://careers.microsoft.com/',
    },
    {
      id: 'intern3',
      title: 'Product Design Intern',
      description: 'Design products for African users at Meta.',
      deadline: new Date('2024-05-20'),
      createdAt: new Date('2024-03-01'),
      createdBy: 'admin1',
      tags: ['internship', 'design', 'product'],
      eligibility: ['undergraduate'],
      type: 'internship',
      status: 'active',
      requirements: ['Design portfolio', 'UI/UX skills', 'Creative thinking'],
      benefits: ['Housing stipend', 'Networking', 'Project ownership'],
      location: 'Lagos, Nigeria',
      organization: 'Meta Africa',
      link: 'https://www.metacareers.com/',
    },
    {
      id: 'intern4',
      title: 'Marketing Intern',
      description: "Help grow Twitter's presence in Africa",
      deadline: new Date('2024-05-10'),
      createdAt: new Date('2024-03-01'),
      createdBy: 'admin1',
      tags: ['internship', 'marketing', 'social-media'],
      eligibility: ['undergraduate'],
      type: 'internship',
      status: 'active',
      requirements: ['Marketing major', 'Social media', 'Analytics'],
      benefits: ['Flexible schedule', 'Real projects', 'Career coaching'],
      location: 'Remote',
      organization: 'Twitter Africa',
      link: 'https://careers.twitter.com/',
    },
    {
      id: 'intern5',
      title: 'Business Development Intern',
      description: 'Drive business growth for Amazon in Africa.',
      deadline: new Date('2024-06-01'),
      createdAt: new Date('2024-03-01'),
      createdBy: 'admin1',
      tags: ['internship', 'business', 'development'],
      eligibility: ['undergraduate'],
      type: 'internship',
      status: 'active',
      requirements: ['Business major', 'Excel skills', 'Strategic thinking'],
      benefits: ['Performance bonus', 'Training', 'Network building'],
      location: 'Cape Town, South Africa',
      organization: 'Amazon Africa',
      link: 'https://www.amazon.jobs/',
    },
    {
      id: 'intern6',
      title: 'Research Intern',
      description: "Conduct research at IBM's Africa lab",
      deadline: new Date('2024-05-25'),
      createdAt: new Date('2024-03-01'),
      createdBy: 'admin1',
      tags: ['internship', 'research', 'technology'],
      eligibility: ['graduate'],
      type: 'internship',
      status: 'active',
      requirements: ['PhD candidate', 'Research experience', 'Publications'],
      benefits: ['Research funding', 'Lab access', 'Publication support'],
      location: 'Nairobi, Kenya',
      organization: 'IBM Research Africa',
      link: 'https://www.ibm.com/employment/',
    },
    {
      id: 'intern7',
      title: 'Finance Intern',
      description: 'Learn investment banking at Goldman Sachs.',
      deadline: new Date('2024-05-15'),
      createdAt: new Date('2024-03-01'),
      createdBy: 'admin1',
      tags: ['internship', 'finance', 'banking'],
      eligibility: ['undergraduate'],
      type: 'internship',
      status: 'active',
      requirements: ['Finance major', 'Financial modeling', 'Excel'],
      benefits: ['Competitive pay', 'Deal exposure', 'Training program'],
      location: 'Johannesburg, South Africa',
      organization: 'Goldman Sachs Africa',
      link: 'https://www.goldmansachs.com/careers/',
    },
    {
      id: 'intern8',
      title: 'Engineering Intern',
      description: 'Work on hardware projects at Intel.',
      deadline: new Date('2024-06-10'),
      createdAt: new Date('2024-03-01'),
      createdBy: 'admin1',
      tags: ['internship', 'engineering', 'hardware'],
      eligibility: ['undergraduate'],
      type: 'internship',
      status: 'active',
      requirements: ['Engineering student', 'Hardware knowledge', 'CAD'],
      benefits: ['Project stipend', 'Equipment access', 'Mentorship'],
      location: 'Remote',
      organization: 'Intel Africa',
      link: 'https://jobs.intel.com/',
    },
  ],
  scholarships: [
    {
      id: 'scholarship1',
      title: 'Computer Science Scholarship',
      description: 'Full scholarship for African students pursuing computer science.',
      deadline: new Date('2024-06-30'),
      createdAt: new Date('2024-03-01'),
      createdBy: 'admin1',
      tags: ['scholarship', 'computer-science', 'education'],
      eligibility: ['undergraduate'],
      type: 'scholarship',
      status: 'active',
      requirements: ['High school diploma', 'Strong academic record'],
      benefits: ['Full tuition coverage', 'Monthly stipend', 'Mentorship program'],
      location: 'Kenya',
      organization: 'Tech Education Foundation',
      link: 'https://techedufoundation.org/scholarships/2024',
    },
    {
      id: 'scholar2',
      title: 'Mastercard Foundation Scholars Program',
      description: 'Comprehensive scholarship for African students.',
      deadline: new Date('2024-05-31'),
      createdAt: new Date('2024-03-01'),
      createdBy: 'admin1',
      tags: ['scholarship', 'education', 'leadership'],
      eligibility: ['undergraduate'],
      type: 'scholarship',
      status: 'active',
      requirements: ['Academic excellence', 'Leadership', 'Need based'],
      benefits: ['Full tuition', 'Living expenses', 'Mentorship'],
      location: 'Multiple Countries',
      organization: 'Various Universities',
      link: 'https://mastercardfdn.org/all/scholars/',
    },
    {
      id: 'scholar3',
      title: 'Google Africa PhD Fellowship',
      description: 'Support for PhD students in computer science.',
      deadline: new Date('2024-07-15'),
      createdAt: new Date('2024-03-01'),
      createdBy: 'admin1',
      tags: ['scholarship', 'phd', 'research'],
      eligibility: ['graduate'],
      type: 'scholarship',
      status: 'active',
      requirements: ['PhD enrollment', 'Research proposal', 'Publications'],
      benefits: ['Research funding', 'Google mentorship', 'Conference travel'],
      location: 'Various',
      organization: 'Google',
      link: 'https://research.google/outreach/',
    },
    {
      id: 'scholar4',
      title: 'African Leadership Academy',
      description: 'Two-year pre-university program.',
      deadline: new Date('2024-06-15'),
      createdAt: new Date('2024-03-01'),
      createdBy: 'admin1',
      tags: ['scholarship', 'leadership', 'education'],
      eligibility: ['undergraduate'],
      type: 'scholarship',
      status: 'active',
      requirements: ['15-19 years old', 'Leadership potential', 'Academic excellence'],
      benefits: ['Full boarding', 'Leadership training', 'University prep'],
      location: 'South Africa',
      organization: 'ALA',
      link: 'https://www.africanleadershipacademy.org/',
    },
    {
      id: 'scholar5',
      title: 'DAAD Scholarships',
      description: 'Study in Germany for African students.',
      deadline: new Date('2024-07-31'),
      createdAt: new Date('2024-03-01'),
      createdBy: 'admin1',
      tags: ['scholarship', 'germany', 'international'],
      eligibility: ['graduate'],
      type: 'scholarship',
      status: 'active',
      requirements: ['Bachelors degree', 'German/English', 'Research proposal'],
      benefits: ['Tuition waiver', 'Monthly stipend', 'Travel allowance'],
      location: 'Germany',
      organization: 'German Academic Exchange Service',
      link: 'https://www.daad.de/en/',
    },
    {
      id: 'scholar6',
      title: 'Chevening Scholarships',
      description: 'Masters degree scholarships in the UK.',
      deadline: new Date('2024-11-01'),
      createdAt: new Date('2024-03-01'),
      createdBy: 'admin1',
      tags: ['scholarship', 'uk', 'masters'],
      eligibility: ['graduate'],
      type: 'scholarship',
      status: 'active',
      requirements: ['Work experience', 'Leadership', 'Return to Africa'],
      benefits: ['Full funding', 'Living costs', 'Airfare'],
      location: 'United Kingdom',
      organization: 'UK Government',
      link: 'https://www.chevening.org/',
    },
    {
      id: 'scholar7',
      title: 'Africa Oxford Initiative',
      description: 'Research scholarships at Oxford.',
      deadline: new Date('2024-08-15'),
      createdAt: new Date('2024-03-01'),
      createdBy: 'admin1',
      tags: ['scholarship', 'oxford', 'research'],
      eligibility: ['graduate'],
      type: 'scholarship',
      status: 'active',
      requirements: ['Research proposal', 'Academic excellence', 'Publications'],
      benefits: ['Research funding', 'Travel grant', 'Mentorship'],
      location: 'United Kingdom',
      organization: 'University of Oxford',
      link: 'https://www.ox.ac.uk/',
    },
    {
      id: 'scholar8',
      title: 'UNESCO Fellowship Programme',
      description: 'Capacity building in various fields.',
      deadline: new Date('2024-09-30'),
      createdAt: new Date('2024-03-01'),
      createdBy: 'admin1',
      tags: ['scholarship', 'unesco', 'fellowship'],
      eligibility: ['graduate'],
      type: 'scholarship',
      status: 'active',
      requirements: ['Masters degree', 'Work experience', 'Project proposal'],
      benefits: ['Monthly allowance', 'Travel costs', 'Insurance'],
      location: 'Various',
      organization: 'UNESCO',
      link: 'https://unesco.org/',
    },
  ],
};

const categoryInfo = {
  jobs: {
    title: 'Job Opportunities',
    description: 'Find full-time and part-time job opportunities across Africa',
    color: 'primary',
  },
  internships: {
    title: 'Internship Opportunities',
    description: 'Discover internship opportunities to kickstart your career',
    color: 'green',
  },
  scholarships: {
    title: 'Scholarship Opportunities',
    description: 'Access educational funding and scholarship opportunities',
    color: 'purple',
  },
};

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;
  const [savedOpportunities, setSavedOpportunities] = useState<string[]>([]);
  const [locationFilter, setLocationFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  if (!opportunitiesData[category as keyof typeof opportunitiesData]) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Category not found</h1>
        </div>
      </div>
    );
  }

  const opportunities = opportunitiesData[category as keyof typeof opportunitiesData];
  const info = categoryInfo[category as keyof typeof categoryInfo];

  const locations = Array.from(new Set(opportunities.map(opp => opp.location)));
  const types = Array.from(new Set(opportunities.map(opp => opp.type)));

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesLocation = locationFilter === 'all' || opp.location === locationFilter;
    const matchesType = typeFilter === 'all' || opp.type === typeFilter;
    return matchesLocation && matchesType;
  });

  const handleSave = (id: string) => {
    setSavedOpportunities(prev =>
      prev.includes(id) ? prev.filter(oppId => oppId !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {info.title}
          </h1>
          <p className="mt-4 text-xl text-gray-500">{info.description}</p>
        </div>

        <div className="mt-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <FaFilter className="text-gray-400" />
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-primary focus:border-primary"
              >
                <option value="all">All Locations</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-primary focus:border-primary"
              >
                <option value="all">All Types</option>
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <p className="text-sm text-gray-500">
              Showing {filteredOpportunities.length} opportunities
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.id}
                opportunity={opportunity}
                onSave={handleSave}
                isSaved={savedOpportunities.includes(opportunity.id)}
              />
            ))}
          </div>

          {filteredOpportunities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No opportunities found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import OpportunityCard from '@/components/OpportunityCard';
import { FaFilter } from 'react-icons/fa';

// Sample opportunities data
const opportunitiesData = {
  jobs: [
    {
      id: 'job1',
      title: 'Senior Software Engineer',
      company: 'Tech Africa',
      location: 'Remote',
      type: 'Full-time',
      deadline: '2024-04-30',
      description: 'Join our team as a Senior Software Engineer and help build the future of African tech.',
      requirements: ['5+ years experience', 'React & Node.js', 'System Design'],
      benefits: ['Competitive salary', 'Remote work', 'Health insurance'],
      link: 'https://www.linkedin.com/jobs/',
    },
    {
      id: 'job2',
      title: 'Product Manager',
      company: 'African Fintech',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      deadline: '2024-04-25',
      description: 'Lead product development for our fintech solutions.',
      requirements: ['3+ years in Product Management', 'Fintech experience', 'MBA preferred'],
      benefits: ['Stock options', 'Leadership role', 'International travel'],
      link: 'https://www.indeed.com/',
    },
    {
      id: 'job3',
      title: 'UX Designer',
      company: 'Design Africa',
      location: 'Cape Town, South Africa',
      type: 'Full-time',
      deadline: '2024-05-15',
      description: 'Create beautiful and intuitive user experiences for African users.',
      requirements: ['3+ years UX design', 'Portfolio required', 'Figma expertise'],
      benefits: ['Creative environment', 'Training budget', 'Flexible hours'],
      link: 'https://www.behance.net/jobs',
    },
    {
      id: 'job4',
      title: 'Data Scientist',
      company: 'Analytics Africa',
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      deadline: '2024-05-10',
      description: 'Work on big data projects that impact millions of users.',
      requirements: ['ML expertise', 'Python & R', 'PhD preferred'],
      benefits: ['Research opportunities', 'Conference budget', 'Remote work'],
      link: 'https://www.kaggle.com/jobs',
    },
    {
      id: 'job5',
      title: 'DevOps Engineer',
      company: 'Cloud Africa',
      location: 'Remote',
      type: 'Full-time',
      deadline: '2024-05-20',
      description: 'Build and maintain our cloud infrastructure.',
      requirements: ['AWS certification', 'Kubernetes', 'CI/CD expertise'],
      benefits: ['Remote first', 'Learning allowance', 'Latest tech stack'],
      link: 'https://www.stackoverflow.com/jobs',
    },
    {
      id: 'job6',
      title: 'Marketing Manager',
      company: 'Growth Africa',
      location: 'Accra, Ghana',
      type: 'Full-time',
      deadline: '2024-05-05',
      description: 'Lead our marketing efforts across Africa.',
      requirements: ['5+ years marketing', 'Digital marketing', 'Team management'],
      benefits: ['Performance bonus', 'Team events', 'Career growth'],
      link: 'https://www.linkedin.com/jobs/',
    },
    {
      id: 'job7',
      title: 'Sales Director',
      company: 'Enterprise Africa',
      location: 'Multiple Locations',
      type: 'Full-time',
      deadline: '2024-05-25',
      description: 'Drive enterprise sales across the continent.',
      requirements: ['7+ years enterprise sales', 'Network', 'Leadership'],
      benefits: ['High commission', 'Car allowance', 'Health insurance'],
      link: 'https://www.glassdoor.com/jobs',
    },
    {
      id: 'job8',
      title: 'HR Manager',
      company: 'People Africa',
      location: 'Johannesburg, South Africa',
      type: 'Full-time',
      deadline: '2024-05-15',
      description: 'Lead HR initiatives for our growing team.',
      requirements: ['HR certification', 'Employment law', 'Culture building'],
      benefits: ['Work-life balance', 'Professional development', 'Healthcare'],
      link: 'https://www.linkedin.com/jobs/',
    },
  ],
  internships: [
    {
      id: 'intern1',
      title: 'Software Development Intern',
      company: 'Google Africa',
      location: 'Nairobi, Kenya',
      type: 'Internship',
      deadline: '2024-05-15',
      description: "Join Google's Africa internship program",
      requirements: ['Current student', 'Programming skills', 'Problem-solving'],
      benefits: ['Competitive stipend', 'Mentorship', 'Return offer potential'],
      link: 'https://careers.google.com/jobs/results/',
    },
    {
      id: 'intern2',
      title: 'Data Science Intern',
      company: 'Microsoft Africa',
      location: 'Remote',
      type: 'Internship',
      deadline: '2024-05-01',
      description: 'Work on AI/ML projects at Microsoft.',
      requirements: ['ML knowledge', 'Python', 'Statistics'],
      benefits: ['Paid internship', 'Equipment provided', 'Learning opportunities'],
      link: 'https://careers.microsoft.com/',
    },
    {
      id: 'intern3',
      title: 'Product Design Intern',
      company: 'Meta Africa',
      location: 'Lagos, Nigeria',
      type: 'Internship',
      deadline: '2024-05-20',
      description: 'Design products for African users at Meta.',
      requirements: ['Design portfolio', 'UI/UX skills', 'Creative thinking'],
      benefits: ['Housing stipend', 'Networking', 'Project ownership'],
      link: 'https://www.metacareers.com/',
    },
    {
      id: 'intern4',
      title: 'Marketing Intern',
      company: 'Twitter Africa',
      location: 'Remote',
      type: 'Internship',
      deadline: '2024-05-10',
      description: "Help grow Twitter's presence in Africa",
      requirements: ['Marketing major', 'Social media', 'Analytics'],
      benefits: ['Flexible schedule', 'Real projects', 'Career coaching'],
      link: 'https://careers.twitter.com/',
    },
    {
      id: 'intern5',
      title: 'Business Development Intern',
      company: 'Amazon Africa',
      location: 'Cape Town, South Africa',
      type: 'Internship',
      deadline: '2024-06-01',
      description: 'Drive business growth for Amazon in Africa.',
      requirements: ['Business major', 'Excel skills', 'Strategic thinking'],
      benefits: ['Performance bonus', 'Training', 'Network building'],
      link: 'https://www.amazon.jobs/',
    },
    {
      id: 'intern6',
      title: 'Research Intern',
      company: 'IBM Research Africa',
      location: 'Nairobi, Kenya',
      type: 'Internship',
      deadline: '2024-05-25',
      description: "Conduct research at IBM's Africa lab",
      requirements: ['PhD candidate', 'Research experience', 'Publications'],
      benefits: ['Research funding', 'Lab access', 'Publication support'],
      link: 'https://www.ibm.com/employment/',
    },
    {
      id: 'intern7',
      title: 'Finance Intern',
      company: 'Goldman Sachs Africa',
      location: 'Johannesburg, South Africa',
      type: 'Internship',
      deadline: '2024-05-15',
      description: 'Learn investment banking at Goldman Sachs.',
      requirements: ['Finance major', 'Financial modeling', 'Excel'],
      benefits: ['Competitive pay', 'Deal exposure', 'Training program'],
      link: 'https://www.goldmansachs.com/careers/',
    },
    {
      id: 'intern8',
      title: 'Engineering Intern',
      company: 'Intel Africa',
      location: 'Remote',
      type: 'Internship',
      deadline: '2024-06-10',
      description: 'Work on hardware projects at Intel.',
      requirements: ['Engineering student', 'Hardware knowledge', 'CAD'],
      benefits: ['Project stipend', 'Equipment access', 'Mentorship'],
      link: 'https://jobs.intel.com/',
    },
  ],
  scholarships: [
    {
      id: 'scholar1',
      title: 'ALX Software Engineering Program',
      organization: 'ALX Africa',
      location: 'Online',
      type: 'Full Scholarship',
      deadline: '2024-06-30',
      description: 'Full-stack software engineering program with job placement.',
      requirements: ['High school diploma', 'Basic computer skills', 'Dedication'],
      benefits: ['Free tuition', 'Laptop provided', 'Job placement'],
      link: 'https://www.alxafrica.com/',
    },
    {
      id: 'scholar2',
      title: 'Mastercard Foundation Scholars Program',
      organization: 'Various Universities',
      location: 'Multiple Countries',
      type: 'Full Scholarship',
      deadline: '2024-05-31',
      description: 'Comprehensive scholarship for African students.',
      requirements: ['Academic excellence', 'Leadership', 'Need based'],
      benefits: ['Full tuition', 'Living expenses', 'Mentorship'],
      link: 'https://mastercardfdn.org/all/scholars/',
    },
    {
      id: 'scholar3',
      title: 'Google Africa PhD Fellowship',
      organization: 'Google',
      location: 'Various',
      type: 'Research Fellowship',
      deadline: '2024-07-15',
      description: 'Support for PhD students in computer science.',
      requirements: ['PhD enrollment', 'Research proposal', 'Publications'],
      benefits: ['Research funding', 'Google mentorship', 'Conference travel'],
      link: 'https://research.google/outreach/',
    },
    {
      id: 'scholar4',
      title: 'African Leadership Academy',
      organization: 'ALA',
      location: 'South Africa',
      type: 'Full Scholarship',
      deadline: '2024-06-15',
      description: 'Two-year pre-university program.',
      requirements: ['15-19 years old', 'Leadership potential', 'Academic excellence'],
      benefits: ['Full boarding', 'Leadership training', 'University prep'],
      link: 'https://www.africanleadershipacademy.org/',
    },
    {
      id: 'scholar5',
      title: 'DAAD Scholarships',
      organization: 'German Academic Exchange Service',
      location: 'Germany',
      type: 'Full Scholarship',
      deadline: '2024-07-31',
      description: 'Study in Germany for African students.',
      requirements: ['Bachelors degree', 'German/English', 'Research proposal'],
      benefits: ['Tuition waiver', 'Monthly stipend', 'Travel allowance'],
      link: 'https://www.daad.de/en/',
    },
    {
      id: 'scholar6',
      title: 'Chevening Scholarships',
      organization: 'UK Government',
      location: 'United Kingdom',
      type: 'Full Scholarship',
      deadline: '2024-11-01',
      description: 'Masters degree scholarships in the UK.',
      requirements: ['Work experience', 'Leadership', 'Return to Africa'],
      benefits: ['Full funding', 'Living costs', 'Airfare'],
      link: 'https://www.chevening.org/',
    },
    {
      id: 'scholar7',
      title: 'Africa Oxford Initiative',
      organization: 'University of Oxford',
      location: 'United Kingdom',
      type: 'Research Scholarship',
      deadline: '2024-08-15',
      description: 'Research scholarships at Oxford.',
      requirements: ['Research proposal', 'Academic excellence', 'Publications'],
      benefits: ['Research funding', 'Travel grant', 'Mentorship'],
      link: 'https://www.ox.ac.uk/',
    },
    {
      id: 'scholar8',
      title: 'UNESCO Fellowship Programme',
      organization: 'UNESCO',
      location: 'Various',
      type: 'Fellowship',
      deadline: '2024-09-30',
      description: 'Capacity building in various fields.',
      requirements: ['Masters degree', 'Work experience', 'Project proposal'],
      benefits: ['Monthly allowance', 'Travel costs', 'Insurance'],
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
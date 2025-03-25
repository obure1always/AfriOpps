import { FaMapMarkerAlt, FaClock, FaBookmark, FaRegBookmark } from 'react-icons/fa';

interface OpportunityCardProps {
  opportunity: {
    id: string;
    title: string;
    company?: string;
    organization?: string;
    location: string;
    type?: string;
    deadline: string;
    description?: string;
    requirements?: string[];
    benefits?: string[];
    link: string;
  };
  onSave?: (id: string) => void;
  isSaved?: boolean;
}

export default function OpportunityCard({ opportunity, onSave, isSaved }: OpportunityCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium text-gray-900">{opportunity.title}</h3>
            <p className="mt-1 text-sm text-gray-500">
              {opportunity.company || opportunity.organization}
            </p>
          </div>
          {onSave && (
            <button
              onClick={() => onSave(opportunity.id)}
              className="text-gray-400 hover:text-primary focus:outline-none"
              aria-label={isSaved ? 'Remove from saved' : 'Save opportunity'}
            >
              {isSaved ? (
                <FaBookmark className="h-5 w-5" />
              ) : (
                <FaRegBookmark className="h-5 w-5" />
              )}
            </button>
          )}
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <FaMapMarkerAlt className="flex-shrink-0 mr-1.5 h-4 w-4" />
            {opportunity.location}
          </div>
          {opportunity.type && (
            <div className="flex items-center text-sm text-gray-500">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {opportunity.type}
              </span>
            </div>
          )}
          <div className="flex items-center text-sm text-gray-500">
            <FaClock className="flex-shrink-0 mr-1.5 h-4 w-4" />
            Deadline: {new Date(opportunity.deadline).toLocaleDateString()}
          </div>
        </div>

        {opportunity.description && (
          <p className="mt-4 text-sm text-gray-500 line-clamp-3">
            {opportunity.description}
          </p>
        )}

        {opportunity.requirements && opportunity.requirements.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-900">Requirements:</h4>
            <ul className="mt-2 list-disc list-inside text-sm text-gray-500 space-y-1">
              {opportunity.requirements.slice(0, 3).map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        )}

        {opportunity.benefits && opportunity.benefits.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-900">Benefits:</h4>
            <ul className="mt-2 list-disc list-inside text-sm text-gray-500 space-y-1">
              {opportunity.benefits.slice(0, 2).map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6">
          <a
            href={opportunity.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
} 
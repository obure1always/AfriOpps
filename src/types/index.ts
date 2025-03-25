export type UserRole = 'student' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  emailVerified: boolean;
  isActive: boolean;
}

export interface Opportunity {
  id: string;
  title: string;
  description: string;
  deadline: Date;
  createdAt: Date;
  createdBy: string;
  tags: string[];
  eligibility: string[];
  type: 'scholarship' | 'internship' | 'job';
  status: 'active' | 'expired' | 'draft';
  requirements: string[];
  benefits: string[];
  location: string;
  organization: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'opportunity' | 'deadline' | 'system';
  read: boolean;
  createdAt: Date;
}

export interface SearchFilters {
  query: string;
  type?: Opportunity['type'];
  tags?: string[];
  deadline?: Date;
  location?: string;
  eligibility?: string[];
} 
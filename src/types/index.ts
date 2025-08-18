// Core data types for the Mountain to Future platform

export interface CareerPath {
  id: string;
  title: string;
  category: CareerCategory;
  description: string;
  requirements: {
    education: EducationLevel;
    skills: string[];
    experience: ExperienceLevel;
    certifications?: string[];
  };
  salaryRange: {
    country: Country;
    currency: string;
    min: number;
    max: number;
    median: number;
    period: 'hourly' | 'monthly' | 'yearly';
  }[];
  entryMethods: EntryMethod[];
  growth: {
    potential: 'low' | 'medium' | 'high';
    timeToAdvance: string;
    advancementPaths: string[];
  };
  workEnvironment: {
    location: 'remote' | 'onsite' | 'hybrid';
    schedule: 'flexible' | 'fixed' | 'shift';
    travelRequired: boolean;
  };
  demandLevel: 'low' | 'medium' | 'high';
  tags: string[];
  lastUpdated: Date;
}

export interface EntryMethod {
  id: string;
  title: string;
  type: 'education' | 'training' | 'apprenticeship' | 'certification' | 'self-study';
  description: string;
  duration: string;
  cost: {
    min: number;
    max: number;
    currency: string;
    financialAid: boolean;
  };
  provider: string;
  location: string[];
  requirements: string[];
  successRate: number;
  outcomes: {
    employmentRate: number;
    averageStartingSalary: number;
  };
  applicationDeadlines?: Date[];
  url?: string;
}

export interface Scholarship {
  id: string;
  title: string;
  provider: string;
  type: 'merit' | 'need-based' | 'demographic' | 'field-specific';
  amount: {
    value: number;
    currency: string;
    coverage: 'partial' | 'full';
  };
  eligibility: {
    ageRange?: [number, number];
    educationLevel: EducationLevel[];
    gpa?: number;
    income?: {
      max: number;
      currency: string;
    };
    location: string[];
    demographics?: string[];
    fieldOfStudy?: string[];
  };
  applicationProcess: {
    deadline: Date;
    requirements: string[];
    documentsNeeded: string[];
    applicationUrl: string;
  };
  renewability: {
    renewable: boolean;
    maxYears?: number;
    requirements?: string[];
  };
  contactInfo: ContactInfo;
  tags: string[];
}

export interface PracticalTool {
  id: string;
  title: string;
  type: 'template' | 'guide' | 'calculator' | 'checklist' | 'form';
  category: 'job-search' | 'application' | 'interview' | 'visa' | 'finance' | 'study';
  description: string;
  targetAudience: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  content: {
    format: 'pdf' | 'docx' | 'interactive' | 'video' | 'audio';
    url?: string;
    inlineContent?: string;
  };
  instructions: string[];
  tips: string[];
  relatedTools: string[];
  languages: string[];
  lastUpdated: Date;
}

export interface VolunteerOpportunity {
  id: string;
  title: string;
  organization: string;
  type: 'education' | 'mentorship' | 'skill-training' | 'career-guidance' | 'financial-support';
  description: string;
  location: {
    type: 'remote' | 'onsite' | 'both';
    areas: string[];
  };
  timeCommitment: {
    hours: number;
    period: 'weekly' | 'monthly' | 'one-time';
    duration: string;
  };
  requirements: {
    skills: string[];
    experience?: string[];
    background?: string[];
    languages?: string[];
  };
  benefits: string[];
  applicationProcess: string;
  contactInfo: ContactInfo;
  verified: boolean;
}

// Enum types
export type Country = 'china' | 'japan' | 'usa' | 'other';

export type CareerCategory = 
  | 'technology'
  | 'healthcare' 
  | 'education'
  | 'finance'
  | 'manufacturing'
  | 'service'
  | 'government'
  | 'nonprofit'
  | 'creative'
  | 'trades'
  | 'agriculture'
  | 'transportation';

export type EducationLevel = 
  | 'none'
  | 'elementary'
  | 'middle-school'
  | 'high-school'
  | 'vocational'
  | 'associate'
  | 'bachelor'
  | 'master'
  | 'doctorate';

export type ExperienceLevel = 
  | 'entry-level'
  | '1-2-years'
  | '3-5-years'
  | '5-10-years'
  | '10-plus-years';

// Utility types
export interface ContactInfo {
  email?: string;
  phone?: string;
  website?: string;
  address?: string;
  socialMedia?: {
    platform: string;
    handle: string;
  }[];
}

export interface User {
  id: string;
  profile: {
    age?: number;
    location: string;
    educationLevel: EducationLevel;
    interests: string[];
    goals: string[];
    languages: string[];
  };
  preferences: {
    language: string;
    notifications: boolean;
    accessibility: {
      highContrast: boolean;
      largeText: boolean;
      screenReader: boolean;
      voiceEnabled: boolean;
    };
  };
  bookmarks: {
    careers: string[];
    scholarships: string[];
    tools: string[];
    volunteers: string[];
  };
  progress: {
    completedGuides: string[];
    appliedScholarships: string[];
    usedTools: string[];
  };
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  timestamp: Date;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Search and filter types
export interface SearchFilters {
  query?: string;
  category?: CareerCategory[];
  country?: Country[];
  salaryRange?: [number, number];
  educationLevel?: EducationLevel[];
  experienceLevel?: ExperienceLevel[];
  workLocation?: ('remote' | 'onsite' | 'hybrid')[];
  demandLevel?: ('low' | 'medium' | 'high')[];
}

export interface ScholarshipFilters {
  type?: ('merit' | 'need-based' | 'demographic' | 'field-specific')[];
  amountRange?: [number, number];
  educationLevel?: EducationLevel[];
  location?: string[];
  deadline?: {
    from: Date;
    to: Date;
  };
}
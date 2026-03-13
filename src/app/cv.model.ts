export interface CvBasics {
  name: string;
  headline: string;
  location: string;
  verifiedExpertise: string;
  summary: string;
  availability: string;
  preferredEnvironment: string[];
  toptalMemberSince: string;
  imageUrl: string;
  publicProfileUrl: string;
}

export interface Highlights {
  signatureAchievement: string;
  portfolioHighlights: { title: string; summaryTech: string }[];
  experienceByTechnology: string[];
}

export interface WorkExperience {
  role: string;
  period: string;
  company: string;
  bullets: string[];
}

export interface Project {
  name: string;
  description: string;
  keyResponsibilities: string[];
}

export interface Education {
  institution: string;
  field: string;
  note: string;
}

export interface CvData {
  basics: CvBasics;
  highlights: Highlights;
  skills: { [category: string]: string[] };
  featuredExpertise: string[];
  workExperience: WorkExperience[];
  projects: Project[];
  education: Education[];
}

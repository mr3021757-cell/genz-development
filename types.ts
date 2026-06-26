export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  detailedPoints: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  businessResult: string;
  technologies: string[];
  caseStudy: {
    problem: string;
    solution: string;
    results: string[];
  };
}

export interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  imageUrl: string;
}

export interface TestimonialVideo {
  id: string;
  title: string;
  clientName: string;
  companyName: string;
  youtubeId: string;
  thumbnailUrl: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  projectType: string;
  message: string;
}

// Core Types
export interface Topic {
  _id: string;
  title: string;
  slug: string;
  description: string;
  icon?: string;
  color?: string;
  content: string;
  relatedArticles?: string[];
  files?: TopicFile[];
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
}

export interface Article {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  imageUrl: string;
  externalUrl: string; // Links to official university website
  topics: string[]; // Array of topic IDs
  publishedDate: Date;
  createdAt: Date;
  updatedAt: Date;
  featured: boolean;
  views?: number;
}

export interface TopicFile {
  _id: string;
  title: string;
  description?: string;
  fileUrl: string;
  fileType: "pdf" | "doc" | "image" | "other";
  uploadDate: Date;
  topicId: string;
}

export interface Media {
  _id: string;
  title: string;
  description?: string;
  url: string;
  type: "image" | "pdf" | "document" | "video";
  size: number;
  uploadedBy?: string;
  createdAt: Date;
}

export interface Analytics {
  _id: string;
  type: "page_view" | "article_view" | "topic_view" | "file_download";
  resourceId?: string;
  timestamp: Date;
  metadata?: Record<string, string | number | boolean | null>;
}

// VSU Branding Types
export interface VSUColors {
  darkGreen: string;
  green: string;
  lightGreen: string;
  goldenYellow: string;
  cornYellow: string;
  yellow: string;
}

// University Information
export interface UniversityInfo {
  name: string;
  fullName: string;
  address: string;
  city: string;
  province: string;
  country: string;
  postalCode: string;
  phone: string;
  email: string;
  website: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

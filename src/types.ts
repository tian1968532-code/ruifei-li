/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  readTime: string;
  likes: number;
  tags: string[];
  comments: Comment[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Web design' | 'UI/UX design' | 'Product design';
  tags: string[];
  link?: string;
  featured: boolean;
  imageColor: string; // Background color for mockups
  challenge?: string;
  solution?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  type: 'web' | 'uiux' | 'product';
  accentColor: string;
}

export interface Skill {
  name: string;
  level: number; // 0 - 100
  category: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

export interface UserProfile {
  name: string;
  title: string;
  location: string;
  bio: string;
  avatarMood: string;
  experienceYears: number;
  completedProjects: number;
  aboutIntro: string;
  aboutBody: string;
  email: string;
  githubUrl?: string;
  twitterUrl?: string;
}

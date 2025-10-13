/**
 * Shared Types for Data Services
 */

// Category Types
export type NewsCategory = 'general' | 'competition' | 'conferences';
export type EventCategory = 'monthly' | 'general' | 'conference' | 'competition';

export type NewsItem = {
  id: string;
  title: string;
  content: string;
  link: string;
  date: string; // ISO date string (YYYY-MM-DD)
  publishedAt?: Date;
  category: NewsCategory;
}

export type EventItem = {
  id: string;
  title?: string;
  description: string;
  date: Date; // Date object
  startTime?: string;
  endTime?: string;
  location?: string;
  address?: string;
  icon: string;
  color: string;
  category: EventCategory;
}

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
}

export type GalleryPhoto = {
  id: string;
  image: string;
  title: string;
  date: string;
  description?: string;
}

export type GalleryAlbum = {
  id: string;
  title: string;
  date: string;
  photoCount: number;
  category: string;
  coverImage: string;
  photos: GalleryPhoto[];
}


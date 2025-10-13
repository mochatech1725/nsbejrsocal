/**
 * Shared Types for Data Services
 */

// Category Types
export type NewsCategory = 'general' | 'competition' | 'convention';
export type EventCategory = 'monthly' | 'general' | 'convention' | 'competition';

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
  eventName?: string;
  description: string;
  date: Date; // Date object (start date)
  endDate?: Date; // Optional end date for multi-day events
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


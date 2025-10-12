/**
 * CMS Manager Service
 *
 * Interface for managing content from the CMS system.
 * This service provides methods to retrieve news and events data.
 */

export type NewsItem = {
  id: string;
  title: string;
  content: string;
  link: string;
  day: string;
  month: string;
  date: string; // ISO date string (YYYY-MM-DD)
  publishedAt?: Date;
}

export type NsbeEvent = {
  id: string;
  title: string;
  description: string;
  date: string; // ISO date string (YYYY-MM-DD)
  dateFormatted: string;
  time: string;
  location: string;
  icon: string;
  color: string;
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
  coverImage: string;
  photos: GalleryPhoto[];
}

/**
 * Abstract CMS Manager Service
 *
 * Implement this interface to create a concrete CMS service implementation.
 */
export abstract class CmsManagerService {
  /**
   * Get all news items
   * @returns Promise resolving to an array of news items
   */
  abstract getNews(): Promise<NewsItem[]>;

  /**
   * Get a specific news item by ID
   * @param id - The news item ID
   * @returns Promise resolving to a news item or null if not found
   */
  abstract getNewsById(id: string): Promise<NewsItem | null>;

  /**
   * Get recent news items
   * @param limit - Maximum number of items to return
   * @returns Promise resolving to an array of news items
   */
  abstract getRecentNews(limit?: number): Promise<NewsItem[]>;

  /**
   * Get all events
   * @returns Promise resolving to an array of events
   */
  abstract getEvents(): Promise<NsbeEvent[]>;

  /**
   * Get a specific event by ID
   * @param id - The event ID
   * @returns Promise resolving to an event or null if not found
   */
  abstract getEventById(id: string): Promise<NsbeEvent | null>;

  /**
   * Get upcoming events
   * @param limit - Maximum number of items to return
   * @returns Promise resolving to an array of upcoming events
   */
  abstract getUpcomingEvents(limit?: number): Promise<NsbeEvent[]>;

  /**
   * Get events for a specific date
   * @param date - ISO date string (YYYY-MM-DD)
   * @returns Promise resolving to an array of events
   */
  abstract getEventsByDate(date: string): Promise<NsbeEvent[]>;

  /**
   * Get all gallery items
   * @returns Promise resolving to an array of gallery items
   */
  abstract getGalleryItems(): Promise<GalleryItem[]>;

  /**
   * Get gallery items by category
   * @param category - The category to filter by
   * @returns Promise resolving to an array of gallery items
   */
  abstract getGalleryItemsByCategory(category: string): Promise<GalleryItem[]>;

  /**
   * Get all meeting albums
   * @returns Promise resolving to an array of meeting albums
   */
  abstract getMeetingAlbums(): Promise<GalleryAlbum[]>;

  /**
   * Get a specific album by ID
   * @param id - The album ID
   * @returns Promise resolving to an album or null if not found
   */
  abstract getAlbumById(id: string): Promise<GalleryAlbum | null>;
}


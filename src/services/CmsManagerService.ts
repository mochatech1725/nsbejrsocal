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
}


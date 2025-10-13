/**
 * Events Data Service
 *
 * Manages events data using delegation pattern.
 * Data source can be swapped between JSON, CMS, or other implementations.
 */

import { EventItem, EventCategory } from './types';
// @ts-ignore - JSON import
import eventsData from '../data/events.json';
// @ts-ignore - JSON import
import meetingEventsData from '../data/meeting.events.json';

/**
 * Abstract Events Data Source
 * Implement this to create different data source backends
 */
export abstract class EventsDataSource {
  abstract fetchEvents(): Promise<EventItem[]>;
}

/**
 * JSON Events Data Source
 * Fetches events from JSON files (both events.json and meeting.events.json)
 */
export class JsonEventsDataSource extends EventsDataSource {
  async fetchEvents(): Promise<EventItem[]> {
    // Simulate async delay
    await new Promise(resolve => setTimeout(resolve, 100));

    // Combine events from both files
    const regularEvents = (eventsData.events as any[]) || [];
    const meetingEvents = (meetingEventsData.meetings as any[]) || [];
    const allEvents = [...regularEvents, ...meetingEvents];

    return allEvents.map(event => {
      const category = (event.category || 'monthly') as EventCategory;

      return {
        id: event.id,
        eventName: event.eventName,
        description: event.description,
        date: new Date(event.date + 'T00:00:00'),
        endDate: event.endDate ? new Date(event.endDate + 'T00:00:00') : undefined,
        startTime: event.startTime,
        endTime: event.endTime,
        location: event.location,
        address: event.address,
        icon: event.icon || this.getCategoryIcon(category),
        color: event.color || this.getCategoryColor(category),
        category
      };
    });
  }

  private getCategoryIcon(category: EventCategory): string {
    const icons: Record<EventCategory, string> = {
      monthly: 'groups',
      general: 'event',
      convention: 'school',
      competition: 'emoji_events'
    };
    return icons[category] || 'event';
  }

  private getCategoryColor(category: EventCategory): string {
    const colors: Record<EventCategory, string> = {
      monthly: 'primary',
      general: 'primary',
      convention: 'accent',
      competition: 'positive'
    };
    return colors[category] || 'primary';
  }
}

/**
 * CMS Events Data Source (placeholder for future implementation)
 * Fetches events from CMS
 */
export class CmsEventsDataSource extends EventsDataSource {
  async fetchEvents(): Promise<EventItem[]> {
    // TODO: Implement CMS API calls
    throw new Error('CMS integration not yet implemented');
  }
}

/**
 * Events Data Service
 * Main service for accessing events data
 */
export class EventsDataService {
  constructor(private eventsDataSource: EventsDataSource) {}

  /**
   * Get all events
   */
  async getEvents(): Promise<EventItem[]> {
    return await this.eventsDataSource.fetchEvents();
  }

  /**
   * Get a specific event by ID
   */
  async getEventById(id: string): Promise<EventItem | null> {
    const events = await this.eventsDataSource.fetchEvents();
    return events.find(event => event.id === id) || null;
  }

  /**
   * Get upcoming events
   */
  async getUpcomingEvents(limit?: number): Promise<EventItem[]> {
    const events = await this.eventsDataSource.fetchEvents();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcoming = events
      .filter(event => event.date >= today)
      .sort((a, b) => a.date.getTime() - b.date.getTime());

    return limit ? upcoming.slice(0, limit) : upcoming;
  }

  /**
   * Get events for a specific date
   */
  async getEventsByDate(date: string): Promise<EventItem[]> {
    const events = await this.eventsDataSource.fetchEvents();
    const searchDate = new Date(date + 'T00:00:00');

    return events.filter(event =>
      event.date.getFullYear() === searchDate.getFullYear() &&
      event.date.getMonth() === searchDate.getMonth() &&
      event.date.getDate() === searchDate.getDate()
    );
  }

  /**
   * Get events by category
   */
  async getEventsByCategory(category: EventCategory, limit?: number): Promise<EventItem[]> {
    const events = await this.eventsDataSource.fetchEvents();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const filtered = events
      .filter(event => event.category === category && event.date >= today)
      .sort((a, b) => a.date.getTime() - b.date.getTime());

    return limit ? filtered.slice(0, limit) : filtered;
  }
}

// Export singleton instance using JSON data source
export const eventsService = new EventsDataService(new JsonEventsDataSource());


/**
 * Mock CMS Manager Service
 *
 * A mock implementation of CmsManagerService that returns canned test data.
 * This allows for easy testing and development without needing a real CMS backend.
 */

import { CmsManagerService, NewsItem, NsbeEvent, GalleryItem, GalleryAlbum, NewsCategory, EventCategory } from '../CmsManagerService';
// @ts-ignore - JSON import
import eventsData from '../../data/events.json';

// Mock News Data
const mockNewsItems: NewsItem[] = [
  {
    id: 'news-1',
    title: 'NSBE Jr. Chapter Wins Regional Competition',
    content: 'Our chapter placed first in the Regional Science Olympiad! Congratulations to all participants for their dedication and hard work.',
    link: '#',
    day: '15',
    month: 'OCT',
    date: '2025-10-15',
    publishedAt: new Date('2025-10-15T10:00:00'),
    category: 'competition'
  },
  {
    id: 'news-2',
    title: 'New STEM Workshop Series Announced',
    content: 'Join us for a series of hands-on STEM workshops starting next month! Topics include robotics, coding, and engineering design.',
    link: '#',
    day: '12',
    month: 'OCT',
    date: '2025-10-12',
    publishedAt: new Date('2025-10-12T14:30:00'),
    category: 'general'
  },
  {
    id: 'news-3',
    title: 'NSBE National Convention Registration Open',
    content: 'Register now for the NSBE National Convention! Join thousands of students and professionals for workshops, networking, and inspiration.',
    link: '#',
    day: '10',
    month: 'OCT',
    date: '2025-10-10',
    publishedAt: new Date('2025-10-10T09:00:00'),
    category: 'conferences'
  },
  {
    id: 'news-4',
    title: 'Robotics Competition Team Advances to Finals',
    content: 'Our robotics team has qualified for the state finals! Join us in cheering them on at the championship next month.',
    link: '#',
    day: '08',
    month: 'OCT',
    date: '2025-10-08',
    publishedAt: new Date('2025-10-08T15:00:00'),
    category: 'competition'
  },
  {
    id: 'news-5',
    title: 'College Visit Day - Applications Open',
    content: 'Applications are now open for our annual college visit day. Visit top engineering schools and meet with admissions representatives.',
    link: '#',
    day: '08',
    month: 'OCT',
    date: '2025-10-08',
    publishedAt: new Date('2025-10-08T09:00:00'),
    category: 'general'
  },
  {
    id: 'news-6',
    title: 'Regional Conference Early Bird Pricing',
    content: 'Save on registration for the Region VI Fall Leadership Conference! Early bird pricing ends this week.',
    link: '#',
    day: '05',
    month: 'OCT',
    date: '2025-10-05',
    publishedAt: new Date('2025-10-05T13:00:00'),
    category: 'conferences'
  },
  {
    id: 'news-7',
    title: 'Scholarship Opportunity for Members',
    content: 'A new scholarship program is available for active NSBE Jr. members. Applications due by the end of the month.',
    link: '#',
    day: '05',
    month: 'OCT',
    date: '2025-10-05',
    publishedAt: new Date('2025-10-05T11:00:00'),
    category: 'general'
  },
  {
    id: 'news-8',
    title: 'Community Service Project Success',
    content: 'Thank you to everyone who participated in last weekend\'s community cleanup. Together we made a real difference!',
    link: '#',
    day: '01',
    month: 'OCT',
    date: '2025-10-01',
    publishedAt: new Date('2025-10-01T16:00:00'),
    category: 'general'
  },
  {
    id: 'news-9',
    title: 'Coding Challenge Winners Announced',
    content: 'Congratulations to our top performers in the regional coding challenge! Their innovative solutions impressed the judges.',
    link: '#',
    day: '28',
    month: 'SEP',
    date: '2025-09-28',
    publishedAt: new Date('2025-09-28T14:00:00'),
    category: 'competition'
  },
  {
    id: 'news-10',
    title: 'National Conference Travel Fund Available',
    content: 'Limited travel scholarships available for members attending the National NSBE Convention. Apply by October 20th.',
    link: '#',
    day: '25',
    month: 'SEP',
    date: '2025-09-25',
    publishedAt: new Date('2025-09-25T10:00:00'),
    category: 'conferences'
  }
];

// Transform events from JSON to NsbeEvent format
function transformEvents(): NsbeEvent[] {
  const events: NsbeEvent[] = [];

  (eventsData.events as any[]).forEach((event) => {
    const category = (event.category || 'monthly') as EventCategory;

    // Base event structure
    const nsbeEvent: NsbeEvent = {
      id: event.id,
      title: event.title,
      description: event.description,
      date: new Date(event.date + 'T00:00:00'),
      icon: event.icon || getCategoryIcon(category),
      color: event.color || getCategoryColor(category),
      category
    };

    // Add event fields
    nsbeEvent.startTime = event.startTime;
    nsbeEvent.endTime = event.endTime;
    nsbeEvent.location = event.location;
    nsbeEvent.address = event.address;

    events.push(nsbeEvent);
  });

  return events;
}

// Helper function to get default icon by category
function getCategoryIcon(category: EventCategory): string {
  const icons: Record<EventCategory, string> = {
    monthly: 'groups',
    general: 'event',
    conference: 'school',
    competition: 'emoji_events'
  };
  return icons[category] || 'event';
}

// Helper function to get default color by category
function getCategoryColor(category: EventCategory): string {
  const colors: Record<EventCategory, string> = {
    monthly: 'primary',
    general: 'primary',
    conference: 'accent',
    competition: 'positive'
  };
  return colors[category] || 'primary';
}

// Mock Events Data loaded from events.json
const mockEvents: NsbeEvent[] = transformEvents();

// Mock Gallery Items Data
// Empty for now - add events and competitions photos here as needed
const mockGalleryItems: GalleryItem[] = [];

// Mock Meeting Albums Data
const mockMeetingAlbums: GalleryAlbum[] = [
  {
    id: 'album-1',
    title: 'October General Meeting',
    date: 'October 05, 2025',
    photoCount: 5,
    coverImage: '/src/assets/images/IMG_3927.png',
    photos: [
      {
        id: 'photo-1',
        image: '/src/assets/images/IMG_3927.png',
        title: 'Team Activity',
        date: 'October 15, 2025',
        description: 'Chapter members at the meeting'
      },
      {
        id: 'photo-2',
        image: '/src/assets/images/IMG_3930.png',
        title: 'Team Activity',
        date: 'October 15, 2025',
        description: 'Members collaborating on a project'
      },
      {
        id: 'photo-3',
        image: '/src/assets/images/IMG_3935.png',
        title: 'Team Activity',
        date: 'October 15, 2025',
        description: 'Members collaborating on a project'
      },
      {
        id: 'photo-4',
        image: '/src/assets/images/IMG_3936.png',
        title: 'Team Activity',
        date: 'October 15, 2025',
        description: 'Members collaborating on a project'
      },
      {
        id: 'photo-5',
        image: '/src/assets/images/IMG_3939.png',
        title: 'Team Activity',
        date: 'October 15, 2025',
        description: 'Members collaborating on a project'
      }
    ]
  }
];

export class MockCmsManagerService extends CmsManagerService {
  /**
   * Simulate async API call delay
   */
  private async simulateDelay(ms: number = 300): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async getNews(): Promise<NewsItem[]> {
    await this.simulateDelay();
    return [...mockNewsItems];
  }

  async getNewsById(id: string): Promise<NewsItem | null> {
    await this.simulateDelay();
    return mockNewsItems.find(item => item.id === id) || null;
  }

  async getRecentNews(limit: number = 5): Promise<NewsItem[]> {
    await this.simulateDelay();
    return [...mockNewsItems]
      .sort((a, b) => {
        const dateA = a.publishedAt || new Date(a.date);
        const dateB = b.publishedAt || new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      })
      .slice(0, limit);
  }

  async getNewsByCategory(category: NewsCategory, limit?: number): Promise<NewsItem[]> {
    await this.simulateDelay();
    const filtered = mockNewsItems
      .filter(item => item.category === category)
      .sort((a, b) => {
        const dateA = a.publishedAt || new Date(a.date);
        const dateB = b.publishedAt || new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      });

    return limit ? filtered.slice(0, limit) : filtered;
  }

  async getEvents(): Promise<NsbeEvent[]> {
    await this.simulateDelay();
    return [...mockEvents];
  }

  async getEventById(id: string): Promise<NsbeEvent | null> {
    await this.simulateDelay();
    return mockEvents.find(event => event.id === id) || null;
  }

  async getUpcomingEvents(limit?: number): Promise<NsbeEvent[]> {
    await this.simulateDelay();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcoming = mockEvents
      .filter(event => event.date >= today)
      .sort((a, b) => a.date.getTime() - b.date.getTime());

    return limit ? upcoming.slice(0, limit) : upcoming;
  }

  async getEventsByDate(date: string): Promise<NsbeEvent[]> {
    await this.simulateDelay();
    const searchDate = new Date(date + 'T00:00:00');
    return mockEvents.filter(event =>
      event.date.getFullYear() === searchDate.getFullYear() &&
      event.date.getMonth() === searchDate.getMonth() &&
      event.date.getDate() === searchDate.getDate()
    );
  }

  async getEventsByCategory(category: EventCategory, limit?: number): Promise<NsbeEvent[]> {
    await this.simulateDelay();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const filtered = mockEvents
      .filter(event => event.category === category && event.date >= today)
      .sort((a, b) => a.date.getTime() - b.date.getTime());

    return limit ? filtered.slice(0, limit) : filtered;
  }

  async getGalleryItems(): Promise<GalleryItem[]> {
    await this.simulateDelay();
    return [...mockGalleryItems];
  }

  async getGalleryItemsByCategory(category: string): Promise<GalleryItem[]> {
    await this.simulateDelay();
    return mockGalleryItems.filter(item => item.category === category);
  }

  async getMeetingAlbums(): Promise<GalleryAlbum[]> {
    await this.simulateDelay();
    return [...mockMeetingAlbums];
  }

  async getAlbumById(id: string): Promise<GalleryAlbum | null> {
    await this.simulateDelay();
    return mockMeetingAlbums.find(album => album.id === id) || null;
  }
}

// Export singleton instance for convenience
export const mockCmsService = new MockCmsManagerService();


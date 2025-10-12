/**
 * Mock CMS Manager Service
 *
 * A mock implementation of CmsManagerService that returns canned test data.
 * This allows for easy testing and development without needing a real CMS backend.
 */

import { CmsManagerService, NewsItem, NsbeEvent, GalleryItem, GalleryAlbum, NewsCategory, EventCategory } from '../CmsManagerService';

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

// Mock Events Data
const mockEvents: NsbeEvent[] = [
  {
    id: 'event-1',
    title: 'Monthly General Meeting',
    description: 'Join us for our monthly chapter meeting where we discuss upcoming events, projects, and opportunities.',
    date: '2025-10-20',
    dateFormatted: 'Sunday, October 20, 2025',
    time: '2:00 PM - 4:00 PM',
    location: 'Community Center - Room 203',
    icon: 'groups',
    color: 'primary',
    category: 'monthly'
  },
  {
    id: 'event-2',
    title: 'Robotics Workshop',
    description: 'Learn the basics of robotics programming and build your own robot. All materials provided. Perfect for beginners!',
    date: '2025-10-25',
    dateFormatted: 'Friday, October 25, 2025',
    time: '4:30 PM - 6:30 PM',
    location: 'STEM Lab - Building A',
    icon: 'precision_manufacturing',
    color: 'secondary',
    category: 'general'
  },
  {
    id: 'event-3',
    title: 'Region VI Fall Leadership Conference',
    description: 'Join us for the regional leadership conference featuring workshops, networking, and keynote speakers.',
    date: '2025-11-02',
    dateFormatted: 'Saturday, November 2, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'Convention Center',
    icon: 'school',
    color: 'accent',
    category: 'conference'
  },
  {
    id: 'event-4',
    title: 'Coding Competition',
    description: 'Test your programming skills in our annual coding competition. Prizes for top performers in each category.',
    date: '2025-11-08',
    dateFormatted: 'Friday, November 8, 2025',
    time: '5:00 PM - 8:00 PM',
    location: 'Technology Center - Computer Lab 1',
    icon: 'code',
    color: 'positive',
    category: 'competition'
  },
  {
    id: 'event-5',
    title: 'Engineering Design Challenge',
    description: 'Work in teams to solve a real-world engineering problem. Showcase your creativity and technical skills!',
    date: '2025-11-15',
    dateFormatted: 'Friday, November 15, 2025',
    time: '3:30 PM - 6:00 PM',
    location: 'Engineering Workshop - Maker Space',
    icon: 'engineering',
    color: 'warning',
    category: 'competition'
  },
  {
    id: 'event-6',
    title: 'Leadership Development Workshop',
    description: 'Special workshop focused on developing leadership skills and team management.',
    date: '2025-11-18',
    dateFormatted: 'Monday, November 18, 2025',
    time: '6:00 PM - 7:30 PM',
    location: 'Community Center - Room 203',
    icon: 'groups',
    color: 'primary',
    category: 'general'
  },
  {
    id: 'event-7',
    title: 'NSBE National Convention',
    description: 'Annual national convention bringing together NSBE Jr. chapters from across the country.',
    date: '2025-11-20',
    dateFormatted: 'Wednesday, November 20, 2025',
    time: 'All Day',
    location: 'Los Angeles Convention Center',
    icon: 'celebration',
    color: 'accent',
    category: 'conference'
  },
  {
    id: 'event-8',
    title: 'Regional Robotics Competition',
    description: 'Compete against other chapters in the regional robotics challenge. Demonstrate your robot\'s capabilities!',
    date: '2025-11-22',
    dateFormatted: 'Friday, November 22, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'High School Gymnasium',
    icon: 'emoji_events',
    color: 'positive',
    category: 'competition'
  },
  {
    id: 'event-9',
    title: 'Monthly Chapter Meeting - November',
    description: 'Join us for our monthly chapter meeting where we discuss upcoming events, projects, and opportunities.',
    date: '2025-11-24',
    dateFormatted: 'Monday, November 24, 2025',
    time: '2:00 PM - 4:00 PM',
    location: 'Community Center - Room 203',
    icon: 'groups',
    color: 'primary',
    category: 'monthly'
  },
  {
    id: 'event-10',
    title: 'Community STEM Fair',
    description: 'Showcase your projects to the community! Demonstrate experiments, display your work, and inspire others.',
    date: '2025-11-28',
    dateFormatted: 'Friday, November 28, 2025',
    time: '12:00 PM - 5:00 PM',
    location: 'City Park - Main Pavilion',
    icon: 'science',
    color: 'primary',
    category: 'general'
  },
  {
    id: 'event-11',
    title: 'Holiday Social & Awards',
    description: 'Celebrate the year\'s achievements with food, fun, and our annual awards ceremony. Family and friends welcome!',
    date: '2025-12-10',
    dateFormatted: 'Tuesday, December 10, 2025',
    time: '6:00 PM - 9:00 PM',
    location: 'Community Center - Main Hall',
    icon: 'celebration',
    color: 'secondary',
    category: 'general'
  },
  {
    id: 'event-12',
    title: 'Monthly Chapter Meeting - December',
    description: 'Join us for our final monthly chapter meeting of the year. Year-end review and planning for next year.',
    date: '2025-12-15',
    dateFormatted: 'Monday, December 15, 2025',
    time: '2:00 PM - 4:00 PM',
    location: 'Community Center - Room 203',
    icon: 'groups',
    color: 'primary',
    category: 'monthly'
  }
];

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
      .filter(event => new Date(event.date + 'T00:00:00') >= today)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return limit ? upcoming.slice(0, limit) : upcoming;
  }

  async getEventsByDate(date: string): Promise<NsbeEvent[]> {
    await this.simulateDelay();
    return mockEvents.filter(event => event.date === date);
  }

  async getEventsByCategory(category: EventCategory, limit?: number): Promise<NsbeEvent[]> {
    await this.simulateDelay();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const filtered = mockEvents
      .filter(event => event.category === category && new Date(event.date + 'T00:00:00') >= today)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

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


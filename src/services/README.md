# CMS Manager Service

This directory contains the CMS Manager Service and its implementations.

## Overview

The CMS Manager Service provides a consistent interface for retrieving news and events data from a CMS system.

## Structure

- `CmsManagerService.ts` - Abstract base class and TypeScript interfaces
- `mocks/MockCmsManagerService.ts` - Mock implementation with test data
- `index.ts` - Central export point

## Usage

### Basic Usage with Mock Service

```typescript
import { mockCmsService } from '@/services';

// Get all news
const news = await mockCmsService.getNews();

// Get recent news (limit to 5)
const recentNews = await mockCmsService.getRecentNews(5);

// Get a specific news item
const newsItem = await mockCmsService.getNewsById('news-1');

// Get all events
const events = await mockCmsService.getEvents();

// Get upcoming events
const upcomingEvents = await mockCmsService.getUpcomingEvents();

// Get events for a specific date
const dateEvents = await mockCmsService.getEventsByDate('2025-10-20');
```

### Using in Vue Components

```vue
<script setup>
import { ref, onMounted } from 'vue';
import { mockCmsService } from '@/services';

const newsItems = ref([]);
const events = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    newsItems.value = await mockCmsService.getRecentNews(5);
    events.value = await mockCmsService.getUpcomingEvents();
  } catch (error) {
    console.error('Failed to load data:', error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else>
    <NewsComponent :news-items="newsItems" />
    <EventsComponent :events="events" />
  </div>
</template>
```

## Data Types

### NewsItem

```typescript
type NewsItem = {
  id: string;
  title: string;
  content: string;
  link: string;
  day: string;          // Day number (e.g., "15")
  month: string;        // Month abbreviation (e.g., "OCT")
  date: string;         // ISO date (YYYY-MM-DD)
  publishedAt?: Date;   // Optional published timestamp
}
```

### NsbeEvent

```typescript
type NsbeEvent = {
  id: string;
  title: string;
  description: string;
  date: string;         // ISO date (YYYY-MM-DD)
  dateFormatted: string; // Human-readable date
  time: string;         // Time range (e.g., "2:00 PM - 4:00 PM")
  location: string;
  icon: string;         // Material icon name
  color: string;        // Quasar color name
}
```

## Creating a Custom Implementation

To connect to a real CMS, extend the `CmsManagerService` class:

```typescript
import { CmsManagerService, NewsItem, NsbeEvent } from './CmsManagerService';

export class MyCmsService extends CmsManagerService {
  private apiUrl = 'https://api.mycms.com';

  async getNews(): Promise<NewsItem[]> {
    const response = await fetch(`${this.apiUrl}/news`);
    const data = await response.json();
    return this.transformNewsData(data);
  }

  async getEvents(): Promise<NsbeEvent[]> {
    const response = await fetch(`${this.apiUrl}/events`);
    const data = await response.json();
    return this.transformEventsData(data);
  }

  // Implement other methods...
}
```

## Adding Test Data

To add more test data, edit `mocks/MockCmsManagerService.ts`:

1. Add items to the `mockNewsItems` array for news
2. Add items to the `mockEvents` array for events

The mock service will automatically include your new data.


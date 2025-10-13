/**
 * Services Index
 *
 * Central export point for all data services
 */

// Export types
export type {
  NewsItem,
  EventItem,
  GalleryItem,
  GalleryPhoto,
  GalleryAlbum,
  NewsCategory,
  EventCategory
} from './types';

// Export News Service
export {
  NewsDataService,
  NewsDataSource,
  JsonNewsDataSource,
  CmsNewsDataSource,
  newsService
} from './NewsDataService';

// Export Events Service
export {
  EventsDataService,
  EventsDataSource,
  JsonEventsDataSource,
  CmsEventsDataSource,
  eventsService
} from './EventsDataService';

// Export Gallery Service
export {
  GalleryDataService,
  GalleryDataSource,
  JsonGalleryDataSource,
  CmsGalleryDataSource,
  galleryService
} from './GalleryDataService';

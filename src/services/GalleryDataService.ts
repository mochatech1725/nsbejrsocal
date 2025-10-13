/**
 * Gallery Data Service
 *
 * Manages gallery data using delegation pattern.
 * Data source can be swapped between JSON, CMS, or other implementations.
 */

import { GalleryItem, GalleryAlbum } from './types';
// @ts-ignore - JSON import
import galleryData from '../data/gallery.json';

/**
 * Abstract Gallery Data Source
 * Implement this to create different data source backends
 */
export abstract class GalleryDataSource {
  abstract fetchAlbums(): Promise<GalleryAlbum[]>;
  abstract fetchItems(): Promise<GalleryItem[]>;
}

/**
 * JSON Gallery Data Source
 * Fetches gallery data from JSON file
 */
export class JsonGalleryDataSource extends GalleryDataSource {
  async fetchAlbums(): Promise<GalleryAlbum[]> {
    // Simulate async delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return galleryData.albums as GalleryAlbum[];
  }

  async fetchItems(): Promise<GalleryItem[]> {
    // Simulate async delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return galleryData.items as GalleryItem[];
  }
}

/**
 * CMS Gallery Data Source (placeholder for future implementation)
 * Fetches gallery data from CMS
 */
export class CmsGalleryDataSource extends GalleryDataSource {
  async fetchAlbums(): Promise<GalleryAlbum[]> {
    // TODO: Implement CMS API calls
    throw new Error('CMS integration not yet implemented');
  }

  async fetchItems(): Promise<GalleryItem[]> {
    // TODO: Implement CMS API calls
    throw new Error('CMS integration not yet implemented');
  }
}

/**
 * Gallery Data Service
 * Main service for accessing gallery data
 */
export class GalleryDataService {
  constructor(private galleryDataSource: GalleryDataSource) {}

  /**
   * Get all gallery items
   */
  async getGalleryItems(): Promise<GalleryItem[]> {
    return await this.galleryDataSource.fetchItems();
  }

  /**
   * Get gallery items by category
   */
  async getGalleryItemsByCategory(category: string): Promise<GalleryItem[]> {
    const items = await this.galleryDataSource.fetchItems();
    return items.filter(item => item.category === category);
  }

  /**
   * Get all albums
   */
  async getAlbums(): Promise<GalleryAlbum[]> {
    return await this.galleryDataSource.fetchAlbums();
  }

  /**
   * Get albums by category
   */
  async getAlbumsByCategory(category: string): Promise<GalleryAlbum[]> {
    const albums = await this.galleryDataSource.fetchAlbums();
    return albums.filter(album => album.category === category);
  }

  /**
   * Get meeting albums (convenience method)
   */
  async getMeetingAlbums(): Promise<GalleryAlbum[]> {
    return await this.getAlbumsByCategory('meetings');
  }

  /**
   * Get a specific album by ID
   */
  async getAlbumById(id: string): Promise<GalleryAlbum | null> {
    const albums = await this.galleryDataSource.fetchAlbums();
    return albums.find(album => album.id === id) || null;
  }
}

// Export singleton instance using JSON data source
export const galleryService = new GalleryDataService(new JsonGalleryDataSource());


/**
 * News Data Service
 *
 * Manages news data using delegation pattern.
 * Data source can be swapped between JSON, CMS, or other implementations.
 */

import { NewsItem, NewsCategory } from './types';
// @ts-ignore - JSON import
import newsData from '../data/news.json';

/**
 * Abstract News Data Source
 * Implement this to create different data source backends
 */
export abstract class NewsDataSource {
  abstract fetchArticles(): Promise<NewsItem[]>;
}

/**
 * JSON News Data Source
 * Fetches news from JSON file
 */
export class JsonNewsDataSource extends NewsDataSource {
  async fetchArticles(): Promise<NewsItem[]> {
    // Simulate async delay
    await new Promise(resolve => setTimeout(resolve, 100));

    return (newsData.news as any[]).map(item => ({
      ...item,
      publishedAt: new Date(item.date + 'T00:00:00')
    }));
  }
}

/**
 * CMS News Data Source (placeholder for future implementation)
 * Fetches news from CMS
 */
export class CmsNewsDataSource extends NewsDataSource {
  async fetchArticles(): Promise<NewsItem[]> {
    // TODO: Implement CMS API calls
    throw new Error('CMS integration not yet implemented');
  }
}

/**
 * News Data Service
 * Main service for accessing news data
 */
export class NewsDataService {
  constructor(private newsDataSource: NewsDataSource) {}

  /**
   * Get all news articles
   */
  async getNews(): Promise<NewsItem[]> {
    return await this.newsDataSource.fetchArticles();
  }

  /**
   * Get a specific news article by ID
   */
  async getNewsById(id: string): Promise<NewsItem | null> {
    const articles = await this.newsDataSource.fetchArticles();
    return articles.find(item => item.id === id) || null;
  }

  /**
   * Get recent news articles
   */
  async getRecentNews(limit: number = 5): Promise<NewsItem[]> {
    const articles = await this.newsDataSource.fetchArticles();
    return articles
      .sort((a, b) => {
        const dateA = a.publishedAt || new Date(a.date);
        const dateB = b.publishedAt || new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      })
      .slice(0, limit);
  }

  /**
   * Get news articles by category
   */
  async getNewsByCategory(category: NewsCategory, limit?: number): Promise<NewsItem[]> {
    const articles = await this.newsDataSource.fetchArticles();
    const filtered = articles
      .filter(item => item.category === category)
      .sort((a, b) => {
        const dateA = a.publishedAt || new Date(a.date);
        const dateB = b.publishedAt || new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      });

    return limit ? filtered.slice(0, limit) : filtered;
  }
}

// Export singleton instance using JSON data source
export const newsService = new NewsDataService(new JsonNewsDataSource());


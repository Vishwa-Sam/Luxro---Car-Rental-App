export type BlogCategory = 'Travel Tips' | 'City Guides' | 'Vehicle Care' | 'Hosting Tips';

export type BlogContentType = 'paragraph' | 'heading' | 'list' | 'image';

export interface BlogContentBlock {
  type: BlogContentType;

  /**
   * paragraph → string
   * heading   → string
   * list      → string[]
   * image     → string (image URL)
   */
  value: string | string[];
  caption?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  coverImage: string;
  cardImages?: string[];
  cardSummary?: string; 
  author: string;
  publishedAt: string;
  readTime: number;
  featured?: boolean;
  content: BlogContentBlock[];
}

export interface miniBlogPost {
  title: string;
  excerpt: string;
  meta: string;
  image: string;
}

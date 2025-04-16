
import { mockPosts as originalMockPosts } from './mockData';

// Extended type with avatarUrl
export interface ExtendedArtist {
  name: string;
  region: string;
  avatarUrl: string;
}

// Extended post type
export interface PublicPost {
  id: string;
  imageUrl: string;
  caption: string;
  artist: ExtendedArtist;
  stats: {
    likeCount: number;
    commentCount: number;
  };
}

// Extend the original posts with additional fields
export const mockPosts: PublicPost[] = originalMockPosts.map(post => ({
  id: post.id,
  // Using placeholder.svg which is available in the project
  imageUrl: "/placeholder.svg",
  caption: post.caption,
  artist: {
    name: post.artist.name,
    region: post.artist.region,
    // Using the contact avatar which we know exists
    avatarUrl: "/lovable-uploads/7ba80346-7bd8-4792-8b24-4fd7a8756ebc.png"
  },
  stats: post.stats
}));

// Add the contact avatar for the footer
export const contactAvatar = "/lovable-uploads/7ba80346-7bd8-4792-8b24-4fd7a8756ebc.png";

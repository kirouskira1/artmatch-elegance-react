
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
  ...post,
  imageUrl: `/images/art-editals/${post.id}.jpg`, // Paths for art images
  artist: {
    ...post.artist,
    avatarUrl: post.artist.name === "Adriano Rodrigues" 
      ? "/lovable-uploads/7ba80346-7bd8-4792-8b24-4fd7a8756ebc.png" 
      : `/images/artists/${post.artist.name.split(' ')[0].toLowerCase()}.jpg` // Avatar images
  }
}));

// Add the contact avatar for the footer
export const contactAvatar = "/lovable-uploads/7ba80346-7bd8-4792-8b24-4fd7a8756ebc.png";

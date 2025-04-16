
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
  imageUrl: post.id === "p1" ? "/images/ceramics-1080p.jpg" :
           post.id === "p2" ? "/images/painting-1080p.jpg" :
           post.id === "p3" ? "/images/theater-1080p.jpg" :
           post.id === "p4" ? "/images/music-1080p.jpg" :
           post.id === "p5" ? "/images/dance-1080p.jpg" :
           "/images/literature-1080p.jpg",
  caption: post.caption,
  artist: {
    name: post.artist.name,
    region: post.artist.region,
    avatarUrl: post.artist.name === "Adriano Rodrigues" 
      ? "/lovable-uploads/7ba80346-7bd8-4792-8b24-4fd7a8756ebc.png" 
      : `/images/artists/${post.artist.name.split(' ')[0].toLowerCase()}.jpg`
  },
  stats: post.stats
}));

// Add the contact avatar for the footer
export const contactAvatar = "/lovable-uploads/7ba80346-7bd8-4792-8b24-4fd7a8756ebc.png";


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

// Use existing available images for the posts
export const mockPosts: PublicPost[] = originalMockPosts.map((post, index) => ({
  id: post.id,
  // Using placeholder.svg which is guaranteed to exist
  imageUrl: "/placeholder.svg",
  caption: post.caption,
  artist: {
    name: post.artist.name,
    region: post.artist.region,
    // Using avatar that we know exists in the project
    avatarUrl: "/lovable-uploads/7ba80346-7bd8-4792-8b24-4fd7a8756ebc.png"
  },
  stats: post.stats
}));

// Add descriptive titles for the editals based on northeastern art forms
export const editalDescriptions = [
  "Cerâmica Nordestina: Tradições em Barro",
  "Xilogravura: Arte da Literatura de Cordel",
  "Dança Regional: Expressões Corporais do Sertão",
  "Música Folclórica: Ritmos do Nordeste",
  "Arte Visual: Cores Vibrantes do Semiárido",
  "Teatro Popular: Culturas Tradicionais"
];

// Add the contact avatar for the footer
export const contactAvatar = "/lovable-uploads/7ba80346-7bd8-4792-8b24-4fd7a8756ebc.png";

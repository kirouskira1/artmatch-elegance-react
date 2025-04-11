import { mockPosts as originalMockPosts } from './mockData';

// Extend the original posts with additional fields
export const mockPosts = originalMockPosts.map(post => ({
  ...post,
  imageUrl: `/images/art-editals/${post.id}.jpg`, // Assumindo que teremos estas imagens
  artist: {
    ...post.artist,
    avatarUrl: `/images/artists/${post.artist.name.split(' ')[0].toLowerCase()}.jpg` // Imagem de perfil do artista
  }
}));

// Export the original type but keep it compatible
export type { PublicPost } from './mockData';

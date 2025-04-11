
import React, { useState, useEffect } from 'react';
import PublicPostCard from './PublicPostCard';
import { mockPosts, PublicPost } from '@/lib/extendedMockData';
import { Skeleton } from '@/components/ui/skeleton';

export const FeedGrid = () => {
  const [posts, setPosts] = useState<PublicPost[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setPosts(mockPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col space-y-6 max-w-2xl mx-auto">
      {loading 
        ? Array.from({ length: 4 }).map((_, index) => (
            <div key={`skeleton-${index}`} className="flex flex-col gap-2">
              <Skeleton className="w-full h-96 rounded-md" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          ))
        : posts.map(post => (
            <PublicPostCard key={post.id} post={post} />
          ))
      }
    </div>
  );
};

export default FeedGrid;


import React, { useState, useEffect } from 'react';
import PublicPostCard from './PublicPostCard';
import { mockPosts, PublicPost } from '@/lib/mockData';
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {loading 
        ? Array.from({ length: 8 }).map((_, index) => (
            <div key={`skeleton-${index}`} className="flex flex-col gap-2">
              <Skeleton className="w-full h-64 rounded-md" />
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

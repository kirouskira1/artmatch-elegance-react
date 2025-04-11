
import React from 'react';
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart, MessageSquare, Share2 } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from '@/hooks/useAuth';
import { PublicPost } from '@/lib/mockData';
import { Badge } from '@/components/ui/badge';

interface PublicPostCardProps {
  post: PublicPost;
}

const PublicPostCard: React.FC<PublicPostCardProps> = ({ post }) => {
  const { ref, isVisible } = useScrollAnimation();
  const { user, setShowAuthModal } = useAuth();
  
  const handleInteraction = () => {
    if (!user) {
      setShowAuthModal(true);
    }
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        <div className="relative w-full pt-[100%] overflow-hidden bg-muted">
          <img
            src={post.imageUrl}
            alt={post.caption}
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
        
        <CardContent className="p-4 flex-grow">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="font-medium text-sm">{post.artist.name}</span>
              <Badge variant="outline" className="text-xs bg-artmatch-purple/10 text-artmatch-purple">
                {post.artist.region}
              </Badge>
            </div>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">{post.caption}</p>
        </CardContent>
        
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center gap-1 p-1 text-muted-foreground hover:text-artmatch-purple"
              onClick={handleInteraction}
            >
              <Heart className="h-4 w-4" />
              <span className="text-xs">{post.stats.likeCount}</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center gap-1 p-1 text-muted-foreground hover:text-artmatch-purple"
              onClick={handleInteraction}
            >
              <MessageSquare className="h-4 w-4" />
              <span className="text-xs">{post.stats.commentCount}</span>
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="p-1 text-muted-foreground hover:text-artmatch-purple"
            onClick={handleInteraction}
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PublicPostCard;

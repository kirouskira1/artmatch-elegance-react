
import React from 'react';
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart, MessageSquare, Share2 } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from '@/hooks/useAuth';
import { PublicPost } from '@/lib/mockData';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
        <div className="p-4 flex items-center gap-3">
          <Avatar>
            <AvatarImage src={post.artist.avatarUrl} alt={post.artist.name} />
            <AvatarFallback>{post.artist.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{post.artist.name}</p>
            <Badge variant="outline" className="text-xs bg-artmatch-purple/10 text-artmatch-purple">
              {post.artist.region}
            </Badge>
          </div>
        </div>
        
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={post.imageUrl}
            alt={post.caption}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
        
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">{post.caption}</p>
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

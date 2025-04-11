
import React from 'react';
import FeedGrid from './FeedGrid';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

const SocialFeed: React.FC = () => {
  const { user, setShowAuthModal } = useAuth();

  return (
    <section className="py-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-artmatch-purple">Editais em destaque</h2>
            <p className="text-muted-foreground mt-2">
              Descubra oportunidades para artistas do Nordeste brasileiro
            </p>
          </div>
          
          {!user && (
            <Button 
              onClick={() => setShowAuthModal(true)}
              className="bg-artmatch-purple hover:bg-artmatch-dark-purple text-white"
            >
              Faça login para interagir
            </Button>
          )}
        </div>
        
        <FeedGrid />
      </div>
    </section>
  );
};

export default SocialFeed;

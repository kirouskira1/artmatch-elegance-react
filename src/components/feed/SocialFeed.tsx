
import React from 'react';
import FeedGrid from './FeedGrid';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

const SocialFeed: React.FC = () => {
  const { user, setShowAuthModal } = useAuth();

  return (
    <section className="py-12 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-artmatch-purple">Editais em destaque</h2>
            <p className="text-muted-foreground mt-2">
              Descubra oportunidades para artistas do Nordeste brasileiro
            </p>
          </div>
          
          <div className="flex gap-3">
            {!user && (
              <>
                <Button 
                  variant="outline"
                  onClick={() => setShowAuthModal(true)}
                  className="border-artmatch-purple text-artmatch-purple hover:bg-artmatch-purple/10"
                >
                  Entrar no site
                </Button>
                <Button 
                  onClick={() => setShowAuthModal(true)}
                  className="bg-artmatch-purple hover:bg-artmatch-dark-purple text-white"
                >
                  Cadastrar
                </Button>
              </>
            )}
          </div>
        </div>
        
        <FeedGrid />
      </div>
    </section>
  );
};

export default SocialFeed;

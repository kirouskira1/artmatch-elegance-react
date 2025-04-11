
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const artImages = [
  "/images/art-gallery-1080p.jpg",
  "/images/sculpture-1080p.jpg",
  "/images/painting-1080p.jpg",
  "/images/ceramic-art-1080p.jpg",
];

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { setShowAuthModal } = useAuth();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen pt-24 pb-10 flex items-center relative overflow-hidden"
    >
      {/* Background Design Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-artmatch-purple/10 to-transparent rounded-bl-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-artmatch-blue/10 to-transparent rounded-tr-full -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={cn(
            "space-y-6 transition-all duration-700 delay-100",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold heading-gradient leading-tight">
              Conecte-se aos melhores editais artísticos do Brasil
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Descubra oportunidades perfeitas para seu talento e leve sua carreira artística para o próximo nível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="btn-primary"
                onClick={() => setShowAuthModal(true)}
              >
                Cadastre-se Agora
              </Button>
              <Button 
                variant="outline" 
                className="btn-secondary"
                onClick={() => setShowAuthModal(true)}
              >
                Entrar no Site
              </Button>
            </div>
          </div>
          
          <div className={cn(
            "relative transition-all duration-700 delay-300",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            <Carousel className="w-full max-w-md mx-auto">
              <CarouselContent>
                {artImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-0">
                    <div className="overflow-hidden rounded-2xl shadow-xl">
                      <img 
                        src={image} 
                        alt={`Arte ${index + 1}`} 
                        className="w-full h-[300px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

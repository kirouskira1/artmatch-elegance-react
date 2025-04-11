
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

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
              <Button className="btn-primary">
                Cadastre-se Agora
              </Button>
              <Button variant="outline" className="btn-secondary">
                Saiba Mais
              </Button>
            </div>
          </div>
          
          <div className={cn(
            "relative transition-all duration-700 delay-300",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-artmatch-purple to-artmatch-blue rounded-full opacity-20 blur-3xl animate-pulse" />
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-xl w-5/6 aspect-[4/3] p-4 rotate-3 animate-float">
                  <div className="w-full h-full bg-gradient-to-r from-artmatch-purple/30 to-artmatch-blue/30 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white flex items-center justify-center">
                        <span className="text-2xl">🎨</span>
                      </div>
                      <p className="font-medium text-white text-shadow">Seu Próximo Projeto</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

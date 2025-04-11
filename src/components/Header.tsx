
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "glass-effect py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-display font-bold text-artmatch-purple">
            Artmatch
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#hero" className="text-gray-800 hover:text-artmatch-purple transition-colors">
            Início
          </a>
          <a href="#benefits" className="text-gray-800 hover:text-artmatch-purple transition-colors">
            Benefícios
          </a>
          <a href="#how-it-works" className="text-gray-800 hover:text-artmatch-purple transition-colors">
            Como Funciona
          </a>
          <a href="#testimonials" className="text-gray-800 hover:text-artmatch-purple transition-colors">
            Depoimentos
          </a>
          <a href="#contact" className="text-gray-800 hover:text-artmatch-purple transition-colors">
            Contato
          </a>
        </nav>
        
        <div className="hidden md:block">
          <Button className="btn-primary">
            Cadastre-se Agora
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <Menu size={24} />
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "absolute top-full left-0 right-0 glass-effect md:hidden transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
        )}
      >
        <nav className="flex flex-col space-y-4 px-6">
          <a 
            href="#hero" 
            className="text-gray-800 hover:text-artmatch-purple transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Início
          </a>
          <a 
            href="#benefits" 
            className="text-gray-800 hover:text-artmatch-purple transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Benefícios
          </a>
          <a 
            href="#how-it-works" 
            className="text-gray-800 hover:text-artmatch-purple transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Como Funciona
          </a>
          <a 
            href="#testimonials" 
            className="text-gray-800 hover:text-artmatch-purple transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Depoimentos
          </a>
          <a 
            href="#contact" 
            className="text-gray-800 hover:text-artmatch-purple transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contato
          </a>
          <Button className="btn-primary w-full">
            Cadastre-se Agora
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error("Por favor, insira um e-mail válido.");
      return;
    }
    
    // Simulate subscription
    toast.success("Obrigado por se inscrever em nossa newsletter!");
    setEmail("");
  };

  return (
    <footer id="contact" className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-display font-bold text-artmatch-purple mb-4">
              Artmatch
            </h3>
            <p className="text-gray-600 mb-4">
              Conectando artistas a oportunidades excepcionais para impulsionar carreiras criativas.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-artmatch-purple/10 flex items-center justify-center text-artmatch-purple hover:bg-artmatch-purple hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-artmatch-purple/10 flex items-center justify-center text-artmatch-purple hover:bg-artmatch-purple hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-artmatch-purple/10 flex items-center justify-center text-artmatch-purple hover:bg-artmatch-purple hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-artmatch-purple/10 flex items-center justify-center text-artmatch-purple hover:bg-artmatch-purple hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-artmatch-purple transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-artmatch-purple transition-colors">
                  Para Artistas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-artmatch-purple transition-colors">
                  Para Instituições
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-artmatch-purple transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-artmatch-purple transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Informações</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-artmatch-purple transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-artmatch-purple transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-artmatch-purple transition-colors">
                  Suporte
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-artmatch-purple transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Inscreva-se para receber atualizações sobre oportunidades artísticas.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <div className="flex-grow">
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  className="h-10 rounded-l-full rounded-r-none border-r-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button type="submit" className="h-10 rounded-r-full rounded-l-none bg-artmatch-purple hover:bg-artmatch-purple/90">
                <Send size={16} />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Artmatch. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 text-sm hover:text-artmatch-purple transition-colors">
                Termos
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-artmatch-purple transition-colors">
                Privacidade
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-artmatch-purple transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

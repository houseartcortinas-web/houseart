import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-primary font-serif">
            HouseArt Cortinas
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-accent transition-colors font-medium text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-accent transition-colors font-medium text-left"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-foreground hover:text-accent transition-colors font-medium text-left"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="text-foreground hover:text-accent transition-colors font-medium text-left"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-accent transition-colors font-medium text-left"
            >
              Contato
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

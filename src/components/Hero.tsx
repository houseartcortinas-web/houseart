import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-room.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start pt-20"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 font-serif leading-tight">
            Cortinas e Persianas sob medida
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Design exclusivo, materiais nobres e acabamento impecável para sua residência ou escritório
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-foreground font-semibold px-8 py-6 text-lg rounded-md shadow-lg hover:shadow-xl transition-all"
            asChild
          >
            <a
              href="https://wa.me/5547999090328"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Orçamento
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

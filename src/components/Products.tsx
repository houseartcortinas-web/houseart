import { Blinds, Waves, Lightbulb, Sun, Grid3x3, Cog } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      icon: Sun,
      title: "Cortinas Blackout",
      description: "Bloqueio total de luz com tecidos de alta qualidade e diversos padrões."
    },
    {
      icon: Waves,
      title: "Cortinas de Linho",
      description: "Elegância natural com tecido nobre que permite controle suave da luminosidade."
    },
    {
      icon: Grid3x3,
      title: "Persianas Horizontais",
      description: "Controle preciso de luz e privacidade com design moderno e funcional."
    },
    {
      icon: Blinds,
      title: "Persiana Rolô",
      description: "Praticidade e estilo minimalista para ambientes contemporâneos."
    },
    {
      icon: Waves,
      title: "Cortinas Wave",
      description: "Sistema de ondas perfeitas para um visual sofisticado e elegante."
    },
    {
      icon: Cog,
      title: "Automação",
      description: "Motorização e controle remoto para máximo conforto e tecnologia."
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 font-serif">
            Nossos Produtos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções personalizadas para cada tipo de ambiente e necessidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg bg-card"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <product.icon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-2xl font-serif">
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

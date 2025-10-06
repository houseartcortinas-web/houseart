import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const Gallery = () => {
  const images = [
    {
      src: gallery1,
      title: "Sala Moderna",
      description: "Cortina de linho com iluminação LED integrada"
    },
    {
      src: gallery2,
      title: "Quarto Elegante",
      description: "Cortina blackout com controle de luminosidade"
    },
    {
      src: gallery3,
      title: "Escritório Corporativo",
      description: "Persianas horizontais com design moderno"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 font-serif">
            Nossa Galeria
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos nossos trabalhos realizados em residências e escritórios de alto padrão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-primary-foreground mb-2 font-serif">
                  {image.title}
                </h3>
                <p className="text-primary-foreground/90">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

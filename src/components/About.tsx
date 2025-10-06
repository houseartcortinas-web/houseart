const About = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 text-center font-serif">
          Sobre nós
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <p className="text-lg text-foreground leading-relaxed">
            Bem-vindo à <strong>HouseArt cortinas e persianas</strong>, a sua loja de cortinas de confiança em Balneário Camboriú e região!
          </p>
          
          <p className="text-lg text-foreground leading-relaxed">
            Há <strong>7 anos de experiência</strong>, oferecendo qualidade e elegância para sua casa. Temos uma ampla gama de cortinas: blackout, persianas, cortinas de tecido e mais. Oferecemos serviços de personalização para garantir que suas cortinas sejam únicas.
          </p>
          
          <p className="text-lg text-foreground leading-relaxed">
            Valorizamos a personalização e o atendimento consultivo, entendendo as necessidades específicas de cada projeto para recomendar as melhores soluções em termos de estética, funcionalidade e durabilidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

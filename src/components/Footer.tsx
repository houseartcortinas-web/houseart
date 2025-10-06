const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2 font-serif">HouseArt Cortinas</h3>
          <p className="text-primary-foreground/80 mb-4">
            Cortinas e Persianas sob medida
          </p>
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} HouseArt Cortinas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

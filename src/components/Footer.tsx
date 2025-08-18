import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="uploads/logo.jpg"
                alt="Marcelo Doces e Cia"
                className="h-16 w-16 object-contain bg-white rounded-full p-2"
              />
              <div>
                <h3 className="text-2xl font-bold">Marcelo Doces e Cia</h3>
                <p className="text-sm opacity-90">Doçura que conquista corações</p>
              </div>
            </div>
            <p className="text-sm opacity-80 max-w-md">
              Há mais de 15 anos levando os melhores doces artesanais para toda a região.
              Qualidade, sabor e carinho em cada produto.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+5543991334770"
                className="flex items-center space-x-2 hover:text-candy-pink transition-colors cursor-pointer">
                <Phone className="h-4 w-4" />
                <span>(43) 99133-4770</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Bela+Vista+do+Paraíso,+PR,+Brasil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-candy-pink transition-colors cursor-pointer">
                <MapPin className="h-4 w-4" />
                <span>Bela Vista do Paraíso</span>
              </a>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Seg à Sáb: 8h às 18h</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Siga-nos</h4>
            <div className="flex items-start space-x-8">
              {/* Instagram */}
              <div className="flex items-center mt-8">
                <a
                  href="https://www.instagram.com/marcelo_doces_e_cia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-full transition-colors cursor-pointer flex items-center justify-center"
                >
                  <Instagram className="h-5 w-5 text-primary" />
                </a>
              </div>
              
              {/* Logo Maria Dev mais para cima */}
              <div className="flex items-center">
                <a
                  href="https://wa.me/554399311445?text=Gostaria%20de%20fazer%20um%20orçamento%20para%20um%20site%20ou%20sistema"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-white rounded-xl transition-colors cursor-pointer"
                  title="Solicite um orçamento para site ou sistema"
                >
                  <img
                    src="uploads/logomaria.png"
                    alt="Maria Dev"
                    className="h-20 w-36 object-contain rounded-xl"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-80">
          <p>&copy; 2024 Marcelo Doces e Cia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
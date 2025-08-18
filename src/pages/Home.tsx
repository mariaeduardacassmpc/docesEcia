import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Star, Gift, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
  <div className="min-h-screen">
    <style>{`
      @keyframes upDown {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(40px); }
      }
    `}</style>
      <section className="bg-gradient-hero py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Doces Selecionados
              <span className="block text-candy-pink"> com Qualidade</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Os melhores doces da região! Paçocas, cocadas, chocolates e muito mais. 
              Produtos selecionados com qualidade garantida, direto na sua cidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center ">
              <Link to="/produtos">
                <Button variant="sweet" size="lg" className="text-lg px-8 py-6 hover:bg-pink-300">
                  <Gift className="mr-2 h-5 w-5" />
                  Ver Produtos
                </Button>
              </Link>
              <Link to="/cidades">
                <Button variant="candy" size="lg" className="text-lg px-8 py-6 bg-candy-yellow hover:bg-yellow-400 text-primary">
                  <Truck className="mr-2 h-5 w-5" />
                  Onde Estamos
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
  <div className="absolute top-20 left-10">
  <img
    src="/uploads/bala1.png"
    alt="Logo Marcelo Doces e Cia"
    className="w-32 h-32 object-contain shadow-none hidden xl:block"
    style={{ animation: 'upDown 2s infinite' }}
  />
</div>
<div className="absolute top-40 right-20">
  <img
    src="/uploads/bala2.png"
    alt="Logo Marcelo Doces e Cia"
    className="w-32 h-32 object-contain shadow-none hidden xl:block"
    style={{ animation: 'upDown 2.5s infinite', animationDelay: '0.5s' }}
  />
</div>
<div className="absolute bottom-20 left-1/4 " style={{ animationDelay: '2s' }}>
  <img
    src="/uploads/bala3.png"
    alt="Logo Marcelo Doces e Cia"
    className="w-16 h-16 object-contain shadow-none hidden xl:block"
    style={{ animation: 'upDown 3s infinite', animationDelay: '1s' }}
  />
</div>
</section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Por que Escolher Nossos Doces?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Selecionamos os melhores fornecedores e produtos para garantir qualidade e sabor em cada entrega.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-sweet hover:shadow-candy transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-candy-pink rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-primary">Produtos Selecionados</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Escolhemos cuidadosamente os melhores doces, priorizando qualidade e sabor em cada produto.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-sweet hover:shadow-candy transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-candy-blue rounded-full flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-primary">Qualidade Garantida</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Trabalhamos apenas com fornecedores confiáveis, garantindo produtos de alta qualidade.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-sweet hover:shadow-candy transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-candy-yellow rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-primary">Entrega Regional</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Atendemos várias cidades da região durante a semana, levando doçura até você.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gradient-hero py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Pronto para Experimentar?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Descubra nossos sabores únicos e transforme qualquer momento em uma celebração doce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/produtos">
              <Button variant="sweet" size="lg" className="text-lg px-8 py-6 hover:bg-pink-300">
                Ver Todos os Produtos
              </Button>
            </Link>
            <Link to="/sobre">
              <Button variant="sweet" size="lg" className="text-lg px-8 py-6 hover:bg-pink-300">
                Conheça Nossa História
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Gift } from "lucide-react";
import { useState } from "react";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const products = [
    {
      id: 1,
      name: "Paçoca São João",
      description: "Paçoca cremosa e saborosa, feita com amendoim de primeira qualidade.",
      category: "Doces",
      rating: 5,
      colors: ["bg-candy-yellow", "bg-candy-green"],
      image: "/uploads/paçocasaojoao.jpeg"
    },
    {
      id: 2,
      name: "Paçoca Rolha Ki-Kakau",
      description: "Paçoca rolha coberta com chocolate ao leite. ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
      category: "Doces",
      rating: 5,
      colors: ["bg-candy-pink", "bg-candy-blue"],
      image: "/uploads/paçocarolha.jpeg"
    },
    {
      id: 3,
      name: "Pé de Moça Moça Reis",
      description: "Feito com amendoim, leite condensado e outros ingredientes.",
      category: "Doces",
      rating: 5,
      colors: ["bg-candy-blue", "bg-candy-yellow"],
      image: "/uploads/pedemoca.jpeg"
    },
    {
      id: 4,
      name: "Foundant de Leite ",
      description: "É um doce cremoso e macio, feito à base de leite e açúcar.",
      category: "Doces",
      rating: 5,
      colors: ["bg-candy-yellow", "bg-candy-pink"],
      image: "/uploads/foundant.jpeg"
    },
    {
      id: 5,
      name: "Baton Garoto",
      description: "O chocolate infantil mais querido do Brasil em sua tradicional versão ao leite e branco",
      category: "Chocolates",
      rating: 5,
      colors: ["bg-candy-blue", "bg-candy-green"],
      image: "/uploads/baton.jpeg"
    },
    {
      id: 6,
      name: "Dadinho",
      description: "Produzido à base de amendoim.  ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
      category: "Doces",
      rating: 5,
      colors: ["bg-candy-yellow", "bg-candy-blue"],
      image: "/uploads/dadinho.jpeg"
    },
    {
      id: 7,
      name: "Doce de Abóbora Moça Reis",
      description: "Doce tradicional brasileiro, caseiro.",
      category: "Doces",
      rating: 5,
      colors: ["bg-candy-pink", "bg-candy-green"],
      image: "/uploads/docedeabobora.jpeg"
    },
    {
      id: 8,
      name: "Castanha Mix",
      description: "Combinando amendoim, uva passa, castanha de caju, castanha do Pará etc.",
      category: "Castanhas",
      rating: 5,
      colors: ["bg-candy-blue", "bg-candy-pink"],
      image: "/uploads/castanhamix.jpeg"
    },
    {
      id: 9,
      name: "KitKat Nestlé",
      description: "O equilíbrio perfeito entre wafer e o chocolate ao leite Nestlé.  ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
      category: "Chocolates",
      rating: 5,
      colors: ["bg-candy-green", "bg-candy-yellow"],
      image: "/uploads/kitkat.jpeg"
    },
    {
      id: 10,
      name: "Prestígio Nestlé",
      description: "A combinação perfeita de coco e chocolate Nestlé. ㅤㅤㅤㅤㅤㅤ ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
      category: "Chocolates",
      rating: 5,
      colors: ["bg-candy-yellow", "bg-candy-pink"],
      image: "/uploads/prestigio.jpeg"
    },
    {
      id: 11,
      name: "Moça",
      description: "Mistura do chocolate ao leite e sabor inconfundível do leite Moça. ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
      category: "Chocolates",
      rating: 5,
      colors: ["bg-candy-yellow", "bg-candy-pink"],
      image: "/uploads/moça.jpeg"
    },
    {
      id: 12,
      name: "Trident Menta",
      description: "Refrescante e com sabor intenso de menta.  ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
      category: "Balas/Chicletes",
      rating: 5,
      colors: ["bg-candy-yellow", "bg-candy-pink"],
      image: "/uploads/tridentmenta.jpeg"
    },
    {
      id: 13,
      name: "Trident Melancia",
      description: "Sabor marcante de melancia e sem adição de açúcares.",
      category: "Balas/Chicletes",
      rating: 5,
      colors: ["bg-candy-yellow", "bg-candy-pink"],
      image: "/uploads/tridentmel.jpeg"
    },
    {
      id: 14,
      name: "Trento",
      description: "Chocolate Trento. Consultar sabores. ㅤㅤㅤㅤㅤㅤ",
      category: "Chocolates",
      rating: 5,
      colors: ["bg-candy-yellow", "bg-candy-pink"],
      image: "/uploads/trento (2).jpeg"
    },
    {
      id: 15,
      name: "Cebola Tik's",
      description: "Salgadinho de Milho Cebola Tik's.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
      category: "Salgadinhos",
      rating: 5,
      colors: ["bg-candy-yellow", "bg-candy-pink"],
      image: "/uploads/cebola.jpeg"
    },
    {
      id: 16,
      name: "Goma Gomets",
      description: "O Gomets é um chiclete com sabor intenso e duradouro.",
      category: "Balas/Chicletes",
      rating: 5,
      colors: ["bg-candy-yellow", "bg-candy-pink"],
      image: "/uploads/gomets.jpeg"
    },  {
      id: 17,
      name: "Ducrem Napolitano",
      description: "A união deliciosa de chocolate, morango e creme branco.",
      category: "Doces",
      rating: 5,
      colors: ["bg-candy-yellow", "bg-candy-pink"],
      image: "/uploads/ducrem.jpeg"
    },
    {
      id: 18,
      name: "Geléia Açucarada",
      description: "Geleia Açucarada: doce, brilhante e irresistíve.",
      category: "Doces",
      rating: 5,
      colors: ["bg-candy-yellow", "bg-candy-pink"],
      image: "/uploads/geleia.jpeg"
    },{
      id: 19,
      name: "Suspiro",
      description: "Leve, crocante por fora e delicadamente macio por dentro.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
      category: "Doces",
      rating: 5,
      colors: ["bg-candy-yellow", "bg-candy-pink"],
      image: "/uploads/suspiro.jpeg"
    },
    {
      id: 20,
      name: "Halls",
      description: "Bala Halls. Consultar sabores.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
      category: "Balas/Chicletes",
      rating: 5,
      colors: ["bg-candy-yellow", "bg-candy-pink"],
      image: "/uploads/halls.jpeg"
    },{
      id: 21,
      name: "Sonho de Valsa",
      description: "Bombom Sonho de Valsa.    ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
      category: "Bombons",
      rating: 5,
      colors: ["bg-candy-yellow", "bg-candy-pink"],
      image: "/uploads/sonho.jpeg"
    },
    {
      id: 22,
      name: "Pé de Moça Apetitoso",
      description: "Tradicional doce de amendoim e leite condensado, cremoso e irresistível.",
      category: "Balas/Chicletes",
      rating: 5,
      colors: ["bg-candy-yellow", "bg-candy-pink"],
      image: "/uploads/pemoca.jpeg"
    },
    {
      id: 24,
      name: "Bala Milk",
      description: "Bala sabor leite. ㅤㅤㅤㅤㅤ ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
      category: "Balas/Chicletes",
      rating: 5,
      colors: ["bg-candy-yellow", "bg-candy-pink"],
      image: "/uploads/balamilk.jpeg"
    },
    {
      id: 25,
      name: "Geléia de Mocotó",
      description: "Geléia de Mocotó Marshimallow. ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
      category: "Doces",
      rating: 5,
      colors: ["bg-candy-yellow", "bg-candy-pink"],
      image: "/uploads/mocoto.jpeg"
    },
    {
      id: 26,
      name: "Snickers",
      description: "Chocolate crocante com caramelo, amendoim e recheio cremoso.",
      category: "Chocolates",
      rating: 5,
      colors: ["bg-candy-yellow", "bg-candy-pink"],
      image: "/uploads/snickers.jpeg"
    },
    {
      id: 27,
      name: "Espeto Ovos",
      description: "Ovos de codorna em conserva. ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
      category: "Balas/Chicletes",
      rating: 5,
      colors: ["bg-candy-yellow", "bg-candy-pink"],
      image: "/uploads/ovo.jpeg"
    },
    {
      id: 28,
      name: "Energetico Furioso",
      description: "Sabor intenso e marcante, energia extra para agitar seu dia.",
      category: "Bebidas",
      rating: 5,
      colors: ["bg-candy-yellow", "bg-candy-pink"],
      image: "/uploads/furioso.jpeg"
    }
    ,{
      id: 33,
      name: "Sensação",
      description: "Chocolate de morango com recheio cremoso e cobertura de chocolate ao leite.",
      category: "Chocolates",
      rating: 5,
      colors: ["bg-candy-yellow", "bg-candy-pink"],
      image: "/uploads/sensacao.jpeg"
    }
    ,{
      id: 29,
      name: "Pururuca Petisko's",
      description: "Crocante e leve, com o toque cítrico e refrescante do limão.",
      category: "Espeto",
      rating: 5,
      colors: ["bg-candy-yellow", "bg-candy-pink"],
      image: "/uploads/pururca.jpeg"
    }
    ,{
      id: 30,
      name: "Fini Dentadura",
      description: "Divertido formato de dentadura com sabor irresistível.",
      category: "Balas/Chicletes",
      rating: 5,
      colors: ["bg-candy-yellow", "bg-candy-pink"],
      image: "/uploads/finident.jpeg"
    }
    ,{
      id: 31,
      name: "Fini Amora",
      description: "Balas de gelatina com sabor intenso e formato de amora.",
      category: "Balas/Chicletes",
      rating: 5,
      colors: ["bg-candy-yellow", "bg-candy-pink"],
      image: "/uploads/fini.jpeg"
    } ,{
      id: 32,
      name: "Chicken Tik's",
      description: "Salgadinho de Milho sabor frango.ㅤㅤㅤㅤㅤㅤ",
      category: "Salgadinhos",
      rating: 5,
      colors: ["bg-candy-yellow", "bg-candy-pink"],
      image: "/uploads/chicken chicks.jpeg"
    }
  ];

  const categories = ["Todos", "Doces", "Bombons", "Chocolates", "Salgadinhos", "Castanhas", "Balas/Chicletes", "Bebidas"];

  const filteredProducts = selectedCategory === "Todos" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
           Alguns dos Nossos Produtos
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Descubra nossa seleção especial de doces de pote e guloseimas. Produtos escolhidos a dedo para garantir qualidade e sabor.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-2 text-base font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-candy-pink text-white border-candy-pink hover:bg-candy-pink"
                    : "hover:border-candy-pink hover:text-black hover:bg-candy-pink/10"
                }`}>
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card 
                key={product.id} 
                className="border-none shadow-sweet hover:shadow-candy transition-all duration-300 hover:scale-105 overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br from-${product.colors[0].replace('bg-', '')} to-${product.colors[1].replace('bg-', '')} opacity-20`}></div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-primary">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm">
                    {product.description}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text">
                      {product.category}
                    </Badge>
                  </div>
                  
                  <a 
                    href={`https://wa.me/5543991334770?text=Olá! Gostaria de solicitar um orçamento para ${product.name}. Poderia me passar mais informações sobre preços e disponibilidade?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full">
                    <Button 
                      variant="sweet" 
                      className="w-full py-2 px-4 text-sm font-medium hover:bg-candy-pink transition-colors duration-300"
                    >
                      Solicitar
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Não Encontrou o que Procura?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5543991334770?text=Olá! Gostaria de saber mais sobre os produtos. Poderia me ajudar?"
              target="_blank"
              rel="noopener noreferrer">
              <Button variant="sweet" size="lg" className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700 text-white">
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                 Entre em contato
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
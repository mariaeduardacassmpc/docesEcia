import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Clock, Heart } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const About = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossa História
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça a trajetória de determinação que transformou uma oportunidade de mercado 
            em um dos negócios de doces mais confiáveis da região.
          </p>
        </div>
      </section>

<section className="py-16 bg-pink-50">
  <div className="container mx-auto px-4  rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-primary mb-6">
                A Paixão pelos Doces que nos Move
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Há mais de 15 anos, Marcelo descobriu uma oportunidade no mercado de doces: 
                  levar produtos de qualidade para cidades que não tinham fácil acesso a essas delícias. 
                  O que começou como uma venda pontual se transformou em um negócio próspero.
                </p>
                <p>
                  Nossa especialidade é selecionar os melhores doces do mercado - paçocas, 
                  cocadas, chocolates irresistíveis e muito mais. Trabalhamos apenas com 
                  fornecedores confiáveis que garantem produtos saborosos.
                </p>
                <p>
                  Hoje, atendemos múltiplas cidades da região com uma programação semanal organizada, 
                  levando variedade e qualidade diretamente aos nossos clientes, sempre com o melhor 
                  custo-benefício do mercado.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-6 text-center shadow-sweet rounded-2xl">
                <img
                  src="https://tyhimoopyfkckwiiwiwv.supabase.co/storage/v1/object/public/Produto/logotransparente.png"
                  alt="Marcelo Doces e Cia"
                  className="h-48 w-48 mx-auto mb-4 object-contain rounded-xl"
                />
                <h3 className="text-2xl font-bold text-primary mb-2">+15 Anos</h3>
                <p className="text-muted-foreground">de tradição e qualidade</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="p-1">
                    <Card className="border-none shadow-sweet">
                      <CardContent className="relative w-full h-[450px] md:h-[550px] p-0">
                        <img
                          src="https://res.cloudinary.com/dlzv0khj5/image/upload/v1766145105/traseiravan_2_z5hyg5.jpg"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card className="border-none shadow-sweet">
                      <CardContent className="relative w-full h-[450px] md:h-[550px] p-0">
                          <img
                          src="https://res.cloudinary.com/dlzv0khj5/image/upload/v1765495163/WhatsApp_Image_2025-08-01_at_15.14.12_o0vhz6.jpg"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="p-1">
                    <Card className="border-none shadow-sweet">
                      <CardContent className="relative w-full h-[450px] md:h-[550px] p-0">
                        <img
                          src="https://res.cloudinary.com/dlzv0khj5/image/upload/v1765495163/WhatsApp_Image_2025-08-01_at_15.14.13_oobnod.jpg"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
               
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    
    </div>
  );
};

export default About;
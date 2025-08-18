import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

const Cities = () => {
  const weeklySchedule = [
    {
      day: "Segunda-feira",
      cities: [
        { name: "Bela Vista do Paraíso", time: "07:30 - 18:00", status: "active" },
      ]
    },
    {
      day: "Terça-feira", 
      cities: [
        { name: "Sertanopólis", time: "07:30 - 18:00", status: "active" },
      ]
    },
    {
      day: "Quarta-feira",
      cities: [
        { name: "Bela Vista do Paraíso", time: "07:30 - 18:00", status: "active" },
      ]
    },
    {
      day: "Quinta-feira",
      cities: [
        { name: "Primeiro de Maio", time: "07:30 - 18:00", status: "active" }
      ]
    },
    {
      day: "Sexta-feira",
      cities: [
        { name: "Alvorada", time: "07:30 - 18:00", status: "active" }
      ]
    },
    {
      day: "Sábado",
      cities: [
        { name: "Bela Vista do Paraíso", time: "07:30 - 17:00", status: "weekend" },
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-candy-green";
      case "weekend":
        return "bg-candy-blue";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="min-h-screen">
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Onde Estamos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Confira nossa programação semanal de atendimento. Levamos nossos doces 
            diretamente até você em diversas cidades da região.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <Card className="border-none shadow-sweet hover:shadow-candy hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-candy-pink rounded-full flex items-center justify-center mb-2">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-primary">Agende sua Entrega</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  <a 
                    href="tel:+5543991334770">
                    <span>(43) 99133-4770</span>
                  </a>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sweet hover:shadow-candy hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-candy-blue rounded-full flex items-center justify-center mb-2">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-primary">Horário de Atendimento</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Segunda a Sábado<br />
                  07:30 às 18:00
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sweet hover:shadow-candy hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-candy-yellow rounded-full flex items-center justify-center mb-2">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-primary">Cobertura</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Bela Vista do Paraíso<br />
                  e Região
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Programação Semanal
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nosso cronograma de entrega organizado por dia da semana. 
              Entre em contato para agendar sua entrega.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {weeklySchedule.map((schedule, index) => (
              <Card 
                key={index} 
                className="border-none shadow-sweet hover:shadow-candy transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-primary">
                      {schedule.day}
                    </CardTitle>
                    <Badge 
                      className={`${getStatusColor(schedule.cities[0]?.status)} text-white ${schedule.cities[0]?.status === "active" ? "hover:bg-green-600" : schedule.cities[0]?.status === "weekend" ? "hover:bg-blue-400" : ""} transition-colors cursor-pointer`}
                    >
                      {schedule.cities[0]?.status === "weekend" ? "Fim de Semana" : "Dia Útil"}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {schedule.cities.map((city, cityIndex) => (
                    <div 
                      key={cityIndex}
                      className="flex items-center justify-between p-4 bg-white rounded-lg border border-candy-pink/20"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-candy-green rounded-full"></div>
                        <div>
                          <p className="font-semibold text-primary">{city.name}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {city.time}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <a 
                    href={`https://wa.me/5543991334770?text=Olá! Gostaria de agendar uma entrega para ${schedule.day.toLowerCase()} em ${schedule.cities[0].name}. Poderia me ajudar?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button variant="sweet" className="w-full mt-4 bg-candy-green hover:!bg-green-600 text-white transition-colors duration-300">
                      <Navigation className="mr-2 h-4 w-4" />
                      Agendar Entrega
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cities;
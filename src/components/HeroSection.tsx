import { Github, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-hero flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar e Nome */}
        <div className="mb-8">
          <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary">
            <img
              src="/perfil.webp"
              alt="João Lima Lampanche"
              width={112}
              height={112}
              loading="eager"
              decoding="async"
              className="w-28 h-28 object-cover"
            />

          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            João Lima Lampanche
          </h1>
         <p className="text-lg md:text-xl text-primary-foreground/80">
             Desenvolvedor de Software com foco em Segurança da Informação e Desenvolvimento Web.
          </p>
        </div>

        {/* Descrição Profissional */}
        <div className="space-y-6 max-w-2xl mx-auto text-lg text-primary-foreground/70 leading-relaxed mb-10 text-left">
          <p>
            Possuo experiência em automação e programação orientada a objetos, utilizando JavaScript, Java, Python e C#. 
            </p>
            Aplicando práticas de código limpo, versionamento e princípios de segurança ao longo do ciclo de desenvolvimento, busco uma oportunidade em ambientes que priorizem qualidade técnica, confiabilidade e eficiência.
        </div>

        {/* Contatos */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a 
            href="mailto:joaolimalampanche@gmail.com"
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm">joaolimalampanche@gmail.com</span>
          </a>
          <a 
            href="tel:+5571986817901"
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm">(71) 98681-7901</span>
          </a>
          <span className="flex items-center gap-2 text-primary-foreground/80">
            <MapPin className="w-5 h-5" />
            <span className="text-sm">Lauro de Freitas, BA</span>
          </span>
        </div>

        {/* Botões */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="lg" asChild>
            <a href="https://github.com/Valkryon" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Ver GitHub
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#contato">
              Entrar em Contato
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Github, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-hero flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        {/* Avatar e Nome */}
        <div className="mb-8">
          <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary">
            <img
              src="/perfil.jpg"
              alt="João Lima Lampanche"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            João Lima Lampanche
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-light">
            Desenvolvedor de Software em Formação
          </p>
        </div>

        {/* Descrição Profissional */}
        <div className="space-y-6 max-w-2xl mx-auto text-lg text-primary-foreground/70 leading-relaxed mb-10">
          <p>
            Desenvolvedor de software com foco em Segurança da Informação. Atuo com desenvolvimento web, automação e programação orientada a objetos. Experiência prática em JavaScript, Java, Python e C#, aplicando boas práticas de código limpo, versionamento e segurança no desenvolvimento. Busco ambientes que priorizem qualidade técnica, segurança e eficiência.
          </p>
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
            href="tel:+5571986442662"
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm">(71) 98644-2662</span>
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

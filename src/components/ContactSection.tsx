import { Mail, Phone, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 px-6 bg-hero">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Vamos Conversar?
        </h2>
        <p className="text-primary-foreground/70 mb-12 max-w-xl mx-auto">
          Estou em busca de uma oportunidade em Desenvolvimento de Software.
          Será um prazer contribuir com sua equipe.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:joaolimalampanche@gmail.com"
            className="bg-secondary-foreground/10 backdrop-blur-sm rounded-xl p-6 hover:bg-secondary-foreground/20 transition-colors group"
          >
            <Mail className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-primary-foreground font-medium mb-1">E-mail</p>
            <p className="text-primary-foreground/60 text-sm">joaolimalampanche@gmail.com</p>
          </a>

          <a
            href="tel:+5571986442662"
            className="bg-secondary-foreground/10 backdrop-blur-sm rounded-xl p-6 hover:bg-secondary-foreground/20 transition-colors group"
          >
            <Phone className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-primary-foreground font-medium mb-1">Telefone</p>
            <p className="text-primary-foreground/60 text-sm">(71) 98644-2662</p>
          </a>

          <a
            href="https://github.com/Valkryon"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary-foreground/10 backdrop-blur-sm rounded-xl p-6 hover:bg-secondary-foreground/20 transition-colors group"
          >
            <Github className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-primary-foreground font-medium mb-1">GitHub</p>
            <p className="text-primary-foreground/60 text-sm">github.com/Valkryon</p>
          </a>
        </div>

        <Button variant="hero" size="lg" asChild>
          <a href="mailto:joaolimalampanche@gmail.com">
            <Mail className="w-5 h-5 mr-2" />
            Enviar E-mail
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;

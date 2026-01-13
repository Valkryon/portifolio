import { Github, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-hero flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        {/* Avatar e Nome */}
        <div className="mb-8">
          <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-4xl font-bold text-primary-foreground">JL</span>
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
            Sou desenvolvedor de software com formação técnica e experiência prática em múltiplas áreas, incluindo <strong>desenvolvimento web</strong>, <strong>programação orientada a objetos</strong>, <strong>sistemas</strong>, <strong>desenvolvimento de jogos</strong> e <strong>automação</strong>. Possuo domínio de diferentes linguagens e capacidade de adaptação a diversos contextos tecnológicos.
          </p>

          <p>
            Minha atuação em <strong>desenvolvimento web</strong> envolve tecnologias modernas do ecossistema <strong>JavaScript</strong>, boas práticas de <strong>componentização</strong>, <strong>responsividade</strong> e <strong>versionamento de código</strong>. Além disso, possuo experiência com <strong>Java</strong>, <strong>Python</strong>, <strong>C#</strong> e conhecimentos em <strong>Lua</strong> para scripting e desenvolvimento de jogos.
          </p>

          <p>
            Tenho forte base lógica, facilidade para aprender novas tecnologias e foco em <strong>código limpo, organizado e sustentável</strong>. Busco oportunidades na área de desenvolvimento de software onde possa aplicar e expandir minhas competências, contribuir com soluções eficientes e evoluir profissionalmente em ambientes desafiadores.
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

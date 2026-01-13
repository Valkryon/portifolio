import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "BID Tecnologia",
    duration: "2 Anos",
    responsibilities: [
      "Manutenção e montagem de computadores com diagnóstico de hardware e software",
      "Instalação e configuração de redes de CFTV",
      "Atendimento ao cliente e vendas, desenvolvendo habilidades de negociação",
    ],
  },
  {
    company: "ASK+ Engenharia & Consultoria",
    duration: "1 Ano",
    responsibilities: [
      "Rotinas administrativas e orçamentação com foco em resultados",
      "Atuação técnica como piloto de drone",
      "Suporte em vendas técnicas",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experiência Profissional
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center gap-3 mb-2 md:mb-0">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.company}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{exp.duration}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li
                    key={respIndex}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

import { Code, Database, Wrench, Monitor } from "lucide-react";

const skills = [
  {
    category: "Linguagens",
    icon: Code,
    items: ["Java", "Python", "C++", "JavaScript"],
  },
  {
    category: "Desenvolvimento Web",
    icon: Monitor,
    items: ["HTML5", "CSS3", "REACT", "Vite"],
  },
  {
    category: "Banco de Dados",
    icon: Database,
    items: ["Integração de aplicações com camada de dados (nível introdutório/intermediário)", "Conceitos de banco de dados relacionais", "Modelagem básica de dados"],
  },
  {
    category: "Ferramentas",
    icon: Wrench,
    items: ["Git", "GitHub", "Pacote Office"],
  },
];

const SkillsSection = () => {
  return (
    <section id="competencias" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Competências Técnicas
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <skill.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-muted-foreground text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
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

export default SkillsSection;

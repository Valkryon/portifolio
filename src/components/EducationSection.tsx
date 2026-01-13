import { GraduationCap, CheckCircle } from "lucide-react";

const education = [
  {
    degree: "Superior em Defesa Cibernética",
    institution: "Universidade Estácio de Sá",
    status: "Completo",
  },
  {
    degree: "Ensino Médio",
    institution: "Colégio Estadual Bartolomeu de Gusmão",
    status: "Completo",
  },
];

const EducationSection = () => {
  return (
    <section id="formacao" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Formação Acadêmica
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-2 text-primary">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">{edu.status}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

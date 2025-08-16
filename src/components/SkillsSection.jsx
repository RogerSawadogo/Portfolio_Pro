import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  //Programming Languages
  { name: "Python", level: 90, category: "programming" },
  { name: "JavaScript", level: 80, category: "programming" },
  { name: "C", level: 80, category: "programming" },
  { name: "Matlab", level: 70, category: "programming" },
  { name: "Java", level: 70, category: "programming" },
  // ML
  { name: "Supervised Learning", level: 90, category: "machine learning" },
  { name: "Unsupervised Learning", level: 85, category: "machine learning" },
  { name: "Deep Learning", level: 85, category: "machine learning" },
  { name: "Time series forecasting", level: 80, category: "machine learning" },
  { name: "Feature engineering & selection", level: 90, category: "machine learning" },
  { name: "Transformers", level: 80, category: "machine learning" },


  // DL
  { name: "Docker & containerization", level: 80, category: "mlops" },
  { name: "Apache Airflow", level: 70, category: "mlops" },
  { name: "CI/CD with GitHub Actions", level: 75, category: "mlops" },
  { name: "Data pipeline automation", level: 75, category: "mlops" },
  

  

  //Software Development
  { name: "React", level: 80, category: "software development" },
  { name: "Node.js", level: 85, category: "software development" },
  { name: "FastApi", level: 80, category: "software development" },
  { name: "MongoDB", level: 80, category: "software development" },
  { name: "PostgreSQL", level: 75, category: "software development" },
  // Tools
  { name: "Git/GitHub", level: 85, category: "tools" },
  { name: "Docker", level: 80, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["programming", "machine learning", "mlops", "software development", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredSkills = skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

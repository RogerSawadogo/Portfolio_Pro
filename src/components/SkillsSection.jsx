import { useState } from "react";
import { cn } from "@/lib/utils";
import { Circle } from "lucide-react"; // placeholder icon

const skills = [
  { name: "Python", level: 90, category: "programming" },
  { name: "JavaScript", level: 80, category: "programming" },
  { name: "C", level: 80, category: "programming" },
  { name: "Matlab", level: 70, category: "programming" },
  { name: "Java", level: 70, category: "programming" },

  { name: "Supervised Learning", level: 90, category: "machine learning" },
  { name: "Unsupervised Learning", level: 85, category: "machine learning" },
  { name: "Deep Learning", level: 85, category: "machine learning" },
  { name: "Time series forecasting", level: 80, category: "machine learning" },
  { name: "Feature engineering", level: 90, category: "machine learning" },
  { name: "Transformers", level: 80, category: "machine learning" },

  { name: "Docker & containerization", level: 80, category: "mlops & data engineering" },
  { name: "Apache Airflow", level: 70, category: "mlops & data engineering" },
  { name: "CI/CD with GitHub Actions", level: 75, category: "mlops & data engineering" },
  { name: "Data pipeline automation", level: 75, category: "mlops & data engineering" },

  { name: "React", level: 80, category: "software development" },
  { name: "Node.js", level: 85, category: "software development" },
  { name: "FastApi", level: 80, category: "software development" },
  { name: "MongoDB", level: 80, category: "software development" },
  { name: "PostgreSQL", level: 75, category: "software development" },

  { name: "Git/GitHub", level: 85, category: "tools" },
  { name: "Docker", level: 80, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["programming", "machine learning", "mlops & data engineering", "software development", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const filteredSkills = skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative bg-gradient-to-b from-secondary/40 to-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "bg-secondary/60 text-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="group relative bg-card/60 backdrop-blur-md border border-border p-5 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <Circle className="h-5 w-5 text-primary" />
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  {skill.level}%
                </span>
              </div>
              <h3 className="font-semibold text-base">{skill.name}</h3>
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/5 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

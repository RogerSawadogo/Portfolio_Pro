import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About <span className="text-primary">Me</span>
        </h2>

        <p className="text-muted-foreground mb-8">
          I’m a curious mind who loves turning data into smart, usable solutions.  
          From building machine learning models to launching full-stack apps,  
          I mix code, creativity, and problem-solving to make ideas happen.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-8 my-8 text-left">
          <div className="flex items-start gap-3">
            <Code className="h-6 w-6 text-primary mt-1" />
            <p className="text-muted-foreground">
              <span className="font-semibold">Data Science:</span> Predictive modeling, AI, and deep learning.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <User className="h-6 w-6 text-primary mt-1" />
            <p className="text-muted-foreground">
              <span className="font-semibold">Software Dev:</span> Scalable web apps & APIs.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Briefcase className="h-6 w-6 text-primary mt-1" />
            <p className="text-muted-foreground">
              <span className="font-semibold">MLOps:</span> Deploy & automate ML pipelines.
            </p>
          </div>
        </div>

        <p className="text-muted-foreground mb-8">
          I thrive at the sweet spot between <span className="font-medium">data, code, and real-world impact</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="cosmic-button">
            Get In Touch
          </a>
          <a
            href="/cv.pdf"
            download
            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
          >
            Download CV
          </a>

        </div>
      </div>
    </section>
  );
};

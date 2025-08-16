import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Data Scientist 
            </h3>

            <p className="text-muted-foreground">
              I am a passionate Data Scientist with a strong foundation in Machine Learning, Artificial Intelligence, and Software Engineering. My expertise spans across data analysis, predictive modeling, and cloud-based application development, allowing me to design and deliver solutions that are both data-driven and user-centric.
            </p>

            <p className="text-muted-foreground">
              Driven by curiosity and continuous learning, I aim to create innovative solutions that solve real-world problems. My work often focuses on agriculture, logistics, and environmental data analysis, with hands-on expertise in soil characterization using spectroscopic data and chemometric techniques for accurate property prediction. I thrive at the intersection of data, code, and domain knowledge, applying methods such as dimensionality reduction, deep learning, and end-to-end ML pipelines.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Data Science & Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Skilled in turning data into insights using regression, classification, clustering, dimensionality reduction, deep learning. Proficient in Python, Scikit-learn, TensorFlow, PyTorch and Hugging Face for end-to-end modeling.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Development & Engineering</h4>
                  <p className="text-muted-foreground">
                    Experienced in building scalable apps with Node.js, Express, React, and MongoDB/PostgreSQL. Strong in REST API design, authentication, CI/CD with Docker, and cloud integrations.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">MLOps</h4>
                  <p className="text-muted-foreground">
                    Proficient in deploying and monitoring ML models using Docker, Airflow, and cloud platforms. Experienced in creating reproducible pipelines, automating workflows, and ensuring smooth integration between data science and production systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

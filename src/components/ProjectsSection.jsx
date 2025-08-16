import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [


    {
    id: 0,
    title: "BayirExpress Platform",
    description:
      "Designed and developed the end-to-end collaborative delivery platform connecting travelers and senders across Morocco and Sub-Saharan Africa, including backend and frontend development.",
    image: "/projects/proj1.png",
    tags: ["Node.js", "React", "MongoDB", "Express", "REST API"],
    githubUrl: "https://github.com/RogerSawadogo/BayirExpress",
  },
  {
    id: 1,
    title: "Soil Characterization with Spectroscopic Data (Intership)",
    description:
      "Built ML models using spectroscopy data and chemometric techniques (PCA, PLSR) to predict soil properties, combining scientific analysis with predictive modeling.",
    image: "/projects/proj0.png", 
    tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "PCA", "PLSR"],
    
  },

  
  {
    id: 2,
    title: "Casablanca Traffic Time Index Analysis",
    description:
      "Analyzed traffic congestion patterns by day of the week using municipal variables and visualized results with Python.",
    image: "/projects/proj2.png",
    tags: ["Pandas", "Matplotlib", "Seaborn", "K-Means"],
    demoUrl: "#",
    githubUrl: "https://github.com/RogerSawadogo/Casablanca_traffic_analysis",
  },
  {
    id: 3,
    title: "BayirExpress Data Pipeline & Dashboard",
    description:
      "Built a full data pipeline for the platform and a Streamlit dashboard to monitor user activity, shipments, and analytics in real time.",
    image: "/projects/proj3.png",
    tags: ["Docker", "Airflow", "ETL", "Streamlit", "PostgreSQL"],
    githubUrl: "#",
  },
  {
    id: 4,
    title: "BayirExpress RAG & FastAPI",
    description:
      "Implemented retrieval-augmented generation (RAG) with a FastAPI backend to provide AI-powered responses and insights for the platform.",
    image: "/projects/proj4.png",
    tags: ["RAG", "FastAPI", "Python", "Hugging Face"],
    githubUrl: "#",
  },
  
  {
    id: 5,
    title: "Sentiment Analysis of Tweets",
    description:
      "A sentiment analysis model to classify tweets as positive, negative, or neutral using BERT.",
    image: "/projects/project6.png",
    tags: ["Hugging Face", "BERT", "NLP"],
    demoUrl: "#",
    githubUrl: "https://github.com/RogerSawadogo/Sentiments_Analysis_with_BERT.git",
  },
  {
    id: 6,
    title: "Electronic Components Recognition with YOLO",
    description:
      "A real-time system for detecting and recognizing electronic components using Computer Vision.",
    image: "/projects/project1.jpg",
    tags: ["YOLO", "OpenCV", "Computer Vision"],
    githubUrl: "https://github.com/RogerSawadogo/electronic_component_recognition",
  },
  {
    id: 7,
    title: "Millet Price Forecasting",
    description:
      "Developed LSTM-based time series models to forecast monthly millet prices in Burkina Faso over a 2-year horizon.",
    image: "/projects/proj6.png",
    tags: ["LSTM", "Plotly", "TensorFlow"],
    githubUrl: "https://github.com/RogerSawadogo/Milet_Price_Forecast",
  },
  {
    id: 8,
    title: "Plant Disease Detection",
    description:
      "An AI-powered system for detecting and classifying plant diseases using deep learning.",
    image: "/projects/project5.jpeg",
    tags: ["TensorFlow", "Keras", "CNN"],
    githubUrl: "https://github.com/RogerSawadogo/Tomato_leaf_diseases_detection",
  },
  
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/RogerSawadogo"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

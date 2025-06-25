function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-featured online store built using Laravel & Bootstrap with custom admin panel and payment gateway.",
      image: "https://via.placeholder.com/300x200",
      demo: "#",
    },
    {
      title: "React Blog Platform",
      description: "A modern blog system built with React, Node.js, and MongoDB with role-based admin access.",
      image: "https://via.placeholder.com/300x200",
      demo: "#",
    },
    {
      title: "Travel Booking System",
      description: "Flight, cab & hotel booking platform integrated with third-party APIs. Built in Core PHP + jQuery.",
      image: "https://via.placeholder.com/300x200",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-5">My Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm project-card border-0">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text flex-grow-1">{project.description}</p>
                  <a href={project.demo} className="btn btn-outline-primary mt-3">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .project-card:hover {
            transform: scale(1.03);
            transition: 0.3s ease;
          }
        `}
      </style>
    </section>
  );
}

export default Projects;

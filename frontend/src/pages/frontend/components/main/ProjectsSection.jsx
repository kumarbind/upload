import React from "react";
import { FaShoppingCart, FaPenNib, FaPlane } from "react-icons/fa";

function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-featured store using Laravel & Bootstrap with custom admin panel and payment gateway.",
      video: "/videos/ecommerce.mp4", // 👉 Your video file path
      icon: <FaShoppingCart size={40} className="mb-3 text-primary" />,
      demo: "#",
    },
    {
      title: "React Blog Platform",
      description: "Modern blog system built with React, Node.js, and MongoDB with admin panel.",
      video: "/videos/blog.mp4", // 👉 Your video file path
      icon: <FaPenNib size={40} className="mb-3 text-success" />,
      demo: "#",
    },
    {
      title: "Travel Booking System",
      description: "Flight, cab & hotel booking system with API integration in Core PHP.",
      video: "/videos/travel.mp4", // 👉 Your video file path
      icon: <FaPlane size={40} className="mb-3 text-warning" />,
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
              <div className="card h-100 shadow-sm project-card border-0 text-center">

                {/* VIDEO PREVIEW */}
                <div className="video-wrapper">
                  <video
                    className="card-video"
                    src={project.video}
                    muted
                    loop
                    preload="metadata"
                  />
                </div>

                <div className="card-body d-flex flex-column">
                  {/* {project.icon} */}
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text flex-grow-1">{project.description}</p>

                  <a href={project.demo} className="btn btn-outline-primary mt-3">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          /* Card Hover Effect */
          .project-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            overflow: hidden;
            border-radius: 15px;
          }
          .project-card:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          }

          /* Video Styling */
          .video-wrapper {
            height: 200px;
            overflow: hidden;
            border-radius: 10px 10px 0 0;
          }

          .card-video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: opacity 0.4s ease;
          }

          /* Video Plays on Hover */
          .project-card:hover .card-video {
            opacity: 1;
          }
          .project-card:hover video {
            play: auto;
          }
        `}
      </style>
    </section>
  );
}

export default ProjectsSection;

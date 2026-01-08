import React, { useRef } from "react";
import { FaShoppingCart, FaPenNib, FaPlane, FaPlay } from "react-icons/fa";

function ProjectsSection() {

  const videoRefs = useRef([]);

  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A full-featured store using Laravel & Bootstrap with custom admin panel and payment gateway.",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      icon: <FaShoppingCart size={34} />,
      demo: "#",
    },
    {
      title: "React Blog Platform",
      description:
        "Modern blog system built with React, Node.js, and MongoDB with admin panel.",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      icon: <FaPenNib size={34} />,
      demo: "#",
    },
    {
      title: "Travel Booking System",
      description:
        "Flight, cab & hotel booking system with API integration in Core PHP.",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      icon: <FaPlane size={34} />,
      demo: "#",
    },
  ];

  const playVideo = (index) => {
    videoRefs.current[index]?.play();
  };

  const stopVideo = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          🚀 My <span className="text-primary">Projects</span>
        </h2>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-sm-6 col-md-4" key={index}>
              <div
                className="project-card"
                onMouseEnter={() => playVideo(index)}
                onMouseLeave={() => stopVideo(index)}
              >
                {/* VIDEO */}
                <div className="video-wrapper">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className="card-video"
                    src={project.video}
                    muted
                    loop
                    preload="metadata"
                  />
                  <div className="play-overlay">
                    <FaPlay />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="card-body text-center">
                  <div className="icon-box">{project.icon}</div>
                  <h5 className="mt-3">{project.title}</h5>
                  <p>{project.description}</p>

                  <a
                    href={project.demo}
                    className="btn btn-outline-primary btn-sm"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
        .project-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
          border-radius: 15px;
          background: #fff;
        }

        .project-card:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        .video-wrapper {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .card-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .play-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          color: #fff;
          background: rgba(0,0,0,0.4);
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .play-overlay {
          opacity: 0;
        }
        `}
      </style>
    </section>
  );
}

export default ProjectsSection;

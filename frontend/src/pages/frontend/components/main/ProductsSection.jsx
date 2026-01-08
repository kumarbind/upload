import React from "react";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    title: "Web/App Development",
    description:
      "Personal or business portfolios with animations, resume download, contact forms, and social media links.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?fit=crop&w=600&q=80",
    link: "/rcm",
  },
  {
    title: "Lead Generation Sites",
    description:
      "Online stores with cart, payments, order tracking, inventory and visually stunning responsive UI.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?fit=crop&w=600&q=80",
    link: "/ecommerce",
  }
];

const ProductsSection = () => {
  return (
    <motion.div
      className="container py-1"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <h2 className="text-center mb-1 fw-bold">Top Products</h2>

      <div className="row g-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="col-sm-6 col-md-6"
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <a
              href={service.link}
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              <div
                className="card border-0 shadow-lg rounded-4 overflow-hidden h-100"
                style={{
                  transition: "all 0.3s ease",
                }}
              >
                {/* IMAGE WITH GRADIENT OVERLAY */}
                <div className="position-relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="card-img-top"
                    style={{
                      height: "140px",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5))",
                    }}
                  ></div>
                </div>

                {/* CONTENT */}
                <div className="card-body text-center d-flex flex-column px-3">
                  <h5 className="fw-bold mt-2">{service.title}</h5>
                  <p className="text-muted flex-grow-1">{service.description}</p>

                  <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                    className="fw-semibold text-primary mt-3"
                  >
                    Learn More →
                  </motion.span>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductsSection;

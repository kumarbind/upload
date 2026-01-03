import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGlobe, FaImage, FaTimes, FaPlus, FaCheck, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Swal from 'sweetalert2';
import { apiPost } from '../../../../utils/api';

function AddWebsiteForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    websiteName: "",
    websiteUrl: "",
    category: "",
    description: "",
    features: [],
    technologies: [],
    image: null,
    imagePreview: null
  });
  const [loading, setLoading] = useState(false);

  const categories = [
    "E-commerce",
    "Business Website",
    "Portfolio",
    "Blog",
    "SaaS Platform",
    "Mobile App",
    "Dashboard",
    "Other"
  ];

  const availableTechnologies = [
    "React", "Laravel", "PHP", "Node.js", "Vue.js", 
    "WordPress", "Next.js", "MySQL", "MongoDB", "Tailwind CSS"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file)
      }));
    }
  };

  const removeImage = () => {
    setFormData(prev => ({
      ...prev,
      image: null,
      imagePreview: null
    }));
  };

  const toggleTechnology = (tech) => {
    setFormData(prev => ({
      ...prev,
      technologies: prev.technologies.includes(tech)
        ? prev.technologies.filter(t => t !== tech)
        : [...prev.technologies, tech]
    }));
  };

  const addFeature = (feature) => {
    if (feature.trim() && !formData.features.includes(feature.trim())) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, feature.trim()]
      }));
    }
  };

  const removeFeature = (index) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create FormData for file upload
      const submitData = new FormData();
      submitData.append('websiteName', formData.websiteName);
      submitData.append('websiteUrl', formData.websiteUrl);
      submitData.append('category', formData.category);
      submitData.append('description', formData.description);
      submitData.append('features', JSON.stringify(formData.features));
      submitData.append('technologies', JSON.stringify(formData.technologies));
      if (formData.image) {
        submitData.append('image', formData.image);
      }

      const data = await apiPost('portfolio/create', submitData);
      console.log("API response:", data);

      Swal.fire({
        title: 'Success!',
        text: 'Website added successfully to your portfolio.',
        icon: 'success',
        confirmButtonText: 'Great!'
      });

      // Reset form
      setFormData({
        websiteName: "",
        websiteUrl: "",
        category: "",
        description: "",
        features: [],
        technologies: [],
        image: null,
        imagePreview: null
      });
      setStep(1);
    } catch (err) {
      console.error("Submission error:", err);

      Swal.fire({
        title: 'Oops!',
        text: 'Something went wrong. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    if (step === 1 && formData.websiteName && formData.websiteUrl && formData.category) {
      setStep(2);
    } else if (step === 2 && formData.description) {
      setStep(3);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const isStepValid = () => {
    if (step === 1) return formData.websiteName && formData.websiteUrl && formData.category;
    if (step === 2) return formData.description;
    if (step === 3) return true;
    return false;
  };

  return (
    <div className="min-vh-100 py-5" style={{
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    }}>
      <div className="container">
        <motion.div
          className="row justify-content-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="col-lg-8 col-xl-7">
            {/* Header */}
            <div className="text-center mb-4">
              <motion.div
                className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                style={{
                  width: "80px",
                  height: "80px",
                  background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)"
                }}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FaGlobe style={{ fontSize: "2.5rem", color: "white" }} />
              </motion.div>
              <h2 className="text-white fw-bold mb-2">Add New Website</h2>
              <p className="text-white" style={{ opacity: 0.9 }}>
                Showcase your amazing work in your portfolio
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="d-flex justify-content-between mb-2">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="d-flex align-items-center flex-grow-1">
                    <motion.div
                      className="rounded-circle d-flex align-items-center justify-content-center fw-bold"
                      style={{
                        width: "40px",
                        height: "40px",
                        background: step >= s ? "#10b981" : "rgba(255, 255, 255, 0.2)",
                        color: "white",
                        border: step === s ? "3px solid white" : "none"
                      }}
                      animate={{ scale: step === s ? 1.1 : 1 }}
                    >
                      {step > s ? <FaCheck /> : s}
                    </motion.div>
                    {s < 3 && (
                      <div
                        className="flex-grow-1 mx-2"
                        style={{
                          height: "4px",
                          background: step > s ? "#10b981" : "rgba(255, 255, 255, 0.2)",
                          borderRadius: "2px"
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-between text-white small">
                <span>Basic Info</span>
                <span>Description</span>
                <span>Details</span>
              </div>
            </div>

            {/* Form Card */}
            <motion.div
              className="rounded-4 shadow-lg p-4 p-md-5"
              style={{
                background: "rgba(255, 255, 255, 0.98)",
                backdropFilter: "blur(20px)"
              }}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
            >
              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {/* Step 1: Basic Information */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="mb-4 fw-bold text-dark">Basic Information</h4>

                      {/* Website Name */}
                      <div className="mb-4">
                        <label className="form-label fw-semibold">Website Name *</label>
                        <input
                          type="text"
                          name="websiteName"
                          value={formData.websiteName}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          placeholder="e.g., My E-commerce Store"
                          required
                          style={{
                            borderRadius: "12px",
                            border: "2px solid #e5e7eb",
                            padding: "12px 20px"
                          }}
                        />
                      </div>

                      {/* Website URL */}
                      <div className="mb-4">
                        <label className="form-label fw-semibold">Website URL *</label>
                        <div className="input-group input-group-lg">
                          <span
                            className="input-group-text"
                            style={{
                              borderRadius: "12px 0 0 12px",
                              border: "2px solid #e5e7eb",
                              borderRight: "none",
                              background: "#f9fafb"
                            }}
                          >
                            <FaGlobe />
                          </span>
                          <input
                            type="url"
                            name="websiteUrl"
                            value={formData.websiteUrl}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="https://example.com"
                            required
                            style={{
                              borderRadius: "0 12px 12px 0",
                              border: "2px solid #e5e7eb",
                              borderLeft: "none",
                              padding: "12px 20px"
                            }}
                          />
                        </div>
                      </div>

                      {/* Category */}
                      <div className="mb-4">
                        <label className="form-label fw-semibold">Category *</label>
                        <div className="row g-2">
                          {categories.map((cat) => (
                            <div className="col-6 col-md-4" key={cat}>
                              <motion.div
                                className={`p-3 rounded-3 text-center cursor-pointer ${
                                  formData.category === cat
                                    ? "bg-primary text-white"
                                    : "bg-light"
                                }`}
                                style={{
                                  cursor: "pointer",
                                  border: formData.category === cat ? "2px solid #3b82f6" : "2px solid transparent",
                                  transition: "all 0.3s ease"
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setFormData(prev => ({ ...prev, category: cat }))}
                              >
                                <small className="fw-semibold">{cat}</small>
                              </motion.div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Description */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="mb-4 fw-bold text-dark">Project Description</h4>

                      {/* Description */}
                      <div className="mb-4">
                        <label className="form-label fw-semibold">Description *</label>
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          rows="6"
                          placeholder="Describe the project, its goals, and what makes it special..."
                          required
                          style={{
                            borderRadius: "12px",
                            border: "2px solid #e5e7eb",
                            padding: "12px 20px"
                          }}
                        />
                        <small className="text-muted">
                          {formData.description.length} characters
                        </small>
                      </div>

                      {/* Image Upload */}
                      <div className="mb-4">
                        <label className="form-label fw-semibold">Project Image</label>
                        {!formData.imagePreview ? (
                          <label
                            className="d-flex flex-column align-items-center justify-content-center p-5 rounded-3 cursor-pointer"
                            style={{
                              border: "2px dashed #cbd5e1",
                              background: "#f8fafc",
                              cursor: "pointer",
                              transition: "all 0.3s ease"
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = "#3b82f6"}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = "#cbd5e1"}
                          >
                            <FaImage style={{ fontSize: "3rem", color: "#94a3b8", marginBottom: "1rem" }} />
                            <span className="text-muted">Click to upload image</span>
                            <small className="text-muted">PNG, JPG up to 5MB</small>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageUpload}
                              className="d-none"
                            />
                          </label>
                        ) : (
                          <div className="position-relative">
                            <img
                              src={formData.imagePreview}
                              alt="Preview"
                              className="w-100 rounded-3"
                              style={{ maxHeight: "300px", objectFit: "cover" }}
                            />
                            <button
                              type="button"
                              onClick={removeImage}
                              className="btn btn-danger position-absolute top-0 end-0 m-2 rounded-circle"
                              style={{ width: "40px", height: "40px" }}
                            >
                              <FaTimes />
                            </button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Details */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="mb-4 fw-bold text-dark">Additional Details</h4>

                      {/* Technologies */}
                      <div className="mb-4">
                        <label className="form-label fw-semibold">Technologies Used</label>
                        <div className="d-flex flex-wrap gap-2">
                          {availableTechnologies.map((tech) => (
                            <motion.button
                              key={tech}
                              type="button"
                              className={`btn ${
                                formData.technologies.includes(tech)
                                  ? "btn-primary"
                                  : "btn-outline-secondary"
                              }`}
                              style={{ borderRadius: "20px" }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => toggleTechnology(tech)}
                            >
                              {tech}
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-4">
                        <label className="form-label fw-semibold">Key Features</label>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Add a feature..."
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                                addFeature(e.target.value);
                                e.target.value = '';
                              }
                            }}
                            style={{
                              borderRadius: "12px 0 0 12px",
                              border: "2px solid #e5e7eb",
                              borderRight: "none"
                            }}
                          />
                          <button
                            type="button"
                            className="btn btn-primary"
                            style={{ borderRadius: "0 12px 12px 0" }}
                            onClick={(e) => {
                              const input = e.target.previousElementSibling;
                              addFeature(input.value);
                              input.value = '';
                            }}
                          >
                            <FaPlus />
                          </button>
                        </div>
                        <div className="d-flex flex-wrap gap-2">
                          {formData.features.map((feature, idx) => (
                            <motion.span
                              key={idx}
                              className="badge bg-success d-flex align-items-center gap-2 px-3 py-2"
                              style={{ fontSize: "0.9rem" }}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                            >
                              {feature}
                              <FaTimes
                                style={{ cursor: "pointer" }}
                                onClick={() => removeFeature(idx)}
                              />
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="d-flex justify-content-between mt-4 pt-3" style={{ borderTop: "1px solid #e5e7eb" }}>
                  <motion.button
                    type="button"
                    className="btn btn-lg btn-outline-secondary d-flex align-items-center gap-2"
                    style={{ borderRadius: "12px" }}
                    onClick={prevStep}
                    disabled={step === 1}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaArrowLeft />
                    <span>Back</span>
                  </motion.button>

                  {step < 3 ? (
                    <motion.button
                      type="button"
                      className="btn btn-lg btn-primary d-flex align-items-center gap-2"
                      style={{ borderRadius: "12px" }}
                      onClick={nextStep}
                      disabled={!isStepValid()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Next</span>
                      <FaArrowRight />
                    </motion.button>
                  ) : (
                    <motion.button
                      type="submit"
                      className="btn btn-lg btn-success d-flex align-items-center gap-2"
                      style={{ borderRadius: "12px" }}
                      disabled={loading}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaCheck />
                      <span>{loading ? "Submitting..." : "Submit"}</span>
                    </motion.button>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AddWebsiteForm;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../components/admin/layouts/main";
import { apiPost } from "../../../utils/api";
import { FaUserPlus, FaArrowLeft } from "react-icons/fa";

const CreateUser = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      await apiPost("/main/admin/users", form);
      navigate("/admin/users");
    } catch (err) {
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      }
    }

    setLoading(false);
  };

  return (
    <Layout>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mb-0">Create User</h4>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft /> Back
        </button>
      </div>

      {/* Form Card */}
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white d-flex align-items-center gap-2">
          <FaUserPlus />
          <span>Add New User</span>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit} className="row g-3">

            {/* Name */}
            <div className="col-md-6">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                value={form.name}
                onChange={handleChange}
                placeholder="Enter full name"
              />
              {errors.name && <div className="invalid-feedback">{errors.name[0]}</div>}
            </div>

            {/* Email */}
            <div className="col-md-6">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                value={form.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
              {errors.email && <div className="invalid-feedback">{errors.email[0]}</div>}
            </div>

            {/* Password */}
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password[0]}</div>
              )}
            </div>

            {/* Role */}
            <div className="col-md-6">
              <label className="form-label">Role</label>
              <select
                name="role"
                className="form-select"
                value={form.role}
                onChange={handleChange}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* Actions */}
            <div className="col-12 d-flex justify-content-end gap-2 mt-3">
              <button
                type="button"
                className="btn btn-light"
                onClick={() => navigate("/admin/users")}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-success d-flex align-items-center gap-2"
                disabled={loading}
              >
                <FaUserPlus />
                {loading ? "Saving..." : "Create User"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreateUser;

import React from "react";

const CampaignForm = ({ form, setForm, errors }) => {
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Campaign Name */}
      <div className="mb-3">
        <label>Campaign Name</label>
        <input
          name="name"
          className="form-control"
          value={form.name}
          onChange={handleChange}
        />
      </div>

      {/* Campaign Type */}
      <div className="mb-3">
        <label>Campaign Type</label>
        <select
          name="type"
          className="form-control"
          value={form.type}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="app">App</option>
          <option value="website">Website</option>
        </select>
      </div>

      {/* APP CAMPAIGN */}
      {form.type === "app" && (
        <>
          <div className="mb-3">
            <label>App Platform</label>
            <select
              name="app_platform"
              className="form-control"
              value={form.app_platform}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="android">Android</option>
              <option value="ios">iOS</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Package / Bundle ID</label>
            <input
              name="app_identifier"
              className="form-control"
              value={form.app_identifier}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Store URL</label>
            <input
              name="app_store_url"
              className="form-control"
              value={form.app_store_url}
              onChange={handleChange}
            />
          </div>
        </>
      )}

      {/* WEBSITE CAMPAIGN */}
      {form.type === "website" && (
        <>
          <div className="mb-3">
            <label>Website URL</label>
            <input
              name="website_url"
              className="form-control"
              value={form.website_url}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Target Page</label>
            <input
              name="target_page"
              className="form-control"
              value={form.target_page}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <div className="col">
              <input
                placeholder="utm_source"
                name="utm_source"
                className="form-control"
                value={form.utm_source}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <input
                placeholder="utm_medium"
                name="utm_medium"
                className="form-control"
                value={form.utm_medium}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <input
                placeholder="utm_campaign"
                name="utm_campaign"
                className="form-control"
                value={form.utm_campaign}
                onChange={handleChange}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CampaignForm;

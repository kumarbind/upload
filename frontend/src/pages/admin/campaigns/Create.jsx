import React, { useState } from "react";
import Layout from "../../../components/admin/layouts/main";
import { apiPost } from "../../../utils/api";
import { useNavigate } from "react-router-dom";
import CampaignForm from "../../../components/admin/forms/CampaignForm";

const CampaignCreate = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    type: "",
    app_platform: "",
    app_identifier: "",
    app_store_url: "",
    website_url: "",
    target_page: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    status: "active",
  });

  const submit = async (e) => {
    e.preventDefault();
    await apiPost("/main/admin/campaigns", form);
    navigate("/main/admin/campaigns");
  };

  return (
    <Layout>
      <form onSubmit={submit}>
        <CampaignForm form={form} setForm={setForm} />
        <button className="btn btn-success">Create Campaign</button>
      </form>
    </Layout>
  );
};
export default CampaignCreate;

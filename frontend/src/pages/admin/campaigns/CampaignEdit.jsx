import React, { useEffect, useState } from "react";
import Layout from "../../../components/admin/layouts/main";
import { apiGet, apiPut } from "../../../utils/api";
import { useNavigate, useParams } from "react-router-dom";
import CampaignForm from "../../../components/admin/forms/CampaignForm";

const CampaignEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  useEffect(() => {
    apiGet(`/main/admin/campaigns/${id}`).then(setForm);
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    await apiPut(`/main/admin/campaigns/${id}`, form);
    navigate("/main/admin/campaigns");
  };

  return (
    <Layout>
      <form onSubmit={submit}>
        <CampaignForm form={form} setForm={setForm} />
        <button className="btn btn-primary">Update Campaign</button>
      </form>
    </Layout>
  );
};


export default CampaignEdit;

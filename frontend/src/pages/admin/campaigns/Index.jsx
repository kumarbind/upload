import React, { useEffect, useState } from "react";
import Layout from "../../../components/admin/layouts/main";
import { apiGet } from "../../../utils/api";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaEdit } from "react-icons/fa";

const CampaignList = () => {
  const navigate = useNavigate();

  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const perPage = 10;
  const [total, setTotal] = useState(0);

  const [search, setSearch] = useState("");

  const fetchCampaigns = async () => {
    setLoading(true);
    try {
      const res = await apiGet("/main/admin/campaigns", {
        page,
        per_page: perPage,
        search,
      });
      console.log(res, 'resresres');
      
      setCampaigns(res.data ?? []);
      setTotal(res.total ?? 0);
    } catch (err) {
      console.error("Campaign load failed", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, [page, search]);

  const totalPages = Math.ceil(total / perPage) || 1;

  return (
    <Layout>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search campaign..."
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
        />

        <button
          className="btn btn-success btn-sm d-flex align-items-center gap-2 px-3 rounded-pill"
          onClick={() => navigate("/main/admin/campaigns/create")}
        >
          <FaPlus /> Add Campaign
        </button>
      </div>

      {/* Table */}
      <div className="card">
        <div className="card-body p-0">
          <table className="table table-bordered table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Destination</th>
                <th>Status</th>
                <th width="120">Action</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    Loading...
                  </td>
                </tr>
              ) : campaigns.length ? (
                campaigns.map((c) => (
                  <tr key={c.id}>
                    <td>{c.id}</td>
                    <td>{c.name}</td>
                    <td>
                      <span
                        className={`badge ${
                          c.type === "app"
                            ? "bg-primary"
                            : "bg-info"
                        }`}
                      >
                        {c.type.toUpperCase()}
                      </span>
                    </td>

                    <td className="small">
                      {c.type === "app"
                        ? c.app_store_url
                        : c.website_url}
                    </td>

                    <td>
                      <span
                        className={`badge ${
                          c.status === "active"
                            ? "bg-success"
                            : "bg-secondary"
                        }`}
                      >
                        {c.status}
                      </span>
                    </td>

                    <td>
                      <button
                        className="btn btn-sm btn-primary me-1"
                        onClick={() =>
                          navigate(`/main/admin/campaigns/${c.id}/edit`)
                        }
                      >
                        <FaEdit />
                      </button>

                      <button
                        className="btn btn-sm btn-outline-info"
                        onClick={() =>
                          navigate(`/main/admin/campaigns/${c.id}/analytics`)
                        }
                      >
                        Stats
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    No campaigns found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <span>
          Page {page} of {totalPages}
        </span>

        <div>
          <button
            className="btn btn-secondary btn-sm me-2"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>

          <button
            className="btn btn-secondary btn-sm"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default CampaignList;

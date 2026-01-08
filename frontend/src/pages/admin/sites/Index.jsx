import React, { useEffect, useState } from "react";
import Layout from "../../../components/admin/layouts/main";
import { apiGet } from "../../../utils/api";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const UserList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const perPage = 10;

  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await apiGet("main/admin/users", {
        page,
        per_page: perPage,
        search,
        sort_field: sortField,
        sort_order: sortOrder,
      });

      setUsers(res.data);
      setTotal(res.total);
    } catch (error) {
      console.error("Error loading users", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page, search, sortField, sortOrder]);

  const totalPages = Math.ceil(total / perPage);

  const handleSort = (field) => {
    setPage(1);
    setSortOrder(
      sortField === field && sortOrder === "asc" ? "desc" : "asc"
    );
    setSortField(field);
  };

  return (
    <Layout>
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* <h2>User List</h2> */}

        <input
          type="text"
          className="form-control w-25"
          placeholder="Search user..."
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
        />
        <button
        className="btn btn-success btn-sm d-flex align-items-center gap-2 px-3 rounded-pill shadow-sm"
        onClick={() => navigate("/main/admin/users/create")}
        >
        <FaPlus />
        Add User
        </button>
      </div>

      <div className="card">
        <div className="card-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th onClick={() => handleSort("id")} style={{ cursor: "pointer" }}>
                  ID {sortField === "id" && (sortOrder === "asc" ? "▲" : "▼")}
                </th>
                <th onClick={() => handleSort("name")} style={{ cursor: "pointer" }}>
                  Name {sortField === "name" && (sortOrder === "asc" ? "▲" : "▼")}
                </th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4" className="text-center">
                    Loading...
                  </td>
                </tr>
              ) : users.length > 0 ? (
                users.map((u) => (
                  <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>
                      <button className="btn btn-sm btn-primary">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="d-flex justify-content-between mt-3">
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
        </div>
      </div>
    </Layout>
  );
};

export default UserList;
import React from "react";
import Layout from "../../components/admin/layouts/main";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Data
const stats = [
  { id: 1, label: "Total Users", value: "4,928", delta: "+7.2%" },
  { id: 2, label: "New Orders", value: "1,203", delta: "-1.1%" },
  { id: 3, label: "Revenue", value: "$86,420", delta: "+12.6%" },
  { id: 4, label: "Active Seats", value: "3,448", delta: "+3.4%" },
];

const areaData = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 4200 },
  { name: "May", sales: 6800 },
  { name: "Jun", sales: 5300 },
];

const pieData = [
  { name: "Direct", value: 400 },
  { name: "Referral", value: 300 },
  { name: "Social", value: 300 },
];
const PIE_COLORS = ["#4F46E5", "#06B6D4", "#10B981"];

const Dashboard = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row g-3 mb-4">
          {stats.map((s) => (
            <div key={s.id} className="col-md-6 col-lg-3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-white shadow-sm border rounded"
              >
                <small className="text-muted">{s.label}</small>
                <div className="d-flex justify-content-between mt-2">
                  <h4 className="fw-bold">{s.value}</h4>
                  <span className="text-success">{s.delta}</span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="row g-3 mb-4">
          {/* Area Chart */}
          <div className="col-lg-8">
            <div className="p-3 bg-white shadow-sm border rounded" style={{ height: "350px" }}>
              <h6 className="mb-3">Monthly Sales</h6>
              <ResponsiveContainer width="100%" height="80%">
                <AreaChart data={areaData}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="sales"
                    stroke="#4F46E5"
                    fillOpacity={1}
                    fill="url(#colorSales)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="col-lg-4">
            <div className="p-3 bg-white shadow-sm border rounded" style={{ height: "350px" }}>
              <h6 className="mb-3">Traffic Sources</h6>
              <ResponsiveContainer width="100%" height="80%">
                <PieChart>
                  <Pie data={pieData} innerRadius={40} outerRadius={70} dataKey="value">
                    {pieData.map((entry, i) => (
                      <Cell key={i} fill={PIE_COLORS[i]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              {/* Legend */}
              <div className="mt-2">
                {pieData.map((p, i) => (
                  <div key={i} className="d-flex align-items-center mb-1">
                    <span
                      className="rounded-circle me-2"
                      style={{
                        backgroundColor: PIE_COLORS[i],
                        width: "10px",
                        height: "10px",
                      }}
                    ></span>
                    <small>{p.name}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tables + Actions */}
        <div className="row g-3">
          {/* Recent Orders */}
          <div className="col-lg-6">
            <div className="p-3 bg-white shadow-sm border rounded">
              <h6 className="mb-3">Recent Orders</h6>
              <table className="table table-sm mb-0">
                <thead>
                  <tr>
                    <th>Order</th>
                    <th>Customer</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#1001</td>
                    <td>Priya</td>
                    <td>$120</td>
                    <td>Completed</td>
                  </tr>
                  <tr>
                    <td>#1002</td>
                    <td>Rahul</td>
                    <td>$65</td>
                    <td>Pending</td>
                  </tr>
                  <tr>
                    <td>#1003</td>
                    <td>Anita</td>
                    <td>$240</td>
                    <td>Shipped</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="col-lg-6">
            <div className="p-3 bg-white shadow-sm border rounded">
              <h6 className="mb-3">Quick Actions</h6>
              <button className="btn btn-primary w-100 mb-2">Create User</button>
              <button className="btn btn-outline-secondary w-100 mb-2">Export CSV</button>
              <button className="btn btn-outline-dark w-100">Run Backup</button>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Dashboard;

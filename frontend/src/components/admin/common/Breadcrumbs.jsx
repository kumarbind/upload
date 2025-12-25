import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter(
      (x) =>
        x &&
        x !== "main" &&
        x !== "admin"
    );

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb mb-0">
        {/* Home */}
        <li className="breadcrumb-item">
          <Link to="/main/admin/dashboard">Home</Link>
        </li>

        {pathnames.map((name, index) => {
          const routeTo = `/main/admin/${pathnames
            .slice(0, index + 1)
            .join("/")}`;

          const isLast = index === pathnames.length - 1;

          const label = name
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase());

          return isLast ? (
            <li
              key={index}
              className="breadcrumb-item active"
              aria-current="page"
            >
              {label}
            </li>
          ) : (
            <li key={index} className="breadcrumb-item">
              <Link to={routeTo}>{label}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

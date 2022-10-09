import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <div className="breadcrumbs">
      {breadcrumbs.map(({ breadcrumb, match }, index) => (
        <div className="breadcrumbs__links" key={match.url}>
          <Link to={match.url || ""}>{breadcrumb}</Link>
          {index < breadcrumbs.length - 1 && ">"}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;

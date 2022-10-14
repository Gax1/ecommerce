import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link } from "react-router-dom";
import BreadcrumbsStyled from "./BreadcrumbStyled";
import routes from "./BreadcrumbConfig";

const Breadcrumbs = ({ className }) => {
  const breadcrumbs = useBreadcrumbs(routes);
  return (
    <BreadcrumbsStyled className={className} key={new Date()}>
      {breadcrumbs.map(({ breadcrumb, match }, index) => (
        <div className="breadcrumbs__links" key={match.url + `${index}`}>
          <Link className="breadcrumbs__links--link" to={match.url || ""}>
            {breadcrumb}
            {index < breadcrumbs.length - 1 && " /"}
          </Link>
        </div>
      ))}
    </BreadcrumbsStyled>
  );
};

export default Breadcrumbs;

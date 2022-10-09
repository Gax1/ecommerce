import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link } from "react-router-dom";
import BreadcrumbsStyled from "./BreadcrumbStyled";

const Breadcrumbs = ({ className }) => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <BreadcrumbsStyled className={className}>
      {breadcrumbs.map(({ breadcrumb, match }, index) => (
        <div className="breadcrumbs__links" key={match.url}>
          <Link className="breadcrumbs__links--link" to={match.url || ""}>
            {breadcrumb}
          </Link>
          {index < breadcrumbs.length - 1 && ">"}
        </div>
      ))}
    </BreadcrumbsStyled>
  );
};

export default Breadcrumbs;

import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";

interface IAppProps {}

const ErrorPage: FC = (props: IAppProps) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="error-page">
      <div className="error-page_header">
        <h1>Error 404 page not found</h1>
        <button className="btn btn-warning" onClick={goBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;

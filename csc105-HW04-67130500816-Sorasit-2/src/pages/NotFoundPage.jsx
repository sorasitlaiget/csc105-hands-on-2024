import { Link, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>Not Found Page</div>
      <Link to="/">Go to Home Page</Link>
    </>
  );
};

export default NotFoundPage; 
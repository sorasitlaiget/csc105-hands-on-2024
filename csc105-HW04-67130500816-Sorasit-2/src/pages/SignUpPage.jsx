import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>Sign Up Page</div>
      <Link to="/">Go to Home Page</Link>
    </>
  );
};

export default SignUpPage; 
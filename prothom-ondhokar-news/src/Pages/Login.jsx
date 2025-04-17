import { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { sigIn, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location)
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    sigIn(email, password)
      .then((res) => {
        console.log(res.user);
        setUser(res.user)
        navigate(location?.state ? location.state : '/' )
      })
      .catch((e) => {
        alert(e.message);
        console.log("ERROR: ", e.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Login your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input w-full input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input w-full input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn w-full btn-neutral rounded-none">
              Login
            </button>
          </div>
        </form>
        <p className="text-center font-semibold ">
          Dont’t Have An Account ?{" "}
          <Link to="/auth/register" className="text-red-600">
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;

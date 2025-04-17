import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // const name = e.target.name.value;
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "must be more then 5 character long" });
      return;
    }
   
    const email = form.get("email");
    if (!emailPattern.test(email)) {
      setError({...error, email: "Please enter a valid email address"});
      return;
    }

    const photo = form.get("photo");
    const password = form.get("password");
    // console.log({ name, email, photo, password });
    createNewUser(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        updateUserProfile({displayName:name,photoURL:photo})
        .then(()=>{
          navigate('/')
        })
        .catch(e=>{
          // console.log(e.code);
        })
        // console.log(user);
      })
      .catch((e) => {
        // console.log("ERROR: ", e.message);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input w-full input-bordered"
              required
            />
            {error.name && (
              <label className="label text-xs text-rose-600 ">
                {error.name}
              </label>
              
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo-url"
              className="input w-full input-bordered"
              required
            />
          </div>
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

          {error.email && (
              <label className="label text-xs text-rose-600 ">
                {error.email}
              </label>
            )}

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
              Register
            </button>
          </div>
        </form>
        <p className="text-center font-semibold ">
          Already Have An Account ?{" "}
          <Link to="/auth/login" className="text-red-600">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;

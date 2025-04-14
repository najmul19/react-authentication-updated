import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.init";
import { useState } from "react";

const SignUp = () => {
    const [error,setError] = useState('')
    const handleSignUp=(e)=>{

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        // reset error status
        setError('');
        // create user with email pass
        createUserWithEmailAndPassword(auth,email,password)
        .then(res=>{
            console.log(res.user)
        })
        .catch(error=>{
            console.log("ERROR",error.message);
            setError(error.message);
        })
    }
  return (
 
        <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
        <h3 className="text-3xl ml-4 font-bold">Sign Up now!</h3>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
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
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          {
            error && <p className="text-red-600">{error}</p>
            
          }
        </div>
     
  );
};

export default SignUp;

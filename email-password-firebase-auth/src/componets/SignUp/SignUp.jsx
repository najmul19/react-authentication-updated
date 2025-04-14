import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase.init";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPass, setShowPass] = useState(false);

  // const patern = /^(?=.*[A-Z]) (?=.*[a-z]) (?=.*\d) (?=.*[@#!$%^&*]) (?=.*[A-Za-z\d@#!$%^&*]){6}&/
  // const p = 'nj';
  // console.log(patern.test(p));

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(email, password,terms);
    // reset error status
    setError("");
    setSuccess(false);

    if (password.length < 6) {
      setError("Password should be 6 or longer");
      return;
    }
    if(!terms){
        setError('Please accept Our terms and conditions.');
        return;
    }
    const patern =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#!$%&*?])[A-Za-z\d@#!$%&*?]{6,}$/;
    if (!patern.test(password)) {
      setError(
        "At least one upper, one lower, one number, one special character"
      );
      return;
    }

    // create user with email pass
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        setSuccess(true);
        // send verification email
        sendEmailVerification(auth.currentUser)
        .then(()=>{
            console.log('varification email send');
        })
      })
      .catch((error) => {
        console.log("ERROR", error.message);
        setError(error.message);
        setSuccess(false);
      });
  };
  return (
    <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <h3 className="text-3xl ml-4 font-bold">Sign Up now!</h3>
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type={showPass ? "text" : "password"}
            placeholder="password"
            className="input input-bordered w-full"
            required
          />

          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="btn btn-xs absolute right-3 top-7 rounded-full"
          >
            {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
          </button>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control pt-3">
          <label className="label justify-start cursor-pointer">
          <input name="terms" type="checkbox" className="checkbox" />
            <span className="label-text ml-2">Accept Our Terms & Conditions.</span>
            
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary w-full">Sign Up</button>
        </div>
      </form>
      {error && <p className="text-red-600">{error}</p>}
      {success && <p className="text-green-600">Sign Up is Succesfull</p>}
      <p className="m-2">Already Have an account? Please <Link to='/login'>Login</Link></p>
    </div>
  );
};

export default SignUp;

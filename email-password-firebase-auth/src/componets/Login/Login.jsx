import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.init";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  
  const emailRef = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
  //  console.log( email, password);

    // reset status
    setSuccess(false);
    setError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // console.log(res.user);
        if(!res.user.emailVerified){
            setError('Please Verify your email.')
        } else {
            setSuccess(true);
        }
      })
      .catch((error) => {
        // console.log(error.message);
        setError(error.message);
      });
  };
  const handleForgatePassword=()=>{
    // console.log('get me email address!', emailRef.current.value)
    const email = emailRef.current.value;
    if(!email) {
        console.log('please provde a valid email address')
    } else {
        sendPasswordResetEmail(auth, email)
        .then(()=>{
            alert('Password Reset email sent, please check your inbox');

        }) .catch((error)=>{
            console.log(error.message)
        })
    }
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
           
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                ref={emailRef}
                type="email"
                name="email"
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
              <label onClick={handleForgatePassword} className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>

          {success && <p className="text-green-600 text-center">User Login Successfull</p>}
          {error && <p className="text-red-600 text-center">{error}</p>}
          <p className="text-center py-3">
            New To this website? Please <Link to='/signUp' className="text-blue-600">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

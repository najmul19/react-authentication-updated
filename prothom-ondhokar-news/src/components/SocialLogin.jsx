
import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const SocialLogin = () => {
    const {googleSignIn,setUser} = useContext(AuthContext);
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(res=>{
            // console.log(res.user)
            setUser(res.user);
        })
        .catch(e=>{
            
        })
    }
    return (
        <div>
            <h2 className="font-semibold mb-3">Login With</h2>
            <div className=" *:w-full space-y-2">
                <button onClick={handleGoogleSignIn} className="btn">
                    <FaGoogle></FaGoogle> Login With Google
                </button>
                <button className="btn">
                    <FaGithub></FaGithub> Login With GItHub
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
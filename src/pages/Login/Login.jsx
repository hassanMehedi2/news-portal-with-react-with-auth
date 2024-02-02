import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/Authprovider";


const Login = () => {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    console.log('the link is set ' ,location);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        login(email, password)
            .then(res => {
                console.log(res);

                // navigate after login 
                navigate(location?.state ? location.state  : '/');
            })
            .catch(error => console.log(error))
    }
    return (
        <div><Navbar></Navbar>
            <div>
                <h2 className="text-2xl font-semibold mt-4 mb-4 text-center">please Login</h2>
                <form onSubmit={handleLogin} className="card-body mx-auto  md:w-3/4 lg:w-1/2">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">do not have an account ? <Link to={"/register"} className="text-blue-800">Register now</Link></p>
            </div>
        </div>
    );
};

export default Login;
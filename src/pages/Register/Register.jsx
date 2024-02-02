import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Register = () => {
const {createUser}= useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        createUser(email,password)
        .then(res =>{console.log(res.user)})
        .catch(error => {console.log(error)})

    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-2xl font-semibold mt-4 mb-4 text-center">please Register</h2>
                <form onSubmit={handleRegister} className="card-body mx-auto md:w-3/4 lg:w-1/2">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                    </div>
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
                      
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary" type="submit">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already have an account ? <Link to={'/login'} className="text-blue-800">Login now</Link></p>
            </div>
        </div>
    );
};

export default Register;
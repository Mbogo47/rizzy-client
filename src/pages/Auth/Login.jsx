import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CiSearch } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import loginpic from '../../assets/login.svg';
import './login.css';

const Login = () => {

  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const notify = (errorMessage, toastId) => {
    toast.error(errorMessage, { toastId });
  };

  const onsubmit = (data) => {
    console.log(data);
    toast.success("Login Successful");
    navigate('/');
  }

  return (
    <div className="login" >

      <nav>

        <div className="logo">
          <span className="rizzy"> RIZZY</span>
          <span className="text">all the way</span>
        </div>

        <div className="search">
          <input type="search" name="search" placeholder="Search" />
          <CiSearch className="search-icon" />
        </div>

        <div className="auth">

          <button className="btn-primary">
            <span>Sign In</span>
          </button>

          <button className="btn-secondary">
            <span>Sign Up</span>
          </button>

        </div>

      </nav>

      <div className="login-form" >

        <div className="image">
          <img src={loginpic} alt="login pisture" />
        </div>

        <form onSubmit={handleSubmit(onsubmit)}>

          <label >Username</label>
          <input type="text" placeholder="Enter your username" {...register("username")} />
          {errors.username && notify(errors.username.message, 'username-error')}


          <label >Password</label>
          <input type="password" placeholder="Enter your password" {...register("password")} />
          {errors.password && notify(errors.password.message, 'password-error')}

          <button className="btn-primary">
            <span>Sign In</span>
          </button>

          <span className="account">Don't have an account?
            <Link to='/signup' className='link'>Sign up</Link>
          </span>

        </form>
        
      </div>

    </div>
  )
}

export default Login
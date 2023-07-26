import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CiSearch } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import loginpic from '../../assets/login.svg';
import { loginAdmin } from '../../redux/apiCall.js';
import './login.css';

const AdminLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const defaultValues = {
        email: 'admin@gmail.com',
        password: 'Pass123&'
    }

    const schema = yup.object().shape({
        email: yup.string().required("Email is required"),
        password: yup.string()
            .required('Password is required')
            .matches(/[a-z]/, 'Must contain at least one lowercase letter')
            .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
            .matches(/[0-9]/, 'Must contain at least one number')
            .matches(/[^a-zA-Z0-9]/, 'Must contain at least one special character')
            .test(
                'password',
                'Password must be at least 8 characters long',
                (value) => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value)
            ),
    });


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: defaultValues,
    });

    const notify = (errorMessage, toastId) => {
        toast.error(errorMessage, { toastId });
    };

    const onsubmit = async (data) => {
        console.log(data);
        const success = await loginAdmin(dispatch, data);
        if (data.token) {
            localStorage.setItem("user", JSON.stringify(data));
        }
        if (success) {
            toast.success("Login Successful");
            navigate('/admin/allproducts');
        }
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

                    <label >Email</label>
                    <input type="text" placeholder="Enter your email" {...register("email")} />
                    {errors.email && notify(errors.email.message, 'email-error')}


                    <label >Password</label>
                    <input type="password" placeholder="Enter your password" {...register("password")} />
                    {errors.password && notify(errors.password.message, 'password-error')}

                    <button className="btn-primary">
                        <span>Sign In</span>
                    </button>



                </form>

            </div>

        </div>
    )
}

export default AdminLogin
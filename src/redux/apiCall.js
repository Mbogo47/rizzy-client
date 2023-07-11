import { loginStart, loginSuccess, loginFailure, logOut } from './userSlice';
import axios from 'axios';
import { apiDomain } from '../utils/utilsDomain';
import { toast } from 'react-toastify';

//register a user
export const registerUser = async (dispatch, user) => {
    try {
        console.log(user);
        const response = await axios.post(`${apiDomain}/auth/register`, user);
        const data = response.data;
        // let res = {
        //     userName: data.userName,
        //     email: data.email,
        //     password: data.password
        // }
        if (data.status === 'success') {
            // alert('Account created successfully. Continue to login')
            toast.info('Account created successfully. Continue to login', 'signup', {
                position: 'top-center',
            });
        }
        console.log(data);
    } catch (err) {
        // alert(err.response.data.error)
        toast.warning(err.response.data.error, 'signup-error', {
            position: 'top-center',
        });
        console.log(err);
    }
};

//login user
export const loginUser = async (dispatch, user) => {
    // const {username} = useSelector((state) => state.user.user)

    console.log(user, dispatch);
    dispatch(loginStart());
    try {
        const { data } = await axios.post(`${apiDomain}/auth/login`, user);
        dispatch(loginSuccess(data));
        toast.info('Welcome back','login', {
            position: 'top-center'
        })
        // alert('logged in succesfully');
        return true;
        console.log(data);

    } catch (err) {
        console.log(err)
        console.log(err.response)
        toast.warning(err.response.data.error,'login-error', {
            position: 'top-center'
        })

        dispatch(loginFailure());
        return false;
    }

}

//logout user
export const logOutuser = async (dispatch) => {
    console.log(dispatch);
    dispatch(logOut())
}
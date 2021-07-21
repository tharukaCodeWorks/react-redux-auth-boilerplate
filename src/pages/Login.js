import React from 'react';
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {login} from '../redux/User';
import './Auth.css';
import AuthLayout from '../components/AuthLayout'; 

const Login = (props) =>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => props.login(data);

    return(
        <AuthLayout>
            <p style={{textAlign: 'center', color: '#ffffff', fontSize: 36}}>Login</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="input-label">Email</label>
                    <input type="email" className={(errors.email || props.messages.status=='un-verified'||props.messages.status=='wrong')?'input-error':''} placeholder="Email" {...register("email", { 
                        required: true, 
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        }
                        })}/><br />
                    <span className="error-message">
                        {errors.email?.type === 'required' && "* Email is required"}
                        {errors.email?.type === 'pattern' && "* Please enter valid email"}
                        {(props.messages.status=='un-verified'||props.messages.status=='wrong')&&props.messages.login}
                    </span><br /><br />
                    <label className="input-label">Password</label>
                    <input type="password" className={errors.password || props.messages.status=='wrong'?'input-error':''} placeholder="Password" {...register("password", { 
                        required: true
                        })}/><br />
                    <span className="error-message">
                        {errors.password?.type === 'required' && "* Password is required"}
                    </span><br /><br />
                    <input type="submit" value="Login" disabled={props.messages.isProcessing}/>
                </form>
                <table style={{width: '100%', marginTop: 20}}>
                    <tbody>
                        <tr>
                            <td align="left"><Link to="/auth/register" className="link-style">Register</Link></td>
                            <td align="right"><Link to="/auth/forgot-password" className="link-style">Forgot Password</Link></td>
                        </tr>
                    </tbody>
                </table>
        </AuthLayout>
    );
}

const mapStateToProps =state=> state.user ;
export default connect(mapStateToProps, {login})(Login);
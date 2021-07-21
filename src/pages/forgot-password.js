import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import AuthLayout from '../components/AuthLayout';
import {forgotPassword} from '../redux/User';

const ForgotPassword = (props) =>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formData, setFormData] = useState("");
    const onSubmit = data => {
        setFormData(data);
        props.forgotPassword(data)
    };

    return(
        <AuthLayout>
             <p style={{textAlign: 'center', color: '#ffffff', fontSize: 36}}>Forgot Password</p>
            {
            props.messages.status=="success"?<Redirect to={`/auth/reset-password?email=${formData.email}`} />:<div>
            {props.messages.forgotPassword!=null?<p>{props.messages.forgotPassword}</p>:null}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="input-label">Email</label>
                <input type="email" placeholder="email address" {...register("email", { 
                    required: true, 
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                    }
                    })}></input><br />
                <span className="error-message">
                    {errors.email?.type === 'required' && "Email is required"}
                    {errors.email?.type === 'pattern' && "Please enter valid email"}
                </span>
                <br /><br />
                <input type="submit" value="Send Reset Code" disabled={props.messages.isProcessing}></input>
            </form>
        </div>
        }
        </AuthLayout>
    );
}

const mapStateToProps =state=> state.user ;
export default connect(mapStateToProps, {forgotPassword})(ForgotPassword);
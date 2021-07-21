import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { useForm } from "react-hook-form";
import { withRouter } from 'react-router';
import {resetPassword} from '../redux/User';
import AuthLayout from '../components/AuthLayout';

const ResetPassword = (props) =>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => props.resetPassword(data);
    return(
        <AuthLayout>
            <p style={{textAlign: 'center', color: '#ffffff', fontSize: 36}}>Reset Password</p>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" value={queryString.parse(props.location.search).email} {...register("email", { 
                    required: true
                    })}/>
            <input type="text" placeholder="Code" {...register("resetCode", { 
                    required: true,
                    minLength: 6,
                    maxLength: 6
                    })}></input><br />
            <span className="error-message">
                {errors.resetCode?.type === 'required' && "Please enter reset code"}
                {errors.resetCode?.type === 'minlength' || errors.resetCode?.type === 'maxlength' && "Please enter valid reset code"}
            </span><br /><br />
            <input type="password" placeholder="Password" {...register("password", { 
                    required: true
                    })}></input><br />
            <span className="error-message">
                {errors.password?.type === 'required' && "Password is required"}
            </span>
            <br /><br />
            <input type="submit" value="Reset Password" disabled={props.messages.isProcessing}></input>
            </form>
        </AuthLayout>
    );
}

const mapStateToProps =state=> state.user ;
export default connect(mapStateToProps, {resetPassword})(withRouter(ResetPassword));
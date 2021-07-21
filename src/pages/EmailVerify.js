import React, {useEffect, useState} from 'react';
import { Redirect, withRouter } from 'react-router';
import queryString from 'query-string';
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { verifyEmail } from '../redux/User';
import AuthLayout from '../components/AuthLayout';
import {RESEND_VERIFY_EMAIL} from '../config/ApiConfig';
import axios from 'axios';

const EmailVerify = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [count, setCount] = useState(180);
    const [isRunningCount, setIsRunningCount] = useState(false);
    const onSubmit = data => props.verifyEmail(data);

    useEffect(()=>{
        if (isRunningCount){
            if(count==0){
                setIsRunningCount(false);
                setCount(180)
            } else {
                setTimeout(() => setCount(count - 1), 1000);
            }
        }
            
    },[count, isRunningCount])

    const resendVerificationEmail=()=>{
        axios.get(`${RESEND_VERIFY_EMAIL}${queryString.parse(props.location.search).email}`).then(res=>{
            setIsRunningCount(true);
        })
    }

    const format=(time)=>{
        let seconds = time % 60;
        let minutes = Math.floor(time / 60);
        minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
        seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
        return minutes + ':' + seconds;
    }

    return(
        <AuthLayout>
            {
                props.messages.emailVerifyStatus=="success"?<Redirect to="/auth/login" />:<>
                    <p style={{textAlign: 'center', color: '#ffffff', fontSize: 36}}>Verify Email</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="input-label">Verification Code</label>
                <input type="text" placeholder="Verification Code" {...register("verifyCode", { 
                    maxLength: 6,
                    minLength: 6,
                    pattern: {value: /^[0-9]*$/ }
                    })}/>
                <span className="error-message">
                    {errors.verifyCode && "Please input valid verify code"}
                    {props.messages.verifyEmail!=null&&props.messages.verifyEmail}
                </span>
                    <br />
                <br />
                <input type="hidden" value={queryString.parse(props.location.search).email} {...register("email", { 
                    required: true
                    })}/>
               
                <input type="submit" value="Verify" disabled={props.messages.isProcessing}/>

                <p style={{color: '#fff', textAlign: 'center'}}>Didn't recieve email? {!isRunningCount&&<a href="#" onClick={resendVerificationEmail}>Resend verification email</a>} {isRunningCount&&<a href="#">Resend verification email</a>} &nbsp;&nbsp;<br /> {isRunningCount&&format(count)}</p>
            </form>
                </>
            }
            
        </AuthLayout>
    );
}

const mapStateToProps =state=> state.user ;
export default connect(mapStateToProps, {verifyEmail})(withRouter(EmailVerify));
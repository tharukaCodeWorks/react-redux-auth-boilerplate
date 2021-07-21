import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import {registerAction} from '../redux/User';

const Register = (props) =>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formData, setFormData] = useState({email:""});
    const onSubmit = data => {
        setFormData(data);
        props.registerAction(data);
    };

    return(
        <AuthLayout>
             <p style={{textAlign: 'center', color: '#ffffff', fontSize: 36}}>Register</p>
            {
            props.messages.registerStatus=="success"?<Redirect to={`/auth/email-verify?email=${formData.email}`} />:<div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="input-label">First Name</label>
                <input type="text" placeholder="First Name" {...register("firstName", { 
                    required: true
                    })}/><br />
                <span className="error-message">
                    {errors.firstName?.type === 'required' && "First Name is required"}
                </span><br />
                <label className="input-label">Last Name</label>
                <input type="text" placeholder="Last Name" {...register("lastName", { 
                    required: true
                    })}/><br />
                <span className="error-message">
                    {errors.lastName?.type === 'required' && "Last Name is required"}
                </span><br />
                <label className="input-label">Gender</label><br />
                <select {...register("gender", { 
                    required: true
                    })}>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                </select><br />
                <span className="error-message">
                    {errors.gender?.type === 'required' && "Gender is required"}
                </span><br />
                <label className="input-label">Email</label>
                <input type="email" placeholder="Email" {...register("email", { 
                    required: true, 
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                    }
                    })}/><br />
                <span className="error-message">
                    {errors.email?.type === 'required' && "Email is required"}
                    {errors.email?.type === 'pattern' && "Please enter valid email"}
                    {props.messages.registerStatus=="already" && props.messages.registration}
                </span><br />
                
                <label className="input-label">Password</label>
                <input type="password" placeholder="Password" {...register("password", { 
                    required: true
                    })}/><br />
                <span className="error-message">
                    {errors.password?.type === 'required' && "Password is required"}
                </span><br />
                <input type="submit" value="Register" disabled={props.messages.isProcessing}/>
            </form>
            <table style={{width: '100%', marginTop: 20}}>
                <tbody>
                    <tr>
                        <td align="left"><Link to="/auth/login" className="link-style">Login</Link></td>                  
                    </tr>
                </tbody>
            </table>
        </div>
        }
        </AuthLayout>
    );
}

const mapStateToProps =state=> state.user ;
export default connect(mapStateToProps, {registerAction})(Register);
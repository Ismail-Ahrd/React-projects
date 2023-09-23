import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


function Form() {
    const schema = yup.object().shape({
        name : yup.string().required("Your name is required"),
        email : yup.string().email("please enter a email").required("your email is required"),
        age : yup.number().positive().integer().min(18).required("your age is required"),
        password : yup.string().min(4).max(20).required("your pasword is required"),
        confirmPassword : yup.string().oneOf([yup.ref("password"), null], "Passwords don't match").required()
    });


    const {register, handleSubmit, formState : {errors}} = useForm({
        resolver : yupResolver(schema)
    });
   
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='Name' {...register("name")} /><br /> 
                <p>{errors.name?.message}</p>
                <input type="text"  placeholder='Email' {...register("email")} /><br />
                <p>{errors.email?.message}</p>
                <input type="number" placeholder='Age' {...register("age")} /><br />
                <p>{errors.age?.message}</p>
                <input type="password" placeholder='Password' {...register("password")} /><br />
                <p>{errors.password?.message}</p>
                <input type="password" placeholder='Confirm Password' {...register("confirmPassword")} /><br />
                <p>{errors.confirmPassword?.message}</p>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Form
import sendImg from '../media/send.png'
import '../styles/contactForm.css'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'

export const Contact = () => {

    const schema = yup.object().shape({
        name: yup.string().required("Please enter your name"),
        mail: yup.string().email().required("Please enter a valid email"),
        comment: yup.string().required("Please provide a comment")
    })


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <form className='contactForm' onSubmit={handleSubmit(onSubmit)}>
            <h2>Contact Us</h2>
            {Object.keys(errors).length !== 0 && <ErrorMessage message={errors[Object.keys(errors)[0]].message} />}
            <input type="text" placeholder="Full name" {...register("name")} />
            <input type="email" placeholder="Email" {...register("mail")} />
            <textarea rows={7} placeholder="Add your comment" {...register("comment")} />
            <input type="image" alt="submit button" id="submitBtn" src={sendImg} />
        </form>
    )
}


const ErrorMessage = (props) => {
    return (
        <p style={{backgroundColor: "lightpink", color:"grey", padding:"5px"}}>{props.message}</p>
    )
}
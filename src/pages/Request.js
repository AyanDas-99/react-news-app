import sendImg from '../media/send.png'
import '../styles/form.css'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export const Request = () => {

    const schema = yup.object().shape({
        name: yup.string().required("Please enter your name"),
        mail: yup.string().email().required("Please enter a valid email"),
        issue: yup.string().required("Please provide a comment"),
        mobile: yup.number().max(10).min(10),
    })


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <form className='contactForm' onSubmit={handleSubmit(onSubmit)}>
            <h2>Request Media Coverage</h2>
            {Object.keys(errors).length !== 0 && <ErrorMessage message={errors[Object.keys(errors)[0]].message} />}
            <input type="text" placeholder="Full name (required)" {...register("name")} />
            <input type="email" placeholder="Email (required)" {...register("mail")} />
            <input type="number" placeholder="Mobile number (optional)" {...register("mobile")} />
            <textarea rows={7} placeholder="Why do you need media coverage? (required)" {...register("issue")} />
            <div className='files'>
                <label htmlFor="files">Add related files</label>
                <input name="files" type="file" multiple={true} {...register("files")} />
            </div>
            <input type="image" alt="submit button" id="submitBtn" src={sendImg} />
        </form>
    )
}


const ErrorMessage = (props) => {
    return (
        <p style={{ backgroundColor: "lightpink", color: "grey", padding: "5px" }}>{props.message}</p>
    )
}
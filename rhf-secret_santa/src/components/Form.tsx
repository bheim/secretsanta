import { useForm } from 'react-hook-form';
import { DevTool } from "@hookform/devtools";

type FormValues = {
    name: string
    email: string
}

export const Form = () => {
    const form = useForm<FormValues>();
    const { register, control, handleSubmit } = form

    const onSubmit = (data: FormValues) => {
        console.log('Form submitted', data)
    }
 
    return (
        <div>
            <h1> Form </h1>
            <form onSubmit = {handleSubmit(onSubmit)} noValidate>
                <label htmlFor="name">Name</label>
                <input type="text" id="email" {...register("name", { 
                    required: {
                        value: true,
                        message: "email is required"
                    }
                })}/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email", {
                    required: {
                        value: true,
                        message: "email is required"
                    },
                    pattern: {
                        value: 
                            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Invalid email format"
                    }
                })} />

                <button>Submit</button>
            </form>
            <DevTool control = { control } />
        </div>
    );
};



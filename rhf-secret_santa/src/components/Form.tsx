import { useForm } from 'react-hook-form';
import { DevTool } from "@hookform/devtools";


type FormValues = {
    person: {
        name: string
        email: string
    }
}

export const Form = () => {
    const form = useForm<FormValues>({
        defaultValues: {
            person: {
                name: "",
                email: "",
            }
        }
    });
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;


    const onSubmit = (data: FormValues) => {
        console.log('Form submitted', data)
    }
 
    return (
        <div>
            <h1> Secret Santa </h1>
            <form onSubmit = {handleSubmit(onSubmit)} noValidate>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="email" 
                        {...register("person.name", { 
                            required: {
                                value: true,
                                message: "name is required"
                            }
                        })}
                    />

                    <p className="error">{ errors.person?.message }</p>
                </div>

                <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("person.email", {
                    required: {
                        value: true,
                        message: "email is required"
                    },
                    pattern: {
                        value: 
                            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Invalid email format"
                    }
                })}
            />
            <p className="error">{ errors.person?.message }</p>
            </div>
                <button>Submit</button>
            </form>
            <DevTool control = { control } />
        </div>
    );
};



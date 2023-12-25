import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import '../Formik/App.scss'


const schema = yup
  .object({
    firstName: yup.string().required('This field is invalid').min(3,'Too short').max(18,'Too long'),
    email:yup.string().email('Email is not valid').required('This field is invalid'),
    password:yup.string().required('This field is invalid').min(6,'Must be at least 6 characters'),
    toggle:yup.boolean()
  })
  .required()


export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode:"onChange"
  })
  const onSubmit = (data,e) => {
    console.log(data)
    e.target.reset()
  }


  return (
    < div className="App">
    <h1>DORSIN</h1>
    <p>Sign up for a new account</p>
    <form onSubmit={handleSubmit(onSubmit)}>
     <label htmlFor="name" className={errors.firstName?'invalid':''}>Username<input {...register("firstName")}  id='name' placeholder="Enter username"/><i className='bx bx-error-circle' ></i></label> 
      <p className="error" >{errors.firstName?.message}</p>


     <label htmlFor="email" className={errors.email?'invalid':''}>Email<input {...register("email")} id='email' placeholder="Enter email" type='email'/><i className='bx bx-error-circle' ></i></label> 
      <p className="error" >{errors.email?.message}</p>

     <label htmlFor="pass" className={errors.password?'invalid':''}>Password<input {...register("password")} id='pass' placeholder="Enter password" type='password'/><i className='bx bx-error-circle' ></i></label> 
      <p className="error" >{errors.password?.message}</p>

     <label htmlFor="rem" className='checked'><input type="checkbox"id="rem" {...register("toggle")}/>Remember me</label> 


      <input type="submit" value="Sign in" />
    </form>
    <p>Do not have an account?<span>Sign in</span></p>
    </div>
  )
}

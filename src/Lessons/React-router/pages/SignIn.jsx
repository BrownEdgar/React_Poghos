import { Formik,Form,Field,ErrorMessage } from 'formik'
import { nanoid } from 'nanoid'
import {useState} from 'react'
import { object as YupObject,string } from 'yup'
import '../../Homework/Formik/App.scss'



export default function SignIn() {
    const initialValues = {
        username:"",
        password:'',

    }
    const validationSchema = YupObject({
        username:string().max(18,'Too long').min(3,'Too short').required('This field is invalid'),
        password:string().min(6,'Must be at least 6 characters').required('This field is invalid')
    })
        const [users, setUsers] = useState([])
    
        const handleSubmit = (values,{resetForm}) => {
            const user = {
                id:nanoid(),
                ...values
            }
            setUsers([...users,user])
            resetForm()
        }
  return (
    <>
    <h1>SignIn</h1>
    <div className='App'>
        <h1>DORSIN</h1>
        <p>Sign in for Account</p>
        <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        >
            {
                (formik) => {
                    return(
                        <Form>
            <label htmlFor="username" className={formik.errors.username && formik.touched.username?'invalid':''}>First Name 
                <Field type="text" name='username' id='username'placeholder='First Name' />
                <i className='bx bx-error-circle' ></i>
            </label>
            <ErrorMessage  name="username" component="p" className="error" /> 
            <label htmlFor="password" className={formik.errors.password && formik.touched.password?'invalid':''}>Password
                <Field type="password" name='password' id='password'placeholder='Enter password' />
                <i className='bx bx-error-circle' ></i>
            </label>
            <ErrorMessage name="password" component="p" className="error" /> 
            <input type="submit" value="Sign in"  />
                        </Form>
                    )
                }
            }


        </Formik>
    </div>
 </>

  )
}

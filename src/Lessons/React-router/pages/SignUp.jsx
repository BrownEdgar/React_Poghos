import { Formik, Form, Field, ErrorMessage } from 'formik'
import { nanoid } from 'nanoid'
import '../../Homework/Formik/App.scss'
import { signUpvalidationSchema } from '../constants/validationSchemas'
import { useNavigate } from 'react-router-dom'
import ROUTES from '../routes'
import useStorage from '../../hooks/CustomHooks/useStorage'
import { useEffect } from 'react'

const initialValues = {
  username: "",
  email: '',
  password: '',
  toggle: false
}

export default function SignUp({ users, setUsers, }) {
  const navigate = useNavigate()
  const [value] = useStorage('login')


  useEffect(() => {
    if (value === 'true') {
      navigate('/')
    }
  }, [value, navigate])

  const handleSubmit = (values, { resetForm }) => {
    const user = {
      id: nanoid(),
      ...values
    }

    setUsers([...users, user])
    resetForm()
    navigate(ROUTES.USERS)
  }

  return (
    <>
      <h1>SignUp</h1>
      <div className='App'>
        <h1>DORSIN</h1>
        <p>Sign up for a new Account</p>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={signUpvalidationSchema}
        >
          {
            (formik) => {

              console.log(formik.values)
              return (
                <Form>
                  <label htmlFor="username" className={formik.errors.username && formik.touched.username ? 'invalid' : ''}>First Name
                    <Field type="text" name='username' id='username' placeholder='First Name' />
                    <i className='bx bx-error-circle' ></i>
                  </label>
                  <ErrorMessage name="username" component="p" className="error" />
                  <label htmlFor="email" className={formik.errors.email && formik.touched.email ? 'invalid' : ''}>Email
                    <Field type="email" name='email' id='email' placeholder='Enter Email' />
                    <i className='bx bx-error-circle' ></i>
                  </label>
                  <ErrorMessage name="email" component="p" className="error" />
                  <label htmlFor="password" className={formik.errors.password && formik.touched.password ? 'invalid' : ''}>Password
                    <Field type="password" name='password' id='password' placeholder='Enter password' />
                    <i className='bx bx-error-circle' ></i>
                  </label>
                  <ErrorMessage name="password" component="p" className="error" />
                  <label htmlFor="toggle" className='checked'>
                    <Field type="checkbox" id='toggle' name='toggle' />Remember Me
                  </label>
                  <input type="submit" value="Sign Up" disabled={!formik.values.toggle} />
                </Form>
              )
            }
          }


        </Formik>
        <p>Don't have an account? <span>Sign in</span></p>

      </div>
    </>

  )
}


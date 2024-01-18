import { Formik, Form, Field, ErrorMessage } from 'formik'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'

import '../../Homework/Formik/App.scss'
import { signInvalidationSchema } from '../constants/validationSchemas'
import { useNavigate } from 'react-router-dom'
import ROUTES from '../routes'
import useStorage from '../../hooks/CustomHooks/useStorage'

const initialValues = {
  username: "",
  password: '',
}


export default function SignIn({ users }) {

  const [value] = useStorage('login')
  const navigate = useNavigate()

  useEffect(() => {
    if (value === 'true') {
      navigate('/')
    }
  }, [value, navigate])


  const handleSubmit = (values, { resetForm }) => {
    const isUserExist = users.some(user => (
      user.username === values.username &&
      user.password === values.password)
    )

    if (isUserExist) {
      localStorage.setItem('login', true)
      window.location.href = ROUTES.USERS
      resetForm()
    } else {
      alert('nom user!')
    }
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
          validationSchema={signInvalidationSchema}
        >
          {
            (formik) => {
              return (
                <Form>
                  <label htmlFor="username" className={formik.errors.username && formik.touched.username ? 'invalid' : ''}>First Name
                    <Field type="text" name='username' id='username' placeholder='First Name' />
                    <i className='bx bx-error-circle' ></i>
                  </label>
                  <ErrorMessage name="username" component="p" className="error" />
                  <label htmlFor="password" className={formik.errors.password && formik.touched.password ? 'invalid' : ''}>Password
                    <Field type="password" name='password' id='password' placeholder='Enter password' />
                    <i className='bx bx-error-circle' ></i>
                  </label>
                  <ErrorMessage name="password" component="p" className="error" />
                  <input type="submit" value="Sign in" />
                </Form>
              )
            }
          }


        </Formik>
      </div>
    </>

  )
}

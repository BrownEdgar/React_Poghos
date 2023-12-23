import React, { useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'

import { object as YupObject, string } from 'yup'

import './App.scss'
import { nanoid } from 'nanoid'

const initialValues = {
  username: '',
  email: '',
  lamguages: ''
}

const validationSchema = YupObject({
  username: string().max(18).min(3).matches(/^[A-Z]/, 'Must by start with uppercase').required(),
  email: string().email().required(),
  lamguages: string().oneOf(['html', 'css', 'js', 'react'])

})

export default function App() {
  const [users, setusers] = useState([])

  const handleSubmit = (values, { resetForm }) => {
    const user = {
      id: nanoid(),
      ...values
    }
    setusers([...users, user])
    resetForm()
  }
  return (
    <div className='App'>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {
          (formik) => {
            console.log(formik.errors)
            return (
              <Form>
                <ErrorMessage>
                  {
                    (err) => {
                      return Object.keys(err).map(field => {
                        return <p key={field} className='error'>
                          {err[field]}
                        </p>
                      })
                    }
                  }
                </ErrorMessage>
                <Field type="text" name='username' />
                <Field type="email" name='email' />
                <Field as='select' name="lamguages">
                  <option value="html">html</option>
                  <option value="css">css</option>
                  <option value="js">js</option>
                  <option value="react">react</option>
                  <option value="next">next.js</option>
                </Field>

                <input type="submit" value="save" />
              </Form>
            )
          }
        }
      </Formik>
    </div>
  )
}
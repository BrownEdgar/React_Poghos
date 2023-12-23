import {useState} from 'react'
import { Formik,Form,Field, ErrorMessage } from 'formik'
import './App.scss'
import { object as YupObject,string } from 'yup'
import { nanoid } from 'nanoid'


const initialValues = {
    username:'',
    email:'',
    languages:''
}

const validationSchema = YupObject({
    username:string().max(18).min(3).matches(/^[A-Z]/,'Must be started with uppercase').required(),
    email:string().email().required(),
    languages:string().oneOf(['html','css','js','react'])
})

export default function App() {
    const [users, setUsers] = useState([])

    const handleSubmit = (values,{resetForm}) => {
        console.log(users);
        const user = {
            id:nanoid(),
            ...values
        }
        setUsers([...users,user])
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
                    console.log(formik.errors);
                return(
                    <Form>
                        <ErrorMessage>
                            {
                                (err)=>{
                                return Object.keys(err).map(field => {
                                    return <p key={field} className='error'>
                                        {
                                            err[field]
                                        }
                                    </p>
                                })    
                                
                                }
                            }
                        </ErrorMessage>
                    <Field type="text" name='username'/>
                    {/* <ErrorMessage name="username" component="p" className="error"/> */}
                    <Field type="email" name='email'/>
                    {/* <ErrorMessage name="email" component="p" className="error"/> */}
                    <Field as="select" name="languages">
                        <option value="html">html</option>
                        <option value="css">css</option>
                        <option value="js">js</option>
                        <option value="react">react</option>
                        <option value="next">next</option>

                    </Field>
                    {/* <ErrorMessage name="languages">
                    {
                        (errMessage) =>  {
                            return(
                                    <p className="error">
                                        <span>
                                            {errMessage}
                                        </span>
                                    </p>
                               
                            )
                        }
                    }
                    </ErrorMessage> */}
                    <input type="submit" value="save"/>
                            </Form>
                )
                }
            }

        </Formik>

    </div>
  )
}
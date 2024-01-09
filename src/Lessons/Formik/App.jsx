import {useState} from 'react'
import {ErrorMessage ,Field, Form,Formik} from 'formik'
import './App.scss'
import {object as Yupobject, string} from 'yup'
import jsonData from "./data.json"
import List from './List/List'

const initialValues = {
    username: '',
    email:'',
    languages: '',
}
const languagesList = ['html', 'css', 'js', 'react', 'next']

const validationSchema = Yupobject({
    username:string().max(18).min(3).matches(/^[A-Z]/,"must be start uppercase").required(),
    email:string().email().required(),
    languages: string().oneOf(languagesList)

})

export default function App() {
    const [users, setUsers] = useState(jsonData)

    const handleSubmit = (values,{resetForm}) => {
        console.log(values)
        resetForm()
    }
  return (
    <div className='App'>
        <Formik 
         onSubmit={handleSubmit}
         initialValues={initialValues}
         validationSchema={validationSchema}
        >
            {
                (formik) => {
                    console.log(formik.errors);
                    return(
                        <Form>
                            <ErrorMessage>
                                {
                                    (err) => {
                                        return Object.keys(err).map(field => {
                                            return( <p key={field} className='error'>
                                                    {err[field]}
                                            </p>)
                                        })
                                    }
                                }
                            </ErrorMessage>
                            <Field type="text" name='username' onChange={formik.handleChange}/>
                            <Field type="email" name="email"  onChange={formik.handleChange}/>
                            <Field as="select" name="languages">
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
        <hr />
        <List languagesList={languagesList} users={users}/>
    </div>
  )
}

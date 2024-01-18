import { object as YupObject, string } from 'yup'

export const signInvalidationSchema = YupObject({
  username: string().max(18, 'Too long').min(3, 'Too short').required('This field is invalid'),
  password: string().min(5, 'Must be at least 5 characters').required('This field is invalid')
})

export const signUpvalidationSchema = YupObject({
  username: string().max(18, 'Too long').min(3, 'Too short').required('This field is invalid'),
  email: string().email().required('This field is invalid'),
  password: string().min(6, 'Must be at least 6 characters').required('This field is invalid')
})

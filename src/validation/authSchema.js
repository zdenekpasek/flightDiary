import * as Yup from 'yup';

export const authSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters long')
    .max(20, 'Name cannot be longer than 20 characters.')
    .required('Name is required'),
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .max(30, 'Password cannot be longer than 30 characters')
    .required('Password is required'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
});

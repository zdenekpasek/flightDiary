import * as Yup from 'yup';

export const uavSchema = Yup.object().shape({
  uavName: Yup.string()
    .min(3, 'Name must be atleast 3 characters long')
    .max(30, 'Name cannot be longer than 30 characters.')
    .required('Name is required'),
  okNumber: Yup.number().required('OK is required'),
  weight: Yup.string()
    .min(2, 'Weight must be atleast 2 characters long')
    .max(20, 'Too Long!')
    .required('Weight is required'),
});

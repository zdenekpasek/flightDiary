import * as Yup from 'yup';

export const uavSchema = Yup.object().shape({
  uavName: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  okNumber: Yup.number().required('Required'),
  weight: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
});

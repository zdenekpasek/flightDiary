import * as Yup from 'yup';

export const missionSchema = Yup.object().shape({
  missionName: Yup.string()
    .min(3, 'Name must be atleast 3 characters long')
    .max(30, 'Name cannot be longer than 30 characters.')
    .required('Name is required'),
  pilot: Yup.string(),
  gps: Yup.string(),
  date: Yup.string().required('Date is required'),
  time: Yup.string().required('Time is required'),
  usedBatteries: Yup.string()
    .min(3, 'Used batteries must be atleast 3 characters long')
    .max(30, 'Used batteries cannot be longer than 30 characters.'),
  desc: Yup.string()
    .min(3, 'Description must be atleast 3 characters long')
    .max(30, 'Description cannot be longer than 30 characters.'),
});

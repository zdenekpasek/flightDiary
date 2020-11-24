import * as Yup from 'yup';
import { t, init } from '../../localization';

init();
export const authSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, t('nameMinMessage'))
    .max(20, t('nameMaxMessage'))
    .required(t('nameReqMessage')),
  email: Yup.string()
    .email(t('emailValidMessage'))
    .required(t('emailReqMessage')),
  password: Yup.string()
    .min(8, t('passwordMinMessage'))
    .max(30, t('passwordMaxMessage'))
    .required(t('passwordReqMessage')),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    t('passwordConfirmMessage')
  ),
});

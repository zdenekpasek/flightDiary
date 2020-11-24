import * as Yup from 'yup';
import { t, init } from '../../localization';

init();

export const uavSchema = Yup.object().shape({
  uavName: Yup.string()
    .min(3, t('nameMinMessage'))
    .max(30, t('missionNameMaxMessage'))
    .required(t('nameReqMessage')),
  okNumber: Yup.number().required(t('okReqMessage')),
  weight: Yup.string()
    .min(2, t('weightMinMessage'))
    .max(20, t('weightMaxMessage'))
    .required(t('weightReqMessage')),
});

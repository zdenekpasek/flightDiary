import * as Yup from 'yup';
import { t, init } from '../../localization';

init();
export const missionSchema = Yup.object().shape({
  missionName: Yup.string()
    .min(3, t('nameMinMessage'))
    .max(30, t('missionNameMaxMessage'))
    .required(t('nameReqMessage')),
  pilot: Yup.string(),
  gps: Yup.string(),
  usedBatteries: Yup.string()
    .min(3, t('usedBatteriesMinMessage'))
    .max(30, t('usedBatteriesMaxMessage')),
  desc: Yup.string().min(3, t('descMinMessage')).max(30, t('descMaxMessage')),
});

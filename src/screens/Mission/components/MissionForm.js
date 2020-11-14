import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Platform,
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Button, Input } from 'react-native-elements';
import { Formik } from 'formik';
import { FontAwesome, Feather } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MyAppText from '../../../components/MyAppText';
import { t, init } from '../../../../localization';
import { missionSchema } from '../../../validation/missionSchema';
import { Context as WeatherContext } from '../../../context/WeatherContext';
import useWeather from '../../../hooks/useWeather';
import useLocation from '../../../hooks/useLocation';
import useGeoLocation from '../../../hooks/useGeoLocation';
import useDateTime from '../../../hooks/useDateTime';

const MissionForm = ({ buttonText, onSubmit, error, initialValues }) => {
  init();

  const [getWeather, results, icon, tmp, wind, positionName] = useWeather();
  const [
    showStartDatePicker,
    showEndDatePicker,
    hideStartDatePicker,
    hideEndDatePicker,
    handleStartDateConfirm,
    handleEndDateConfirm,
    startMissionDateTime,
    endMissionDateTime,
    isStartDatePickerVisible,
    isEndDatePickerVisible,
  ] = useDateTime();
  const [gps, setGps] = useState('');
  const [date, setDate] = useState(moment().format('LL'));

  const loc = useGeoLocation();

  const formatGPS = (lat, long) => {
    const result = `${lat},${long}`;
    return result;
  };

  useEffect(() => {
    if (loc) {
      getWeather(loc.coords.latitude, loc.coords.longitude);
      setGps(formatGPS(loc.coords.latitude, loc.coords.longitude));
    }
  }, [loc]);

  if (loc !== null) {
    return (
      <View>
        <Formik
          initialValues={
            initialValues
              ? initialValues
              : {
                  missionName: '',
                  pilot: '',
                  uav: 'sdsd',
                  gps,
                  date: '',
                  time: '',
                  usedBatteries: '',
                  tmp,
                  wind,
                  desc: '',
                }
          }
          onSubmit={onSubmit}
          validationSchema={missionSchema}
          enableReinitialize={true}
        >
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
          }) => (
            <View>
              <Input
                label={t('missionName')}
                autoCapitalize="none"
                autoCorrect={false}
                value={values.missionName}
                onChangeText={handleChange('missionName')}
                onBlur={() => setFieldTouched('missionName')}
              />
              {touched.missionName && errors.missionName && (
                <MyAppText customStyle={styles.errorStyle}>
                  {errors.missionName}
                </MyAppText>
              )}
              <Input
                label="Pilot"
                autoCapitalize="none"
                autoCorrect={false}
                value={values.pilot}
                onChangeText={handleChange('pilot')}
                onBlur={() => setFieldTouched('pilot')}
                disabled={true}
              />
              {touched.pilot && errors.pilot && (
                <MyAppText customStyle={styles.errorStyle}>
                  {errors.pilot}
                </MyAppText>
              )}
              <Input
                label="GPS"
                autoCapitalize="none"
                autoCorrect={false}
                value={values.gps}
                onChangeText={(newGps) => setGps(newGps)}
                disabled={true}
              />
              {touched.gps && errors.gps && (
                <MyAppText customStyle={styles.errorStyle}>
                  {errors.gps}
                </MyAppText>
              )}

              <View style={{ margin: 10 }}>
                <DateTimePickerModal
                  isVisible={isStartDatePickerVisible}
                  mode="datetime"
                  onConfirm={handleStartDateConfirm}
                  onCancel={hideStartDatePicker}
                  isDarkModeEnabled={false}
                />
                <DateTimePickerModal
                  isVisible={isEndDatePickerVisible}
                  mode="datetime"
                  onConfirm={handleEndDateConfirm}
                  onCancel={hideEndDatePicker}
                  isDarkModeEnabled={false}
                />

                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                  <MyAppText
                    customStyle={{ alignSelf: 'center' }}
                    fontWeight="bold"
                    fontSize={16}
                  >
                    {t('missionStart')}
                  </MyAppText>
                  <View style={styles.dateStyle}>
                    <TouchableOpacity onPress={showStartDatePicker}>
                      <MyAppText customStyle={{ padding: 3 }} fontSize={18}>
                        {startMissionDateTime}
                      </MyAppText>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                  <MyAppText
                    customStyle={{ alignSelf: 'center' }}
                    fontWeight="bold"
                    fontSize={16}
                  >
                    {t('missionEnd')}
                  </MyAppText>
                  <View style={styles.dateStyle}>
                    <TouchableOpacity onPress={showEndDatePicker}>
                      <MyAppText customStyle={{ padding: 3 }} fontSize={18}>
                        {endMissionDateTime}
                      </MyAppText>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <Input
                label={t('battery')}
                autoCapitalize="none"
                autoCorrect={false}
                value={values.usedBatteries}
                onChangeText={handleChange('usedBatteries')}
                onBlur={() => setFieldTouched('usedBatteries')}
              />
              {touched.usedBatteries && errors.usedBatteries && (
                <MyAppText customStyle={styles.errorStyle}>
                  {errors.usedBatteries}
                </MyAppText>
              )}
              <View style={{ alignSelf: 'center' }}>
                <MyAppText fontSize={15} fontWeight="medium">
                  {positionName}
                </MyAppText>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginBottom: 10,
                }}
              >
                <View style={{ flexDirection: 'row' }}>
                  <FontAwesome name="cloud" size={40} color="#0082D5" />
                  <MyAppText
                    fontWeight="medium"
                    fontSize={17}
                    customStyle={{
                      alignSelf: 'center',
                      marginLeft: 10,
                      marginRight: 50,
                    }}
                  >
                    {`${tmp} °C`}
                  </MyAppText>
                </View>

                <View style={{ flexDirection: 'row' }}>
                  <Feather name="wind" size={40} color="#374355" />
                  <MyAppText
                    fontWeight="medium"
                    fontSize={17}
                    customStyle={{ alignSelf: 'center', marginLeft: 10 }}
                  >
                    {`${wind} m/s`}
                  </MyAppText>
                </View>
              </View>
              <Input
                label={t('desc')}
                autoCorrect={false}
                value={values.desc}
                onChangeText={handleChange('desc')}
                onBlur={() => setFieldTouched('desc')}
              />
              {touched.desc && errors.desc && (
                <MyAppText customStyle={styles.errorStyle}>
                  {errors.desc}
                </MyAppText>
              )}

              <Button
                title={buttonText.props.children}
                onPress={() => {
                  handleSubmit(
                    values.missionName,
                    values.uav,
                    values.gps,
                    values.date,
                    values.time,
                    values.usedBatteries,
                    values.tmp,
                    values.wind,
                    values.desc
                  );
                }}
              />
            </View>
          )}
        </Formik>
      </View>
    );
  }
  return (
    <View style={[styles.activityContainer, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0082D5" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  pickerStyle: {
    width: 160,
  },

  pickerTitleStyle: {
    alignSelf: 'center',
  },

  checkBoxStyle: {
    flex: 1,
    backgroundColor: null,
    borderWidth: null,
  },

  errorStyle: {
    fontSize: 10,
    color: 'red',
    alignSelf: 'center',
  },

  activityContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },

  dateStyle: {
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default MissionForm;

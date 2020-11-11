import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Button, Input } from 'react-native-elements';
import { Formik } from 'formik';
import { FontAwesome, Feather } from '@expo/vector-icons';
import MyAppText from '../../../components/MyAppText';
import { t, init } from '../../../../localization';
import { missionSchema } from '../../../validation/missionSchema';
import { Context as WeatherContext } from '../../../context/WeatherContext';
import useWeather from '../../../hooks/useWeather';

const MissionForm = ({ buttonText, onSubmit, error, initialValues }) => {
  init();

  const [getWeather, results, icon, tmp, wind] = useWeather();

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={missionSchema}
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
              onChangeText={handleChange('gps')}
              onBlur={() => setFieldTouched('gps')}
            />
            {touched.gps && errors.gps && (
              <MyAppText customStyle={styles.errorStyle}>
                {errors.gps}
              </MyAppText>
            )}

            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Input
                  label={t('date')}
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={values.date}
                  onChangeText={handleChange('date')}
                  onBlur={() => setFieldTouched('date')}
                />
                {touched.date && errors.date && (
                  <MyAppText customStyle={styles.errorStyle}>
                    {errors.date}
                  </MyAppText>
                )}
              </View>
              <View style={{ flex: 1 }}>
                <Input
                  label={t('time')}
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={values.time}
                  onChangeText={handleChange('time')}
                  onBlur={() => setFieldTouched('time')}
                />
                {touched.time && errors.time && (
                  <MyAppText customStyle={styles.errorStyle}>
                    {errors.time}
                  </MyAppText>
                )}
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
                  values.pilot,
                  values.uav,
                  values.gps,
                  values.date,
                  values.time,
                  values.usedBatteries,
                  tmp,
                  wind,
                  values.desc
                );
              }}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

MissionForm.defaultProps = {
  initialValues: {
    missionName: '',
    pilot: '',
    uav: '',
    gps: '',
    date: '',
    time: '',
    usedBatteries: '',
    tmp: '',
    wind: '',
    desc: '',
  },
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
});

export default MissionForm;

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Button, Input, CheckBox, Text } from 'react-native-elements';
import { Formik } from 'formik';
import MyAppText from '../../../components/MyAppText';
import { t, init } from '../../../../localization';
import { uavPickerOptions } from '../UAVCreate/components/uavPickerOptions';
import { categoryPickerOptions } from '../UAVCreate/components/categoryPickerOptions';
import { uavSchema } from '../../../validation/uavSchema';

const UavForm = ({ buttonText, onSubmit, error, initialValues }) => {
  init();
  const [djiChecked, setDjiChecked] = useState(false);
  const [hubsanChecked, setHubsanChecked] = useState(false);
  const [symaChecked, setSymaChecked] = useState(false);

  const filterByBrand = (obj, brand) => {
    const output = obj.filter((item) => item.brand === brand);
    return output;
  };

  const getFilteredPickerItem = (obj, brand) => {
    return filterByBrand(obj, brand).map((item) => {
      return <Picker.Item key={item.key} label={item.key} value={item.key} />;
    });
  };

  // TODO: resolve flash messages after success, not success
  // TODO: resolve uav select bug after aplying some filter
  // it stays on the same position before the filter
  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={uavSchema}
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
              label={t('uavName')}
              autoCapitalize="none"
              autoCorrect={false}
              value={values.uavName}
              onChangeText={handleChange('uavName')}
              onBlur={() => setFieldTouched('uavName')}
            />
            {touched.uavName && errors.uavName && (
              <MyAppText customStyle={styles.errorStyle}>
                {errors.uavName}
              </MyAppText>
            )}

            <Input
              label="OK"
              autoCapitalize="none"
              autoCorrect={false}
              value={values.okNumber}
              onChangeText={handleChange('okNumber')}
              onBlur={() => setFieldTouched('okNumber')}
            />
            {touched.okNumber && errors.okNumber && (
              <MyAppText customStyle={styles.errorStyle}>
                {errors.okNumber}
              </MyAppText>
            )}

            <Input
              label={t('weight')}
              autoCapitalize="none"
              autoCorrect={false}
              value={values.weight}
              onChangeText={handleChange('weight')}
              onBlur={() => setFieldTouched('weight')}
            />
            {touched.weight && errors.weight && (
              <MyAppText customStyle={styles.errorStyle}>
                {errors.weight}
              </MyAppText>
            )}

            <View style={{ flexDirection: 'row' }}>
              <CheckBox
                title="DJI"
                checked={djiChecked}
                onPress={() => setDjiChecked(!djiChecked)}
                containerStyle={styles.checkBoxStyle}
              />

              <CheckBox
                title="Hubsan"
                checked={hubsanChecked}
                onPress={() => setHubsanChecked(!hubsanChecked)}
                containerStyle={styles.checkBoxStyle}
              />
              <CheckBox
                title="Syma"
                checked={symaChecked}
                onPress={() => setSymaChecked(!symaChecked)}
                containerStyle={styles.checkBoxStyle}
              />
            </View>
            <View style={styles.container}>
              <View>
                <MyAppText
                  fontWeight="bold"
                  fontSize={18}
                  customStyle={styles.pickerTitleStyle}
                >
                  {t('selectUav')}
                </MyAppText>

                <Picker
                  selectedValue={values.uav}
                  style={styles.pickerStyle}
                  mode="dropdown"
                  onValueChange={handleChange('uav')}
                  prompt="Select drone"
                >
                  {djiChecked || hubsanChecked || symaChecked
                    ? null
                    : uavPickerOptions.map((item) => {
                        return (
                          <Picker.Item
                            key={item.key}
                            label={item.key}
                            value={item.key}
                          />
                        );
                      })}

                  {djiChecked
                    ? getFilteredPickerItem(uavPickerOptions, 'dji')
                    : null}

                  {hubsanChecked
                    ? getFilteredPickerItem(uavPickerOptions, 'hubsan')
                    : null}

                  {symaChecked
                    ? getFilteredPickerItem(uavPickerOptions, 'syma')
                    : null}
                </Picker>
              </View>

              <View>
                <MyAppText
                  fontWeight="bold"
                  fontSize={18}
                  customStyle={styles.pickerTitleStyle}
                >
                  {t('selectCategory')}
                </MyAppText>
                <Picker
                  selectedValue={values.category}
                  style={styles.pickerStyle}
                  mode="dropdown"
                  prompt="Pick drone"
                  onValueChange={handleChange('category')}
                >
                  {categoryPickerOptions.map((item, key) => {
                    return (
                      <Picker.Item
                        key={key}
                        label={item.key}
                        value={item.key}
                      />
                    );
                  })}
                </Picker>
              </View>
            </View>
            <Button
              title={buttonText.props.children}
              onPress={() => {
                handleSubmit(
                  values.uavName,
                  values.weight,
                  values.category,
                  values.uav,
                  values.okNumber
                );
              }}
              disabled={!isValid}
            />

            {error ? (
              <MyAppText
                customStyle={{ color: 'red', margin: 10, alignSelf: 'center' }}
              >
                {error}
              </MyAppText>
            ) : null}
          </View>
        )}
      </Formik>
    </View>
  );
};

UavForm.defaultProps = {
  initialValues: {
    uavName: '',
    okNumber: '',
    weight: '',
    uav: 'DJI Mavic Air',
    category: 'Malý',
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

export default UavForm;

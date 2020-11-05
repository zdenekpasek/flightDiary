import React, { useState, Fragment } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { showMessage, hideMessage } from 'react-native-flash-message';
import { Picker } from '@react-native-community/picker';
import { Button, Input, CheckBox } from 'react-native-elements';
import { Formik } from 'formik';
import * as yup from 'yup';
import MyAppText from '../../../components/MyAppText';
import { t, init } from '../../../../localization';
import { uavPickerOptions } from '../UAVCreate/components/uavPickerOptions';
import { categoryPickerOptions } from '../UAVCreate/components/categoryPickerOptions';
import { uavSchema } from '../../../validation/uavSchema';

const AddUavForm = ({ buttonText, onSubmit, error }) => {
  init();
  const [uavName, setUavName] = useState('');
  const [okNumber, setOkNumber] = useState('');
  const [weight, setWeight] = useState('');
  const [uav, setUav] = useState('DJI Mavic Air');
  const [category, setCategory] = useState('Small');
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
        initialValues={{
          uavName: '',
          okNumber: '',
          weight: '',
          uav: '',
          category: '',
        }}
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
              <Text style={styles.errorStyle}>{errors.uavName}</Text>
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
              <Text style={styles.errorStyle}>{errors.okNumber}</Text>
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
              <Text style={styles.errorStyle}>{errors.weight}</Text>
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
                console.log(values.uavName);
                handleSubmit(
                  values.uavName,
                  values.weight,
                  values.category,
                  values.uav,
                  values.okNumber
                );
              }}
            />
          </View>
        )}
      </Formik>

      {/* <Input
        label={t('uavName')}
        autoCapitalize="none"
        autoCorrect={false}
        value={uavName}
        onChangeText={(newName) => setUavName(newName)}
      />

      <Input
        label="OK"
        autoCapitalize="none"
        autoCorrect={false}
        value={okNumber}
        onChangeText={(newOkNumber) => setOkNumber(newOkNumber)}
      />
      <Input
        label={t('weight')}
        autoCapitalize="none"
        autoCorrect={false}
        value={weight}
        onChangeText={(newWeight) => setWeight(newWeight)}
      />
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
            selectedValue={uav}
            style={styles.pickerStyle}
            mode="dropdown"
            onValueChange={(newSelectedUav) => setUav(newSelectedUav)}
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

            {djiChecked ? getFilteredPickerItem(uavPickerOptions, 'dji') : null}

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
            selectedValue={category}
            style={styles.pickerStyle}
            mode="dropdown"
            prompt="Pick drone"
            onValueChange={(newSelectedCategory) =>
              setCategory(newSelectedCategory)
            }
          >
            {categoryPickerOptions.map((item, key) => {
              return (
                <Picker.Item key={key} label={item.key} value={item.key} />
              );
            })}
          </Picker>
        </View>
      </View>
      <Button
        title={buttonText.props.children}
        onPress={() => {
          onSubmit({ uavName, weight, category, uav, okNumber });
        }}
      />

      {error ? (
        <MyAppText
          customStyle={{ color: 'red', margin: 10, alignSelf: 'center' }}
        >
          {error}
        </MyAppText>
      ) : null} */}
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
});

export default AddUavForm;

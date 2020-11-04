import React, { useState } from 'react';
import { View, StyleSheet, Text, Modal, Alert } from 'react-native';
import { showMessage, hideMessage } from 'react-native-flash-message';
import { Picker } from '@react-native-community/picker';
import { Button, Input, CheckBox } from 'react-native-elements';
import MyAppText from '../../../components/MyAppText';
import { t, init } from '../../../../localization';
import { uavPickerOptions } from '../UAVCreate/components/uavPickerOptions';
import { categoryPickerOptions } from '../UAVCreate/components/categoryPickerOptions';

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
      <Input
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
});

export default AddUavForm;

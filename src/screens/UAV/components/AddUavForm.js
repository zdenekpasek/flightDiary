import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Button, Input } from 'react-native-elements';
import MyAppText from '../../../components/MyAppText';
import { t, init } from '../../../../localization';

const AddUavForm = ({ buttonText, onSubmit }) => {
  init();
  const [uavName, setUavName] = useState('');
  const [okNumber, setOkNumber] = useState('');
  const [weight, setWeight] = useState('');
  const [uav, setUav] = useState('');
  const [category, setCategory] = useState('');

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
            <Picker.Item label="DJI Mavic Air" value="DJI Mavic Air" />
            <Picker.Item label="DJI Spark" value="DJI Spark" />
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
            <Picker.Item label="Professional" value="Professional" />
            <Picker.Item label="Custom" value="Custom" />
            <Picker.Item label="Custom" value="Custom" />
            <Picker.Item label="Custom" value="Custom" />
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
});

export default AddUavForm;

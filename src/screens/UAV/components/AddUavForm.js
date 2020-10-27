import React, { useState } from 'react';
import { View, StyleSheet, Text, ImagePropTypes } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Button, Input } from 'react-native-elements';
import MyAppText from '../../../components/MyAppText';
import { t, init } from '../../../../localization';

const AddUavForm = ({ buttonText }) => {
  init();
  const [name, setName] = useState('');
  const [okNumber, setOkNumber] = useState('');
  const [weight, setWeight] = useState('');
  const [selectedUav, setSelectedUav] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <View>
      <Input
        label={t('name')}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newName) => setName(newName)}
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
            selectedValue={selectedUav}
            style={styles.pickerStyle}
            mode="dropdown"
            onValueChange={(newSelectedUav) => setSelectedUav(newSelectedUav)}
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
            selectedValue={selectedCategory}
            style={styles.pickerStyle}
            mode="dropdown"
            prompt="Pick drone"
            onValueChange={(newSelectedCategory) =>
              setSelectedCategory(newSelectedCategory)
            }
          >
            <Picker.Item label="Professional" value="Professional" />
            <Picker.Item label="Custom" value="Custom" />
            <Picker.Item label="Custom" value="Custom" />
            <Picker.Item label="Custom" value="Custom" />
          </Picker>
        </View>
      </View>
      <Button title={buttonText.props.children} />
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

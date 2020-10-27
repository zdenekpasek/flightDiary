import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Button, Input } from 'react-native-elements';
import { FontAwesome, Feather } from '@expo/vector-icons';
import MyAppText from '../../../components/MyAppText';
import { t, init } from '../../../../localization';

const AddMissionForm = ({ buttonText }) => {
  init();
  const [name, setName] = useState('');
  const [pilot, setPilot] = useState('Zdeněk Pašek');
  const [selectedUav, setSelectedUAv] = useState('');
  const [gps, setGps] = useState('50.0835494N, 14.4341414E');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [battery, setBattery] = useState('');
  const [desc, setDesc] = useState('');
  const [tmp, setTmp] = useState('18°C');
  const [wind, setWind] = useState('40m/s');

  return (
    <View>
      <Input
        label={t('missionName')}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newName) => setName(newName)}
      />

      <Input
        label="Pilot"
        autoCapitalize="none"
        autoCorrect={false}
        value={pilot}
        onChangeText={(newPilot) => setPilot(newPilot)}
      />

      <Input
        label="GPS"
        autoCapitalize="none"
        autoCorrect={false}
        value={gps}
        onChangeText={(newGps) => setGps(newGps)}
      />

      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Input
            label={t('date')}
            autoCapitalize="none"
            autoCorrect={false}
            value={date}
            onChangeText={(newDate) => setDate(newDate)}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Input
            label={t('time')}
            autoCapitalize="none"
            autoCorrect={false}
            value={time}
            onChangeText={(newTime) => setTime(newTime)}
          />
        </View>
      </View>
      <Input
        label={t('battery')}
        autoCapitalize="none"
        autoCorrect={false}
        value={battery}
        onChangeText={(newBattery) => setBattery(newBattery)}
      />

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
            {tmp}
          </MyAppText>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Feather name="wind" size={40} color="#374355" />
          <MyAppText
            fontWeight="medium"
            fontSize={17}
            customStyle={{ alignSelf: 'center', marginLeft: 10 }}
          >
            {wind}
          </MyAppText>
        </View>
      </View>
      <Input
        label={t('desc')}
        autoCorrect={false}
        value={desc}
        onChangeText={(newDesc) => setDesc(newDesc)}
      />

      <Button title={buttonText.props.children} />
    </View>
  );
};

export default AddMissionForm;

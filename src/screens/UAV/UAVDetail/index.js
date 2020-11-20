import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { ConfirmDialog } from 'react-native-simple-dialogs';
import Header from '../../../components/Header';
import Container from '../../../components/Container';
import { Context as UavContext } from '../../../context/UavContext';
import HeaderLine from '../../../components/HeaderLine';
import DroneInfoCard from './components/DroneInfoCard';
import Spacer from '../../../components/spacer';
import MyAppText from '../../../components/MyAppText';
import { t, init } from '../../../../localization';

const UAVDetailScreen = ({ navigation }) => {
  init();
  const [dialogVisible, setDialogVisible] = useState(false);
  const { state, deleteUav } = useContext(UavContext);
  const _id = navigation.getParam('_id');

  const uav = state.uavs.find((u) => u._id === _id);

  if (uav) {
    return (
      <Container>
        <Header title={uav.uavName} />
        <DroneInfoCard
          uav={uav}
          img="https://images.unsplash.com/photo-1514043454212-14c181f46583?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
        />
        <Spacer />
        <View style={{ flexDirection: 'row' }}>
          <ConfirmDialog
            title="UAV"
            message={t('deleteUavQuestion')}
            visible={dialogVisible}
            onTouchOutside={() => setDialogVisible(false)}
            positiveButton={{
              title: t('yes'),
              onPress: () => {
                deleteUav({ _id });
                setDialogVisible(false);
              },
            }}
            negativeButton={{
              title: t('no'),
              onPress: () => setDialogVisible(false),
            }}
          />
          <View style={[{ flex: 1 }, styles.buttonStyle]}>
            <Button
              title={t('delete')}
              onPress={() => setDialogVisible(true)}
              buttonStyle={{
                borderRadius: 10,
              }}
              linearGradientProps={{
                colors: ['#AE2B2B', 'red'],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
              }}
            />
          </View>
          <Spacer />
          <View style={[{ flex: 1 }, styles.buttonStyle]}>
            <Button
              title={t('edit')}
              onPress={() => navigation.navigate('UAVEdit', { _id: _id })}
              buttonStyle={{ borderRadius: 10 }}
              linearGradientProps={{
                colors: ['#2A84EC', '#1C63B3'],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
              }}
            />
          </View>
        </View>
      </Container>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  buttonStyle: {
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOpacity: 0.7,
    elevation: 6,
    shadowRadius: 10,
    shadowOffset: { width: 1, height: 13 },
  },
});

export default UAVDetailScreen;

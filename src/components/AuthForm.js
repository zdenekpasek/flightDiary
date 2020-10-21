import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { t, init } from '../../localization';
import Spacer from './spacer';

const AuthForm = ({ title, buttonText, onSubmit, errorMessage, isSignup }) => {
  init();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>{title}</Text>
      </Spacer>

      {isSignup ? (
        <Input
          label={t('name')}
          autoCapitalize="none"
          autoCorrect={false}
          value={name}
          onChangeText={(newName) => setName(newName)}
        />
      ) : null}
      <Input
        label="Email"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)}
      />
      <Input
        label={t('password')}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
      />
      {errorMessage ? (
        <Text style={{ color: 'red', margin: 10 }}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={buttonText.props.children}
          onPress={
            isSignup
              ? () => onSubmit({ name, email, password })
              : () => onSubmit({ email, password })
          }
        />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 100,
  },
});

export default AuthForm;

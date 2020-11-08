import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { Formik } from 'formik';
import { t, init } from '../../localization';
import MyAppText from './MyAppText';
import Spacer from './spacer';
import { authSchema } from '../validation/authSchema';

const AuthForm = ({ title, buttonText, onSubmit, errorMessage, isSignup }) => {
  init();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isSignup) {
    return (
      <View style={styles.container}>
        <Spacer>
          <MyAppText fontWeight="bold" fontSize={35}>
            {title}
          </MyAppText>
        </Spacer>
        <Spacer />

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
            onPress={() => onSubmit({ email, password })}
          />
        </Spacer>
      </View>
    );
  } else {
    {
      return (
        <View style={styles.container}>
          <Spacer>
            <MyAppText fontWeight="bold" fontSize={35}>
              {title}
            </MyAppText>
          </Spacer>

          <Spacer />

          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              passwordConfirmation: '',
            }}
            onSubmit={onSubmit}
            validationSchema={authSchema}
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
                  label={t('name')}
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={() => setFieldTouched('name')}
                />

                {touched.name && errors.name && (
                  <MyAppText customStyle={styles.errorStyle}>
                    {errors.name}
                  </MyAppText>
                )}

                <Input
                  label="Email"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                />
                {touched.email && errors.email && (
                  <MyAppText customStyle={styles.errorStyle}>
                    {errors.email}
                  </MyAppText>
                )}

                <Input
                  label={t('password')}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                />

                {touched.password && errors.password && (
                  <MyAppText customStyle={styles.errorStyle}>
                    {errors.password}
                  </MyAppText>
                )}

                <Input
                  label={t('passwordConfirmation')}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                  value={values.passwordConfirmation}
                  onChangeText={handleChange('passwordConfirmation')}
                  onBlur={() => setFieldTouched('passwordConfirmation')}
                />

                {touched.passwordConfirmation &&
                  errors.passwordConfirmation && (
                    <MyAppText customStyle={styles.errorStyle}>
                      {errors.passwordConfirmation}
                    </MyAppText>
                  )}

                {errorMessage ? (
                  <Text style={{ color: 'red', margin: 10 }}>
                    {errorMessage}
                  </Text>
                ) : null}
                <Spacer>
                  <Button
                    title={buttonText.props.children}
                    onPress={() =>
                      handleSubmit(values.name, values.email, values.password)
                    }
                  />
                </Spacer>
              </View>
            )}
          </Formik>
        </View>
      );
    }
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 100,
  },

  errorStyle: {
    fontSize: 10,
    color: 'red',
    alignSelf: 'center',
  },
});

export default AuthForm;

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Typography from '../../components/typography/Typography';
import AppBar from '../../components/layout/AppBar';
import TextField from '../../components/form/TextField';
import Button from '../../components/form/Button';

const Login = ({ onPress }) => {
  const [mobile, setMobile] = useState('');

  const handleLogin = () => {
    // Handle login logic
    console.log('Mobile:', mobile);
  };

  const { container, formContainer, textFieldContainer } = styles;

  return (
    <View style={container}>
      <View style={formContainer}>
        <View>
          <AppBar
            title="Login"
            isBottomSheet
            onPress={onPress}
            textColor={colors.primary}
            textVariant="h2"
          />
          <Typography
            style={{ paddingBottom: 8, marginBottom: 32 }}
            variant="caption"
            color="grayDark">
            To use services, please login
          </Typography>
        </View>
        <View style={textFieldContainer}>
          {/* Input for Mobile Number */}
          <TextField
            prefix="+91"
            label="Enter Mobile Number"
            value={mobile}
            onChange={setMobile} // Update mobile state
          />
        </View>
      </View>
      <View>
        {/* Button to trigger login */}
        <Button title="Login" size="large" onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { gap: 30 },
  formContainer: { height: 350 },
  textFieldContainer: {
    gap: 32,
  },
});

export default Login;

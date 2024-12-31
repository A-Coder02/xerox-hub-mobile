import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Typography from '../../components/typography/Typography';
import AppBar from '../../components/layout/AppBar';
import TextField from '../../components/form/TextField';
import Button from '../../components/form/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormikTextField from '../../components/form/TextField/FormikTextField';
import OtpInputField from '../../components/form/OtpInput/OtpInputField';
import ResendOTP from '../../components/form/OtpInput/ResendOTP';



const VerifyOtp = ({ onPress }) => {

  const [otp, setOtp] = useState('');
  console.log({ otp })

  const email = 'arbaj897ansari@gmail.com'
  const encryptedEmail = email.split('@').map((val, index) => {
    if (index === 0) {
      return val.slice(0, 4) + '*****'
    }
    else {
      return `@${val}`
    }
  })

  const onSubmit = () => {
    if (otp.length === 4)
      onPress();
  };

  const { container, formContainer, textFieldContainer } = styles;

  return (

    <View style={container}>
      <View style={formContainer}>
        <View>
          <AppBar
            title="Enter OTP"
            isBottomSheet
            onPress={onPress}
            textColor={colors.primary}
            textVariant="h2"
          />
          <Typography
            style={{ paddingBottom: 8, marginBottom: 32 }}
            variant="caption"
            color="grayDark"
          >
            Sent OTP to {encryptedEmail}
          </Typography>
        </View>
        <View style={textFieldContainer}>
          {/* Input for Mobile Number */}
          <OtpInputField
            value={otp}
            onChange={setOtp}
          />
          {1 ?
            <ResendOTP /> :
            <Typography
              style={{ paddingBottom: 0, marginBottom: 32, textAlign: 'center' }}
              variant="caption"
              color="grayDark"
            >
              Resend OTP after :{' '}
              <Typography variant='caption' color='primary' >
                02:00
              </Typography>
            </Typography>}
        </View>
      </View>
      <View>
        {/* Button to trigger login */}
        <Button
          onPress={onSubmit}
          disabled={otp.length !== 4}
          title="Verify OTP" size="large" />
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

export default VerifyOtp;

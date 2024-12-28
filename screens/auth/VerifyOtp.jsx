import React from 'react';
import { StyleSheet, View } from 'react-native';
import Typography from '../../components/typography/Typography';
import AppBar from '../../components/layout/AppBar';
import TextField from '../../components/form/TextField';
import Button from '../../components/form/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormikTextField from '../../components/form/TextField/FormikTextField';
import OtpInputField from '../../components/form/OtpInput/OtpInputField';

// Validation schema
const validationSchema = Yup.object().shape({
  mobile_number: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number")
    .required("Mobile number is required"),
});

const VerifyOtp = ({ onPress }) => {

  const email = 'arbaj897ansari@gmail.com'
  const getEncEmail = email.split('@').map((val, index) => {
    if (index === 0) {
      return val.slice(0, 4) + '*****'
    }
    else {
      return `@${val}`
    }
  })

  const onSubmit = (values) => {
    console.log("Form Values:", values);
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
            Sent OTP to {getEncEmail}
          </Typography>
        </View>
        <View style={textFieldContainer}>
          {/* Input for Mobile Number */}
          <OtpInputField

          />

        </View>
      </View>
      <View>
        {/* Button to trigger login */}
        <Button
          title="Login" size="large" />
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

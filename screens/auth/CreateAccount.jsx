import React from 'react';
import { StyleSheet, View } from 'react-native';
import Typography from '../../components/typography/Typography';
import AppBar from '../../components/layout/AppBar';
import TextField from '../../components/form/TextField';
import Button from '../../components/form/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormikTextField from '../../components/form/TextField/FormikTextField';
import MailSvg from '../../assets/icons/MailSvg';
import UserSvg from '../../assets/icons/UserSvg';

// Validation schema
const validationSchema = Yup.object().shape({
  mobile_number: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number")
    .required("Mobile number is required"),
});

const CreateAccount = ({ onPress, openOtpDrawer }) => {
  const initialValues = {
    mobile_number: "",
    email: '',
    name: ''
  };

  const validationSchema = Yup.object().shape({
    mobile_number: Yup.string()
      .matches(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number")
      .required("Mobile number is required"),
    email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),
    name: Yup.string()
      .min(2, "Name must be at least 2 characters long")
      .required("Name is required"),
  });

  const onSubmit = (values) => {
    console.log("Form Values:", values);
    openOtpDrawer();
    onPress();
  };

  const { container, formContainer, textFieldContainer } = styles;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, dirty, isValid }) => (
        <View style={container}>
          <View style={formContainer}>
            <View>
              <AppBar
                title="Create Account"
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
                To use services, please create account
              </Typography>
            </View>
            <View style={textFieldContainer}>
              {/* Input for Mobile Number */}

              <FormikTextField
                name='email'
                startIcon={MailSvg}
                label="Enter Email"
              />
              {/* Input for Name */}
              <FormikTextField
                name='name'
                startIcon={UserSvg}
                label="Enter Name"
              />
              {/* Input for Mobile Number */}
              <FormikTextField
                name='mobile_number'
                prefix="+91"
                label="Enter Mobile Number"
              />

            </View>
          </View>
          <View>
            {/* Button to trigger login */}
            <Button
              disabled={!(dirty && isValid)}
              title="Create Account" size="large" onPress={handleSubmit} />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: { gap: 30 },
  formContainer: { height: 350 },
  textFieldContainer: {
    gap: 32,
  },
});

export default CreateAccount;

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Typography from '../../components/typography/Typography';
import AppBar from '../../components/layout/AppBar';
import TextField from '../../components/form/TextField';
import Button from '../../components/form/Button';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FormikTextField from '../../components/form/TextField/FormikTextField';
import Layout from '../../components/layout/Layout';

// Validation schema
const validationSchema = Yup.object().shape({
  text: Yup.string().required(''),
});

const ContactUs = ({onPress}) => {
  const initialValues = {
    text: '',
  };

  const onSubmit = values => {
    console.log('Form Values:', values);
    onPress();
    openOtpDrawer();
  };

  const {container, formContainer, textFieldContainer} = styles;

  return (
    <Layout>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({handleSubmit, dirty, isValid}) => (
          <View style={container}>
            <View style={formContainer}>
              <View>
                <AppBar
                  title="Contact Us"
                  isBottomSheet
                  onPress={() => onPress()}
                  textColor={colors.primary}
                  textVariant="h2"
                />
              </View>
              <View style={{textFieldContainer, paddingTop:20}}>
                {/* Input for Mobile Number */}
                <FormikTextField
                  name="text"
                  label="How Can We help you?"
                />
              </View>
            </View>
            <View>
              {/* Button to trigger login */}
              <Button
                disabled={!(dirty && isValid)}
                title="Send Message"
                size="large"
                onPress={handleSubmit}
              />
            </View>
          </View>
        )}
      </Formik>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {gap: 30},
  formContainer: {height: 350},
  textFieldContainer: {
    gap: 32,
  },
});

export default ContactUs;

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Typography from '../../components/typography/Typography';
import AppBar from '../../components/layout/AppBar';
import TextField from '../../components/form/TextField';
import MailSvg from '../../assets/icons/MailSvg';
import UserSvg from '../../assets/icons/UserSvg';
import Button from '../../components/form/Button';

const CreateAccount = ({onNavigate}) => {
  const {container, formContainer, textFieldContainer, buttonContainer} =
    styles;
  return (
    <View style={container}>
      <View style={formContainer}>
        <View>
          <AppBar
            title="Create Account"
            isBottomSheet
            onNavigate={onNavigate}
            textColor={colors.primary}
            textVariant="h2"
          />
          <Typography
            style={{paddingVertical: 10}}
            variant="h3"
            fontWeight={400}
            color="grayDark">
            To use services, please create account
          </Typography>
        </View>
        <View style={textFieldContainer}>
          <TextField startIcon={MailSvg} label="Enter Email" />
          <TextField startIcon={UserSvg} label="Enter Name" />
          <TextField prefix="+91" label="Enter Mobile Number" />
        </View>
      </View>
      <View style={buttonContainer}>
        <Button title="Create Account" size="large" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {gap: 30},
  formContainer: {paddingVertical: 20, height: 350},
  textFieldContainer: {
    gap: 32,
  },
  buttonContainer: {
    paddingHorizontal: 5,
  },
});
export default CreateAccount;

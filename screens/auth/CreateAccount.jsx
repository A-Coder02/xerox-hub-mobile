import React from 'react';
import {StyleSheet, View} from 'react-native';
import Typography from '../../components/typography/Typography';
import AppBar from '../../components/layout/AppBar';
import TextField from '../../components/form/TextField';
import MailSvg from '../../assets/icons/MailSvg';
import UserSvg from '../../assets/icons/UserSvg';
import Button from '../../components/form/Button';
import MobileSvg from '../../assets/icons/MobileSvg';

const CreateAccount = ({onNavigate}) => {
  const {container, textFieldContainer, buttonContainer} = styles;
  return (
    <View style={container}>
      <View>
        <AppBar
          title="Create Account"
          isBottomSheet
          onNavigate={onNavigate}
          textColor={colors.primary}
          textVariant="h2"
        />
        <Typography variant="h3" fontWeight={400} color="grayDark">
          To use services, please create account
        </Typography>
      </View>
      <View style={textFieldContainer}>
        <TextField startIcon={MailSvg} label="Enter Email" />
        <TextField startIcon={UserSvg} label="Enter Name" />
        <TextField prefix="+91" label="Enter Mobile Number" />
      </View>
      <View style={buttonContainer}>
        <Button title="Large" size="large" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginTop: 30, gap: 30},
  textFieldContainer: {
    gap: 32,
  },
  buttonContainer: {
    paddingHorizontal: 5,
  },
});
export default CreateAccount;

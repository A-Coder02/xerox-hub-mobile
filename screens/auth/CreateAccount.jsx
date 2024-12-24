import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Typography from '../../components/typography/Typography';
import AppBar from '../../components/layout/AppBar';
import TextField from '../../components/form/TextField';
import MailSvg from '../../assets/icons/MailSvg';
import UserSvg from '../../assets/icons/UserSvg';
import Button from '../../components/form/Button';

const CreateAccount = ({onNavigate}) => {
  // State variables for the input fields
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const handleCreateAccount = () => {
    // You can handle form submission here
    console.log('Email:', email);
    console.log('Name:', name);
    console.log('Mobile:', mobile);
  };

  const {container, formContainer, textFieldContainer} = styles;
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
            style={{paddingBottom: 8, marginBottom: 32}}
            variant="caption"
            color="grayDark">
            To use services, please create account
          </Typography>
        </View>
        <View style={textFieldContainer}>
          {/* Input for Email */}
          <TextField
            startIcon={MailSvg}
            label="Enter Email"
            value={email}
            onChange={setEmail} // Update email state
          />
          {/* Input for Name */}
          <TextField
            startIcon={UserSvg}
            label="Enter Name"
            value={name}
            onChange={setName} // Update name state
          />
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
        {/* Button to create account */}
        <Button title="Create Account" size="large" onPress={handleCreateAccount} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {gap: 30},
  formContainer: {height: 350},
  textFieldContainer: {
    gap: 32,
  },
});

export default CreateAccount;

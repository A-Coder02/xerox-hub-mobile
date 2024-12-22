import React from 'react';
import Layout from '../../components/layout/Layout';
import {StyleSheet, View} from 'react-native';
import BrandSvg from '../../assets/icons/BrandSvg';
import Typography from '../../components/typography/Typography';
import AppBar from '../../components/layout/AppBar';

const CreateAccount = ({onNavigate}) => {
  const {container} = styles;
  return (
    <View>
        <AppBar title='Create Account' isBottomSheet onNavigate={onNavigate} />
        <View>
          <Typography>Login</Typography>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginTop: 30},
  buttonContainer: {
    marginTop: 200,
    paddingHorizontal: 20,
  },
});
export default CreateAccount;

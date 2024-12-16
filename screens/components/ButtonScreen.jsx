import React, { useEffect, useRef } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import Typography from '../../components/typography/Typography';
import Button from '../../components/form/Button';
import colors from '../../utils/colors';
import IconButton from '../../components/form/IconButton/IconButton';
import TextField from '../../components/form/TextField';
import OtpInput from '../../components/form/OtpInput';
import OtpInputField from '../../components/form/OtpInput/OtpInputField';
import BottomDrawer from '../../components/layout/BottomDrawer';


const ButtonScreen = () => {

  const drawerRef = useRef();

  useEffect(()=>{
    console.log({drawerRef})
  },[])

  return (
    <View style={{flex: 1}} >
    <ScrollView style={styles.container}>
      <Typography>Button Examples</Typography>
      <TextField/>
      <OtpInputField/>
      <View style={{ gap: 8 }} >
        <Typography>Sizes</Typography>
        <Button title='Default (Medium)' onPress={()=> {
          // drawerRef.current.open()
          drawerRef.current.snapToIndex(1)
          // drawerRef.current.snapToIndex(1)
          // drawerRef.current.close()
        }} />
        <Button title='Medium' size='medium' />
        <Button title='Large' size='large' />
        <Button title='small' size='small' />
        <Button title='mini' size='mini' />
        <View style={{ flexDirection: 'row', gap: 12 , backgroundColor : colors.grayLight}} >
          <IconButton />
          <IconButton />
          <IconButton size='large'  />
          {/* <Image style={{width: 32, height : 32}} source={require('../../assets/icons/PrintSvg.jsx')} /> */}
        </View>
      </View>
      <View style={{ gap: 8 }} >
        <Typography>Variants</Typography>
        <Button title='Default (Contained)' />
        <Button title='contained' variant='contained' />
        <Button title='outlined' variant='outlined' />
        <Button title='outlined-dark' variant='outlined-dark' />
        <Button title='text' variant='text' />
        <Button title='disabled' disabled />
        <Button title='Custom Style' style={{
          button: {
            backgroundColor: colors.primaryDark,
          },
          text: {
            color: colors.black
          }
        }} />
        <Button title='Custom Style' />
    <BottomDrawer />
      </View>
    </ScrollView>
    <BottomDrawer ref={drawerRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 32,
    flexGrow: 1,
    // justifyContent: 'center',
    flex: 1,
    gap: 32
  },
});

export default ButtonScreen;

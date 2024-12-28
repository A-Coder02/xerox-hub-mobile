import React, { useEffect, useRef, useState } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import Typography from '../../components/typography/Typography';
import Button from '../../components/form/Button';
import colors from '../../utils/colors';
import IconButton from '../../components/form/IconButton/IconButton';
import TextField from '../../components/form/TextField';
import OtpInput from '../../components/form/OtpInput';
import OtpInputField from '../../components/form/OtpInput/OtpInputField';
import BottomDrawer from '../../components/layout/BottomDrawer';
// import { Horse, Heart, Cube } from 'phosphor-react-native';
import PrintSvgIcon from '../../assets/icons/print.svg'
import Svg, { Path } from "react-native-svg"
import PrintSvg from '../../assets/icons/PrintSvg';
import Layout from '../../components/layout/Layout';
import AppBar from '../../components/layout/AppBar';
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 10.5v-5h16v5M24 19.5H8V28h16v-8.5Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 22.5H3.5v-10c0-1.1.975-2 2.162-2h20.675c1.188 0 2.163.9 2.163 2v10H24"
    />
    <Path fill="#fff" d="M23.5 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  </Svg>
)


const ButtonScreen = () => {

  const drawerRef = useRef();
  const [otp, setOtp] = useState('')
  console.log({ otp })
  // useEffect(() => {
  //   console.log({ drawerRef })
  // }, [])

  return (
    <Layout style={{ flex: 1 }}>
      <AppBar title='Buttons' />
      <ScrollView style={styles.container}>
        <SvgComponent width={32} height={32} />
        <Typography>Button Examples</Typography>
        <TextField startIcon={PrintSvg} endIcon={PrintSvg} />
        <OtpInputField
          value={otp}
          onChange={setOtp}
          autoFocus />
        <View style={{ gap: 8, alignItems: 'center' }} >
          <Typography>Sizes</Typography>
          <Button
            startIcon={PrintSvg}
            title='Default (Medium)' onPress={() => {
              // drawerRef.current.open()
              drawerRef.current.snapToIndex(0)
              // drawerRef.current.snapToIndex(1)
              // drawerRef.current.close()
            }} />
          <Button
            // startIcon={PrintSvg}
            title='Medium' size='medium' />
          <Button
            startIcon={PrintSvg}
            title='Google' size='large' />
          <Button
            startIcon={PrintSvg}
            title='small' size='small' />
          <Button
            startIcon={PrintSvg}
            title='mini' size='mini' />
          <View style={{ flexDirection: 'row', gap: 12, backgroundColor: colors.grayLight }} >
            <IconButton icon={PrintSvg} size='medium' variant='outlined' />
            <IconButton icon={PrintSvgIcon} size='large' />
            {/* <IconButton icon={Cube}  size='large' /> */}
            {/* <Image style={{width: 32, height : 32}} source={require('../../assets/icons/PrintSvgIcon.jsx')} /> */}
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
      <BottomDrawer ref={drawerRef}>
        <AppBar title='Bottom Sheet Here' isBottomSheet onPress={() => {
          drawerRef.current.close()
        }} />
      </BottomDrawer>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    // paddingTop: 32,
    flexGrow: 1,
    // justifyContent: 'center',
    flex: 1,
    gap: 32
  },
});

export default ButtonScreen;

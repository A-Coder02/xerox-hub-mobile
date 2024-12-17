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
// import { Horse, Heart, Cube } from 'phosphor-react-native';
import PrintSvgIcon from '../../assets/icons/print.svg'
import Svg, { Path } from "react-native-svg"
import PrintSvg from '../../assets/icons/PrintSvg';
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    {console.log({props})}
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

  useEffect(()=>{
    console.log({drawerRef})
  },[])

  return (
    <View style={{flex: 1}} >
    <ScrollView style={styles.container}>
    <SvgComponent width={32} height={32} />
      <Typography>Button Examples</Typography>
      <TextField startIcon={PrintSvg} endIcon={PrintSvg} />
      <OtpInputField/>
      <View style={{ gap: 8 }} >
        <Typography>Sizes</Typography>
        <Button title='Default (Medium)' onPress={()=> {
          // drawerRef.current.open()
          drawerRef.current.snapToIndex(2)
          // drawerRef.current.snapToIndex(1)
          // drawerRef.current.close()
        }} />
        <Button title='Medium' size='medium' />
        <Button title='Large' size='large' />
        <Button title='small' size='small' />
        <Button title='mini' size='mini' />
        <View style={{ flexDirection: 'row', gap: 12 , backgroundColor : colors.grayLight}} >
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

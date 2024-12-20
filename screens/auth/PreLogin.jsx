import React, {useEffect, useRef} from 'react';
import Typography from '../../components/typography/Typography';
import Layout from '../../components/layout/Layout';
import BrandSvg from '../../assets/icons/BrandSvg';
import colors from '../../utils/colors';
import {Pressable, StyleSheet, View} from 'react-native';
import Button from '../../components/form/Button';
import BottomDrawer from '../../components/layout/BottomDrawer';

const PreLogin = () => {
  const drawerRef = useRef();

  useEffect(() => {
    console.log({drawerRef});
  }, []);

  const openDrawer = () => {
    drawerRef.current?.snapToIndex(1); // Open drawer to Index 1
  };

  const {container, buttonContainer, textAlignment, googleButton} = styles;

  return (
    <Layout>
      <View style={container}>
        <BrandSvg style={{left: -16}} height={65} color={colors.black} />
        <Typography fontSize={64} fontWeight={400} color="black">
          Xerox for{' '}
          <Typography fontSize={64} fontWeight={400} color="primary">
            Everyone
          </Typography>
        </Typography>
      </View>
      <View style={buttonContainer}>
        <View style={googleButton}>
          <Button
            title="Google"
            size="large"
            variant="outlined"
            style={{
              button: {
                borderColor: colors.gray,
              },
              text: {color: colors.primary},
            }}
          />
        </View>
        <Typography
          style={{textAlign: 'center'}}
          fontSize={17}
          fontWeight={500}
          color="black">
          OR
        </Typography>
        <Button
          title="Login with Phone Number"
          size="large"
          variant="outlined-dark"
        //Dear Umar use onPress here to trigger bottomDrawer
        />
        <Typography style={textAlignment} variant="base">
          Don't have an account?{' '}
          <Pressable
            onPress={openDrawer}
            style={({pressed}) => [
              {
                opacity: pressed ? 0.5 : 1, // Visual feedback on press
              },
            ]}>
            <Typography
              variant="base"
              color="primary"
              style={{textDecorationLine: 'underline'}}>
              Create Account
            </Typography>
          </Pressable>
        </Typography>
      </View>
      <BottomDrawer ref={drawerRef} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {marginTop: 30},
  buttonContainer: {
    marginTop: 200,
    paddingHorizontal: 20,
  },
  textAlignment: {
    textAlign: 'center',
    marginTop: 10,
  },
  googleButton: {
    paddingHorizontal: 50,
  },
});
export default PreLogin;

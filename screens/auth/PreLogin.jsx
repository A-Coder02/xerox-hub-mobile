import React, { useEffect, useRef, useState } from 'react';
import Typography from '../../components/typography/Typography';
import Layout from '../../components/layout/Layout';
import BrandSvg from '../../assets/icons/BrandSvg';
import colors from '../../utils/colors';
import { Pressable, StyleSheet, View } from 'react-native';
import Button from '../../components/form/Button';
import BottomDrawer from '../../components/layout/BottomDrawer';
import CreateAccount from './CreateAccount';
import Login from './Login';
import VerifyOtp from './VerifyOtp';

const PreLogin = () => {
  const drawerRef = useRef();
  const otpDrawerRef = useRef();
  const [activeComponent, setActiveComponent] = useState(null); // State to track the active component

  useEffect(() => {
    console.log({ drawerRef });
  }, []);

  const openDrawer = component => {
    setActiveComponent(component); // Set the active component ('login' or 'createAccount')
    drawerRef.current?.snapToIndex(2); // Open drawer to Index 0
  };

  const openOtpDrawer = () => {
    otpDrawerRef.current?.snapToIndex(2); // Open drawer to Index 0

  }

  const { container, buttonContainer, textAlignment } = styles;

  return (
    <Layout>
      <View style={container}>
        <View>
          <BrandSvg style={{ left: -16 }} height={65} color={colors.black} />
          <Typography fontSize={64} fontWeight={400} color="black">
            Xerox for{' '}
          </Typography>
          <Typography
            fontSize={64}
            fontWeight={400}
            color="primary"
            style={{ top: -40 }}>
            Everyone
          </Typography>
        </View>
        <View style={buttonContainer}>
          <View>
            <Button
              title="Login with Google"
              size="large"
              variant="outlined-dark"
              style={{
                button: {
                  borderColor: colors.gray,
                },
                text: { color: colors.primary, flex: 0 },
              }}
            />
          </View>
          <Typography
            style={{ textAlign: 'center' }}
            fontSize={17}
            fontWeight={400}>
            OR
          </Typography>
          <Button
            title="Login with Phone Number"
            size="large"
            variant="outlined-dark"
            style={{
              text: { flex: 0 }
            }}
            onPress={() => openDrawer('login')} // Pass 'login' to open the Login component
          />
          <Pressable
            onPress={() => openDrawer('createAccount')} // Pass 'createAccount' to open the CreateAccount component
            style={({ pressed }) => [
              {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: pressed ? 0.5 : 1, // Visual feedback on press
              },
            ]}>
            <Typography style={textAlignment} variant="base">
              Don't have an account?{'  '}
            </Typography>
            <Typography
              variant="base"
              color="primary"
              style={{ textDecorationLine: 'underline', top: 4 }}>
              Create Account
            </Typography>
          </Pressable>
        </View>
      </View>

      <BottomDrawer ref={drawerRef}>
        {activeComponent === 'login' ? (
          <Login
            onPress={() => {
              drawerRef.current?.close();
            }}
            openOtpDrawer={openOtpDrawer}
          />
        ) :
          activeComponent === 'createAccount' ? (
            <CreateAccount
              onPress={() => {
                drawerRef.current?.close();
              }}
              openOtpDrawer={openOtpDrawer}
            />
          ) : null}
      </BottomDrawer>
      <BottomDrawer ref={otpDrawerRef}   >
        <VerifyOtp
          onPress={() => {
            otpDrawerRef.current?.close();
          }}
        />
      </BottomDrawer>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginBottom: 32, justifyContent: 'space-between' },
  buttonContainer: {
    alignItems: 'center',
    gap: 12,
  },
  textAlignment: {
    textAlign: 'center',
    marginTop: 8,
  },
});
export default PreLogin;

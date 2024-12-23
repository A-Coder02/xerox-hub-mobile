import React, {useEffect, useRef, useState} from 'react';
import Typography from '../../components/typography/Typography';
import Layout from '../../components/layout/Layout';
import BrandSvg from '../../assets/icons/BrandSvg';
import colors from '../../utils/colors';
import {Pressable, StyleSheet, View} from 'react-native';
import Button from '../../components/form/Button';
import BottomDrawer from '../../components/layout/BottomDrawer';
import CreateAccount from './CreateAccount';
import Login from './Login';

const PreLogin = () => {
  const drawerRef = useRef();
  const [activeComponent, setActiveComponent] = useState(null); // State to track the active component

  useEffect(() => {
    console.log({drawerRef});
  }, []);

  const openDrawer = (component) => {
    setActiveComponent(component); // Set the active component ('login' or 'createAccount')
    drawerRef.current?.snapToIndex(1); // Open drawer to Index 1
  };

  const {container, buttonContainer, textAlignment, googleButton} = styles;

  return (
    <Layout>
      <View style={container}>
        <View>
          <BrandSvg style={{left: -16}} height={65} color={colors.black} />
          <Typography fontSize={64} fontWeight={400} color="black">
            Xerox for{' '}
          </Typography>
          <Typography
            fontSize={64}
            fontWeight={400}
            color="primary"
            style={{top: -24}}>
            Everyone
          </Typography>
        </View>
        <View style={buttonContainer}>
          <View style={googleButton}>
            <Button
              title="Login with Google"
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
            onPress={() => openDrawer('login')} // Pass 'login' to open the Login component
          />
          <Pressable
            onPress={() => openDrawer('createAccount')} // Pass 'createAccount' to open the CreateAccount component
            style={({pressed}) => [
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
              style={{textDecorationLine: 'underline', top: 4}}>
              Create Account
            </Typography>
          </Pressable>
        </View>
      </View>

      <BottomDrawer ref={drawerRef}>
        {activeComponent === 'login' && (
          <Login
            onNavigate={() => {
              drawerRef.current?.close();
            }}
          />
        )}
        {activeComponent === 'createAccount' && (
          <CreateAccount
            onNavigate={() => {
              drawerRef.current?.close();
            }}
          />
        )}
      </BottomDrawer>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, marginVertical: 30, justifyContent: 'space-between'},
  buttonContainer: {
    paddingHorizontal: 20,
    gap: 12,
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

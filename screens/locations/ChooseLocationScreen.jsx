import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  PermissionsAndroid,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Layout from '../../components/layout/Layout';
import Typography from '../../components/typography/Typography';
import colors from '../../utils/colors';
import MapPinSvg from '../../assets/icons/MapPinSvg';
import TextField from '../../components/form/TextField';
import SearchSvg from '../../assets/icons/SearchSvg';
import Button from '../../components/form/Button';
const ChooseLocationScreen = () => {
  const ref = useRef();
  const [isGpsEnabled, setIsGpsEnabled] = useState(null); // Initial state is `null` (unknown)
  const [loading, setLoading] = useState(false); // Loader state

  useEffect(() => {
    ref.current.focus();
    checkGpsStatus(false); // Initial check without showing loader
  }, []);
  const checkGpsStatus = async (showLoader = true) => {
    if (showLoader) setLoading(true); // Start loader
  
    const hasPermission = await requestLocationPermission();
  
    if (hasPermission) {
      Geolocation.getCurrentPosition(
        () => {
          setIsGpsEnabled(true); // GPS is enabled
          if (showLoader) {
            Alert.alert('Success', 'Go to Home Screen');
          }
        },
        (error) => {
          setIsGpsEnabled(false); // GPS is not enabled
          console.error('Location Error:', error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    } else {
      setIsGpsEnabled(false); // Permission denied, GPS disabled
      Alert.alert('Permission Denied', 'Location permission is required.');
    }
  
    setLoading(false); // Stop loader after completion
  };
  

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location.',
          buttonPositive: 'OK',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.error('Permission Error:', err);
      return false;
    }
  };

  return (
    <Layout style={styles.layout}>
      <View style={styles.content}>
        <TextField
          ref={ref}
          label="Search Location Here"
          startIcon={SearchSvg}
          style={styles.textField}
          placeholderTextColor={colors.grayDark}
        />
        <View style={styles.gpsContainer}>
          <MapPinSvg style={styles.mapPin} />
          <View style={styles.gpsTextContainer}>
            {loading || isGpsEnabled === null ? (
              <ActivityIndicator size="small" color={colors.primary} />
            ) : isGpsEnabled ? (
              <>
                <Typography fontWeight={500} color="primary">
                  Device location enabled
                </Typography>
                <Typography variant="caption" fontWeight={300}>
                  Tap here to use your device location for a better experience
                </Typography>
                <Button
                  title="Use Current Location"
                  variant="outlined"
                  size="mini"
                  style={{
                    button: styles.enableButton,
                  }}
                />
              </>
            ) : (
              <>
                <Typography fontWeight={500} color="primary">
                  Device location not enabled
                </Typography>
                <Typography variant="caption" fontWeight={300}>
                  Tap here to enable your device location for a better experience
                </Typography>
                <Button
                  title="Enable"
                  variant="outlined"
                  size="mini"
                  onPress={() => checkGpsStatus(true)} // Show loader when enabling location
                  style={{
                    button: styles.enableButton,
                  }}
                />
              </>
            )}
          </View>
        </View>
      </View>
    </Layout>
  );
};


const styles = StyleSheet.create({
  layout: {
    gap: 32,
  },
  content: {
    flex: 1,
    gap: 32,
  },
  textField: {
    borderColor: colors.grayDark,
  },
  gpsContainer: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 16,
    flexDirection: 'row',
    gap: 8,
  },
  mapPin: {
    paddingTop: 24,
  },
  gpsTextContainer: {
    flex: 1,
  },
  enableButton: {
    alignSelf: 'flex-end',
  },
});

export default ChooseLocationScreen;

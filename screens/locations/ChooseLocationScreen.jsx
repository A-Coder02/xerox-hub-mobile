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
import AppBar from '../../components/layout/AppBar';
const ChooseLocationScreen = () => {
  const ref = useRef();
  const [isGpsEnabled, setIsGpsEnabled] = useState(null); // Initial state is `null` (unknown)
  const [loading, setLoading] = useState(false); // Loader state

  useEffect(() => {
    ref.current.focus();
    checkGpsStatus(false); // Initial check without showing loader
  }, []);

  const checkGpsStatus = async (showLoader = true) => {
    if (showLoader) {
      setLoading(true);
    } // Start loader

    const hasPermission = await requestLocationPermission();

    if (hasPermission) {
      Geolocation.getCurrentPosition(
        () => {
          setLoading(true); // Start loader when the GPS is enabled
          setTimeout(() => {
            // Add a delay for smoother transition
            setIsGpsEnabled(true); // GPS is enabled
            setLoading(false); // Stop loader after delay
            if (showLoader) {
              Alert.alert('Success', 'Go to Home Screen');
            }
          }, 500); // 500ms delay for smoother UI update
        },
        error => {
          setLoading(true); // Start loader when there’s an error
          setTimeout(() => {
            // Handle error with a delay
            setIsGpsEnabled(false); // GPS is not enabled
            setLoading(false); // Stop loader
            // console.error('Location Error:', error);
          }, 500);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
      );
    } else {
      setTimeout(() => {
        // Handle permission denial
        setIsGpsEnabled(false); // Permission denied, GPS disabled
        setLoading(false); // Stop loader
        Alert.alert('Permission Denied', 'Location permission is required.');
      }, 500);
    }
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location.',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.error('Permission Error:', err);
      return false;
    }
  };

  return (
    <Layout style={styles.layout}>
      <AppBar title={'Choose Location'} />
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
            {!loading || isGpsEnabled === null ? (
              <ActivityIndicator size="small" color={colors.primary} />
            ) : isGpsEnabled ? (
              <>
                {/* Success State */}
                <Typography fontWeight={500} color="primary">
                  Device location enabled
                </Typography>
                <Typography variant="caption" fontWeight={300} color='grayDark'>
                  Tap here to use your device location for a better experience
                </Typography>
                <Button
                  title="Use Current Location"
                  variant="outlined"
                  size="small"
                  style={{
                    button: styles.enableButton,
                  }}
                />
              </>
            ) : (
              <>
                {/* Error State */}
                <Typography fontWeight={500} color="primary">
                  Device location not enabled
                </Typography>
                <Typography variant="caption" fontWeight={300} color='grayDark' >
                  Tap here to enable your device location for a better
                  experience
                </Typography>
                <Button
                  title="Enable"
                  variant="outlined"
                  size="small"
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

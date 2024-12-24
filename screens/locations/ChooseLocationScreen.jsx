import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, PermissionsAndroid, Alert, ActivityIndicator, Pressable, ScrollView, Dimensions } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Layout from '../../components/layout/Layout';
import Typography from '../../components/typography/Typography';
import colors from '../../utils/colors';
import MapPinSvg from '../../assets/icons/MapPinSvg';
import AppBar from '../../components/layout/AppBar';
import TextField from '../../components/form/TextField';
import SearchSvg from '../../assets/icons/SearchSvg';
import Button from '../../components/form/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChooseLocationScreen = () => {
  const ref = useRef();
  const [isGpsEnabled, setIsGpsEnabled] = useState(null); // Initial state is `null` (unknown)
  const [loading, setLoading] = useState(false); // Loader state
  const [addresses, setAddresses] = useState([]); // State to hold addresses

  useEffect(() => {
    ref.current.focus();
    checkGpsStatus(false); // Initial check without showing loader
    fetchAddresses(); // Fetch addresses from AsyncStorage
  }, []);

  const { height } = Dimensions.get('window');

  // Function to fetch addresses from AsyncStorage
  const fetchAddresses = async () => {
    try {
      const storedAddresses = await AsyncStorage.getItem('addresses');
      if (storedAddresses) {
        setAddresses(JSON.parse(storedAddresses));
      } else {
        const defaultAddresses = [
          'Indira Nagar, Yerwada, Pune, Maharashtra, 411006',
          'Viman Nagar, Pune, Maharashtra, 411014',
          'Koregaon Park, Pune, Maharashtra, 411001',
          'Baner, Pune, Maharashtra, 411045',
          'Kothrud, Pune, Maharashtra, 411038',
          'Aundh, Pune, Maharashtra, 411007',
          'Baner, Pune, Maharashtra, 411045',
          'Kothrud, Pune, Maharashtra, 411038',
          'Aundh, Pune, Maharashtra, 411007',
          'Baner, Pune, Maharashtra, 411045',
          'Kothrud, Pune, Maharashtra, 411038',
          'Aundh, Pune, Maharashtra, 411007',
        ];
        setAddresses(defaultAddresses);
        await AsyncStorage.setItem('addresses', JSON.stringify(defaultAddresses));
      }
    } catch (error) {
      console.error('Error fetching or storing addresses:', error);
    }
  };

  const checkGpsStatus = async (showLoader = true) => {
    if (showLoader) {
      setLoading(true);
    } // Start loader

    const hasPermission = await requestLocationPermission();

    if (hasPermission) {
      Geolocation.getCurrentPosition(
        () => {
          setTimeout(() => {
            setIsGpsEnabled(true); // GPS is enabled
            setLoading(false); // Stop loader after delay
            // if (showLoader) {
            //   Alert.alert('Success', 'Go to Home Screen');
            // }
          }, 500); // 500ms delay for smoother UI update
        },
        error => {
          // console.error('Location Error:', error);
          setTimeout(() => {
            setIsGpsEnabled(false); // GPS is not enabled
            setLoading(false); // Stop loader
          }, 500);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    } else {
      setTimeout(() => {
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
          // title: 'Location Permission',
          // message: 'This app needs access to your location.',
          // buttonPositive: 'OK',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.error('Permission Error:', err);
      return false;
    }
  };

  const truncateText = (text, limit) => {
    return text.length > limit ? `${text.slice(0, limit)}...` : text;
  };

  const clearAddresses = async () => {
    try {
      await AsyncStorage.removeItem('addresses');
      setAddresses([]);
      console.log('Addresses cleared successfully!');
    } catch (error) {
      console.error('Error clearing addresses:', error);
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
          placeholderTextColor={colors.grayDark}
        />
        <View style={styles.gpsContainer}>
          <MapPinSvg style={styles.mapPin} />
          <View style={styles.gpsTextContainer}>
            {!loading || isGpsEnabled === null ? (
              <ActivityIndicator size="small" color={colors.primary} />
            ) : isGpsEnabled ? (
              <>
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
                  style={{ button: styles.enableButton }}
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
                  size="small"
                  onPress={() => checkGpsStatus(true)} // Show loader when enabling location
                  style={{ button: styles.enableButton }}
                />
              </>
            )}
          </View>
        </View>

        {addresses.length > 0 && <View style={styles.addressContainer}>
          <View style={styles.titleContainer}>
            <Typography fontSize={18} style={styles.recentLocationsTitle}>
              Recent Locations
            </Typography>

            <Button
              title="Clear"
              variant="text"
              size="small"
              onPress={clearAddresses}
              style={styles.clearButton}
            />
          </View>

          <ScrollView style={styles.scrollView}>
            {addresses.map((address, index) => (
              <Pressable
                key={index}
                onPress={() => {
                  console.log(`Address ${index + 1} clicked`);
                  Alert.alert(`Address ${index + 1} clicked`);
                }}
              >
                <Typography
                  fontWeight={300}
                  variant="caption"
                  color="grayDark"
                  fontSize={18}
                  style={styles.truncatedAddress}
                >
                  {truncateText(address, 34)}
                </Typography>
                <View style={styles.divider} />
              </Pressable>
            ))}
          </ScrollView>

        </View>}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  layout: {
    padding: 20,
    paddingTop: 55,
  },
  content: {
    marginTop: 20,
    flex: 1,
    gap: 18,
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
  addressContainer: {
    flex: 1, // Ensure the container takes up all available space
    alignItems: 'flex-start',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
  recentLocationsTitle: {
    paddingTop: 10,
  },
  truncatedAddress: {
    justifyContent: 'center',
    paddingLeft: 12,
    marginVertical: 7,
  },
  noAddresses: {
    textAlign: 'center',
    marginVertical: 20,
  },
  clearButton: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1, // Make ScrollView flexible
    paddingTop: 8, // Adjust top padding to match layout style
  },
  divider: {
    height: 1,
    backgroundColor: colors.grayLight,
    marginVertical: 8,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconWrapper: {
    marginRight: 10,
  },

});

export default ChooseLocationScreen;

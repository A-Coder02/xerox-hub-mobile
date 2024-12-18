import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Layout from '../../components/layout/Layout';
import Typography from '../../components/typography/Typography';
import colors from '../../utils/colors';
import LeftArrowSvg from '../../assets/icons/LeftArrowSvg';
import TextField from '../../components/form/TextField';
import SearchSvg from '../../assets/icons/SearchSvg';
import Button from '../../components/form/Button';
import MapPinSvg from '../../assets/icons/MapPinSvg';
import AppBar from '../../components/layout/AppBar';

const ChooseLocationScreen = () => {
  const ref = useRef();
  const [isGpsEnabled, setIsGpsEnabled] = useState(false);

  useEffect(() => {
    ref.current.focus();
  }, []);

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
              style={{
                button: styles.enableButton,
              }}
            />
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

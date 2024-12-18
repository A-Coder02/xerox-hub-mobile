import React from 'react';
import Layout from '../../components/layout/Layout';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import { CaretLeft, MagnifyingGlass, MapPin } from 'phosphor-react-native';
import colors from '../../utils/colors';

const ChooseLocationScreen2 = () => {
  return (
    <Layout style={styles.color}>
      <View style={styles.container}>
        <View style={styles.iconWrapper}>
          {/* <CaretLeft color="#071731" size={24} /> */}
        </View>
        <Text style={styles.text}>Choose a Location</Text>
      </View>

      <View style={styles.textFieldWrapper}>
        {/* <MagnifyingGlass color="#9CA3AF" size={20} style={styles.searchIcon} /> */}
        <TextInput
          style={styles.textField}
          placeholder="Search Location Here ! "
          placeholderTextColor="#071731"
        />
      </View>

      <View style={styles.cardWrapper}>
        <View style={styles.cardContent}>
          {/* <MapPin color="#22C55E" size={24} style={styles.locationIcon} /> */}
          <Text style={styles.cardTitle}>Device location not enabled</Text>
        </View>
        <Text style={styles.cardDescription}>
          Tap here to enable your device location for a better experience
        </Text>
        <TouchableOpacity style={styles.enableButton}>
          <Text style={styles.enableButtonText}>Enable</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  color: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    marginLeft: 3,
    marginTop: 23,
    alignItems: 'center',
  },
  iconWrapper: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#F8FAFC',
  },
  text: {
    fontFamily: 'Poppins',
    color: '#8C8994',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 16,
  },
  textFieldWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginTop: 40,
    marginHorizontal: 8,
    height: 56,
    paddingLeft: 12,
  },
  searchIcon: {
    marginRight: 8,
    color: '#071731',
  },
  textField: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },
  cardWrapper: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E2E2E2',
    borderWidth: 1,
    borderRadius: 16,
    marginTop: 24,
    marginHorizontal: 8,
    padding: 16,
    paddingBottom: 70,
    position: 'relative',
  },

  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    marginRight: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#22C55E',
  },
  cardDescription: {
    fontSize: 14,
    marginLeft: 31,
    color: '#9CA3AF',
    marginTop: 4,
    lineHeight: 20,
  },
  enableButton: {
    position: 'absolute',
    bottom: 12,
    right: 8,
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 43,
  },

  enableButtonText: {
    color: '#23A044',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ChooseLocationScreen2;

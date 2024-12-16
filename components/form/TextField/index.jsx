import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

const TextField = ({ value, label, onChange, startIcon, endIcon, style }) => {
  return (
    <View style={[styles.container, style]}>
      {startIcon && (
        <View style={styles.startIconContainer}>
          <Text style={styles.iconStyle}>S</Text>
        </View>
      )}
      <TextInput
        style={styles.input}
        placeholder={label}
        value={value}
        onChangeText={onChange}
        placeholderTextColor={colors.placeholder}
      />
      {endIcon && (
        <View style={styles.endIconContainer}>
          <Text style={styles.iconStyle}>E</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    overflow: 'hidden',
  },
  startIconContainer: {
    padding: 8,
    paddingRight: 0,
  },
  endIconContainer: {
    padding: 8,
    paddingLeft: 0,
  },
  iconStyle: {
    backgroundColor: colors.grayDark,
    width: 32,
    height: 32,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    color: colors.black,
  },
});

export default TextField;

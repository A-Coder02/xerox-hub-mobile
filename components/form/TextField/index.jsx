import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

const TextField = ({ value, label, onChange, startIcon: StartIcon, endIcon: EndIcon, style }) => {
  return (
    <View style={[styles.container, style]}>
      {StartIcon && (
        <View style={styles.startIconContainer}>
          {/* <Text style={styles.iconStyle}>S</Text> */}
          <StartIcon {...styles.iconStyle} />
        </View>
      )}
      <TextInput
        style={styles.input}
        placeholder={label}
        value={value}
        onChangeText={onChange}
        placeholderTextColor={colors.placeholder}
      />
      {EndIcon && (
        <View style={styles.endIconContainer}>
          <EndIcon {...styles.iconStyle} />

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
    color: colors.grayDark,
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

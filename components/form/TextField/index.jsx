import React, { forwardRef } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import colors from '../../../utils/colors';

const TextField = forwardRef(
  (
    {
      value,
      label,
      onChange,
      startIcon: StartIcon,
      endIcon: EndIcon,
      prefix, // New prop for text prefix
      style,
      placeholderTextColor,
      autoFocus,
      onBlur, // Support onBlur for Formik
    },
    ref
  ) => {
    return (
      <View style={[styles.container, style]}>
        {/* Render StartIcon */}
        {StartIcon && (
          <View style={styles.startIconContainer}>
            <StartIcon {...styles.iconStyle} />
          </View>
        )}
        {/* Render Prefix */}
        {prefix && <Text style={styles.prefixText}>{prefix}</Text>}
        {/* Text Input */}
        <TextInput
          ref={ref}
          style={styles.input}
          placeholder={label}
          value={value}
          onChangeText={onChange}
          placeholderTextColor={placeholderTextColor || colors.placeholder}
          autoFocus={autoFocus}
          onBlur={onBlur} // Handle Formik's onBlur
        />
        {/* Render EndIcon */}
        {EndIcon && (
          <View style={styles.endIconContainer}>
            <EndIcon {...styles.iconStyle} />
          </View>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.whiteLight,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
  },
  startIconContainer: {
    backgroundColor: colors.whiteLight,
    padding: 8,
    paddingRight: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  endIconContainer: {
    backgroundColor: colors.whiteLight,
    padding: 8,
    paddingLeft: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    color: colors.grayDark,
    width: 24,
    height: 24,
  },
  prefixText: {
    backgroundColor: colors.whiteLight,
    color: colors.grayDark,
    fontSize: 16,
    padding: 8,
    paddingRight: 0,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    color: colors.black,
    backgroundColor: colors.whiteLight,
  },
});

export default TextField;

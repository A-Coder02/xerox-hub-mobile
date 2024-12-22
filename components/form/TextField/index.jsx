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
      autoFocus 
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
        {prefix && (
          <Text style={styles.prefixText}>
            {prefix}
          </Text>
        )}
        {/* Text Input */}
        <TextInput
          ref={ref}
          style={styles.input}
          placeholder={label}
          value={value}
          onChangeText={onChange}
          placeholderTextColor={placeholderTextColor || colors.placeholder}
          autoFocus={autoFocus}
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
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center', // Ensure proper alignment
  },
  startIconContainer: {
    padding: 8,
    paddingRight: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  endIconContainer: {
    padding: 8,
    paddingLeft: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    color: colors.grayDark,
    width: 32,
    height: 32,
  },
  prefixText: {
    color: colors.grayDark,
    fontSize: 20,
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    color: colors.black,
  },
});

export default TextField;

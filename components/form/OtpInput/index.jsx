import React, { useState, useRef } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import colors from '../../../utils/colors';

const OtpInput = ({ length = 4, onChange, style, inputStyle }) => {
  const [otp, setOtp] = useState(Array(length).fill(''));

  const inputs = useRef([]);

  const handleInputChange = (text, index) => {
    console.log({ text })
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    onChange && onChange(newOtp.join(''));

    if (!text) {
      inputs.current[index - 1]?.focus();
    }
    else if (text && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={[styles.container, style]}>
      {Array.from({ length }).map((_, index) => (
        <TextInput
          key={index}
          style={[styles.input, inputStyle, {
            backgroundColor: otp[index] ? colors.primary : colors.white,
            borderColor: otp[index] ? colors.primary : colors.grayDark,
            color: otp[index] ? colors.white : colors.primary

          }]}
          value={otp[index]}
          onChangeText={(text) => handleInputChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          keyboardType="number-pad"
          maxLength={1}
          ref={(ref) => (inputs.current[index] = ref)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20
  },
  input: {
    width: 64,
    height: 64,
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.grayDark,
    borderRadius: 16,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default OtpInput;

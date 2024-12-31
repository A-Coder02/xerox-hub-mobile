import React from 'react'
import { View } from 'react-native'
import OtpInput from '.'
import Typography from '../../typography/Typography'

const OtpInputField = ({
  value,
  onChange,
  autoFocus = false
}) => {
  return (
    <View style={{ gap: 16, justifyContent: 'center' }} >
      <Typography color='primary' style={{ textAlign: 'center' }} >Enter OTP</Typography>
      <OtpInput value={value} onChange={onChange} autoFocus={autoFocus} />
    </View>
  )
}

export default OtpInputField
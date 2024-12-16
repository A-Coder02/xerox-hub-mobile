import React from 'react'
import { View } from 'react-native'
import OtpInput from '.'
import Typography from '../../typography/Typography'

const OtpInputField = () => {
  return (
    <View style={{ gap: 16, justifyContent : 'center'}} >
        <Typography color='primary' style={{textAlign : 'center'}} >Enter OTP</Typography>
        <OtpInput/>
    </View>
  )
}

export default OtpInputField
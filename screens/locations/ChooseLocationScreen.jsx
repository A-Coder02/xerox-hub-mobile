import React, { useEffect, useRef, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { View } from 'react-native'
import Typography from '../../components/typography/Typography'
import colors from '../../utils/colors'
import LeftArrowSvg from '../../assets/icons/LeftArrowSvg'
import TextField from '../../components/form/TextField'
import SearchSvg from '../../assets/icons/SearchSvg'
import Button from '../../components/form/Button'
import MapPinSvg from '../../assets/icons/MapPinSvg'

const ChooseLocationScreen = () => {
  const ref = useRef();
  const [isGpsEnabled, setIsGpsEnabled] = useState(false)
  useEffect(() => {
    ref.current.focus()
  }, [])
  return (
    <Layout style={{ gap: 32 }} >
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
      }} >
        <View style={{
          backgroundColor: colors.grayDark,
          borderRadius: 100,
          // padding: 12
        }} >
          <LeftArrowSvg />
        </View>
        <Typography color={colors.grayDark} variant='base'>Choose Location</Typography>
      </View>

      <View style={{
        flex: 1,
        gap: 32
      }} >

        <TextField
          ref={ref}
          label={'Search Location Here'}
          startIcon={SearchSvg}
          style={{
            borderColor: colors.grayDark
          }}
          placeholderTextColor={colors.grayDark}
        />
        <View style={{
          paddingVertical: 10,
          paddingHorizontal: 8,
          borderWidth: 1,
          borderColor: colors.gray,
          borderRadius: 16,
          flexDirection: 'row',
          gap: 8
        }} >
          <MapPinSvg style={{ paddingTop: 24 }} />
          <View>
            <Typography fontWeight={500} color='primary' >Device location not enabled</Typography>
            <Typography variant='caption' fontWeight={300}>Tap here to enable your device location for a better experience</Typography>
            <Button title='Enable' variant='outlined' size={'mini'} style={{
              button: {
                alignSelf: 'flex-end'
              }
            }} />
          </View>
        </View>
      </View>

    </Layout>
  )
}

export default ChooseLocationScreen
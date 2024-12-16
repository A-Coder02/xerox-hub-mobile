import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Layout = ({ children, style={} }) => {
  const inset = useSafeAreaInsets()

  return (
    <View style={[{ flex: 1, backgroundColor: 'transparent', paddingTop: inset.top, paddingHorizontal: 16 },style]}>
      {children}
    </View>
  )
}

export default Layout
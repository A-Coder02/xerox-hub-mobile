import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from '../../utils/colors';

const Layout = ({ children, style = {}, backgroundColor = colors.white }) => {
  const inset = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor, 
          paddingTop: inset.top,
          paddingBottom: inset.bottom,
          paddingHorizontal: 16,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Layout;

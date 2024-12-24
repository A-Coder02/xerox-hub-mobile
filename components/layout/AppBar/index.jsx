import React from 'react'
import { StyleSheet, View } from 'react-native'
import LeftArrowSvg from '../../../assets/icons/LeftArrowSvg'
import colors from '../../../utils/colors'
import Typography from '../../typography/Typography'
import {
  useNavigation,
} from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler'
const AppBar = ({ title, isBottomSheet = false, onPress = () => { } }) => {
  const navigation = useNavigation()
  return (
    <View style={[styles.header, {
      flexDirection: isBottomSheet ? 'row-reverse' : 'row'
    }]}>
      <TouchableHighlight
        onPress={() => isBottomSheet ? onPress() : navigation.goBack()}
        underlayColor={colors.underlayColor}
        style={[styles.backButton, {
          transform: [{ rotate: isBottomSheet ? '-90deg' : "0deg" }]
        }]}>
        <LeftArrowSvg />
      </TouchableHighlight>
      {title && <Typography variant='h1' fontSize={18} fontWeight={600} style={{
        flex: 1
      }} >
        {title}
      </Typography>}
    </View>
  )
}

export default AppBar;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  backButton: {
    backgroundColor: colors.grayDark,
    borderRadius: 100,
  },
});

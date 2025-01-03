import React from 'react';
import { StyleSheet, View } from 'react-native';
import LeftArrowSvg from '../../../assets/icons/LeftArrowSvg';
import colors from '../../../utils/colors';
import Typography from '../../typography/Typography';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const SecondAppBar = ({ title, isBottomSheet = false, onPress = () => { } }) => {
  const navigation = useNavigation();
  
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
    <LeftArrowSvg fillColor={colors.black} strokeColor={colors.white}  rectanleColor={colors.black}/>
    </TouchableHighlight>
      {title && <Typography 
        variant='h1' 
        fontSize={18} 
        fontWeight={600} 
        style={[styles.title]}>
        {title}
      </Typography>}
    </View>
  );
};

export default SecondAppBar;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: colors.black, 

  },
  backButton: {
    backgroundColor: colors.black,
    borderRadius: 100,
  },
  title: {
    flex: 1,
    color: colors.white, // White text color
  },
});

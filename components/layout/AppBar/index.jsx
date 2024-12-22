import React from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import LeftArrowSvg from '../../../assets/icons/LeftArrowSvg';
import colors from '../../../utils/colors';
import Typography from '../../typography/Typography';

const AppBar = ({title, isBottomSheet = false, onNavigate = () => {}}) => {
  return (
    <View
      style={[
        styles.header,
        {
          flexDirection: isBottomSheet ? 'row-reverse' : 'row',
        },
      ]}>
      <TouchableHighlight
        underlayColor={colors.underlayColor}
        onPress={() => {
          onNavigate();
        }}
        style={[
          styles.backButton,
          {
            transform: [{rotate: '-90deg'}],
          },
        ]}>
        <LeftArrowSvg />
      </TouchableHighlight>
      <Typography color={colors.grayDark} style={{flex: 1}} variant="base">
        {title}
      </Typography>
    </View>
  );
};

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

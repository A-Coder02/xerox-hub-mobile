import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

const Paper = ({
  title, // Optional title for the paper
  children, // Content to be rendered inside the paper
  startIcon: StartIcon, // Optional start icon
  endIcon: EndIcon, // Optional end icon
  style, // Additional styles
  titleStyle, // Custom title styles
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        {/* Render Start Icon */}
        {StartIcon && (
          <View style={styles.startIconContainer}>
            <StartIcon {...styles.iconStyle} />
          </View>
        )}
        {/* Render Title */}
        {title && (
          <Text style={[styles.title, titleStyle]}>
            {title}
          </Text>
        )}
        {/* Render End Icon */}
        {EndIcon && (
          <View style={styles.endIconContainer}>
            <EndIcon {...styles.iconStyle} />
          </View>
        )}
      </View>
      {/* Render Content */}
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.whiteLight,
        borderRadius: 8,
        borderColor: colors.gray,
        borderWidth: 1,
        padding: 12,
        marginBottom: 8, // Spacing between rows
        overflow: 'hidden',
      },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  startIconContainer: {
    paddingRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  endIconContainer: {
    paddingLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    color: colors.grayDark,
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    flex: 1, // Allows title to take up remaining space
  },
  content: {
    flex: 1, // Ensures content takes up available space
  },
});

export default Paper;

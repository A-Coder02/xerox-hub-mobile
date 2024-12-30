import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Typography from '../typography/Typography';
import colors from '../../utils/colors';
const Card = ({
  imageSource, // The image source
  title, // Title of the card
  subtitle, // Subtitle or additional text
  style, // Custom styles for the card container
  imageStyle, // Custom styles for the image
  textContainerStyle, // Custom styles for the text container
}) => {
  return (
    <View style={[styles.card, style]}>
      {/* Display Image */}
      <Image
        source={imageSource}
        style={[styles.image, imageStyle]}
        resizeMode="cover"
      />
      {/* Display Text */}
      <View style={[styles.textContainer, textContainerStyle]}>
        <Typography variant="h3" color="black" style={styles.title}>
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="caption"
            color="grayDark"
            style={styles.subtitle}>
            {subtitle}
          </Typography>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    backgroundColor: colors.white,
    borderRadius: 8,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Shadow for Android
    minWidth: 370,
  },
  image: {
    width: '100%',
    height: 181,
    borderRadius: 8,
    marginRight: 12,
  },
  textContainer: {
  },
  title: {
    marginBottom: 4,
  },
  subtitle: {},
});

export default Card;

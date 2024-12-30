import React, { useState } from 'react';
import {View, Image, StyleSheet, Button} from 'react-native';
import Typography from '../typography/Typography';
import colors from '../../utils/colors';
import IconButton from '../form/IconButton/IconButton';
import PrintSvg from '../../assets/icons/PrintSvg';
import BookMarkSvg from '../../assets/icons/BookMarkSvg';
import BookMarkFillSvg from '../../assets/icons/BookMarkFillSvg';
const Card = ({
  imageSource, // The image source
  title, // Title of the card
  subtitle, // Subtitle or additional text
  style, // Custom styles for the card container
  imageStyle, // Custom styles for the image
  textContainerStyle, // Custom styles for the text container
}) => {
  const [bookmarked, setBookmarked] = useState(false)
  return (
    <View style={[styles.card, style]}>
      {/* Display Image */}
      <Image
        source={imageSource}
        style={[styles.image, imageStyle]}
        resizeMode="cover"
      />
      <IconButton
        icon={PrintSvg}
        size="large"
        style={{button: {position: 'absolute', right:10, top:120}}}
      />
      <IconButton 
        icon={bookmarked ? BookMarkFillSvg:  BookMarkSvg}
        size="large"
        variant="text"
        style={{button: {position: 'absolute',
          right:10,
        }}}
        onPress={()=>setBookmarked(!bookmarked)}
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
    backgroundColor: 'white',
    borderRadius: 8,
    minWidth: 370,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 181,
    borderRadius: 8,
    marginRight: 12,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  iconButton: {},
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  title: {
    marginBottom: 4,
  },
  subtitle: {},
});

export default Card;

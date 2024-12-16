import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Typography from '../../components/typography/Typography';

const TypographyScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Typography>Typography Examples</Typography>
      <Typography variant="h1" color="primary">
        Heading 1 (h1) - Primary Color
      </Typography>
      <Typography variant="h2" color="default">
        Heading 2 (h2) - Primary Light Color
      </Typography>
      <Typography variant="h3" color="gray">
        Heading 3 (h3) - Gray Color
      </Typography>
      <Typography variant="base" color="black">
        Base Text - Black Color
      </Typography>
      <Typography variant="caption">
        Caption Text
      </Typography>
      <Typography variant="small" color="grayDark">
        Small Text - Gray Dark Color
      </Typography>
      <Typography fontSize={18} fontWeight={500} color="primary">
        Custom Font Size and Weight - Primary Color
      </Typography>
      <Typography fontSize={22} fontWeight={700} color="gray">
        Custom Font Size and Weight - Gray
      </Typography>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop : 32,
    flexGrow: 1,
    // justifyContent: 'center',
    flex: 1,
    gap: 32
  },
});

export default TypographyScreen;

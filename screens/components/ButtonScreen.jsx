import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Typography from '../../components/typography/Typography';
import Button from '../../components/form/Button';
import colors from '../../utils/colors';

const ButtonScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Typography>Button Examples</Typography>
      <View style={{gap: 8}} >
      <Typography>Sizes</Typography>
      <Button title='Default (Medium)' />
      <Button title='Medium' size='medium' />
      <Button title='Large' size='large' />
      <Button title='small' size='small' />
      <Button title='mini' size='mini' />
      </View>
      <View style={{gap: 8}} >
      <Typography>Variants</Typography>
      <Button title='Default (Contained)' />
      <Button title='contained' variant='contained' />
      <Button title='outlined' variant='outlined' />
      <Button title='outlined-dark' variant='outlined-dark' />
      <Button title='text' variant='text' />
      <Button title='disabled' disabled />
      <Button title='Custom Style' style={{
        button : {
          backgroundColor: colors.primaryDark,
        },
        text : {
          color : colors.black
        }
      }} />
      <Button title='Custom Style'  />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 32,
    flexGrow: 1,
    // justifyContent: 'center',
    flex: 1,
    gap: 32
  },
});

export default ButtonScreen;

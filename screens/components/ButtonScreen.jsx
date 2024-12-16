import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Typography from '../../components/typography/Typography';
import Button from '../../components/form/Button';

const ButtonScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Typography>Button Examples</Typography>
      <Typography>Sizes</Typography>
      <Button title='Default (Medium)' />
      <Button title='Medium' size='medium' />
      <Button title='Large' size='large' />
      <Button title='small' size='small' />
      <Button title='mini' size='mini' />
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

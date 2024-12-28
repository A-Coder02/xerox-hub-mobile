import React, {useRef} from 'react';
import Layout from '../../components/layout/Layout';
import AppBar from '../../components/layout/AppBar';
import {StyleSheet, View} from 'react-native';
import TextField from '../../components/form/TextField';
import SearchSvg from '../../assets/icons/SearchSvg';
import Paper from '../../components/form/Paper';

const ShopsForYou = ({onPress}) => {
  const ref = useRef();
  return (
    <Layout style={styles.layout}>
      <AppBar title="Shops For You" onPress={onPress} textVariant="h3" />
      <View style={styles.content}>
        <TextField
          ref={ref}
          label="Search Location Here"
          startIcon={SearchSvg}
          placeholderTextColor={colors.grayDark}
        />
        <Paper title="Umar"
        startIcon={SearchSvg}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  layout: {
    gap: 32,
  },
  content: {
    flex: 1,
    gap: 16,
  },
  textField: {
    borderColor: colors.grayDark,
  },
});
export default ShopsForYou;

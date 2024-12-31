import React, {useRef} from 'react';
import Layout from '../../components/layout/Layout';
import AppBar from '../../components/layout/AppBar';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import TextField from '../../components/form/TextField';
import SearchSvg from '../../assets/icons/SearchSvg';
import Card from '../../components/Card';

const MyShops = ({onPress}) => {
  const ref = useRef();
  const {layout, content, image} = styles;
  return (
    <Layout style={layout}>
      <AppBar title="My Favourites" onPress={onPress} textVariant="h3" />
      <View style={content}>
        <TextField
          ref={ref}
          label="Search Shops Here"
          startIcon={SearchSvg}
          placeholderTextColor={colors.grayDark}
        />

        <ScrollView>
          {new Array(5).fill(0).map(c => (
            <Card
              key={c}
              imageSource={require('../../assets/images/shop-image.png')}
              title={'Store Name'}
              subtitle={'14.3KM'}
            />
          ))}
        </ScrollView>
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
  image: {
    height: 181,
    width: 370,
  },
});
export default MyShops;

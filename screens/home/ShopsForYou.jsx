import React, {useRef} from 'react';
import Layout from '../../components/layout/Layout';
import AppBar from '../../components/layout/AppBar';
import {Image, StyleSheet, View} from 'react-native';
import TextField from '../../components/form/TextField';
import SearchSvg from '../../assets/icons/SearchSvg';
import Card from '../../components/Card';

const ShopsForYou = ({onPress}) => {
  const ref = useRef();
  const {layout, content, image} = styles;
  return (
    <Layout style={layout}>
      <AppBar title="Shops For You" onPress={onPress} textVariant="h3" />
      <View style={content}>
        <TextField
          ref={ref}
          label="Search Location Here"
          startIcon={SearchSvg}
          placeholderTextColor={colors.grayDark}
        />
        <Card
          imageSource={require('../../assets/images/shop-image.png')}
          title="Yellow Print Shop"
        />
         <Card
          imageSource={require('../../assets/images/shop-image.png')}
          title="Yellow Print Shop"

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
  image: {
    height: 181,
    width: 370,
  },
});
export default ShopsForYou;

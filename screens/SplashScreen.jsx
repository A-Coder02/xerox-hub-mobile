import React from 'react';
import Layout from '../components/layout/Layout';
import Typography from '../components/typography/Typography';
import BrandSvg from '../assets/icons/BrandSvg.jsx';
import MakeInIndiaPng from '../assets/images/made-in-india.png'
import { Image, View } from 'react-native';

const SplashScreen = () => {
  return (
    <Layout
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View />
      <View style={{
        alignItems: 'center',
      }}>
        <BrandSvg />
        <Typography variant="h2" color="primary">
          Zerox Cloud
        </Typography>
        <Typography fontSize={14} fontWeight={400} color="primary">
          Ab Xerox ban gaya easy!
        </Typography>
      </View>
      <Image source={(MakeInIndiaPng)} style={{
        width: 112,
        objectFit: 'contain'
      }} />
    </Layout>
  );
};

export default SplashScreen;

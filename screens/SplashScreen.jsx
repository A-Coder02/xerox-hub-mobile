import React from 'react';
import Layout from '../components/layout/Layout';
import Typography from '../components/typography/Typography';
import BrandSvg from '../assets/icons/BrandSvg.jsx';
import Makeinindia from '../assets/icons/Makeinindia.jsx';
import {View} from 'react-native';

const SplashScreen = () => {
  return (
    <Layout
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{marginTop: 325, marginBottom: 'auto', alignItems: 'center',
}}>
        <BrandSvg />
        <Typography variant="h2" color="primary">
          Zerox Cloud
        </Typography>
        <Typography fontSize={14} fontWeight={400} color="primary">
          Ab Xerox ban gaya easy!
        </Typography>
      </View>
      <Makeinindia style={{marginTop: 'auto', marginBottom: 40}} />
    </Layout>
  );
};

export default SplashScreen;

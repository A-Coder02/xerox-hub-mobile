import React from 'react';
import Layout from '../components/layout/Layout';
import Typography from '../components/typography/Typography';
import BrandSvg from '../assets/icons/BrandSvg.jsx';
import MakeInIndia from '../assets/icons/MakeInIndiaSvg.jsx';

const SplashScreen = () => {
  return (
    <Layout
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <BrandSvg />
      <Typography variant="base" color="primary">
        Zerox Cloud
      </Typography>
      <Typography variant="caption" color="primary">
        Ab Xerox ban gaya easy!
      </Typography>
      <MakeInIndia style={{marginTop: 300}} />
    </Layout>
  );
};

export default SplashScreen;

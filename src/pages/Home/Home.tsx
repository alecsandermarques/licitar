import {Button, Divider, Layout, TopNavigation} from '@ui-kitten/components';
import React from 'react';

const Home = ({navigation}: any) => {
  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <>
      <TopNavigation title="MyApp" alignment="center" />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
      </Layout>
    </>
  );
};

export default Home;

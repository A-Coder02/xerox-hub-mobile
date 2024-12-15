import React from 'react'
import { Text } from 'react-native'
import Layout from '../components/layout/Layout'

const NoInternetScreen = () => {
  return (
    <Layout style={{
        backgroundColor : 'white',
        justifyContent : 'center',
        alignItems : 'center'
    }} >
    <Text>NoInternetScreen</Text>
    </Layout>
  )
}

export default NoInternetScreen
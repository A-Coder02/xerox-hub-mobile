import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LeftArrowSvg from '../../assets/icons/LeftArrowSvg';
import Layout from '../../components/layout/Layout';
const avatars = [
  {id: 1, image: require('../../assets/images/image-7.png')},
  {id: 2, image: require('../../assets/images/image-6.png')},
  {id: 3, image: require('../../assets/images/image-8.png')},
];

const AvtarScreen = () => {
  const navigation = useNavigation();
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0].id);

  const handleAvatarSelect = id => {
    setSelectedAvatar(id);
  };

  return (
    <Layout>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <LeftArrowSvg />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Change Avatar</Text>
        </View>
        {/* Selected Avatar Display */}
        <View style={styles.selectedAvatarContainer}>
          <Image
            source={avatars.find(avatar => avatar.id === selectedAvatar).image}
            style={styles.selectedAvatarImage}
          />
        </View>
        {/* Avatar Options */}
        <View style={styles.avatarContainer}>
          <Text style={styles.subTitle}>Choose Your Avatar!</Text>
          <FlatList
            data={avatars}
            keyExtractor={item => item.id.toString()}
            horizontal
            renderItem={({item}) => (
              <TouchableOpacity
                style={[
                  styles.avatarWrapper,
                  selectedAvatar === item.id && styles.selectedWrapper,
                ]}
                onPress={() => handleAvatarSelect(item.id)}>
                <Image source={item.image} style={styles.avatarImage} />
                {selectedAvatar === item.id && (
                  <View style={styles.checkmark} />
                )}
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Go Back Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default AvtarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  selectedAvatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  selectedAvatarImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 3,
    borderColor: '#4caf50',
  },
  backText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    paddingLeft: 10,
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
  },
  avatarWrapper: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedWrapper: {
    borderColor: '#4caf50',
  },
  avatarImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  checkmark: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#4caf50',
    borderColor: '#fff',
    borderWidth: 2,
  },
  button: {
    backgroundColor: '#4caf50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

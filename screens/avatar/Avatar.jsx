import React, {useEffect, useState} from 'react';
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
import Typography from '../../components/typography/Typography';
import TextField from '../../components/form/TextField';
import AppBar from '../../components/layout/AppBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
const avatars = [
  {id: 1, image: require('../../assets/images/image-7.png')},
  {id: 2, image: require('../../assets/images/image-6.png')},
  {id: 3, image: require('../../assets/images/image-8.png')},
];

const AvtarScreen = () => {
  const navigation = useNavigation();
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0].id);
  const [username, setuserName] = useState('');

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const savedAvatar = await AsyncStorage.getItem('selectedAvatar');
        const savedUsername = await AsyncStorage.getItem('username');
        if (savedAvatar !== null) {
          setSelectedAvatar(Number(savedAvatar)); // Convert back to number
        }
        if (savedUsername !== null) {
          setuserName(savedUsername);
        }
      } catch (error) {
        console.error('Failed to load data:', error);
      }
    };
    loadProfile();
  }, []);
  const saveData = async () => {
    try {
      await AsyncStorage.setItem('selectedAvatar', selectedAvatar.toString());
      await AsyncStorage.setItem('username', username);
      navigation.goBack(''); // Navigate back after saving
    } catch (error) {
      console.error('Failed to save data:', error);
    }
  };
  const handleAvatarSelect = id => {
    setSelectedAvatar(id);
  };

  return (
    <Layout>
      <View style={styles.container}>
        <AppBar fontWeight={600} fontSize={18} title="Change Profile" />
        <View style={styles.appbarcontainer}>
          <Typography fontWeight={500}>Your Name</Typography>
          <TextField
            label="Enter Name"
            value={username}
            onChange={setuserName}
          />
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
          <Typography fontWeight={600} style={styles.subTitle}>
            Choose Your Avatar!
          </Typography>
          <View style={styles.staticAvatarGrid}>
            {avatars.map(item => (
              <TouchableOpacity
                key={item.id}
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
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={[styles.button, !username && styles.disabledButton]}
          onPress={saveData}
          disabled={!username}>
          <Typography style={styles.buttonText}>Save</Typography>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default AvtarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // paddingHorizontal: 20,
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
    marginTop: 20,
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
    width: 110,
    height: 110,
    margin: 20,
    marginHorizontal: 10,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedWrapper: {
    borderColor: '#4caf50',
  },
  avatarImage: {
    width: 95,
    height: 95,
    borderRadius: 35,
  },
  checkmark: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#4caf50',
    borderColor: '#fff',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4caf50',
    width: 370,
    height: 70,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto',
    marginBottom: 30,
    marginTop: 'auto',
  },
  disabledButton: {
    backgroundColor: '#d3d3d3',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  staticAvatarGrid: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  appbarcontainer: {
    marginTop: 20,
    marginBottom: 20,
  },
});

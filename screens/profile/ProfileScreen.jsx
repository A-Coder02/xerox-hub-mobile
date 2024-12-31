import React, {useState} from 'react';
import Layout from '../../components/layout/Layout';
import AppBar from '../../components/layout/AppBar';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PencilSvg from '../../assets/icons/PencilSvg';
import Typography from '../../components/typography/Typography';
import TelephoneSvg from '../../assets/icons/TelephoneSvg';
import colors from '../../utils/colors';
import NavigationList from '../../components/layout/NavigationList';
import {ScrollView} from 'react-native-gesture-handler';
import WalletSvg from '../../assets/icons/WalletSvg';
import RupeeSvg from '../../assets/icons/RupeeSvg';
import FilesSvg from '../../assets/icons/FilesSvg';
import FavouriteSvg from '../../assets/icons/FavouriteSvg';
import ContactSvg from '../../assets/icons/ContactSvg';
import SparkleSvg from '../../assets/icons/SparkleSvg';
import SettingSvg from '../../assets/icons/SettingSvg';
import LogoutSvg from '../../assets/icons/LogoutSvg';

const items = [
  {id: '1', title: 'Wallet', icon: WalletSvg, route: 'WalletScreen'},
  {id: '2', title: 'Payments', icon: RupeeSvg, route: 'PaymentScreen'},
  {id: '3', title: 'My Files', icon: FilesSvg, route: 'FilesScreen'},
  {
    id: '4',
    title: 'My Favourites',
    icon: FavouriteSvg,
    route: 'FavouritesScreen',
  },
  {id: '5', title: 'Contact Us', icon: ContactSvg, route: 'FavouritesScreen'},
  {id: '6', title: 'Features', icon: SparkleSvg, route: 'FavouritesScreen'},
  {
    id: '7',
    title: 'My Favourites',
    icon: SettingSvg,
    route: 'FavouritesScreen',
  },
];

const ProfileScreen = ({onPress}) => {
  const [imageUrl, setImageUrl] = useState(null); // Dynamic image URL
  const [loading, setLoading] = useState(true); // To handle loading state

  // useEffect(() => {
  // Simulate fetching image URL from the backend
  // API Logic here

  //   fetchImage();
  // }, []);
  const navigation = useNavigation(); // Access navigation object
  const {
    mainContainer,
    image,
    iconContainer,
    pencilIcon,
    imageContainer,
    profileDetails,
    telephoneContainer,
    walletContainer,
    section,
    divider,
    logoutContainer,
  } = styles;

  return (
    <Layout>
      <AppBar title="Your Profile" onPress={onPress} textVariant="h3" />
      <ScrollView>
        <View style={mainContainer}>
          <View style={imageContainer}>
            <Image
              style={image}
              source={require('../../assets/images/sloth.png')}
              resizeMode="contain"
            />
            {/* Pencil Icon */}
            <TouchableOpacity
              style={iconContainer}
              onPress={() => navigation.navigate('EditProfile')} // Navigate to EditProfile screen
            >
              <PencilSvg style={pencilIcon} />
            </TouchableOpacity>
          </View>
          <View style={profileDetails}>
            <Typography variant="h3" fontWeight={600}>
              Arbaj Ansari
            </Typography>
            <View style={telephoneContainer}>
              <TelephoneSvg style={{marginRight: 4}} />
              <Typography variant="caption" color="grayDark">
                +91 9876543210
              </Typography>
            </View>
          </View>
          <View style={walletContainer}>
            {/* Wallet Section */}
            <View style={section}>
              <Typography variant="h2" fontWeight={500}>
                ₹ 500
              </Typography>
              <Typography variant="caption" color="gray">
                Wallet
              </Typography>
            </View>

            {/* Divider */}
            <View style={divider} />

            {/* Orders Section */}
            <View style={section}>
              <Typography variant="h2" fontWeight={500}>
                0
              </Typography>
              <Typography variant="caption" color="gray">
                Orders
              </Typography>
            </View>
          </View>
          <View>
            <NavigationList items={items} />
          </View>
          <View style={logoutContainer}>
            <LogoutSvg />
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    gap: 24,
  },
  imageContainer: {
    position: 'relative', // Relative positioning for the container
    alignItems: 'center', // Center image horizontally
    top: 8,
  },
  image: {
    width: 128,
    height: 128,
  },
  iconContainer: {
    position: 'absolute',
    bottom: -10, // Adjust to position at the bottom-right of the image
    right: 80, // Adjust to position at the bottom-right of the image
    borderRadius: 20,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileDetails: {
    alignItems: 'center',
  },
  telephoneContainer: {
    flexDirection: 'row',
  },
  walletContainer: {
    flexDirection: 'row', // Align items horizontally
    backgroundColor: 'white', // Card background color
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 16, // Rounded corners
    paddingVertical: 10, // Add space on top and bottom
    marginHorizontal: 48,
  },
  section: {
    alignItems: 'center', // Center the text
    flex: 1, // Take up equal space
  },
  divider: {
    height: '96%', // Adjust height of the divider
    width: 1, // Divider width
    backgroundColor: colors.gray, // Light gray color
  },
  logoutContainer: {
    backgroundColor: "#FFAEAE",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray,
  },
});

export default ProfileScreen;

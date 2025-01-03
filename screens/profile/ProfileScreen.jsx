import React, {useEffect, useRef, useState} from 'react';
import Layout from '../../components/layout/Layout';
import AppBar from '../../components/layout/AppBar';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
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
import BottomDrawer from '../../components/layout/BottomDrawer';
import ContactUs from './ContactUs';

const ProfileScreen = ({onPress}) => {
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
    {
      id: '5',
      title: 'Contact Us',
      icon: ContactSvg,
      onPress: () => openDrawer('contact us'), // Open the Contact Us drawer
    },
    {id: '6', title: 'Features', icon: SparkleSvg, route: 'FavouritesScreen'},
    {
      id: '7',
      title: 'My Favourites',
      icon: SettingSvg,
      route: 'FavouritesScreen',
    },
  ];

  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility
  const [activeComponent, setActiveComponent] = useState(null); // Track the active component
  const navigation = useNavigation(); // Access navigation object
  const drawerRef = useRef();

  useEffect(() => {
    console.log({drawerRef});
  }, []);

  const openDrawer = component => {
    setActiveComponent(component); // Set the active component ('login' or 'createAccount')
    drawerRef.current?.snapToIndex(1); // Open drawer to Index 0
  };

  const {container, buttonContainer, textAlignment} = styles;

  const handleLogout = () => {
    // Perform logout logic here
    console.log('Logged out');
    setModalVisible(false); // Close modal after logging out
  };

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
    modalBackground,
    modalBox,
    modalButton,
    modalButtonText,
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
          <TouchableOpacity
            style={logoutContainer}
            onPress={() => setModalVisible(true)} // Show confirmation modal on press
          >
            <LogoutSvg />
            <Typography variant="caption" color="red">
              Logout
            </Typography>
          </TouchableOpacity>
        </View>

        {/* Bottom Drawer */}
        <BottomDrawer ref={drawerRef}>
          {activeComponent === 'contact us' && (
            <ContactUs
              onPress={() => drawerRef.current?.close()} // Close the drawer
            />
          )}
        </BottomDrawer>

        {/* Logout Confirmation Modal */}
        <Modal
          animationType="fade"
          // transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)} // Close modal when user presses back button
        >
          <View style={modalBackground}>
            <View style={modalBox}>
              <Typography
                variant="h3"
                fontWeight={600}
                style={{marginBottom: 16}}>
                Confirm Logout
              </Typography>
              <Typography
                variant="body2"
                color="gray"
                style={{marginBottom: 24}}>
                Are you sure you want to log out?
              </Typography>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Pressable
                  style={[modalButton, {backgroundColor: colors.red}]}
                  onPress={handleLogout}>
                  <Typography style={modalButtonText} color="white">
                    Logout
                  </Typography>
                </Pressable>
                <Pressable
                  style={[modalButton, {backgroundColor: colors.gray}]}
                  onPress={() => setModalVisible(false)}>
                  <Typography style={modalButtonText} color="white">
                    Cancel
                  </Typography>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    gap: 32,
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
    top: 8,
  },
  image: {
    width: 128,
    height: 128,
  },
  iconContainer: {
    position: 'absolute',
    bottom: -8,
    right: 108,
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
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 16,
    paddingVertical: 10,
    marginHorizontal: 48,
  },
  section: {
    alignItems: 'center',
    flex: 1,
  },
  divider: {
    height: '96%',
    width: 1,
    backgroundColor: colors.gray,
  },
  logoutContainer: {
    backgroundColor: '#FFAEAE55',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 16,
    borderColor: colors.red,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalBox: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  modalButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileScreen;

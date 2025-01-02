import React, { useEffect, useState } from 'react';
import { View, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Typography from '../../components/typography/Typography';
import ZoomableImage from './ZoomableImage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeleteSvgIcon from '../../assets/icons/DeleteSvgIcon';  // Import the delete icon
import PrintSvgIcon from '../../assets/icons/PrintSvgIcon';  // Import the print icon
import Layout from '../../components/layout/Layout';
import SecondAppBar from '../../components/layout/SecondAppBar';

const FileViewScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { file, index } = route.params; // Get the passed file and index
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    if (file) {
      if (file.type?.includes('image')) {
        setImageUri(file.uri); 
      } else {
        setImageUri(null);
      }
    } else {
      Alert.alert('Error', 'No file data found.');
    }
  }, [file]);

  const handleDelete = async () => {
    try {
      await AsyncStorage.removeItem('imageUri'); // Remove the image URI from AsyncStorage
      setImageUri(null); // Reset image URI in state
  
      // Send the message to MyFilesScreen and pass the file's index to remove it
      Alert.alert('Deleted', 'The image has been deleted.');
      navigation.navigate('MyFile', { deletedFileIndex: index }); // Pass the index to MyFilesScreen
    } catch (error) {
      console.error('Error deleting the image:', error);
      Alert.alert('Error', 'Failed to delete the image.');
    }
  };

  const handlePrint = () => {
    Alert.alert('Print', 'This feature is under construction.');
  };

  const handleBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <Layout style={{ flex: 1 }} backgroundColor="black">
      <SecondAppBar title={file?.name} />

    <View style={styles.container}>
      {imageUri ? (
        <ZoomableImage imageUri={imageUri} />
      ) : (
        <View style={styles.fileDetails}>
          <Typography>{file?.name}</Typography>
          <Typography>File type: {file?.type}</Typography>
        </View>
      )}

      {/* Delete and Print Buttons */}
      <View style={styles.iconContainer}>
        <TouchableOpacity  onPress={handleDelete}>
          <DeleteSvgIcon width={48} height={48} color="red" />
        </TouchableOpacity>

        <TouchableOpacity  onPress={handlePrint}>
          <PrintSvgIcon width={48} height={48} color="green" />
        </TouchableOpacity>
      </View>
    </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 0,
  },
  fileDetails: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 70,  
  },

});

export default FileViewScreen;

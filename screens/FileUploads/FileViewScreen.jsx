import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Alert } from 'react-native';  // No need to import Text
import Typography from '../../components/typography/Typography';  // Import Typography
import { useRoute } from '@react-navigation/native';
import PdfSvgIcon from '../../assets/icons/PdfSvgIcon';

const FileViewScreen = () => {
  const route = useRoute();
  const { file } = route.params; // Get the passed file data
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    if (file) {
      // Check if the file is an image, and set the URI
      if (file.type?.includes('image')) {
        setImageUri(file.uri); // Set URI if the file is an image
      } else {
        setImageUri(null); // Reset image URI if the file is not an image
      }
    } else {
      Alert.alert('Error', 'No file data found.');
    }
  }, [file]);

  return (
    <View style={styles.container}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : (
        <View style={styles.fileDetails}>
          <PdfSvgIcon width={48} height={48} />
          {/* <Typography>{file.name}</Typography> Use Typography here */}
          {/* <Typography>File type: {file.type}</Typography> Use Typography here */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain', // Ensures the image fits without distortion
  },
  fileDetails: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FileViewScreen;
import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, Linking } from 'react-native';
import { useRoute } from '@react-navigation/native'; // To get the file passed from navigation

const FileViewScreen = () => {
  const route = useRoute();
  const { file } = route.params; // Get the file data from params

  if (!file) {
    return (
      <View style={styles.container}>
        <Text>No file to view.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{file.name}</Text>
      {file.type?.includes('pdf') ? (
        <Text>PDF File (Implement PDF viewer if required)</Text>
      ) : file.type?.includes('image') ? (
        <Image source={{ uri: file.uri }} style={styles.image} />
      ) : (
        <Text>Unsupported file type</Text>
      )}
      <Text>Size: {file.size} bytes</Text>
      <Text>Date: {file.date}</Text>
      <TextInput
        editable={false}
        value={file.uri}
        style={styles.uriInput}
      />
      <Text onPress={() => Linking.openURL(file.uri)} style={styles.link}>
        Open File
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 16,
  },
  uriInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default FileViewScreen;

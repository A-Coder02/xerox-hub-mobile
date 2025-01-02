// screens/FileUploads/storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to get files from AsyncStorage
export const getFilesFromAsyncStorage = async () => {
  try {
    const files = await AsyncStorage.getItem('files');
    return files ? JSON.parse(files) : [];
  } catch (error) {
    console.error("Error getting files from AsyncStorage:", error);
    return [];
  }
};

// Function to save files to AsyncStorage
export const saveFilesToAsyncStorage = async (files) => {
  try {
    await AsyncStorage.setItem('files', JSON.stringify(files));
  } catch (error) {
    console.error("Error saving files to AsyncStorage:", error);
  }
};

// Function to delete a specific file from AsyncStorage
export const deleteFileFromAsyncStorage = async (fileId) => {
  try {
    const files = await getFilesFromAsyncStorage();
    const updatedFiles = files.filter(file => file.id !== fileId);
    await saveFilesToAsyncStorage(updatedFiles);
  } catch (error) {
    console.error("Error deleting file from AsyncStorage:", error);
  }
};

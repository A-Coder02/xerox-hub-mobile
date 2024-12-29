import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, FlatList, TextInput, ScrollView, Alert, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Typography from '../../components/typography/Typography';
import IconButton from '../../components/form/IconButton/IconButton';
import Layout from '../../components/layout/Layout';
import AppBar from '../../components/layout/AppBar';
import BottomDrawer from '../../components/layout/BottomDrawer';
import PlusIcon from '../../assets/icons/PlusIcon';
import UploadSvgIcon from '../../assets/icons/UploadSvgIcon.jsx';
import TextField from '../../components/form/TextField/index.jsx';
import DocumentPicker from 'react-native-document-picker';
import PdfSvgIcon from '../../assets/icons/PdfSvgIcon';
import ImageSvgicon from '../../assets/icons/ImageSvgicon';
import rightArrowSvgIcon from '../../assets/icons/rightArrowSvgIcon.jsx';
import { useNavigation } from '@react-navigation/native'; 
import colors from '../../utils/colors.js';

const MyFilesScreen = () => {
  const drawerRef = useRef();
  const [files, setFiles] = useState([]);
  const [fileName, setFileName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);  // Store the selected file temporarily
  const navigation = useNavigation(); 

  //Fetching Stored Files
  useEffect(() => {
    const fetchStoredFiles = async () => {
      try {
        const storedFiles = await AsyncStorage.getItem('fileUris');
        if (storedFiles) {
          setFiles(JSON.parse(storedFiles));
        }
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchStoredFiles();
  }, []);

  const handleFilePicker = async () => {
    if (!fileName.trim()) {
      Alert.alert('File name required', 'Please enter a file name before uploading.');
      return; 
    }

    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images, 'application/pdf'],
      });

      const isFileNameExists = files.some(file =>
        file.name.toLowerCase() === fileName.trim().toLowerCase() && file.type === res[0]?.type
      );

      if (isFileNameExists) {
        Alert.alert('Duplicate file', 'A file with this name and type already exists. Please choose a different name.');
        return;
      }

      if (files.length >= 3) {
        Alert.alert('File upload limit reached', 'You can only upload up to 3 files.');
        return;
      }

      if (res) {
        const fileData = {
          id: Date.now().toString(),
          name: fileName || res[0]?.name || 'Unnamed File',
          uri: res[0]?.uri,
          type: res[0]?.type,
          size: res[0]?.size,
          date: new Date().toISOString(),
        };

        // Store file in selectedFile state instead of directly saving to AsyncStorage
        setSelectedFile(fileData);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User canceled the picker');
      } else {
        console.error('Error picking file:', err);
        Alert.alert('Error', 'Failed to pick file.');
      }
    }
  };

const saveFile = async () => {
  if (selectedFile) {
    const updatedFiles = [...files, selectedFile];
    setFiles(updatedFiles);

    try {
      await AsyncStorage.setItem('fileUris', JSON.stringify(updatedFiles));
      Alert.alert('File saved successfully!');
      setSelectedFile(null); 
      setFileName(''); 

      drawerRef.current.close();
    } catch (error) {
      console.error('Error saving file to AsyncStorage:', error);
      Alert.alert('Error', 'Failed to save file.');
    }
  } else {
    Alert.alert('No file selected', 'Please select a file to save.');
  }
};


  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      Alert.alert('All data cleared successfully!');
      setFiles([]);
    } catch (error) {
      console.error('Error clearing AsyncStorage:', error);
      Alert.alert('Error', 'Failed to clear AsyncStorage.');
    }
  };

  const renderFileItem = ({ item }) => {
    const fileDate = new Date(item.date);
    if (isNaN(fileDate.getTime())) {
      console.error('Invalid date:', item.date);
      return null;
    }

    const formattedDate = fileDate.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }) + ' | ' + fileDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    return (
      <View style={styles.fileItem}>
        <View style={styles.fileIconContainer}>
          {item.type?.includes('pdf') ? (
            <PdfSvgIcon width={48} height={48} />
          ) : item.type?.includes('image') ? (
            <ImageSvgicon width={48} height={48} />
          ) : null}
        </View>
        <View style={styles.fileDetailsContainer}>
          <Typography variant="base" fontSize={16} fontWeight={500}>
            {item.name}
          </Typography>
          <Typography variant="caption" fontSize={14} fontWeight={500} color="gray">
            {formattedDate}
          </Typography>
        </View>
        <IconButton
          icon={rightArrowSvgIcon}
          size="medium"
          variant="text"
          onPress={() => navigation.navigate('FileViewScreen', { file: item })}
        />
      </View>
    );
  };

  return (
    <Layout style={{ flex: 1 }}>
      <AppBar title="My Files" />
      <FlatList
        data={files}
        keyExtractor={(item) => item.id}
        renderItem={renderFileItem}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Typography variant="caption" color="gray">
            No files available.
          </Typography>
        }
      />
      <View style={styles.floatingButtonContainer}>
        <IconButton
          icon={PlusIcon}
          variant="text"
          size="large"
          onPress={() => drawerRef.current?.snapToIndex(0)}
        />
      </View>
      <BottomDrawer ref={drawerRef}>
        <AppBar title="Add File" isBottomSheet onPress={() => drawerRef.current.close()} />
        <ScrollView style={styles.bottomSheetContent}>
          <TextField
            label="File name"
            value={fileName}
            onChange={setFileName}
            style={styles.textField}
          />
          <View style={styles.container}>
            <View style={styles.dashedFrame}>
              <TouchableOpacity onPress={handleFilePicker} style={styles.roundedRectangle}>
                <UploadSvgIcon size="small" color="#50C878" />
                <Typography color="white" fontSize={14} fontWeight={600}>
                  Choose File
                </Typography>
              </TouchableOpacity>
            </View>
          </View>
          {/* Save Button */}
        
            <TouchableOpacity 
              onPress={saveFile} 
              style={[styles.saveButton, !selectedFile && styles.disabledButton]} 
              disabled={!selectedFile} 
            >
              <Typography color="white" fontSize={16} fontWeight={600}>
                Save File
              </Typography>
      </TouchableOpacity>
        
        </ScrollView>
      </BottomDrawer>

      {/* Clear Files Button */}
      {/* <TouchableOpacity onPress={clearAsyncStorage} style={styles.clearButton}>
        <Typography color="white" fontSize={16} fontWeight={600}>
          Clear All Files
        </Typography>
      </TouchableOpacity> */}
    </Layout>
  );
};

const styles = StyleSheet.create({
  listContent: {
    paddingTop: 32,
    flexGrow: 1,
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 12,
    marginVertical: 16,
    backgroundColor: colors.whiteLight,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  fileIconContainer: {
    marginRight: 16,
  },
  fileDetailsContainer: {
    flex: 1,
  },
  floatingButtonContainer: {
    position: 'absolute',
    bottom: 50,
    right: 30,
  },
  bottomSheetContent: {
    padding: 16,
  },
  textField: {
    marginTop: 32,
    marginBottom: 16,
  },
  container: {
    marginTop: 24,
  },
  
dashedFrame: {
  height: 165,
  borderWidth: 3,  // Reduced thickness of the dashed line
  borderColor: colors.gray, // Set the stroke color to #6F6F6F
  borderStyle: 'dashed',
  borderRadius: 12, // Rounded corners
  padding: 20,
  alignItems: 'center', // Center the icon inside the frame
  justifyContent: 'center',
},
roundedRectangle: {
  width: '55%', // Takes full width of the dashed frame
  height: 50, // Height of the inner rounded rectangle
  backgroundColor: colors.primary, // White background for the inner rectangle
  borderRadius: 12, // Rounded corners for the inner rectangle
  flexDirection: 'row', // Align items horizontally
  alignItems: 'center', // Center vertically
  justifyContent: 'center', // Center horizontally
  paddingHorizontal: 15, // Padding inside the inner rectangle
},


  saveButton: {
    backgroundColor: '#50C878',
    marginTop: 16,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButton: {
    backgroundColor: '#FF4C4C',
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
  },
});

export default MyFilesScreen;
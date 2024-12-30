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
import RightArrowSvgIcon from '../../assets/icons/RightArrowSvgIcon.jsx';
import { useNavigation } from '@react-navigation/native'; 
import colors from '../../utils/colors.js';
import Button from '../../components/form/Button';

const MyFilesScreen = () => {
  const drawerRef = useRef();
  const [files, setFiles] = useState([]);
  const [fileName, setFileName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);  // Store the selected file temporarily
  const [tempFileName, setTempFileName] = useState('');  // Local variable to store selected file name
  const navigation = useNavigation(); 

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
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images, 'application/pdf'],
      });
  
      if (res) {
        const fileData = {
          id: Date.now().toString(),
          name: tempFileName || res[0]?.name || 'Unnamed File', // Use tempFileName or fallback to the file's original name
          uri: res[0]?.uri,
          type: res[0]?.type,
          size: res[0]?.size,
          date: new Date().toISOString(),
        };
  
        // Store file in selectedFile state instead of directly saving to AsyncStorage
        setSelectedFile(fileData);
        setTempFileName(fileData.name); // Store the file name temporarily
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
    console.log('Save button pressed'); // Add this line to debug
  
    // Validate if a file name is entered
    if (!fileName.trim() && !tempFileName.trim()) {
      Alert.alert('File name required', 'Please enter a file name before uploading.');
      return;  // Stop the function if no file name is provided
    }
  
    // Validate if file limit is reached (up to 3 files)
    if (files.length >= 3) {
      Alert.alert('File upload limit reached', 'You can only upload up to 3 files.');
      return;  // Stop the function if the limit is exceeded
    }
  
    // Check if the file name already exists
    const isFileNameExists = files.some(file =>
      (file.name.toLowerCase() === fileName.trim().toLowerCase() || file.name.toLowerCase() === tempFileName.trim().toLowerCase()) && file.type === selectedFile?.type
    );
  
    if (isFileNameExists) {
      Alert.alert('Duplicate file', 'A file with this name and type already exists. Please choose a different name.');
      return;
    }
  
    // Proceed with saving the file if validation is passed
    if (selectedFile) {
      const updatedFiles = [...files, selectedFile];
      setFiles(updatedFiles);
      try {
        await AsyncStorage.setItem('fileUris', JSON.stringify(updatedFiles));
        Alert.alert('File saved successfully!');
        setSelectedFile(null);
        setFileName('');
        setTempFileName('');
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

    const formattedDate =
      fileDate.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }) +
      ' | ' +
      fileDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });

    return (
      <TouchableOpacity
        style={styles.fileItem}
        onPress={() => navigation.navigate('FileViewScreen', { file: item })}
      >
        <View style={styles.fileIconContainer}>
          {item.type?.includes('pdf') ? (
            <PdfSvgIcon width={36} height={36} paddingLeft={0} paddingTop={0} color={colors.red} />
          ) : item.type?.includes('image') ? (
            <ImageSvgicon width={43} height={44} marginLeft={-2.5} marginTop={0}  color={colors.primary}/>
          ) : null}
        </View>
        <View style={styles.fileDetailsContainer}>
          <Typography variant="base" fontSize={16} fontWeight={500}>
            {item.name}
          </Typography>
          <Typography variant="caption" fontSize={14} fontWeight={500} color="grayDark">
            {formattedDate}
          </Typography>
        </View>
        <IconButton
          icon={(props) => (
            <RightArrowSvgIcon
              {...props}
              width={10} 
              height={17}
              color={colors.black} 
            />
          )}
          size="medium"
          variant="text"
          onPress={() => navigation.navigate('FileViewScreen', { file: item })}
        />
      </TouchableOpacity>
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
          <Typography variant="caption" fontWeight={500} color="darkGray" style={styles.noFiles}>
            No files available.
          </Typography>
        }
      />
      <View style={styles.floatingButtonContainer}>
        <View style={styles.plusButton}>
          <IconButton
            icon={() => (
              <PlusIcon width={19} height={19} color={colors.whiteLight} />
            )}
            onPress={() => drawerRef.current?.snapToIndex(0)}
          />
        </View>
      </View>

      <BottomDrawer ref={drawerRef}>
  <AppBar title="Add File" isBottomSheet onPress={() => drawerRef.current.close()} />
  <ScrollView style={styles.bottomSheetContent}>
    <TextField
      label="File name"
      value={fileName}  // This still holds the custom name input by the user
      onChange={setFileName}
      style={styles.textField}
    />
    <View style={styles.dashedFrame}>
      {selectedFile && (
        <Typography 
  variant="body" 
  fontSize={16} 
  fontWeight={600} 
  color={colors.whiteLight}
  numberOfLines={1} 
  ellipsizeMode="tail" 
  style={{ width: '100%', textOverflow: 'ellipsis' }}
>
  Selected file: { tempFileName || selectedFile?.name}  {/* Display the original file name picked */}
</Typography>

      )}

      <TouchableOpacity onPress={handleFilePicker} style={styles.roundedRectangle}>
        <UploadSvgIcon
          size="small"
          height={24}
          width={25}
          color={colors.whiteLight}
          strokeWidth={2}
          marginRight={2}
        />
        <Typography color="whiteLight" fontSize={14} fontWeight={600}>
          Choose File
        </Typography>
      </TouchableOpacity>
    </View>
    <TouchableOpacity 
      onPress={saveFile} 
      style={[styles.saveButton, !selectedFile && styles.disabledButton]} 
      disabled={!selectedFile}
    >
      <Button title='Save' fontWeight={600} color={colors.whiteLight} />
    </TouchableOpacity>
  </ScrollView>
</BottomDrawer>

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
    paddingLeft:15.5,
    paddingRight:20,
    paddingVertical: 12,
    marginBottom: 16,
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
  noFiles: {
    textAlign: 'center', 
    color: colors.grayDark, 
    fontSize: 18,  
    padding: 20, 
  },
  floatingButtonContainer: {
    position: 'absolute',
    bottom: 48,
    right: 16,
  },
  plusButton: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 200, 
    width: 64,  
    height: 64, 
  },

  textField: {
    marginTop: 32,
    marginBottom: 16,
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
  // marginBottom:70,
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

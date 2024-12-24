import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, FlatList, TextInput, ScrollView } from 'react-native';
import Typography from '../../components/typography/Typography';
import Button from '../../components/form/Button';
import IconButton from '../../components/form/IconButton/IconButton';
import Layout from '../../components/layout/Layout';
import AppBar from '../../components/layout/AppBar';
import PrintSvgIcon from '../../assets/icons/print.svg';
import DeleteSvgIcon from '../../assets/icons/DeleteSvgIcon';
import PdfSvgIcon from '../../assets/icons/PdfSvgIcon';
import WordSvgIcon from '../../assets/icons/WordSvgIcon';
import BottomDrawer from '../../components/layout/BottomDrawer'; // Import BottomDrawer
import PlusIcon from '../../assets/icons/PlusIcon';
import UploadSvgIcon from '../../assets/icons/UploadSvgIcon.jsx'; // Assuming you have this icon for the upward arrow

const MyFilesScreen = () => {
  const drawerRef = useRef();
  const [files, setFiles] = useState([
    { id: '1', name: 'Document1.pdf', size: '1.2 MB', type: 'pdf', date: '2024-12-23 10:30 AM' },
    { id: '2', name: 'Document2.docx', size: '2.4 MB', type: 'word', date: '2024-12-22 03:15 PM' },
    { id: '3', name: 'Document3.pdf', size: '900 KB', type: 'pdf', date: '2024-12-21 08:45 AM' },
  ]);
  const [fileName, setFileName] = useState('');

  useEffect(() => {
    // Placeholder for API integration
  }, []);

  const renderFileItem = ({ item }) => (
    <View style={styles.fileItem}>
      <View style={styles.fileIconContainer}>
        {item.type === 'pdf' ? (
          <PdfSvgIcon width={38} height={38} />
        ) : (
          <WordSvgIcon width={38} height={38} />
        )}
      </View>

      <View style={styles.fileDetailsContainer}>
        <Typography variant="base" fontWeight={600}>
          {item.name}
        </Typography>
        <Typography variant="caption" color="gray">
          {item.date}
        </Typography>
      </View>

      <View style={styles.actionIconsContainer}>
        <IconButton
          icon={DeleteSvgIcon}
          variant="text"
          size="large"
          onPress={() => handleDelete(item.id)}
          style={{ backgroundColor: 'transparent' }}
        />
        <IconButton icon={PrintSvgIcon} size="large" style={{ backgroundColor: 'transparent' }} />
      </View>
    </View>
  );

  const handleDelete = (id) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
  };

  const handleFileUpload = () => {
    // Add logic to handle file upload
    console.log('File Uploaded:', fileName);
    drawerRef.current?.close(); // Close drawer after uploading
  };

  return (
    <Layout style={styles.layout}>
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
        <IconButton icon={PlusIcon} size="large" onPress={() => { drawerRef.current?.snapToIndex(0); }} />
      </View>

      {/* Bottom Drawer */}
      <BottomDrawer ref={drawerRef}>
        <AppBar title="Add File" isBottomSheet onPress={() => drawerRef.current.close()} />
        <ScrollView style={styles.bottomSheetContent}>
          <Typography variant="caption">File Name</Typography>
          <TextInput
            style={styles.textField}
            placeholder="Enter file name"
            value={fileName}
            onChangeText={setFileName}
          />
          
          {/* Upload Icon and Text Section */}
          <View style={styles.printContainer}>
            <IconButton icon={UploadSvgIcon} size="large" style={styles.uploadIcon} />
            <Typography variant="body"  style={styles.printText}>
              Get Print
            </Typography>
          </View>

          <Button title="Save" onPress={handleFileUpload} />
        </ScrollView>
      </BottomDrawer>
    </Layout>
  );
};

const styles = StyleSheet.create({
  layout: {
    padding: 20,
    flex: 1,
  },
  listContent: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D1CFD7',
  },
  fileIconContainer: {
    marginRight: 10,
  },
  fileDetailsContainer: {
    flex: 1,
  },
  actionIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  floatingButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  bottomSheetContent: {
    padding: 20,
  },
  textField: {
    borderWidth: 1,
    borderColor: '#D1CFD7',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  printContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D1CFD7',
    padding: 12,
    marginBottom: 20,
    width: '100%', // Makes it take up 100% of its parent container's width
    height: 165,
    borderStyle: 'dashed',
  },
  uploadIcon: {
    marginRight: 10,
  },
  printText: {
    fontWeight: '600',
  },
});

export default MyFilesScreen;

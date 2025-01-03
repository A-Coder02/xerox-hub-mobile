import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, PanResponder, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); // Get screen width and height

const ZoomableImage = ({ imageUri }) => {
  const [zoom, setZoom] = useState(1); // Initialize zoom state
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 }); // Store image position
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 }); // Store image dimensions
  const [initialDistance, setInitialDistance] = useState(null); // Track initial pinch distance
  const [lastZoom, setLastZoom] = useState(1); // Track last zoom scale

  const maxZoom = 3; // Maximum zoom level
  const minZoom = 1; // Minimum zoom level

  const imageContainerHeight = height * 0.79; // Set container height to 79% of screen height
  const imageContainerWidth = width; // Full screen width for the container

  useEffect(() => {
    Image.getSize(imageUri, (width, height) => {
      setImageSize({ width, height }); // Set image size when the image loads
    });
  }, [imageUri]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true, // Allow touch events
    onMoveShouldSetPanResponder: () => true, // Allow touch move events
    onPanResponderMove: (evt, gestureState) => {
      // Update image position based on pan gestures
      const sensitivity = 5; // Adjust sensitivity of pan gestures
      setImagePosition(prevPosition => ({
        x: prevPosition.x + gestureState.dx / sensitivity,
        y: prevPosition.y + gestureState.dy / sensitivity,
      }));
    },
    onPanResponderRelease: () => {},
  });

  const handlePinchToZoom = (evt) => {
    if (evt.nativeEvent.touches.length === 2) {
      const [touch1, touch2] = evt.nativeEvent.touches;
      const distance = Math.sqrt(
        Math.pow(touch2.pageX - touch1.pageX, 2) +
        Math.pow(touch2.pageY - touch1.pageY, 2)
      );

      if (initialDistance === null) {
        setInitialDistance(distance); // Store the initial pinch distance
      } else {
        const scale = distance / initialDistance;
        const newZoom = Math.max(minZoom, Math.min(maxZoom, scale * lastZoom));
        setZoom(newZoom); // Update zoom scale
      }
    }
  };

  const handlePinchEnd = () => {
    setLastZoom(zoom); // Store the last zoom scale
    setInitialDistance(null); // Reset the initial pinch distance
  };

  return (
    <View
      style={[styles.imageContainer, { height: imageContainerHeight, width: imageContainerWidth }]} // Set fixed container size
      {...panResponder.panHandlers}
      onTouchMove={handlePinchToZoom} // Handle pinch gesture movement
      onTouchEnd={handlePinchEnd} // Handle pinch gesture end
    >
      <Image
        source={{ uri: imageUri }}
        style={[
          styles.image,
          {
            transform: [
              { scale: zoom }, // Apply zoom transformation
              { translateX: imagePosition.x }, // Apply horizontal movement
              { translateY: imagePosition.y }, // Apply vertical movement
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Prevent image overflow from the container
  },
  image: {
    width: '100%', // Make image fill container width
    height: '100%', // Make image fill container height
    resizeMode: 'contain', // Preserve aspect ratio of the image
  },
});

export default ZoomableImage;

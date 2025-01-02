// ZoomableImage.js
import React, { useState } from 'react';
import { View, Image, StyleSheet, PanResponder, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); // Get screen width and height

const ZoomableImage = ({ imageUri }) => {
  const [zoom, setZoom] = useState(1); // Initialize zoom
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 }); // Store image position
  const [initialDistance, setInitialDistance] = useState(null); // Track initial pinch distance
  const [lastZoom, setLastZoom] = useState(1); // Track the last zoom scale

  const maxZoom = 3; // Maximum zoom level
  const minZoom = 1; // Minimum zoom level

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      // Reduce the sensitivity of pan gestures
      const sensitivity = 5; // Lower this value to make it less responsive
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
        // Set initial pinch distance when the second finger touches
        setInitialDistance(distance);
      } else {
        // Calculate zoom level based on the change in pinch distance
        const scale = distance / initialDistance;
        const newZoom = Math.max(minZoom, Math.min(maxZoom, scale * lastZoom));
        setZoom(newZoom);
      }
    }
  };

  const handlePinchEnd = () => {
    // Update the last zoom level when pinch ends
    setLastZoom(zoom);
    setInitialDistance(null); // Reset initial distance
  };

  return (
    <View
      style={styles.imageContainer}
      {...panResponder.panHandlers}
      onTouchMove={handlePinchToZoom} // Handle pinch gesture
      onTouchEnd={handlePinchEnd} // Update zoom state when pinch ends
    >
      <Image
        source={{ uri: imageUri }}
        style={[
          styles.image,
          {
            transform: [
              { scale: zoom },
              { translateX: imagePosition.x },
              { translateY: imagePosition.y },
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: width, // Set image container to full screen width
    height: height, // Set image container to full screen height
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%', // Make image fill the container width
    height: '100%', // Make image fill the container height
    resizeMode: 'contain', // Ensures the image is not distorted
  },
});

export default ZoomableImage;

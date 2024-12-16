const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */

// Get the default configuration
const defaultConfig = getDefaultConfig(__dirname);

// Define your custom Metro configuration options
const customConfig = {
  // Add any custom configuration here
};

// Merge the default configuration with your custom configuration
const mergedConfig = mergeConfig(defaultConfig, customConfig);

// Wrap the merged configuration with Reanimated's Metro configuration
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);

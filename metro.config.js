const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const {
  wrapWithReanimatedMetroConfig,
} = require("react-native-reanimated/metro-config");

// Get the default configuration
const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

// Define your custom Metro configuration options
const customConfig = {
  transformer: {
    babelTransformerPath: require.resolve(
      "react-native-svg-transformer/react-native"
    ),
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...sourceExts, "svg"],
  },
};

// Merge the default configuration with your custom configuration
const mergedConfig = mergeConfig(defaultConfig, customConfig);

// Wrap the merged configuration with Reanimated's Metro configuration
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);

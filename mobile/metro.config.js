const { getDefaultConfig } = require('@expo/metro-config');
const { getSentryExpoConfig } = require('@sentry/react-native/metro');

// Get default metro config
const defaultConfig = getDefaultConfig(__dirname);

// Add 'cjs' to sourceExts
defaultConfig.resolver.sourceExts.push('cjs');

// Get Sentry Expo config
const sentryConfig = getSentryExpoConfig(__dirname);

// Merge configurations
const mergedConfig = {
  ...defaultConfig,
  resolver: {
    ...defaultConfig.resolver,
    ...sentryConfig.resolver, // Merge resolver configs from Sentry
  },
  transformer: {
    ...defaultConfig.transformer,
    ...sentryConfig.transformer, // Merge transformer configs from Sentry
  },
  // Add any other configurations you need to merge
};

module.exports = mergedConfig;

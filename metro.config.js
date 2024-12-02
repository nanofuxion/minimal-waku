const { getDefaultConfig } = require("expo/metro-config");

///
const webBlacklistedModules = [
  "@waku/core",
  "@waku/sdk",
];

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (platform === "web" && webBlacklistedModules.includes(moduleName)) {
    return {
      type: "empty",
    };
  }
  // Default behavior for other module resolutions
  return context.resolveRequest(context, moduleName, platform);
};
///

module.exports = config

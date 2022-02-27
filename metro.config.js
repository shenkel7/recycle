const { getDefaultConfig } = require('metro-config');
module.exports= (async () => {
    const defaultConfig = await getDefaultConfig();
    const { assetsExts } = defaultConfig.resolver;
    return {
        resolver : {
            assetExts: [...assetsExts, 'bin'],
        }
    };
})();
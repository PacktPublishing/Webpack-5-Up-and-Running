const WorkboxPlugin = require('workbox-webpack-plugin');
new WorkboxPlugin.GenerateSW({
 clientsClaim: true,
 skipWaiting: true,
 }),
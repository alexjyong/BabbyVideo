const path = require('path');

module.exports = {
  entry: './www/js/index.js', // Your main JavaScript file
  output: {
    filename: 'bundle.js', // Output bundle file
    path: path.resolve(__dirname, 'www/js/'), // Output folder
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'development' // Can be 'production' for production build
};

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    // ライブラリの設定
    library: {
      name: 'jsKit',
      type: 'umd',
    },
  },
};
const path = require('path');

module.exports = {
  entry: ['./src/utils/lc_list.js', './src/lc.js'],
  output: {
    filename: 'lc.cat.js',
    path: path.resolve(__dirname, 'src/cat'),
    library: 'lcsCountry',  // The global variable for the library
    libraryTarget: 'umd'
  },
  mode: 'production'
};

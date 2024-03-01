module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['./'],
      extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.svg'],
      alias: {
        '@components': './src/components',
        '@assets': './src/assets',
        '@screens': './src/screens',
        '@navigation': './src/navigation',
        '@services': './src/services',
        '@utils': './src/utils',
      },
    }],
    'react-native-svg',
  ],
};
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

export default {
  entry: 'lib/debounce-with-result.js',
  // sourceMap: true,
  plugins: [babel(babelrc())]
};

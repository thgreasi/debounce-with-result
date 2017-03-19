import config from './rollup.config';

config.format = 'umd';
config.dest = 'dist/debounce-with-result.js';
config.moduleName = 'debounceWithResult';

export default config;

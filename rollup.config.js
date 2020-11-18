const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve: resolve } = require('@rollup/plugin-node-resolve');
const { uglify } = require('rollup-plugin-uglify');

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'build/bundle.js',
    name: 'frontendAssignment',
    format: 'iife'
  },
	plugins: [resolve({ browser: true }), commonjs()]
};

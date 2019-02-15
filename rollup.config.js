import babel from 'rollup-plugin-babel';
import rebasePlugin from 'rollup-plugin-rebase';

module.exports = {
  input: ['src/client/index.js', 'src/server/index.js'],
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: true
  },
  //preserveModules: true,
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    rebasePlugin({
      keepName: true,
      assetFolder: 'assets'
    }),
  ],
  external: ['lodash']
}

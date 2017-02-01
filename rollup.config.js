import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'

let targets = [ { dest: 'dist/vue-material-svg-icons.js', format: 'umd' } ]

export default {
  targets: targets,
  entry: 'src/index.js',
  plugins: [vue(), buble(), nodeResolve(), commonjs()],
  moduleName: 'vue-material-svg-icons',
}

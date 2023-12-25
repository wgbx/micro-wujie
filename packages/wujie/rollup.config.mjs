import NodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import typescript from 'rollup-plugin-typescript2'

const name = 'wujie'

export default {
  input: './packages/index.ts',
  output: [
    {
      name,
      file: `dist/${name}.umd.min.js`,
      format: 'umd',
      // plugins: [terser()]
    },
    {
      name,
      file: `dist/${name}.es.min.js`,
      format: 'es',
      // plugins: [terser()]
    }
  ],
  plugins: [NodeResolve(), commonjs(), typescript()]
}

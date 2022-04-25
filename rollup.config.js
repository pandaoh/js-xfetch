/*
 * @Author: HxB
 * @Date: 2022-05-26 14:08:20
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-05-26 17:37:19
 * @Description: 新建文件
 * @FilePath: \js-xfetch\rollup.config.js
 */
import path from 'path';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const getPath = (_path) => path.resolve(__dirname, _path);

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

/** @type {import('rollup').RollupOptions} */
const options = {
  input: getPath('src/xfetch.ts'),
  output: [
    {
      file: getPath(pkg.main),
      format: 'cjs',
      exports: 'named',
      plugins: [terser()]
    },
    {
      file: getPath(pkg.module),
      format: 'es',
      exports: 'named',
      plugins: [terser()]
    },
    {
      file: getPath(pkg.unpkg),
      format: 'umd',
      name: 'xfetch',
      exports: 'named',
      plugins: [terser()]
    },
    {
      file: getPath(pkg['iife']),
      format: 'iife',
      name: 'xfetch',
      exports: 'named',
      plugins: [terser()]
    },
    {
      file: getPath(pkg['main-source']),
      format: 'cjs', // lib
      exports: 'named'
    },
    {
      file: getPath(pkg['module-source']),
      format: 'es', // es
      exports: 'named'
    },
    {
      file: getPath(pkg['unpkg-source']),
      format: 'umd', // dist
      exports: 'named',
      name: 'xfetch'
    },
    {
      file: getPath(pkg['iife-source']),
      format: 'iife',
      name: 'xfetch',
      exports: 'named'
    }
  ],
  plugins: [resolve(extensions), commonjs(), typescript({ tsconfig: getPath('tsconfig.json'), extensions })]
};
export default options;

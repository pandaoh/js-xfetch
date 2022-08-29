/*
 * @Author: HxB
 * @Date: 2022-05-26 14:08:20
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-29 10:16:12
 * @Description: 打包配置文件
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
  input: getPath('src/index.ts'),
  output: [
    {
      file: getPath(pkg.main),
      format: 'cjs',
      name: 'xfetch',
      exports: 'named',
      plugins: [terser()]
    },
    {
      file: getPath(pkg.module),
      format: 'es',
      name: 'xfetch',
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
      name: 'xfetch',
      exports: 'named'
    },
    {
      file: getPath(pkg['module-source']),
      format: 'es', // es
      name: 'xfetch',
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

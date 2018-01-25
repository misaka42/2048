/**
 * 2018/1/25
 *
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   乔杨 <peiqiao.ppq@alipay.com>
 */

'use strict'

// import resolve from 'rollup-plugin-node-resolve'
// import commonjs from 'rollup-plugin-commonjs'
// import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
// const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'umd', // immediately-invoked function expression — suitable for <script> tags
    sourcemap: true,
    name: 'Game'
  },
  plugins: [
    // resolve(), // tells Rollup how to find date-fns in node_modules
    // commonjs(), // converts date-fns to ES modules
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    }),
    // production && uglify() // minify, but only in production
  ]
}

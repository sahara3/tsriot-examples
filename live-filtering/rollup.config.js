import multientry from 'rollup-plugin-multi-entry';
import commonjs from 'rollup-plugin-commonjs';
import noderesolve from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';

export default {
    input: ['build/app-tag.js', 'build/currency-tag.js'],
    external: ['riot'],
    globals: {'riot': 'riot'},
    output: {file: 'app.js', format: 'iife'},
    plugins: [
        multientry({exports: false}),
        noderesolve({jsnext: true, main: true, browser: true}),
        commonjs(),
        buble()
    ]
};
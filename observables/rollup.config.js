import multientry from 'rollup-plugin-multi-entry';
import commonjs from 'rollup-plugin-commonjs';
import noderesolve from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';

export default {
    input: ['build/main.js', 'build/car-headlights-tag.js', 'build/car-key-tag.js'],
    external: ['riot'],
    globals: {'riot': 'riot'},
    output: {file: 'app.js', format: 'iife', name: 'app'},
    plugins: [
        multientry({exports: true}),
        noderesolve({jsnext: true, main: true, browser: true}),
        commonjs(),
        buble()
    ]
};

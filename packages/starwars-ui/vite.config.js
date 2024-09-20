import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import analyze from 'rollup-plugin-analyzer';
import p from './package.json';
import { externals } from 'shared-base';

const ANALYZE_BUNDLE = true;

const cwd = path.resolve(process.cwd(), '../');

export default defineConfig({
  plugins: [dts({}), react()],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'StarwarsUi',
      formats: ['es', 'umd'],
      fileName: (format) => `starwars-ui.${format}.js`,
    },
    rollupOptions: {
      plugins: [ANALYZE_BUNDLE ? analyze() : null],
      ...externals({
        react: '',
        'react/jsx-runtime': '',
        'react/jsx-dev-runtime': '',
        'react-dom': '',
        'react-select/creatable': '',
        'react-toastify': '',
        ...p.dependencies,
      }),
    },
  },
  resolve: {
    alias: {},
  },
});

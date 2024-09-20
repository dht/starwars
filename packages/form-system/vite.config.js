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
      name: 'FormSystem',
      formats: ['es', 'umd'],
      fileName: (format) => `form-system.${format}.js`,
    },
    rollupOptions: {
      plugins: [ANALYZE_BUNDLE ? analyze() : null],
      ...externals({
        react: '',
        'react-dom': '',
        'react/jsx-runtime': '',
        'react/jsx-dev-runtime': '',
        ...p.dependencies,
      }),
    },
  },
  resolve: {
    alias: {
      'starwars-ui': `${cwd}/starwars-ui/src`,
    },
  },
});

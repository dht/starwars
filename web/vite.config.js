import react from '@vitejs/plugin-react';
import path from 'path';
import analyze from 'rollup-plugin-analyzer';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const ANALYZE_BUNDLE = true;

const root = path.resolve(process.cwd(), '.');
const cwd = path.resolve(process.cwd(), '../');

const chunks = splitVendorChunkPlugin({
  strategy: 'default',
  customSplitting: {
    'react-vendor': ['react', 'react-dom'],
  },
});

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    build: {
      sourcemap: false,
      rollupOptions: {
        output: {},
      },
    },
    plugins: [
      tsconfigPaths({
        loose: true,
        root: `${root}/dev`,
      }),
      react(),
      visualizer(),
    ],
    rollupOptions: {
      plugins: [ANALYZE_BUNDLE ? analyze() : null],
    },
    resolve: {
      alias: {
        'starwars-store': `${cwd}/packages/starwars-store/src`,
        'starwars-api': `${cwd}/packages/starwars-api/src`,
        'starwars-ui': `${cwd}/packages/starwars-ui/src`,
        'table-system': `${cwd}/packages/table-system/src`,
        'form-system': `${cwd}/packages/form-system/src`,
        'prompt-system': `${cwd}/packages/prompt-system/src`,
      },
    },
    define: {},
    server: {
      host: true,
      port: 3000,
      hmr: {
        overlay: false,
      },
    },
  };
});

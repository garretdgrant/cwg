import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import {viteStaticCopy} from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [react(), tsconfigPaths(), viteStaticCopy({
    targets: [{
      src: '_redirects',
      dest: '.'
    }]
  })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
  
});

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/app.jsx',
      ssr: 'resources/js/ssr.jsx',
      refresh: true,
    }),
    react(),
  ],
  test: {
    include: ['tests/UnitJs/**/*.test.jsx', 'tests/UnitJs/**/*.test.js'],
    globals: true,
    environment: 'jsdom',
  },
  setupFiles: ['./vitest-setup.js'],

  compilerOptions: {
    types: ['vitest/globals', '@testing-library/jest-dom'],
  },
  include: ['./vitest-setup.js'],
});

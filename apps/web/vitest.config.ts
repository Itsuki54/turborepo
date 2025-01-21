import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

// biome-ignore lint/style/noDefaultExport: <explanation>
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'happy-dom',
    include: [
      'src/**/*.spec.tsx',
      'src/**/*.spec.ts',
      'src/**/*.test.tsx',
      'src/**/*.test.ts',
    ],
    coverage: {
      reporter: ['html'],
      reportsDirectory: './coverage',
    },
  },
});

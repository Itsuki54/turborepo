import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

// biome-ignore lint/style/noDefaultExport: <explanation>
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    include: [
      'src/**/*.spec.tsx',
      'src/**/*.spec.ts',
      'src/**/*.test.tsx',
      'src/**/*.test.ts',
    ],
    coverage: {
      provider: 'v8',
      reporter: ['html'],
      reportsDirectory: './coverage',
    },
  },
});

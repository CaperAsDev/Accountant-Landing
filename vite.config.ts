import { defineConfig } from 'vite';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(({
  command,
}) => {
  if (command === 'serve') {
    return {
      plugins: [
        react(),
        TanStackRouterVite(),
      ],
      // dev specific config
    };
  }
  // command === 'build'
  return {
    plugins: [
      react(),
      TanStackRouterVite(),
    ],
    base: '/Accountant-Landing/',
    publicDir: '/Accountant-Landing/public',
  };
});

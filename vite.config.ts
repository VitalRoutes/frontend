import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'Vital Routes',
        short_name: 'Vital Routes',
        description: 'Vital Routes',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/vite.svg',
            type: 'image/svg+xml',
            sizes: '192x192',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});

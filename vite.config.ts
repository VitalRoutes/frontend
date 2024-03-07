import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
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

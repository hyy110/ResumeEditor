import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import { join } from 'path';

const Plugins = [UnoCSS(), react()];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: Plugins,
  resolve: {
    alias: {
      '@': join(__dirname, 'src/')
    }
  }
});

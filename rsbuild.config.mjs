import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import {pluginModuleFederation} from '@module-federation/rsbuild-plugin'

export default defineConfig({
  plugins: [
    pluginReact(),
  
    pluginModuleFederation({
      name: 'producer1',
      exposes: {
        './Documentation': './src/Documentation.jsx'
      },
      shared: ['react', 'react-dom'],
    }),
  
  ],

  server: {
    port: 3005
  }
});

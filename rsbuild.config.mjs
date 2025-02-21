import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import {pluginModuleFederation} from '@module-federation/rsbuild-plugin'

export default defineConfig({

  mode: 'production',

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

  output: {
    assetPrefix: process.env.ASSET_PREFIX || '/',
    filenameHash: true,
  },

  server: {
    port: 3005,
  }
});

import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // no service worker
      serviceWorker: null,
      baseUrl: 'https://myapp.local/',
      copy: [
        { src: '../manifest.toml', dest: 'manifest.toml' },
        // { src: '../icon.png', dest: 'icon.png' },
        { src: '../webxdc.js', dest: 'webxdc.js' }
      ],
      empty: true
    },
  ],
};

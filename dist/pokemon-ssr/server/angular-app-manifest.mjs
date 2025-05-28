
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/about/about-page.component.ts": [
    {
      "path": "chunk-TT3ASF3R.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/pricing/pricing-page.component.ts": [
    {
      "path": "chunk-IDGOY3KF.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/contact/contact-page.component.ts": [
    {
      "path": "chunk-OCOLQXQY.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/pokemons/pokemons-page.component.ts": [
    {
      "path": "chunk-YSKA2AXN.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-2M43QZHH.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/pokemon/pokemon-page.component.ts": [
    {
      "path": "chunk-4AVRKPPP.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-2M43QZHH.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 2452, hash: '01ab8b76c72255054ba508b1e90bec9355c266f3e6ee25439734f0a838745fa5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1109, hash: '03d756145212f0db9183c61ef07bd387673a942a607e06a8ca05355afd6d9629', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DNWQ5SPG.css': {size: 8103, hash: '/UoEeKVvHJI', text: () => import('./assets-chunks/styles-DNWQ5SPG_css.mjs').then(m => m.default)}
  },
};

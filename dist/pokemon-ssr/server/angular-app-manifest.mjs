
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/about/about-page.component.ts": [
    {
      "path": "chunk-4KQD65QL.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/pricing/pricing-page.component.ts": [
    {
      "path": "chunk-YQSVEVDT.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/contact/contact-page.component.ts": [
    {
      "path": "chunk-ZTWGLIYS.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 2245, hash: 'edfa845c18068a91265cb5c98994bfe692ffe624857a1a727723877db770f232', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1058, hash: '7b21973a0da6441b4c7615981b9bfe515b53971e6466acc063f5be43141f9adf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-N7WUSJE2.css': {size: 5690, hash: 'BqeO7gP5xbU', text: () => import('./assets-chunks/styles-N7WUSJE2_css.mjs').then(m => m.default)}
  },
};

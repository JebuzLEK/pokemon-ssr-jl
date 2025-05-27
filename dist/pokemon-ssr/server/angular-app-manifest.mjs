
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/about/about-page.component.ts": [
    {
      "path": "chunk-WW66ZJMY.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/pricing/pricing-page.component.ts": [
    {
      "path": "chunk-2CK474E3.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/contact/contact-page.component.ts": [
    {
      "path": "chunk-V5BSQ2P2.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/pokemons/pokemons-page.component.ts": [
    {
      "path": "chunk-FMEZGBMN.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-TGVJXGTO.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/pokemon/pokemon-page.component.ts": [
    {
      "path": "chunk-ALKDNDOO.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-TGVJXGTO.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 2452, hash: 'a78f0cccfd580fddf07403dc5927485b98fe010a03f293d57dc9fdd120f7b7b8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1109, hash: 'eafafdd001be5963e7fca10ca25e8ec13d63845b32ed66b4eaeda4b951575769', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DNWQ5SPG.css': {size: 8103, hash: '/UoEeKVvHJI', text: () => import('./assets-chunks/styles-DNWQ5SPG_css.mjs').then(m => m.default)}
  },
};

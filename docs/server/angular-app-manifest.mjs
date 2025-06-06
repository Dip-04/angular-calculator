
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-calculator/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-calculator"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 458, hash: '710d04b8853c022abefb4ec71eaa0b08d22b3d7fcc6530fb3986a252fd73fc53', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 971, hash: '05e1e3fe58058f798cdb63dfa3239aaabf4c6e97a361dc2af38f9b036e29c721', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3009, hash: '539e3ebc0b1ba0fdc7a8fa93dc6a2f5b0ed8fd98125a5b257f061722798bbd67', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

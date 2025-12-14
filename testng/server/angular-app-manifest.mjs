
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/demo-fullstack',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/demo-fullstack/login",
    "route": "/demo-fullstack"
  },
  {
    "renderMode": 2,
    "route": "/demo-fullstack/login"
  },
  {
    "renderMode": 2,
    "route": "/demo-fullstack/signup"
  },
  {
    "renderMode": 2,
    "route": "/demo-fullstack/dashboard"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 445, hash: 'cfdd7a0939caae85e5b2ba01b6e9bc708035b622b0db477ecdef24946293283f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 958, hash: 'a02bf55155c2c22679442295d117a62f32f5d98235be340a4647c0b1c1f8dbb0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 3014, hash: 'b3249090c017da35269a689fb80c53f03eed8d704ac2068045b756421accf383', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 5247, hash: 'ff1aba719f0d054bba0819aa91c484bdd237016c60a8c4c083a00f784cb25244', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 6241, hash: 'f1e9f0b6bea70b4bb7e92cc03ef9bef93691aad2e97cc42e6fd2a9685ffea6b7', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

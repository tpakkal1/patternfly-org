// This module is shared between NodeJS and babelled ES5
const isClient = Boolean(process.env.NODE_ENV);

module.exports = {
  '/': {
    SyncComponent: isClient && require('./pages/home').default
  },
  '/community': {
    Component: () => import(/* webpackChunkName: "community/index" */ './pages/community'),
    title: 'Community'
  },
  '/404': {
    SyncComponent: isClient && require('@patternfly/documentation-framework/pages/404/index').default,
    title: '404 Error'
  }
};

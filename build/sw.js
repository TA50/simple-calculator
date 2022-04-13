/* eslint-disable no-restricted-globals */
self.addEventListener('install', () => {
  console.log('SW has been installed');
});
self.addEventListener('activate', () => {
  console.log('SW has been activated');
});
self.addEventListener('fetch', () => {
  console.log('SW Fetch is registered');
});

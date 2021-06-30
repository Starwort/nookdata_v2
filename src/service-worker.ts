/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import {clientsClaim} from 'workbox-core';
import {ExpirationPlugin} from 'workbox-expiration';
import {createHandlerBoundToURL, precacheAndRoute} from 'workbox-precaching';
import {registerRoute} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope;

clientsClaim();

// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
// This variable must be present somewhere in your service worker file,
// even if you decide not to use precaching. See https://cra.link/PWA
precacheAndRoute(self.__WB_MANIFEST);

precacheAndRoute([
    /// --- STATIC ASSET CACHING ---
    {url: 'assets/bug/00.png', revision: '1ca24a'},
    {url: 'assets/bug/01.png', revision: '908b7c'},
    {url: 'assets/bug/02.png', revision: 'ef0ee3'},
    {url: 'assets/bug/03.png', revision: '239fdd'},
    {url: 'assets/bug/04.png', revision: '0e1370'},
    {url: 'assets/bug/05.png', revision: '234ca4'},
    {url: 'assets/bug/06.png', revision: '136c47'},
    {url: 'assets/bug/07.png', revision: '6f667a'},
    {url: 'assets/bug/08.png', revision: '53067d'},
    {url: 'assets/bug/09.png', revision: 'e45a37'},
    {url: 'assets/bug/10.png', revision: 'aaa07d'},
    {url: 'assets/bug/11.png', revision: '05a45d'},
    {url: 'assets/bug/12.png', revision: '3c8dd8'},
    {url: 'assets/bug/13.png', revision: 'ede301'},
    {url: 'assets/bug/14.png', revision: '250d3a'},
    {url: 'assets/bug/15.png', revision: '65f67c'},
    {url: 'assets/bug/16.png', revision: '7b8cc5'},
    {url: 'assets/bug/17.png', revision: '036e39'},
    {url: 'assets/bug/18.png', revision: '576a0d'},
    {url: 'assets/bug/19.png', revision: '3e05de'},
    {url: 'assets/bug/20.png', revision: '178f94'},
    {url: 'assets/bug/21.png', revision: 'a14170'},
    {url: 'assets/bug/22.png', revision: '66b638'},
    {url: 'assets/bug/23.png', revision: '0d64c6'},
    {url: 'assets/bug/24.png', revision: '5620db'},
    {url: 'assets/bug/25.png', revision: '693134'},
    {url: 'assets/bug/26.png', revision: '9335ad'},
    {url: 'assets/bug/27.png', revision: '7bb8ee'},
    {url: 'assets/bug/28.png', revision: '1ef70a'},
    {url: 'assets/bug/29.png', revision: '5d40ac'},
    {url: 'assets/bug/30.png', revision: '2248d9'},
    {url: 'assets/bug/31.png', revision: '6d711a'},
    {url: 'assets/bug/32.png', revision: 'bf5a85'},
    {url: 'assets/bug/33.png', revision: '7a694b'},
    {url: 'assets/bug/34.png', revision: '38d242'},
    {url: 'assets/bug/35.png', revision: '05a325'},
    {url: 'assets/bug/36.png', revision: 'd4ed18'},
    {url: 'assets/bug/37.png', revision: '0542a4'},
    {url: 'assets/bug/38.png', revision: '83af0c'},
    {url: 'assets/bug/39.png', revision: 'ffebf6'},
    {url: 'assets/bug/40.png', revision: 'f71eed'},
    {url: 'assets/bug/41.png', revision: '482258'},
    {url: 'assets/bug/42.png', revision: '450d21'},
    {url: 'assets/bug/43.png', revision: 'b6f55f'},
    {url: 'assets/bug/44.png', revision: '13f952'},
    {url: 'assets/bug/45.png', revision: '2ddb80'},
    {url: 'assets/bug/46.png', revision: 'c0f549'},
    {url: 'assets/bug/47.png', revision: '750f11'},
    {url: 'assets/bug/48.png', revision: 'ffa690'},
    {url: 'assets/bug/49.png', revision: '0878dd'},
    {url: 'assets/bug/50.png', revision: '51a54e'},
    {url: 'assets/bug/51.png', revision: '968cc6'},
    {url: 'assets/bug/52.png', revision: 'f6ca5d'},
    {url: 'assets/bug/53.png', revision: '82f6e1'},
    {url: 'assets/bug/54.png', revision: '0995f9'},
    {url: 'assets/bug/55.png', revision: '549716'},
    {url: 'assets/bug/56.png', revision: '046fda'},
    {url: 'assets/bug/57.png', revision: 'cdc0aa'},
    {url: 'assets/bug/58.png', revision: 'f5053f'},
    {url: 'assets/bug/59.png', revision: 'f752a4'},
    {url: 'assets/bug/60.png', revision: '2c8549'},
    {url: 'assets/bug/61.png', revision: 'a30eb4'},
    {url: 'assets/bug/62.png', revision: 'f1b521'},
    {url: 'assets/bug/63.png', revision: '0c9caf'},
    {url: 'assets/bug/64.png', revision: 'fc11c5'},
    {url: 'assets/bug/65.png', revision: 'b7575d'},
    {url: 'assets/bug/66.png', revision: '5a86e6'},
    {url: 'assets/bug/67.png', revision: '3b960e'},
    {url: 'assets/bug/68.png', revision: 'b73406'},
    {url: 'assets/bug/69.png', revision: 'dc5168'},
    {url: 'assets/bug/70.png', revision: 'd5ad13'},
    {url: 'assets/bug/71.png', revision: '9eba25'},
    {url: 'assets/bug/72.png', revision: '2641b3'},
    {url: 'assets/bug/73.png', revision: 'f087b4'},
    {url: 'assets/bug/74.png', revision: 'e3d419'},
    {url: 'assets/bug/75.png', revision: '1d7fb1'},
    {url: 'assets/bug/76.png', revision: '268501'},
    {url: 'assets/bug/77.png', revision: '4fe49c'},
    {url: 'assets/bug/78.png', revision: 'd19719'},
    {url: 'assets/bug/79.png', revision: '0a07a0'},
    {url: 'assets/fish/00.png', revision: '42040f'},
    {url: 'assets/fish/01.png', revision: '02201e'},
    {url: 'assets/fish/02.png', revision: '60cdc2'},
    {url: 'assets/fish/03.png', revision: '2ddf7f'},
    {url: 'assets/fish/04.png', revision: '2f7376'},
    {url: 'assets/fish/05.png', revision: 'adba33'},
    {url: 'assets/fish/06.png', revision: '284c66'},
    {url: 'assets/fish/07.png', revision: '4625d2'},
    {url: 'assets/fish/08.png', revision: '05b30b'},
    {url: 'assets/fish/09.png', revision: '6cc6b0'},
    {url: 'assets/fish/10.png', revision: 'c1da42'},
    {url: 'assets/fish/11.png', revision: '303445'},
    {url: 'assets/fish/12.png', revision: 'd2681c'},
    {url: 'assets/fish/13.png', revision: '41d99b'},
    {url: 'assets/fish/14.png', revision: '547087'},
    {url: 'assets/fish/15.png', revision: '2c7fed'},
    {url: 'assets/fish/16.png', revision: '44886a'},
    {url: 'assets/fish/17.png', revision: 'b37bb4'},
    {url: 'assets/fish/18.png', revision: 'eafc6c'},
    {url: 'assets/fish/19.png', revision: '0b7b04'},
    {url: 'assets/fish/20.png', revision: '7ae2ce'},
    {url: 'assets/fish/21.png', revision: 'da6bef'},
    {url: 'assets/fish/22.png', revision: '0ec3e9'},
    {url: 'assets/fish/23.png', revision: '98ce6d'},
    {url: 'assets/fish/24.png', revision: '5642c2'},
    {url: 'assets/fish/25.png', revision: '2bd3f9'},
    {url: 'assets/fish/26.png', revision: 'd7acaa'},
    {url: 'assets/fish/27.png', revision: '6cc671'},
    {url: 'assets/fish/28.png', revision: 'fa3627'},
    {url: 'assets/fish/29.png', revision: 'ade963'},
    {url: 'assets/fish/30.png', revision: 'd480f6'},
    {url: 'assets/fish/31.png', revision: 'a21739'},
    {url: 'assets/fish/32.png', revision: '6c34d5'},
    {url: 'assets/fish/33.png', revision: '5641f3'},
    {url: 'assets/fish/34.png', revision: '590450'},
    {url: 'assets/fish/35.png', revision: '3958f8'},
    {url: 'assets/fish/36.png', revision: '4101db'},
    {url: 'assets/fish/37.png', revision: '5d2f10'},
    {url: 'assets/fish/38.png', revision: '7e261f'},
    {url: 'assets/fish/39.png', revision: '74cd0b'},
    {url: 'assets/fish/40.png', revision: '118db9'},
    {url: 'assets/fish/41.png', revision: 'a9b0ee'},
    {url: 'assets/fish/42.png', revision: 'ee4fab'},
    {url: 'assets/fish/43.png', revision: '4adba2'},
    {url: 'assets/fish/44.png', revision: '0e5ee5'},
    {url: 'assets/fish/45.png', revision: '5c271d'},
    {url: 'assets/fish/46.png', revision: '13b35e'},
    {url: 'assets/fish/47.png', revision: '196c5c'},
    {url: 'assets/fish/48.png', revision: '3937d8'},
    {url: 'assets/fish/49.png', revision: 'b5674c'},
    {url: 'assets/fish/50.png', revision: '1df324'},
    {url: 'assets/fish/51.png', revision: '233e2d'},
    {url: 'assets/fish/52.png', revision: '22bc80'},
    {url: 'assets/fish/53.png', revision: 'ef2405'},
    {url: 'assets/fish/54.png', revision: '77a787'},
    {url: 'assets/fish/55.png', revision: 'a5c0be'},
    {url: 'assets/fish/56.png', revision: '06639d'},
    {url: 'assets/fish/57.png', revision: 'd3868b'},
    {url: 'assets/fish/58.png', revision: '2f7776'},
    {url: 'assets/fish/59.png', revision: 'a9369e'},
    {url: 'assets/fish/60.png', revision: 'd7fdd7'},
    {url: 'assets/fish/61.png', revision: 'cba36a'},
    {url: 'assets/fish/62.png', revision: '409cb5'},
    {url: 'assets/fish/63.png', revision: 'a38fb7'},
    {url: 'assets/fish/64.png', revision: '4ea91e'},
    {url: 'assets/fish/65.png', revision: 'c0292c'},
    {url: 'assets/fish/66.png', revision: 'c806c9'},
    {url: 'assets/fish/67.png', revision: '3891c5'},
    {url: 'assets/fish/68.png', revision: '1d561d'},
    {url: 'assets/fish/69.png', revision: '5c4145'},
    {url: 'assets/fish/70.png', revision: '460a06'},
    {url: 'assets/fish/71.png', revision: '5ee9e1'},
    {url: 'assets/fish/72.png', revision: 'e06db5'},
    {url: 'assets/fish/73.png', revision: '131908'},
    {url: 'assets/fish/74.png', revision: '3a8004'},
    {url: 'assets/fish/75.png', revision: '4435c5'},
    {url: 'assets/fish/76.png', revision: 'dca75b'},
    {url: 'assets/fish/77.png', revision: '7e2dfe'},
    {url: 'assets/fish/78.png', revision: 'e1d1bd'},
    {url: 'assets/fish/79.png', revision: '9a314f'},
    {url: 'assets/fonts/humming-cjk.woff', revision: '5c5c78'},
    {url: 'assets/fonts/humming-cjk.woff2', revision: '629f4f'},
    {url: 'assets/fonts/humming-cyrillic.woff', revision: 'f12f8f'},
    {url: 'assets/fonts/humming-cyrillic.woff2', revision: '0a0d0a'},
    {url: 'assets/fonts/humming-greek.woff', revision: 'b8df76'},
    {url: 'assets/fonts/humming-greek.woff2', revision: 'd02564'},
    {url: 'assets/fonts/humming-latin.woff', revision: 'df0842'},
    {url: 'assets/fonts/humming-latin.woff2', revision: '2cff00'},
    {url: 'assets/fonts/humming-misc.woff', revision: '6224e4'},
    {url: 'assets/fonts/humming-misc.woff2', revision: '1c5488'},
    {url: 'assets/fonts/humming.ttf', revision: '59d14e'},
    {url: 'assets/fonts/humming.txt', revision: 'cba843'},
    {url: 'assets/i18n/en/core.json', revision: '2e2011'},
    {url: 'assets/i18n/en/critterpedia.json', revision: 'b71e62'},
    {url: 'assets/i18n/en/service.json', revision: '2f0f55'},
    {url: 'assets/i18n/en/turnips.json', revision: 'e8caf9'},
    {url: 'assets/i18n/fr/core.json', revision: '926e7e'},
    {url: 'assets/i18n/fr/critterpedia.json', revision: 'ad61de'},
    {url: 'assets/i18n/fr/service.json', revision: '6433f4'},
    {url: 'assets/i18n/fr/turnips.json', revision: '22993e'},
    {url: 'assets/i18n/ja/core.json', revision: '7e644c'},
    {url: 'assets/i18n/ja/critterpedia.json', revision: 'bf03e4'},
    {url: 'assets/i18n/ja/service.json', revision: '2f0f55'},
    {url: 'assets/i18n/ja/turnips.json', revision: 'e8caf9'},
    {url: 'assets/shared/loading.gif', revision: 'f86d62'},
    {url: 'assets/shared/loading.gif.mp4', revision: 'c6fb34'},
    {url: 'assets/shared/loading.gif.webm', revision: '5154e6'},
    {url: 'assets/shared/nookdata-logo.png', revision: '094852'},
    {url: 'assets/shared/nookdata-text.png', revision: '75bf4d'},
    /// --- END STATIC ASSET CACHING ---
]);

// Set up App Shell-style routing, so that all navigation requests
// are fulfilled with your index.html shell. Learn more at
// https://developers.google.com/web/fundamentals/architecture/app-shell
const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
    // Return false to exempt requests from being fulfilled by index.html.
    ({request, url}: {request: Request; url: URL;}) => {
        // If this isn't a navigation, skip.
        if (request.mode !== 'navigate') {
            return false;
        }

        // If this is a URL that starts with /_, skip.
        if (url.pathname.startsWith('/_')) {
            return false;
        }

        // If this looks like a URL for a resource, because it contains
        // a file extension, skip.
        if (url.pathname.match(fileExtensionRegexp)) {
            return false;
        }

        // Return true to signal that we want to use the handler.
        return true;
    },
    createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

// An example runtime caching route for requests that aren't handled by the
// precache, in this case same-origin .png requests like those from in public/
registerRoute(
    // Add in any other file extensions or routing criteria as needed.
    ({url}) => url.origin === self.location.origin && url.pathname.endsWith('.png'),
    // Customize this strategy as needed, e.g., by changing to CacheFirst.
    new StaleWhileRevalidate({
        cacheName: 'images',
        plugins: [
            // Ensure that once this runtime cache reaches a maximum size the
            // least-recently used images are removed.
            new ExpirationPlugin({maxEntries: 50}),
        ],
    })
);

// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// Any other custom service worker logic can go here.
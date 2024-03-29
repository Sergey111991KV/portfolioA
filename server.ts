import 'zone.js/node';

import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const domino = require('domino');
const fs = require('fs');
const path = require('path');

// Use the browser index.html as template for the mock window
const template = fs
  .readFileSync(path.join(join(process.cwd(), 'dist/portfolioAngular/browser'), 'index.html'))
  .toString();

// Shim for the global window and document objects.
const window = domino.createWindow(template);
global['window'] = window;
global['self'] = window
global['document'] = window.document;

global['navigator'] = window.navigator;

// @ts-ignore
global['requestAnimationFrame'] = function(callback, element) {
  let lastTime = 0;
  const currTime = new Date().getTime();
  const timeToCall = Math.max(0, 16 - (currTime - lastTime));
  const id = setTimeout(function() { callback(currTime + timeToCall); },
    timeToCall);
  lastTime = currTime + timeToCall;
  return id;
};

global['cancelAnimationFrame'] = function(id) {
  clearTimeout(id);
};

global['getComputedStyle'] = window.getComputedStyle;

// Ignite UI browser objects abstractions

(global as any).Event = window.Event;
(global as any).KeyboardEvent = window.KeyboardEvent;
(global as any).MouseEvent = window.MouseEvent;
(global as any).FocusEvent = window.FocusEvent;
(global as any).PointerEvent = window.PointerEvent;
(global as any).HTMLElement = window.HTMLElement;
(global as any).HTMLElement.prototype.getBoundingClientRect = () => {
  return {
    left: '',
    right: '',
    top: '',
    bottom: ''
  };
};

// If using IgxIconService to register icons
// (global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// Other optional depending on your application configuration
(global as any).object = window.object;
(global as any).localStorage = window.localStorage;
(global as any).DOMTokenList = window.DOMTokenList;


import { AppServerModule } from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/portfolioAngular/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';

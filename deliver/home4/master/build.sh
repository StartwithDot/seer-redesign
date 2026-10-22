#!/bin/sh
cd "$(dirname "$0")"
/Users/leo/Documents/POIDH/node_modules/.bin/esbuild src/main.js --bundle --format=iife --minify --loader:.svg=text --outfile=dist/app.js --log-level=warning
